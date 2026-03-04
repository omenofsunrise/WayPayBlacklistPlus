import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { CountInfoTitle, CustomTitle, CustomInput, PhoneModalInput, DefaultButton } from "waypay_react_library";
import useBlackCatalog from "../api/BlackCatalog/useBlackCatalog";
import type { BlackCatalogItem } from "../api/BlackCatalog/blackCatalog";
import BlackCatalogCard from "../components/BlackCatalogCard";
import { BlackCatalogModal } from "../components/BlackCatalogModal";

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  justify-content: space-between;
`;

const PageTitle = styled(CustomTitle)`
  margin: 0;
  color: #111827;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 1.2;
  }

  @media (max-width: 420px) {
    font-size: 16px;
  }
`;

const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
  color: #6B7280;
  padding: 15px;
`;

const EmptyStateIcon = styled.div`
  font-size: 64px;
  margin-bottom: 16px;
  opacity: 0.5;
`;

const EmptyStateTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #374151;
`;

const EmptyStateText = styled.p`
  font-size: 16px;
  margin-bottom: 24px;
  max-width: 500px;
  line-height: 1.5;
`;

const FilterField = styled.div`
    margin: 20px 0 20px 0;
    display: flex;
    flex-direction: row;
    text-align: left;
    color: black;
    background-color: rgba(249, 250, 250, 1);
    gap: 15px;
`;

const StickyFilterField = styled(FilterField)`
  position: sticky;
  top: 50px;
  z-index: 10;
  padding: 16px 0;
  background: none;
`;

const ResetButton = styled.button`
  background: none;
  border: none;
  color: black;
  cursor: pointer;
  font-size: 14px;
  text-decoration: underline;
  margin-left: 16px;
  height: 40px;
  padding: 0;
  width: 100px;

  &:hover {
    color: #374151;
  }
`;

const ContextMenu = styled.div<{ x: number; y: number }>`
  position: fixed;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1001;
  min-width: 160px;
  padding: 4px 0;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
`;

const MenuItem = styled.div<{ danger?: boolean }>`
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: ${props => props.danger ? '#ff4d4f' : '#333'};
  
  &:hover {
    background-color: #f5f5f5;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
`;

const StyledCountInfo = styled(CountInfoTitle)`
    margin-left: auto;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 50vw;
    gap: 15px;
`;

const DarkCyanButton = styled(DefaultButton)`
    background-color: #008B8B;
    
    &:hover {
        background-color: #006666;
    }
`;

const BlackCatalogPage = () => {
    const [nameFilter, setNameFilter] = useState('');
    const [phoneFilter, setPhoneFilter] = useState('');
    const [searchTriggered, setSearchTriggered] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState<Partial<BlackCatalogItem> | null>(null);
    const [selectedItemDossier, setSelectedItemDossier] = useState<BlackCatalogItem | null>(null);
    const [totalCount, setTotalCount] = useState<number>(0);
    
    const { 
        isLoading, 
        error, 
        searchResults,
        createEntry,
        updateEntry,
        deleteEntry,
        searchEntries,
        getTotalCount
    } = useBlackCatalog();
    
    const [contextMenu, setContextMenu] = useState<{
        x: number;
        y: number;
        item: BlackCatalogItem | null;
    } | null>(null);

    useEffect(() => {
        const loadTotalCount = async () => {
            const total = await getTotalCount();
            if (total !== null) {
                setTotalCount(total);
            }
        };
        loadTotalCount();
    }, [getTotalCount]);

    const resetFilters = useCallback(() => {
        setNameFilter('');
        setPhoneFilter('');
        setSearchTriggered(false);
        setHasSearched(false);
    }, []);

    const loadBlacklist = useCallback(async () => {
        const params: {
            name?: string;
            phone?: string;
        } = {};
        
        if (nameFilter && nameFilter.length >= 5) {
            params.name = nameFilter;
        }
        if (phoneFilter && phoneFilter.replace(/\D/g, '').length >= 11) {
            params.phone = phoneFilter;
        }

        await searchEntries(params);
        setHasSearched(true);
    }, [nameFilter, phoneFilter, searchEntries]);

    useEffect(() => {
        if (searchTriggered) {
            loadBlacklist();
        }
    }, [searchTriggered, loadBlacklist]);

    const handlePhoneFilterChange = (value: string) => {
        setPhoneFilter(value);
        setSearchTriggered(false);
        setHasSearched(false);
    };

    const handleFilterChange = (value: string) => {
        setNameFilter(value);
        setSearchTriggered(false);
        setHasSearched(false);
    };

    const handleSearch = () => {
        const isNameValid = nameFilter.length >= 5;
        const isPhoneValid = phoneFilter.replace(/\D/g, '').length >= 11;
        
        if (isNameValid || isPhoneValid) {
            setSearchTriggered(true);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const handleContextMenuAction = useCallback((action: 'edit' | 'delete') => {
        if (!contextMenu?.item) return;

        if (action === 'edit') {
            handleEditItem(contextMenu.item);
        } else if (action === 'delete') {
            handleDeleteFromBlackCatalog(contextMenu.item);
        }

        setContextMenu(null);
    }, [contextMenu]);

    const closeContextMenu = useCallback(() => {
        setContextMenu(null);
    }, []);

    useEffect(() => {
        const handleClickOutside = () => {
            if (contextMenu) {
                closeContextMenu();
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [contextMenu]);

    const handleAddToBlacklist = () => {
        setEditingItem(null);
        setIsModalOpen(true);
    };

    const handleEditItem = (item: BlackCatalogItem) => {
        setEditingItem(item);
        setIsModalOpen(true);
    };

    const handleSaveItem = async (itemData: Partial<BlackCatalogItem>) => {
        try {
            let result;
            
            if (editingItem?.id) {
            result = await updateEntry(editingItem.id, {
                fullname: itemData.fullname!,
                phone: itemData.phone!,
                doc: itemData.doc!,
                address: itemData.address!,
                doc_issue_date: itemData.doc_issue_date!,
                birthdate: itemData.birthdate!
            });
            } else {
            result = await createEntry({
                fullname: itemData.fullname!,
                phone: itemData.phone!,
                doc: itemData.doc!,
                address: itemData.address!,
                doc_issue_date: itemData.doc_issue_date!,
                birthdate: itemData.birthdate!
            });
            }
            
            if (result) {
            const total = await getTotalCount();
            if (total !== null) {
                setTotalCount(total);
            }
            if (hasSearched) {
                loadBlacklist();
            }
            }
            
            setIsModalOpen(false);
            setEditingItem(null);
        } catch (err) {
            console.error('Ошибка при сохранении записи:', err);
        }
    };

    const handleDeleteFromBlackCatalog = async (item: BlackCatalogItem) => {
        if (window.confirm(`Вы уверены, что хотите удалить ${item.fullname} из чёрного каталога?`)) {
            try {
                await deleteEntry(item.id);

                loadBlacklist();
                
                const total = await getTotalCount();
                if (total !== null) {
                    setTotalCount(total);
                }
            } catch (err) {
                console.error('Ошибка при удалении записи:', err);
            }
        }
    };

    const handleCardRightClick = (e: React.MouseEvent, item: BlackCatalogItem) => {
        e.preventDefault();
        setContextMenu({
            x: e.clientX,
            y: e.clientY,
            item
        });
    };

    const handleOpenDossier = (item: BlackCatalogItem) => {
        setSelectedItemDossier(item);
    };

    const isSuperAdminCompany = () => {
        // Заглушка для проверки прав администратора
        return true;
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setEditingItem(null);
    };

    const renderContent = () => {
        if (isLoading) {
            return <div>Загрузка...</div>;
        }

        if (error) {
            return <div>Ошибка: {error}</div>;
        }

        if (!hasSearched) {
            return (
                <EmptyStateContainer>
                    <EmptyStateIcon>📋</EmptyStateIcon>
                    <EmptyStateTitle>Чёрный каталог</EmptyStateTitle>
                    <EmptyStateText>
                        Введите ФИО клиента (минимум 5 символов) или полный номер телефона для поиска в чёрном каталоге.
                    </EmptyStateText>
                    {isSuperAdminCompany() && (
                        <DefaultButton onClick={handleAddToBlacklist}>
                            + Добавить в чёрный каталог
                        </DefaultButton>
                    )}
                </EmptyStateContainer>
            );
        }

        if (searchResults && searchResults.black_catalogs.length === 0) {
            return (
                <EmptyStateContainer>
                    <EmptyStateIcon>🔍</EmptyStateIcon>
                    <EmptyStateTitle>Запись в чёрном каталоге не найдена</EmptyStateTitle>
                    <EmptyStateText>
                        По вашему запросу "{nameFilter || phoneFilter}" ничего не найдено.
                    </EmptyStateText>
                    {isSuperAdminCompany() && (
                        <DefaultButton onClick={handleAddToBlacklist}>
                            + Добавить в чёрный каталог
                        </DefaultButton>
                    )}
                    <ResetButton onClick={resetFilters} style={{ marginTop: '16px' }}>
                        Сбросить фильтры
                    </ResetButton>
                </EmptyStateContainer>
            );
        }

        return (
            <div>
                {searchResults?.black_catalogs.map((item) => (
                    <BlackCatalogCard
                        key={item.id}
                        item={item}
                        onEdit={() => handleEditItem(item)}
                        onDelete={() => handleDeleteFromBlackCatalog(item)}
                        onRightClick={(e) => handleCardRightClick(e, item)}
                        onOpenDossier={handleOpenDossier}
                        showMenu={isSuperAdminCompany()}
                    />
                ))}
            </div>
        );
    };

    return (
        <div onClick={closeContextMenu}>
            <BlackCatalogModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                onSave={handleSaveItem}
                editingItem={editingItem}
                mode={editingItem ? "edit" : "create"}
            />
            
            {selectedItemDossier ? (
                <div>
                    <button onClick={() => setSelectedItemDossier(null)}>← Назад</button>
                    <div style={{ marginTop: '20px' }}>
                        <h2>Детальная информация</h2>
                        <p><strong>ID:</strong> {selectedItemDossier.id}</p>
                        <p><strong>ФИО:</strong> {selectedItemDossier.fullname}</p>
                        <p><strong>Телефон:</strong> {selectedItemDossier.phone}</p>
                        <p><strong>Документ:</strong> {selectedItemDossier.doc}</p>
                        <p><strong>Адрес:</strong> {selectedItemDossier.address}</p>
                    </div>
                </div>
            ) : (
                <>
                    <TitleContainer style={{ position: "sticky"}}>
                        <TitleContainer style={{maxWidth: "290px"}}>
                            <PageTitle>Чёрный каталог</PageTitle>
                            {searchResults && searchResults.black_catalogs.length > 0 && (
                                <span>({searchResults.count})</span>
                            )}
                        </TitleContainer>
                        <StyledCountInfo total={totalCount} />
                    </TitleContainer>
                    
                    <StickyFilterField>
                        <Container>
                            <CustomInput 
                                inputType="fullname"
                                placeholder="ФИО (минимум 5 символов)"
                                value={nameFilter}
                                onChange={(e) => handleFilterChange(e.target.value)}
                                onKeyPress={handleKeyPress}
                            />
                            <PhoneModalInput 
                                placeholder="Телефон (полный номер)"
                                value={phoneFilter}
                                onChange={(e) => handlePhoneFilterChange(e.target.value)}
                                onKeyPress={handleKeyPress}
                                name="phone"
                            />
                            <ResetButton onClick={resetFilters}>
                                Сбросить
                            </ResetButton>
                            <DarkCyanButton 
                                onClick={handleSearch}
                                disabled={!(nameFilter.length >= 5 || phoneFilter.replace(/\D/g, '').length >= 11)}
                            >
                                Поиск
                            </DarkCyanButton>
                        </Container>
                        {isSuperAdminCompany() && (
                            <DarkCyanButton 
                                style={{ width: "25vw", marginLeft: "auto" }}
                                onClick={handleAddToBlacklist}
                            >
                                + Добавить
                            </DarkCyanButton>
                        )}
                    </StickyFilterField>
                    
                    {renderContent()}
                </>
            )}

            {contextMenu && (
                <>
                    <Backdrop onClick={closeContextMenu} />
                    <ContextMenu x={contextMenu.x} y={contextMenu.y}>
                        <MenuItem onClick={() => handleContextMenuAction('edit')}>
                            Редактировать
                        </MenuItem>
                        <MenuItem danger onClick={() => handleContextMenuAction('delete')}>
                            Удалить
                        </MenuItem>
                    </ContextMenu>
                </>
            )}
        </div>
    );
};

export default BlackCatalogPage;
