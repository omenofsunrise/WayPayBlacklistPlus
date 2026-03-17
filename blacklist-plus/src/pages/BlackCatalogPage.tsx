import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { CountInfoTitle, CustomTitle, CustomInput, DefaultButton } from "waypay_react_library";
import useBlackCatalog from "../api/BlackCatalog/useBlackCatalog";
import type { BlackCatalogFormData, BlackCatalogItem } from "../api/BlackCatalog/blackCatalog";
import BlackCatalogCard from "../components/BlackCatalogCard";
import { BlackCatalogModal } from "../components/BlackCatalogModal";
import BlackCatalogDossier from "../components/BlackCatalogDossier";

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 8px;
    align-items: flex-start;
  }
`;

const StickyHeader = styled(TitleContainer)`
  position: sticky;
  top: 0;
  z-index: 11;
  padding: 12px 0;
  background: white;

  @media (max-width: 768px) {
    padding: 8px 0;
  }
`;

const HeaderTitleGroup = styled(TitleContainer)`
  max-width: 290px;

  @media (max-width: 768px) {
    max-width: none;
    width: 100%;
    justify-content: flex-start;
  }
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
    flex-wrap: wrap;
`;

const StickyFilterField = styled(FilterField)`
  position: sticky;
  top: 50px;
  z-index: 10;
  padding: 16px 0;
  background: none;
  align-items: center;

  @media (max-width: 768px) {
    top: 0;
    padding: 12px 0;
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
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

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
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

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  overflow: auto;
  max-height: calc(100vh - 200px);
  
  & > div {
    position: relative;
    z-index: 1;
  }
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
    
    @media (max-width: 768px) {
      margin-left: 0;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 50vw;
    gap: 15px;
    align-items: center;

    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        gap: 10px;
        align-items: stretch;
    }
`;

const DarkCyanButton = styled(DefaultButton)`
    background-color: #008B8B;
    
    &:hover {
        background-color: #006666;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const AddButton = styled(DarkCyanButton)`
    width: 25vw;
    margin-left: auto;

    @media (max-width: 768px) {
        width: 100%;
        margin-left: 0;
    }
`;

const BlackCatalogPage = () => {
    const [nameFilter, setNameFilter] = useState('');
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
        setSearchTriggered(false);
        setHasSearched(false);
    }, []);

    const loadBlacklist = useCallback(async () => {
        const params: {
            name?: string;
        } = {};
        
        if (nameFilter && nameFilter.length >= 5) {
            params.name = nameFilter;
        }

        await searchEntries(params);
        setHasSearched(true);
    }, [nameFilter, searchEntries]);

    useEffect(() => {
        if (searchTriggered) {
            loadBlacklist();
        }
    }, [searchTriggered, loadBlacklist]);

    const handleFilterChange = (value: string) => {
        setNameFilter(value);
        setSearchTriggered(false);
        setHasSearched(false);
    };

    const handleSearch = () => {
        const isNameValid = nameFilter.length >= 5;
        
        if (isNameValid) {
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

    const handleSaveItem = async (itemData: BlackCatalogFormData) => {
        try {
            let result;
            
            if (editingItem?.id) {
            result = await updateEntry(editingItem.id, {
                fullname: itemData.fullname!,
                doc: itemData.doc!,
                address: itemData.address!,
                birthdate: itemData.birthdate!
            });
            } else {
            result = await createEntry({
                fullname: itemData.fullname!,
                doc: itemData.doc!,
                address: itemData.address!,
                birthdate: itemData.birthdate!,
                comment: itemData.comment?.trim() || undefined,
                main_page: itemData.main_page || undefined,
                registration_page: itemData.registration_page || undefined,
                is_swindler: itemData.is_swindler,
                debt_ending_at: itemData.debt_ending_at || undefined,
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
                    <EmptyStateTitle>Черный список</EmptyStateTitle>
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
                        По вашему запросу "{nameFilter}" ничего не найдено.
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
            <ContentContainer>
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
            </ContentContainer>
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
                <>
                    {/* Досье клиента вынесено в отдельный компонент для читаемости. */}
                    <BlackCatalogDossier
                        item={selectedItemDossier}
                        onBack={() => setSelectedItemDossier(null)}
                        onRefresh={async (id) => {
                            const params: { name?: string } = {};
                            if (nameFilter && nameFilter.length >= 5) {
                                params.name = nameFilter;
                            }
                            const response = await searchEntries(params);
                            if (response?.black_catalogs) {
                                const updatedItem = response.black_catalogs.find(entry => entry.id === id);
                                if (updatedItem) {
                                    setSelectedItemDossier(updatedItem);
                                }
                            }
                        }}
                    />
                </>
            ) : (
                <>
                    <StickyHeader>
                        <HeaderTitleGroup>
                            <PageTitle>Черный список</PageTitle>
                            {searchResults && searchResults.black_catalogs.length > 0 && (
                                <span>({searchResults.count})</span>
                            )}
                        </HeaderTitleGroup>
                        <StyledCountInfo total={totalCount} />
                    </StickyHeader>
                    
                    <StickyFilterField>
                        <Container>
                            <CustomInput 
                                inputType="fullname"
                                placeholder="ФИО (минимум 5 символов)"
                                value={nameFilter}
                                onChange={(e) => handleFilterChange(e.target.value)}
                                onKeyPress={handleKeyPress}
                            />
                            <ResetButton onClick={resetFilters}>
                                Сбросить
                            </ResetButton>
                            <DarkCyanButton 
                                onClick={handleSearch}
                                disabled={!(nameFilter.length >= 5)}
                            >
                                Поиск
                            </DarkCyanButton>
                        </Container>
                        {isSuperAdminCompany() && (
                            <AddButton
                                onClick={handleAddToBlacklist}
                            >
                                + Добавить
                            </AddButton>
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
