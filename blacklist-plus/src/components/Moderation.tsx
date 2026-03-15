export const NotModeratedMessage = () => {
  const whatsappPhone = "+7 (989) 924-24-24";
  const callPhone = "+7 (989) 920-20-20";
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#f5f5f5'
    }}>
      <div style={{
        maxWidth: '500px',
        padding: '40px',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ color: '#333', marginBottom: '20px' }}>
          Аккаунт нужно активировать
        </h1>
        <p style={{ 
          color: '#666', 
          fontSize: '16px', 
          lineHeight: '1.6',
          marginBottom: '30px'
        }}>
          Пожалуйста, свяжитесь с нашей поддержкой для активации
        </p>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px'
        }}>
          {/* WhatsApp */}
          <div style={{
            padding: '15px',
            backgroundColor: '#e8f5e9',
            borderRadius: '8px',
            border: '1px solid #c8e6c9'
          }}>
            <span style={{ color: '#555', fontWeight: 'bold' }}>WhatsApp:</span>
            <a 
              href={`https://wa.me/${whatsappPhone.replace(/[^\d+]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                color: '#25D366',
                fontSize: '20px',
                fontWeight: 'bold',
                textDecoration: 'none',
                marginTop: '10px'
              }}
            >
              {whatsappPhone}
            </a>
          </div>

          <div style={{
            padding: '15px',
            backgroundColor: '#007D88',
            borderRadius: '8px',
          }}>
            <span style={{ color: 'white', fontWeight: 'bold' }}>Телефон для звонков:</span>
            <a 
              href={`tel:${callPhone.replace(/[^\d+]/g, '')}`}
              style={{
                display: 'block',
                color: 'white',
                fontSize: '20px',
                fontWeight: 'bold',
                textDecoration: 'none',
                marginTop: '10px'
              }}
            >
              {callPhone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};