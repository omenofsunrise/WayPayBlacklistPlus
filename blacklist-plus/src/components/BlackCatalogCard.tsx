import React, { useRef, useState, useMemo } from 'react';
import styled from 'styled-components';
import { FaIdCard, FaEllipsisV, FaMapMarkerAlt, FaBirthdayCake, FaExclamationTriangle, FaTrash } from 'react-icons/fa';
import type { BlackCatalogItem } from '../api/BlackCatalog/blackCatalog';

const Card = styled.div<{ $status: 'blacklist' | 'debt' | 'none' }>`
  background: white;
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  margin: 0;
  margin-bottom: 16px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;

  ${props => props.$status === 'blacklist' && `
    border-color: #EF4444;
    background: linear-gradient(135deg, #ffffff 0%, #fff5f5 100%);
  `}

  ${props => props.$status === 'debt' && `
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

const CardTitleText = styled.span<{ $hasBlackBadge?: boolean; $hasDebtBadge?: boolean }>`
  display: inline-block;
  ${props => props.$hasBlackBadge && `
    margin-left: 170px;
  `}
  ${props => props.$hasDebtBadge && `
    margin-left: 130px;
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

const DebtsSection = styled.div`
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid rgba(209, 213, 219, 0.5);
`;

const DebtsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const DebtBadge = styled.div`
  background: #FEF3C7;
  color: #B45309;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #FDE68A;
  position: relative;
  
  svg {
    font-size: 12px;
  }
`;

const DeleteDebtButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px 6px;
  margin-left: 6px;
  color: #EF4444;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  
  &:hover {
    opacity: 1;
    background-color: rgba(239, 68, 68, 0.15);
    transform: scale(1.1);
  }
  
  svg {
    font-size: 11px;
  }
`;

interface BlackCatalogCardProps {
  item: BlackCatalogItem;
  onEdit: (item: BlackCatalogItem) => void;
  onDelete: (item: BlackCatalogItem) => void;
  onRightClick: (e: React.MouseEvent, item: BlackCatalogItem) => void;
  onOpenDossier: (item: BlackCatalogItem) => void;
  onAddDebt?: (item: BlackCatalogItem) => void;
  onDeleteDebt?: (debtId: number) => Promise<void> | void;
  showMenu?: boolean;
  allowEdit?: boolean;
  allowDelete?: boolean;
  allowAddDebt?: boolean;
  userId?: string;
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
  onAddDebt,
  onDeleteDebt,
  showMenu = true,
  allowEdit = true,
  allowDelete = true,
  allowAddDebt = true,
  userId,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleAddDebtClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(false);
    if (allowAddDebt && onAddDebt) {
      onAddDebt(item);
    }
  };

  const handleDeleteDebtClick = async (e: React.MouseEvent, debtId: number) => {
    e.stopPropagation();
    e.preventDefault();
    
    if (!onDeleteDebt) return;
    
    if (window.confirm('Вы уверены, что хотите удалить этот долг?')) {
      try {
        setIsDeleting(debtId);
        await onDeleteDebt(debtId);
      } catch (error) {
        console.error('Ошибка при удалении долга:', error);
        alert('Не удалось удалить долг');
      } finally {
        setIsDeleting(null);
      }
    }
  };

  // Только активные долги (срок не истёк)
  const activeDebts = useMemo(() => {
    if (!item.debts || !Array.isArray(item.debts)) return [];
    
    const today = new Date();
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    
    return item.debts.filter(debt => {
      if (!debt.debt_ending_at) return false;
      const endDate = new Date(debt.debt_ending_at);
      if (isNaN(endDate.getTime())) return false;
      const endDateStart = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
      return endDateStart >= todayStart;
    });
  }, [item.debts]);

  const hasActiveDebt = activeDebts.length > 0;
  
  // Статус карточки: blacklist только если is_swindler = true
  // debt только если есть активные долги, но нет is_swindler
  // none если нет ничего
  const cardStatus = useMemo(() => {
    if (item.is_swindler) return 'blacklist';
    if (hasActiveDebt) return 'debt';
    return 'none';
  }, [item.is_swindler, hasActiveDebt]);

  // Показываем бейдж только если статус blacklist или debt
  const showBadge = cardStatus !== 'none';
  
  const badgeText = cardStatus === 'blacklist' ? 'Чёрный список' : 'Оформлен';
  const badgeType = cardStatus === 'blacklist' ? 'blacklist' : 'debt';
  
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
    if (allowEdit) {
      onEdit(item);
    }
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(false);
    if (allowDelete) {
      onDelete(item);
    }
  };

  const handleCardClick = () => {
    onOpenDossier(item);
  };

  const handleRightClick = (e: React.MouseEvent) => {
    onRightClick(e, item);
  };

  const canDeleteDebt = (debtCreatorId?: string): boolean => {
    return !!userId && debtCreatorId === userId;
  };

  return (
    <Card 
      onClick={handleCardClick}
      onContextMenu={handleRightClick}
      $status={cardStatus}
    >
      {showBadge && (
        <LeftBadge $type={badgeType}>
          <FaExclamationTriangle size={14} />
          {badgeText}
        </LeftBadge>
      )}
      
      <CardContent>
        <CardTitle>
          <CardTitleText $hasBlackBadge={cardStatus === 'blacklist'} $hasDebtBadge={cardStatus === 'debt'}>
            {item.fullname || 'Не указано'}
          </CardTitleText>
        </CardTitle>
        
        {showMenu && (allowEdit || allowDelete || allowAddDebt) && (
          <>
            <MenuButton onClick={handleMenuClick}>
              <FaEllipsisV size={16} />
            </MenuButton>

            <ContextMenu $isVisible={isMenuOpen} ref={menuRef}>
              {allowEdit && <MenuItem onClick={handleEditClick}>Редактировать</MenuItem>}
              {allowAddDebt && onAddDebt && (
                <MenuItem onClick={handleAddDebtClick}>Добавить долг</MenuItem>
              )}
              {allowDelete && (
                <MenuItem className="danger" onClick={handleDeleteClick}>Удалить</MenuItem>
              )}
            </ContextMenu>
          </>
        )}
        
        <InfoGrid>
          <InfoItem>
            <InfoLabel>
              <IconWrapper><FaIdCard size={12} /></IconWrapper>
              ID
            </InfoLabel>
            <InfoValue $warning={cardStatus === 'blacklist'} $debt={cardStatus === 'debt'}>
              {item.id}
            </InfoValue>
          </InfoItem>
          
          <InfoItem>
            <InfoLabel>
              <IconWrapper><FaBirthdayCake size={12} /></IconWrapper>
              Дата рождения
            </InfoLabel>
            <InfoValue $warning={cardStatus === 'blacklist'} $debt={cardStatus === 'debt'}>
              {formatDate(item.birthdate || '')}
            </InfoValue>
          </InfoItem>
          
          <InfoItem>
            <InfoLabel>
              <IconWrapper><FaIdCard size={12} /></IconWrapper>
              Документ
            </InfoLabel>
            <InfoValue $warning={cardStatus === 'blacklist'} $debt={cardStatus === 'debt'}>
              {item.doc || 'Не указан'}
            </InfoValue>
          </InfoItem>
          
          <InfoItem>
            <InfoLabel>
              <IconWrapper><FaMapMarkerAlt size={12} /></IconWrapper>
              Адрес
            </InfoLabel>
            <InfoValue $warning={cardStatus === 'blacklist'} $debt={cardStatus === 'debt'}>
              {item.address || 'Не указан'}
            </InfoValue>
          </InfoItem>
        </InfoGrid>

        {activeDebts.length > 0 && (
          <DebtsSection>
            <DebtsContainer>
              {activeDebts.map(debt => (
                <DebtBadge key={debt.id}>
                  <FaExclamationTriangle size={12} />
                  до {formatDate(debt.debt_ending_at)}
                  {canDeleteDebt(debt.creator_id) && (
                    <DeleteDebtButton 
                      onClick={(e) => handleDeleteDebtClick(e, debt.id)}
                      disabled={isDeleting === debt.id}
                      title="Удалить долг"
                    >
                      {isDeleting === debt.id ? '...' : <FaTrash size={10} />}
                    </DeleteDebtButton>
                  )}
                </DebtBadge>
              ))}
            </DebtsContainer>
          </DebtsSection>
        )}
      </CardContent>
    </Card>
  );
};

export default BlackCatalogCard;