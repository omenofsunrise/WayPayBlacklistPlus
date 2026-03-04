import React, { useState, useEffect } from "react";
import { BaseModal, CustomCalendar, CustomInput, InputRow, PhoneModalInput, type ModalMode } from "waypay_react_library";
import type { BlackCatalogItem } from "../api/BlackCatalog/blackCatalog";

interface BlackCatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (itemData: Partial<BlackCatalogItem>) => Promise<void>;
  editingItem: Partial<BlackCatalogItem> | null;
  mode?: ModalMode;
}

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
  mode = "create"
}) => {
  const [formData, setFormData] = useState<Partial<BlackCatalogItem>>({
    fullname: '',
    phone: '',
    doc: '',
    address: '',
    doc_issue_date: '',
    birthdate: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (editingItem) {
      setFormData({
        ...editingItem,
        fullname: editingItem.fullname || ''
      });
    } else {
      setFormData({
        fullname: '',
        phone: '',
        doc: '',
        address: '',
        doc_issue_date: '',
        birthdate: ''
      });
    }
  }, [editingItem, isOpen]);

  const formatDateForAPI = (dateStr: string): string => {
    if (!dateStr) return '';
    
    if (dateStr.includes('T')) {
      return dateStr;
    }
    
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
      return `${dateStr}T12:00:00+03:00`;
    }
    
    return dateStr;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    try {
      const dataToSend = {
        ...formData,
        ...(formData.birthdate && { birthdate: formatDateForAPI(formData.birthdate) }),
        ...(formData.doc_issue_date && { doc_issue_date: formatDateForAPI(formData.doc_issue_date) })
      };
      
      console.log('Отправляемые данные:', dataToSend);
      
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
    field: keyof BlackCatalogItem,
    value: string
  ) => {
    if (field !== 'fullname') {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  };

  if (!isOpen) return null;

  const title = editingItem ? 'Редактировать запись' : 'Добавить запись в чёрный каталог';
  const saveButtonText = editingItem ? 'Сохранить' : 'Добавить';

  return (
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
        <PhoneModalInput
          placeholder="+7 (999) 999-99-99"
          value={formData.phone || ''}
          onChange={(e) => handleFieldChange('phone', e.target.value)}
          name="phone"
        />
      </InputRow>
      
      <InputRow>
        <CustomCalendar
          prefix="Дата рождения:"
          value={formData.birthdate || ''}
          onChange={(date) => handleFieldChange('birthdate', date)}
        />
      </InputRow>
      
      <InputRow>
        <CustomCalendar
          prefix="Дата выдачи:"
          value={formData.doc_issue_date || ''}
          onChange={(date) => handleFieldChange('doc_issue_date', date)}
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
    </BaseModal>
  );
};