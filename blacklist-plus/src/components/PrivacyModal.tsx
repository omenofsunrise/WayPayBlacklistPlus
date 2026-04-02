// components/PrivacyModal.tsx
'use client';

import React, { useState, useEffect } from 'react';

interface PrivacyModalProps {
  isOpen: boolean;
  onAccept: () => void;
  onDecline: () => void;
  companyName?: string;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({
  isOpen,
  onAccept,
  onDecline,
  companyName = 'ООО WayPay',
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      // Блокируем прокрутку body при открытии
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleAccept = () => {
    setIsAnimating(false);
    onAccept();
  };

  const handleDecline = () => {
    setIsAnimating(false);
    onDecline();
  };

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={handleDecline}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '16px',
      }}
    >
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'white',
          borderRadius: '24px',
          maxWidth: '900px',
          width: '100%',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          animation: 'modalSlideIn 0.3s ease-out',
        }}
      >
        {/* Заголовок */}
        <div
          style={{
            padding: '20px 24px',
            borderBottom: '1px solid #e5e7eb',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexShrink: 0,
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 5vw, 1.5rem)',
              fontWeight: 'bold',
              color: '#111827',
              margin: 0,
            }}
          >
            Политика обработки персональных данных
          </h2>
          <button
            onClick={handleDecline}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#9ca3af',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#4b5563')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Содержимое с прокруткой */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '20px 24px',
            fontSize: 'clamp(0.875rem, 4vw, 1rem)',
            color: '#374151',
            lineHeight: 1.6,
          }}
        >
          {/* 1. Общие положения */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: 'clamp(1rem, 4vw, 1.25rem)', fontWeight: '600', marginBottom: '12px', color: '#111827' }}>
              1. Общие положения
            </h3>
            <p>Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных» (далее — Закон о персональных данных) и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые Оператором.</p>
            <p style={{ marginTop: '12px' }}>1.1. Пользователь дает свое согласие на обработку его персональных данных, указанных в формах заявок на сайте (имя, номер телефона, адрес электронной почты), путем совершения конклюдентных действий: заполнения полей формы и нажатия кнопок «Отправить», «Оставить заявку», «Заказать звонок» и иных аналогичных. Согласие считается полученным в момент отправки формы.</p>
            <p style={{ marginTop: '12px' }}>1.2. Обработка персональных данных осуществляется в целях связи с Пользователем для ответа на его запрос, консультации, заключения и исполнения договоров, а также для информирования об оказываемых услугах.</p>
          </div>

          {/* 2. Основные понятия */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: 'clamp(1rem, 4vw, 1.25rem)', fontWeight: '600', marginBottom: '12px', color: '#111827' }}>
              2. Основные понятия, используемые в Политике
            </h3>
            <p><strong>Автоматизированная обработка персональных данных</strong> — обработка персональных данных с помощью средств вычислительной техники.</p>
            <p style={{ marginTop: '12px' }}><strong>Персональные данные</strong> — любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу (субъекту персональных данных). В рамках настоящей Политики к персональным данным Пользователя относятся:</p>
            <ul style={{ marginTop: '8px', marginLeft: '20px', listStyleType: 'disc' }}>
              <li>Фамилия, имя, отчество (ФИО);</li>
              <li>Контактный номер телефона;</li>
              <li>Адрес электронной почты (e-mail);</li>
              <li>Иная информация, предоставленная Пользователем добровольно путем заполнения форм на Сайте.</li>
            </ul>
            <p style={{ marginTop: '12px' }}><strong>Оператор</strong> — наша компания {companyName}, которая самостоятельно или совместно с другими лицами организует и (или) осуществляет обработку персональных данных.</p>
          </div>

          {/* 3. Права субъекта */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: 'clamp(1rem, 4vw, 1.25rem)', fontWeight: '600', marginBottom: '12px', color: '#111827' }}>
              3. Права субъекта персональных данных
            </h3>
            <p><strong>3.1. Субъект персональных данных (Пользователь) имеет право:</strong></p>
            <ul style={{ marginTop: '8px', marginLeft: '20px', listStyleType: 'disc' }}>
              <li>на получение информации, касающейся обработки его персональных данных;</li>
              <li>на уточнение, блокирование или уничтожение его персональных данных в случае, если они являются неполными, устаревшими, неточными, незаконно полученными или не являются необходимыми для заявленной цели обработки;</li>
              <li>отозвать свое согласие на обработку персональных данных, направив нам соответствующее письменное уведомление по адресу, указанному в разделе «Реквизиты Оператора»;</li>
              <li>на защиту своих прав и законных интересов, в том числе на возмещение убытков и компенсацию морального вреда в судебном порядке.</li>
            </ul>
            <p style={{ marginTop: '12px' }}>3.2. Для реализации своих прав Пользователь может обратиться к Оператору с запросом по контактным данным, указанным на Сайте.</p>
          </div>

          {/* 4. Порядок сбора и обработки */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: 'clamp(1rem, 4vw, 1.25rem)', fontWeight: '600', marginBottom: '12px', color: '#111827' }}>
              4. Порядок сбора и обработки персональных данных
            </h3>
            <p>4.1. Мы получаем и обрабатываем персональные данные Пользователя строго в тех объемах и для тех целей, которые были предоставлены Пользователем добровольно при заполнении форм на Сайте.</p>
            <p style={{ marginTop: '12px' }}>4.2. Обработка предоставленных данных (ФИО, телефона, e-mail) осуществляется в целях:</p>
            <ul style={{ marginTop: '8px', marginLeft: '20px', listStyleType: 'disc' }}>
              <li>Обработки входящих запросов и связи с Пользователем;</li>
              <li>Заключения договоров и их исполнения;</li>
              <li>Направления Пользователю информации о наших услугах и акциях (только с его согласия, выраженного отдельным действием, например, проставлением галочки в соответствующем поле формы).</li>
            </ul>
            <p style={{ marginTop: '12px' }}>4.3. Мы гарантируем конфиденциальность полученной информации. Не допускается передача персональных данных третьим лицам, за исключением случаев, прямо предусмотренных законодательством РФ, или по прямому согласию Пользователя.</p>
            <p style={{ marginTop: '12px' }}>4.4. Все данные передаются по защищенным каналам связи и хранятся в течение срока, необходимого для достижения целей обработки, либо до момента отзыва согласия субъектом персональных данных.</p>
          </div>

          {/* 5. Заключительные положения */}
          <div style={{ marginBottom: '8px' }}>
            <h3 style={{ fontSize: 'clamp(1rem, 4vw, 1.25rem)', fontWeight: '600', marginBottom: '12px', color: '#111827' }}>
              5. Заключительные положения
            </h3>
            <p>5.1. Настоящая политика является общедоступной. Актуальная версия Политики размещена на Сайте.</p>
            <p style={{ marginTop: '12px' }}>5.2. К настоящей Политике и отношениям между Пользователем и Оператором, возникающим в связи с применением Политики, подлежит применению право Российской Федерации.</p>
            <p style={{ marginTop: '12px' }}>5.3. Все разногласия подлежат разрешению в соответствующем суде по месту нахождения Оператора.</p>
            <p style={{ marginTop: '12px' }}>5.4. Оператор вправе вносить изменения в настоящую Политику. Новая редакция вступает в силу с момента ее размещения на Сайте.</p>
          </div>
        </div>

        {/* Кнопки */}
        <div
          style={{
            padding: '16px 24px',
            borderTop: '1px solid #e5e7eb',
            display: 'flex',
            gap: '12px',
            justifyContent: 'flex-end',
            flexWrap: 'wrap',
            flexShrink: 0,
          }}
        >
          <button
            onClick={handleAccept}
            style={{
              padding: '10px 24px',
              backgroundColor: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '0.875rem',
              fontWeight: '500',
              cursor: 'pointer',
              color: 'white',
              transition: 'background-color 0.2s',
              order: window.innerWidth < 640 ? 1 : 2,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1d4ed8')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}
          >
            Согласен(на) с политикой
          </button>
        </div>
      </div>

      <style>{`
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @media (max-width: 640px) {
          .modal-container {
            max-height: 95vh;
          }
        }
      `}</style>
    </div>
  );
};

export default PrivacyModal;