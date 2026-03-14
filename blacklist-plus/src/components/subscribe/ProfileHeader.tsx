import React from 'react';

interface ProfileHeaderProps {
  name: string;
  phone: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name, phone }) => {
  const handleLogout = () => {
    window.location.reload();
  };

  return (
    <div style={{
      padding: '24px 32px',
      marginBottom: '24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <div style={{ flex: 1 }} />
      
      <h1 style={{ 
        margin: 0,
        color: '#333',
        fontSize: '28px',
        fontWeight: 500,
        textAlign: 'center',
        flex: '0 0 auto',
      }}>
        Здравствуйте, <span style={{ fontWeight: 'bold', color: '#007D88' }}>{name}</span>
      </h1>
      
    <div style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'flex-end',
        }}>
        
        <button
          onClick={handleLogout}
          style={{
            backgroundColor: 'transparent',
            border: '2px solid #007D88',
            color: '#007D88',
            padding: '8px 20px',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#007D88';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#007D88';
          }}
        >
          Выйти
        </button>
        <p style={{ 
            margin: '8px 0 0px 0', 
            color: '#666',
            fontSize: '15px',
            fontWeight: '400',
            opacity: 0.9,
            borderTop: '1px dashed #ddd',
            paddingTop: '4px',
        }}>
            {phone.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 ($2) $3-$4-$5')}
        </p>

      </div>
    </div>
  );
};

export default ProfileHeader;