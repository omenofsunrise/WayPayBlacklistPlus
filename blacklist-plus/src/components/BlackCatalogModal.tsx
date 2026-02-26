import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BaseModal, CustomInput, InputContainer, InputLabel, InputRow, PhoneModalInput, type ModalMode } from "waypay_react_library";
import type { BlackCatalogItem } from "../api/BlackCatalog/blackCatalog";

interface BlackCatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (itemData: Partial<BlackCatalogItem>) => Promise<void>;
  editingItem: Partial<BlackCatalogItem> | null;
  mode?: ModalMode;
}

const FormField = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
  color: #374151;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #D1D5DB;
  border-radius: 6px;
  font-size: 14px;
  min-height: 80px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #008B8B;
    box-shadow: 0 0 0 2px rgba(0, 139, 139, 0.1);
  }
`;

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
    address: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (editingItem) {
      setFormData(editingItem);
    } else {
      setFormData({
        fullname: '',
        phone: '',
        doc: '',
        address: ''
      });
    }
  }, [editingItem, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Проверяем обязательные поля
    if (!formData.fullname || !formData.phone || !formData.doc || !formData.address) {
      alert('Все поля обязательны для заполнения');
      return;
    }

    setIsSubmitting(true);
    try {
      await onSave(formData);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFieldChange = (
    field: keyof BlackCatalogItem,
    value: string
  ) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  const title = editingItem ? 'Редактировать запись' : 'Добавить';
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
          type="text"
          value={formData.fullname || ''}
          onChange={e => handleFieldChange('fullname', e.target.value)}
          placeholder="ФИО"
          required
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
        <CustomInput
          type="text"
          value={formData.doc || ''}
          onChange={e => handleFieldChange('doc', e.target.value)}
          placeholder="Документ"
          required
        />
      </InputRow>
      
      <InputRow>
        <CustomInput
          value={formData.address || ''}
          onChange={e => handleFieldChange('address', e.target.value)}
          placeholder="Адрес"
          required
        />
      </InputRow>
    </BaseModal>
  );
};