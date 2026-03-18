import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { BaseModal, CustomInput, InputRow, type ModalMode } from "waypay_react_library";
import type { BlackCatalogFormData, BlackCatalogItem } from "../api/BlackCatalog/blackCatalog";

interface BlackCatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (itemData: BlackCatalogFormData) => Promise<void>;
  editingItem: Partial<BlackCatalogItem> | null;
  mode?: ModalMode;
  showDebtSection?: boolean;
  requireDebtDate?: boolean;
}

const ModalPortalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2147483647;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

const ModalWrapper = styled.div`
  pointer-events: auto;
  width: 100%;
  max-width: 600px;
  margin: 20px;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 90px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 14px;
  font-family: inherit;
  color: #111827;
  background: #ffffff;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #007d88;
    box-shadow: 0 0 0 3px rgba(0, 125, 136, 0.15);
  }
`;

const FileRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;

const FileLabel = styled.span`
  font-size: 12px;
  color: #6b7280;
`;

const FileInput = styled.input`
  width: 100%;
`;

const FileMeta = styled.span`
  font-size: 12px;
  color: #6b7280;
`;

const ModalPortal: React.FC<{ children: React.ReactNode; isOpen: boolean }> = ({ 
  children, 
  isOpen 
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      setMounted(false);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <ModalPortalContainer>
      <ModalWrapper>
        {children}
      </ModalWrapper>
    </ModalPortalContainer>,
    document.body
  );
};

const formatFullNameLive = (
  value: string, 
  cursorPosition: number | null = null
): { formattedValue: string, newCursorPosition: number } => {
  if (!value) return { formattedValue: '', newCursorPosition: 0 };

  const originalLength = value.length;
  
  const parts = [];
  let currentPart = '';
  let lastCharWasSpace = false;
  
  for (let i = 0; i < value.length; i++) {
    const char = value[i];
    
    if (char === ' ') {
      if (!lastCharWasSpace) {
        if (currentPart) {
          parts.push(currentPart);
          currentPart = '';
        }
        parts.push(' ');
      }
      lastCharWasSpace = true;
    } else {
      currentPart += char;
      lastCharWasSpace = false;
    }
  }
  
  if (currentPart) {
    parts.push(currentPart);
  }
  
  const formattedParts = parts.map(part => {
    if (part === ' ') return ' ';
    
    if (part.includes('-')) {
      return part
        .split('-')
        .map(segment => {
          if (segment.length === 0) return '';
          return segment.charAt(0).toUpperCase() + segment.slice(1).toLowerCase();
        })
        .join('-');
    }
    
    if (part.length > 0) {
      return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
    }
    
    return part;
  });
  
  const formattedValue = formattedParts.join('');
  
  let newCursorPosition = cursorPosition;
  if (cursorPosition !== null) {
    if (cursorPosition >= originalLength) {
      newCursorPosition = formattedValue.length;
    } else {
      newCursorPosition = Math.min(cursorPosition, formattedValue.length);
    }
  }
  
  return { formattedValue, newCursorPosition: newCursorPosition ?? formattedValue.length };
};

export const BlackCatalogModal: React.FC<BlackCatalogModalProps> = ({
  isOpen,
  onClose,
  onSave,
  editingItem,
  mode = "create",
  showDebtSection = true,
  requireDebtDate = false,
}) => {
  const [formData, setFormData] = useState<BlackCatalogFormData>({
    fullname: '',
    doc: '',
    address: '',
    birthdate: '',
    comment: '',
    main_page: null,
    registration_page: null,
    is_swindler: false,
    debt_ending_at: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (editingItem) {
      const normalizeIncomingDate = (value?: string) => {
        if (!value) return '';
        if (value.includes('T')) {
          const [datePart] = value.split('T');
          if (/^\d{4}-\d{2}-\d{2}$/.test(datePart)) {
            const [year, month, day] = datePart.split('-');
            return `${day}.${month}.${year}`;
          }
          return datePart;
        }
        if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
          const [year, month, day] = value.split('-');
          return `${day}.${month}.${year}`;
        }
        return value;
      };

      setFormData({
        fullname: editingItem.fullname || '',
        doc: editingItem.doc || '',
        address: editingItem.address || '',
        birthdate: normalizeIncomingDate(editingItem.birthdate),
        comment: '',
        main_page: null,
        registration_page: null,
        is_swindler: Boolean(editingItem.is_swindler),
        debt_ending_at: showDebtSection ? normalizeIncomingDate(editingItem.debt_ending_at) : '',
      });
    } else {
      setFormData({
        fullname: '',
        doc: '',
        address: '',
        birthdate: '',
        comment: '',
        main_page: null,
        registration_page: null,
        is_swindler: false,
        debt_ending_at: '',
      });
    }
  }, [editingItem, isOpen, showDebtSection]);

  const formatDateForAPI = (dateStr: string): string => {
    if (!dateStr) return '';
    
    if (dateStr.includes('T')) {
      return dateStr.split('T')[0];
    }
    
    if (/^\d{2}\.\d{2}\.\d{4}$/.test(dateStr)) {
      const [day, month, year] = dateStr.split('.');
      return `${year}-${month}-${day}`;
    }

    if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
      return dateStr;
    }
    
    return dateStr;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    try {
      if (requireDebtDate && !editingItem && !formData.debt_ending_at) {
        alert('Укажите дату окончания оформления');
        return;
      }
      const dataToSend: BlackCatalogFormData = {
        fullname: formData.fullname || '',
        doc: formData.doc || '',
        address: formData.address || '',
        birthdate: formData.birthdate ? formatDateForAPI(formData.birthdate) : '',
        comment: formData.comment || '',
        main_page: formData.main_page || null,
        registration_page: formData.registration_page || null,
        is_swindler: formData.is_swindler,
        debt_ending_at: showDebtSection && formData.debt_ending_at
          ? formatDateForAPI(formData.debt_ending_at)
          : '',
      };
      
      await onSave(dataToSend);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFullnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const cursorPosition = input.selectionStart;
    
    const { formattedValue, newCursorPosition } = formatFullNameLive(
      input.value,
      cursorPosition
    );
    
    setFormData(prev => ({ ...prev, fullname: formattedValue }));
    
    setTimeout(() => {
      input.setSelectionRange(newCursorPosition, newCursorPosition);
    }, 0);
  };

  const handleFieldChange = (
    field: keyof BlackCatalogFormData,
    value: string
  ) => {
    if (field !== 'fullname') {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  };

  const handleDateTextChange = (field: 'birthdate' | 'debt_ending_at') => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 8);
    let formatted = digits;
    if (digits.length > 2) {
      formatted = `${digits.slice(0, 2)}.${digits.slice(2)}`;
    }
    if (digits.length > 4) {
      formatted = `${digits.slice(0, 2)}.${digits.slice(2, 4)}.${digits.slice(4)}`;
    }
    handleFieldChange(field, formatted);
  };

  const handleFileChange = (field: 'main_page' | 'registration_page') => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0] ?? null;
    setFormData(prev => ({ ...prev, [field]: file }));
  };

  const title = editingItem ? 'Редактировать запись' : editingItem === null && mode === 'create' ? 'Добавить запись' : 'Редактировать запись';
  const saveButtonText = editingItem ? 'Сохранить' : 'Добавить';

  return (
    <ModalPortal isOpen={isOpen}>
      <BaseModal
        title={title}
        onClose={onClose}
        onCancel={onClose}
        onSave={handleSubmit}
        isSubmitting={isSubmitting}
        saveButtonText={saveButtonText}
        mode={mode}
      >
        <InputRow>
          <CustomInput
            type="fullname"
            value={formData.fullname || ''}
            onChange={handleFullnameChange}
            placeholder="ФИО"
          />
        </InputRow>
        
        <InputRow>
          <CustomInput
            type="text"
            value={formData.birthdate || ''}
            onChange={handleDateTextChange('birthdate')}
            placeholder="Дата рождения (ДД.ММ.ГГГГ)"
          />
        </InputRow>
        
        <InputRow>
          <CustomInput
            type="text"
            value={formData.doc || ''}
            onChange={e => handleFieldChange('doc', e.target.value)}
            placeholder="Документ (серия и номер)"
          />
        </InputRow>
        
        <InputRow>
          <CustomInput
            value={formData.address || ''}
            onChange={e => handleFieldChange('address', e.target.value)}
            placeholder="Адрес"
          />
        </InputRow>

        {!editingItem && (
          <>
            {showDebtSection && (
              <InputRow>
                <CustomInput
                  type="text"
                  value={formData.debt_ending_at || ''}
                  onChange={handleDateTextChange('debt_ending_at')}
                  placeholder="Оформлен до (ДД.ММ.ГГГГ)"
                  required={requireDebtDate}
                />
              </InputRow>
            )}

            <InputRow>
              <TextArea
                value={formData.comment}
                onChange={e => handleFieldChange('comment', e.target.value)}
                placeholder="Комментарий"
              />
            </InputRow>

            <InputRow>
              <FileRow>
                <FileLabel>Фото паспорта — основная страница</FileLabel>
                <FileInput
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange('main_page')}
                />
                <FileMeta>{formData.main_page ? formData.main_page.name : 'Файл не выбран'}</FileMeta>
              </FileRow>
            </InputRow>

            <InputRow>
              <FileRow>
                <FileLabel>Фото паспорта — регистрация</FileLabel>
                <FileInput
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange('registration_page')}
                />
                <FileMeta>
                  {formData.registration_page ? formData.registration_page.name : 'Файл не выбран'}
                </FileMeta>
              </FileRow>
            </InputRow>
          </>
        )}
      </BaseModal>
    </ModalPortal>
  );
};