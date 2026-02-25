import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { FaWhatsapp, FaPhone, FaIdCard, FaEllipsisV, FaExclamationTriangle, FaMapMarkerAlt } from 'react-icons/fa';

const Card = styled.div`
  background: white;
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  margin: 0;
  margin-bottom: 16px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
  border-left: 4px solid #EF4444;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const CardContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  width: 100%;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 50px;
`;

const CardTitleText = styled.span`
  display: inline-block;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  width: 100%;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 50px;
`;

const InfoLabel = styled.span`
  font-size: 12px;
  color: rgba(107, 114, 128, 1);
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const InfoValue = styled.span<{ $highlight?: boolean }>`
  font-size: 14px;
  font-weight: ${props => props.$highlight ? '600' : '400'};
  color: ${props => props.$highlight ? '#EF4444' : '#111827'};
  min-height: 20px;
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.span`
  color: rgba(107, 114, 128, 0.8);
  display: flex;
  align-items: center;
`;

const WhatsAppLink = styled.a`
  color: rgba(75, 85, 99, 1);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.2s;

  &:hover {
    color: #25D366;
  }
`;

const PhoneLink = styled.a`
  color: rgba(75, 85, 99, 1);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    color: #007D88;
  }
`;

const MenuButton = styled.button`
  background: transparent;
  color: rgba(107, 114, 128, 0.8);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;
  position: absolute;
  top: 15px;
  right: 15px;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

const ContextMenu = styled.div<{ $isVisible: boolean }>`
  position: absolute;
  top: 50px;
  right: 15px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 8px 0;
  z-index: 100;
  display: ${props => props.$isVisible ? 'block' : 'none'};
  min-width: 150px;
`;

const MenuItem = styled.button`
  width: 100%;
  text-align: left;
  padding: 10px 16px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: #333;
  transition: background-color 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  &.danger {
    color: #EF4444;
  }
`;

const BlacklistBadge = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
  color: #EF4444;
  padding: 6px 10px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 2px 12px rgba(239, 68, 68, 0.5);
  z-index: 10;
`;

const DocBadge = styled.div`
  background-color: #F59E0B;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  display: inline-block;
  margin-top: 4px;
`;

export interface BlackCatalogItem {
  id: number;
  fullname: string;
  doc: string;
  phone: string;
  address: string;
}

interface BlackCatalogCardProps {
  item: BlackCatalogItem;
  onEdit: (item: BlackCatalogItem) => void;
  onDelete: (item: BlackCatalogItem) => void;
  onRightClick: (e: React.MouseEvent, item: BlackCatalogItem) => void;
  onOpenDossier: (item: BlackCatalogItem) => void;
  showMenu?: boolean;
}

const BlackCatalogCard: React.FC<BlackCatalogCardProps> = ({ 
  item, 
  onEdit, 
  onDelete, 
  onRightClick,
  onOpenDossier,
  showMenu = true,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const formatPhone = (phone: string): string => {
    if (!phone) return 'Не указан';
    
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 11) {
      return cleaned.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '+$1 ($2) $3-$4-$5');
    }
    return phone;
  };

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(false);
    onEdit(item);
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(false);
    onDelete(item);
  };

  const handleCardClick = () => {
    onOpenDossier(item);
  };

  const handleRightClick = (e: React.MouseEvent) => {
    onRightClick(e, item);
  };

  return (
    <Card 
      onClick={handleCardClick}
      onContextMenu={handleRightClick}
    >
      <BlacklistBadge>
        <FaExclamationTriangle size={14} />
        Чёрный список
      </BlacklistBadge>
      
      <CardContent>
        <CardTitle>
          <CardTitleText>
            {item.fullname || 'Не указано'}
          </CardTitleText>
        </CardTitle>
        
        {showMenu && (
          <>
            <MenuButton onClick={handleMenuClick}>
              <FaEllipsisV size={16} />
            </MenuButton>

            <ContextMenu $isVisible={isMenuOpen} ref={menuRef}>
              <MenuItem onClick={handleEditClick}>✏️ Редактировать</MenuItem>
              <MenuItem className="danger" onClick={handleDeleteClick}>🗑️ Удалить</MenuItem>
            </ContextMenu>
          </>
        )}
        
        <InfoGrid>
          <InfoItem>
            <InfoLabel>
              <IconWrapper><FaIdCard size={12} /></IconWrapper>
              ID
            </InfoLabel>
            <InfoValue $highlight>
              {item.id}
            </InfoValue>
          </InfoItem>
          
          <InfoItem>
            <InfoLabel>
              <IconWrapper><FaPhone size={12} /></IconWrapper>
              Телефон
            </InfoLabel>
            <InfoValue>
              {item.phone ? (
                <PhoneLink 
                  href={`tel:${item.phone}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  {formatPhone(item.phone)}
                </PhoneLink>
              ) : (
                'Не указан'
              )}
            </InfoValue>
          </InfoItem>
          
          <InfoItem>
            <InfoLabel>
              <IconWrapper><FaWhatsapp size={13} /></IconWrapper>
              WhatsApp
            </InfoLabel>
            <InfoValue>
              {item.phone ? (
                <WhatsAppLink 
                  href={`https://wa.me/${item.phone.replace(/\D/g, '')}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  {formatPhone(item.phone)}
                </WhatsAppLink>
              ) : (
                'Не указан'
              )}
            </InfoValue>
          </InfoItem>
          
          <InfoItem>
            <InfoLabel>
              <IconWrapper><FaIdCard size={12} /></IconWrapper>
              Документ
            </InfoLabel>
            <InfoValue>
              {item.doc || 'Не указан'}
              {item.doc && <DocBadge>Паспорт</DocBadge>}
            </InfoValue>
          </InfoItem>
          
          <InfoItem>
            <InfoLabel>
              <IconWrapper><FaMapMarkerAlt size={12} /></IconWrapper>
              Адрес
            </InfoLabel>
            <InfoValue>
              {item.address || 'Не указан'}
            </InfoValue>
          </InfoItem>
        </InfoGrid>
      </CardContent>
    </Card>
  );
};

export default BlackCatalogCard;