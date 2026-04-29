import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { BaseModal, CustomInput, InputRow } from "waypay_react_library";

interface AddDebtModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (debtEndingAt: Date) => Promise<void>;
  itemName: string;
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

const StyledCustomInput = styled(CustomInput)`
  font-size: 16px;
`;

const ErrorText = styled.div`
  color: #ef4444;
  font-size: 12px;
  margin-top: 4px;
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

export const AddDebtModal: React.FC<AddDebtModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [debtEndingAt, setDebtEndingAt] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setDebtEndingAt('');
      setValidationError('');
    }
  }, [isOpen]);

  const handleDateTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 8);
    let formatted = digits;
    if (digits.length > 2) {
      formatted = `${digits.slice(0, 2)}.${digits.slice(2)}`;
    }
    if (digits.length > 4) {
      formatted = `${digits.slice(0, 2)}.${digits.slice(2, 4)}.${digits.slice(4)}`;
    }
    setDebtEndingAt(formatted);
    setValidationError('');
  };

  const parseDate = (dateStr: string): Date | null => {
    if (!dateStr) return null;
    
    if (/^\d{2}\.\d{2}\.\d{4}$/.test(dateStr)) {
      const [day, month, year] = dateStr.split('.');
      return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    }
    
    return null;
  };

  const validateForm = (): boolean => {
    if (!debtEndingAt) {
      setValidationError('Укажите дату окончания долга');
      return false;
    }

    const parsedDate = parseDate(debtEndingAt);
    if (!parsedDate) {
      setValidationError('Неверный формат даты. Используйте ДД.ММ.ГГГГ');
      return false;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    parsedDate.setHours(0, 0, 0, 0);

    return true;
  };

  const formatDateForAPI = (dateStr: string): string => {
    if (/^\d{2}\.\d{2}\.\d{4}$/.test(dateStr)) {
      const [day, month, year] = dateStr.split('.');
      return `${year}-${month}-${day}`;
    }
    return dateStr;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    try {
      const dateForAPI = formatDateForAPI(debtEndingAt);
      const parsedDate = new Date(dateForAPI);
      await onSave(parsedDate);
      onClose();
      setDebtEndingAt('');
    } catch (err) {
      setValidationError('Ошибка при добавлении долга');
    } finally {
      setIsSubmitting(false);
    }
  };

  const title = 'Добавить долг';
  const saveButtonText = 'Добавить';

  return (
    <ModalPortal isOpen={isOpen}>
      <BaseModal
        title={title}
        onClose={onClose}
        onCancel={onClose}
        onSave={handleSubmit}
        isSubmitting={isSubmitting}
        saveButtonText={saveButtonText}
        mode="create"
      >
        <InputRow>
          <StyledCustomInput
            type="text"
            value={debtEndingAt}
            onChange={handleDateTextChange}
            placeholder="Дата окончания долга (ДД.ММ.ГГГГ)"
            style={validationError ? { borderColor: '#ef4444' } : {}}
          />
          {validationError && <ErrorText>{validationError}</ErrorText>}
        </InputRow>
      </BaseModal>
    </ModalPortal>
  );
};

export default AddDebtModal;