import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { FaIdCard, FaEllipsisV, FaMapMarkerAlt, FaBirthdayCake, FaExclamationTriangle } from 'react-icons/fa';

const Card = styled.div<{ $isBlacklisted?: boolean; $hasActiveDebt?: boolean }>`
  background: white;
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  margin: 0;
  margin-bottom: 16px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;

  ${props => props.$isBlacklisted && `
    border-color: #EF4444;
    background: linear-gradient(135deg, #ffffff 0%, #fff5f5 100%);
  `}

  ${props => props.$hasActiveDebt && !props.$isBlacklisted && `
    border-color: #F59E0B;
    background: linear-gradient(135deg, #ffffff 0%, #fffbeb 100%);
  `}

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 14px;
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

  @media (max-width: 768px) {
    font-size: 16px;
    padding-right: 0;
    gap: 8px;
    flex-wrap: wrap;
  }
`;

const CardTitleText = styled.span<{ $hasLeftBadge?: boolean }>`
  display: inline-block;
  ${props => props.$hasLeftBadge && `
    margin-left: 170px;
  `}
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

const InfoValue = styled.span<{ $highlight?: boolean; $warning?: boolean; $debt?: boolean }>`
  font-size: 14px;
  font-weight: ${props => props.$highlight ? '600' : '400'};
  color: ${props => {
    if (props.$warning) return '#EF4444';
    if (props.$debt) return '#B45309';
    if (props.$highlight) return '#007D88';
    return '#111827';
  }};
  min-height: 20px;
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.span`
  color: rgba(107, 114, 128, 0.8);
  display: flex;
  align-items: center;
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

const LeftBadge = styled.div<{ $type: 'blacklist' | 'debt' }>`
  position: absolute;
  top: 15px;
  left: 15px;
  background: ${({ $type }) => $type === 'blacklist' 
    ? '#000000' 
    : '#F59E0B'};
  color: ${({ $type }) => $type === 'blacklist' ? '#EF4444' : 'white'};
  padding: 6px 10px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: ${({ $type }) => $type === 'blacklist' 
    ? '0 2px 12px rgba(239, 68, 68, 0.5)' 
    : '0 2px 12px rgba(245, 158, 11, 0.5)'};
  z-index: 10;
`;

export interface BlackCatalogItem {
  id: number;
  fullname: string;
  doc: string;
  address: string;
  birthdate: string;
  is_swindler?: boolean;
  debt_ending_at?: string;
}

interface BlackCatalogCardProps {
  item: BlackCatalogItem;
  onEdit: (item: BlackCatalogItem) => void;
  onDelete: (item: BlackCatalogItem) => void;
  onRightClick: (e: React.MouseEvent, item: BlackCatalogItem) => void;
  onOpenDossier: (item: BlackCatalogItem) => void;
  showMenu?: boolean;
}

const formatDate = (dateString: string): string => {
  if (!dateString) return 'Не указана';
  
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  } catch {
    return dateString;
  }
};

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

  const isCurrentlyDebt = (() => {
    if (!item.debt_ending_at) return false;
    const endDate = new Date(item.debt_ending_at);
    if (Number.isNaN(endDate.getTime())) return false;
    const today = new Date();
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const endDateStart = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
    return endDateStart >= todayStart;
  })();
  
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
      $isBlacklisted={!isCurrentlyDebt}
      $hasActiveDebt={isCurrentlyDebt}
    >
      {!isCurrentlyDebt && (
        <LeftBadge $type="blacklist">
          <FaExclamationTriangle size={14} />
          Чёрный список
        </LeftBadge>
      )}
      
      {isCurrentlyDebt && (
        <LeftBadge $type="debt">
          <FaExclamationTriangle size={14} />
          Оформлен
        </LeftBadge>
      )}
      
      <CardContent>
        <CardTitle>
          <CardTitleText $hasLeftBadge={true}>
            {item.fullname || 'Не указано'}
          </CardTitleText>
        </CardTitle>
        
        {showMenu && (
          <>
            <MenuButton onClick={handleMenuClick}>
              <FaEllipsisV size={16} />
            </MenuButton>

            <ContextMenu $isVisible={isMenuOpen} ref={menuRef}>
              <MenuItem onClick={handleEditClick}>Редактировать</MenuItem>
              <MenuItem className="danger" onClick={handleDeleteClick}>Удалить</MenuItem>
            </ContextMenu>
          </>
        )}
        
        <InfoGrid>
          <InfoItem>
            <InfoLabel>
              <IconWrapper><FaIdCard size={12} /></IconWrapper>
              ID
            </InfoLabel>
            <InfoValue $warning={!isCurrentlyDebt} $debt={isCurrentlyDebt}>
              {item.id}
            </InfoValue>
          </InfoItem>
          
          <InfoItem>
            <InfoLabel>
              <IconWrapper><FaBirthdayCake size={12} /></IconWrapper>
              Дата рождения
            </InfoLabel>
            <InfoValue $warning={!isCurrentlyDebt} $debt={isCurrentlyDebt}>
              {formatDate(item.birthdate)}
            </InfoValue>
          </InfoItem>
          
          <InfoItem>
            <InfoLabel>
              <IconWrapper><FaIdCard size={12} /></IconWrapper>
              Документ
            </InfoLabel>
            <InfoValue $warning={!isCurrentlyDebt} $debt={isCurrentlyDebt}>
              {item.doc || 'Не указан'}
            </InfoValue>
          </InfoItem>
          
          <InfoItem>
            <InfoLabel>
              <IconWrapper><FaMapMarkerAlt size={12} /></IconWrapper>
              Адрес
            </InfoLabel>
            <InfoValue $warning={!isCurrentlyDebt} $debt={isCurrentlyDebt}>
              {item.address || 'Не указан'}
            </InfoValue>
          </InfoItem>
        </InfoGrid>
      </CardContent>
    </Card>
  );
};

export default BlackCatalogCard;