export const NotModeratedMessage = () => {
  const whatsappPhone = "+7 (989) 924-24-24";
  const callPhone = "+7 (989) 920-20-20";
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'top',
      alignItems: 'center',
      padding: '0 16px 16px',
      boxSizing: 'border-box'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '400px',
        padding: '24px 20px',
        backgroundColor: 'white',
        borderRadius: '20px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ 
          color: '#333', 
          marginBottom: '16px',
          fontSize: 'clamp(20px, 6vw, 28px)',
          lineHeight: '1.3',
          textAlign: "center"
        }}>
          Нужно активировать аккаунт
        </h1>
        
        <p style={{ 
          color: '#666', 
          fontSize: 'clamp(14px, 4vw, 16px)', 
          lineHeight: '1.5',
          marginBottom: '8px'
        }}>
          Пожалуйста, свяжитесь с нашей поддержкой для активации
        </p>
        
        <p style={{ 
          color: '#666', 
          fontSize: 'clamp(18px, 5vw, 22px)', 
          lineHeight: '1.4',
          marginBottom: '24px',
          fontWeight: 'bold'
        }}>
          Ибрагим
        </p>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          {/* WhatsApp */}
          <a 
            href={`https://wa.me/${whatsappPhone.replace(/[^\d+]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '16px',
              backgroundColor: '#e8f5e9',
              borderRadius: '12px',
              border: '1px solid #c8e6c9',
              textDecoration: 'none',
              cursor: 'pointer',
              WebkitTapHighlightColor: 'transparent',
              transition: 'opacity 0.2s',
              display: 'block'
            }}
            onClick={(e) => {
              // Улучшение для мобильных устройств
              if (window.innerWidth <= 768) {
                e.currentTarget.style.opacity = '0.7';
                setTimeout(() => {
                  e.currentTarget.style.opacity = '1';
                }, 200);
              }
            }}
          >
            <span style={{ 
              color: '#555', 
              fontWeight: 'bold',
              fontSize: 'clamp(14px, 4vw, 16px)',
              display: 'block',
              marginBottom: '8px'
            }}>
              WhatsApp:
            </span>
            <span style={{
              display: 'block',
              color: '#25D366',
              fontSize: 'clamp(18px, 5vw, 22px)',
              fontWeight: 'bold',
              wordBreak: 'break-word'
            }}>
              {whatsappPhone}
            </span>
          </a>

          {/* Телефон */}
          <a 
            href={`tel:${callPhone.replace(/[^\d+]/g, '')}`}
            style={{
              padding: '16px',
              backgroundColor: '#007D88',
              borderRadius: '12px',
              textDecoration: 'none',
              cursor: 'pointer',
              WebkitTapHighlightColor: 'transparent',
              transition: 'opacity 0.2s',
              display: 'block'
            }}
            onClick={(e) => {
              if (window.innerWidth <= 768) {
                e.currentTarget.style.opacity = '0.7';
                setTimeout(() => {
                  e.currentTarget.style.opacity = '1';
                }, 200);
              }
            }}
          >
            <span style={{ 
              color: 'white', 
              fontWeight: 'bold',
              fontSize: 'clamp(14px, 4vw, 16px)',
              display: 'block',
              marginBottom: '8px'
            }}>
              Телефон для звонков:
            </span>
            <span style={{
              display: 'block',
              color: 'white',
              fontSize: 'clamp(18px, 5vw, 22px)',
              fontWeight: 'bold',
              wordBreak: 'break-word'
            }}>
              {callPhone}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};