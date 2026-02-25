import { useState, type useEffect, type useCallback } from "react";
import styled from "styled-components";
import { CountInfoTitle, formatDate, CustomTitle, CustomInput, PhoneModalInput } from "waypay_react_library";


export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  justify-content: space-between;
`;

const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
  color: #6B7280;
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

const InfoBadge = styled.span<{ variant?: 'default' | 'warning' | 'danger' }>`
  background-color: ${props => {
    switch (props.variant) {
      case 'warning': return '#F59E0B';
      case 'danger': return '#EF4444';
      default: return '#6B7280';
    }
  }};
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  margin-left: 8px;
`;

const StyledCountInfo = styled(CountInfoTitle)`
    margin-left: auto;
`;

interface BlacklistClient {
  id: number;
  fullName: string;
  phone: string;
  birthdate: Date | null;
  debt: number;
  secondPhone?: string;
  doc?: string;
  docIssueDate?: Date | null;
  docIssueYear?: number;
  address?: string | null;
  registrationAddress?: string | null;
  creditIds?: string[];
  creditRestTerms?: string[];
  hasPassportPhoto?: boolean;
}

const BlackCatalogPage = () => {
    const [nameFilter, setNameFilter] = useState('');
    const [phoneFilter, setPhoneFilter] = useState('');
    const [searchTriggered, setSearchTriggered] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingClient, setEditingClient] = useState<Partial<BlacklistClient> | null>(null);
    const [selectedClientDossier, setSelectedClientDossier] = useState<BlacklistClient | null>(null);
    
    const [totalBlackCatalogCount, setTotalBlackCatalogCount] = useState<number>(0);
    
    const { 
        isLoading, 
        error, 
        data: blacklistData, 
        getBlackCatalog,
        addBlackCatalog,
        updateBlackCatalog,
        deleteFromBlackCatalog
    } = useBlacklist();
    
    const [contextMenu, setContextMenu] = useState<{
        x: number;
        y: number;
        client: BlacklistClient | null;
    } | null>(null);

    // Загружаем общее количество клиентов в черном каталоге при инициализации
    useEffect(() => {
        const loadTotalBlackCatalogCount = async () => {
            try {
                // Делаем запрос с минимальными параметрами только для получения количества
                const params = {
                    page: 1,
                    pageSize: 0,
                    fullName: undefined,
                    phone: undefined
                };

                const response = await getBlackCatalog(params);
                setTotalBlackCatalogCount(response.totalCount || 0);
            } catch (err) {
                console.error('Ошибка при загрузке общего количества клиентов в черном каталоге:', err);
                setTotalBlackCatalogCount(0);
            }
        };

        loadTotalBlackCatalogCount();
    }, []); // Пустой массив зависимостей - выполнится только при монтировании

    const resetFilters = useCallback(() => {
        setNameFilter('');
        setPhoneFilter('');
        setSearchTriggered(false);
        setHasSearched(false);
    }, []);

    const loadBlacklist = useCallback(async () => {
        const shouldSearch = searchTriggered && (
            nameFilter.length >= 3 || 
            (phoneFilter.replace(/\D/g, '').length >= 11 && phoneFilter.replace(/\D/g, '').length <= 15)
        );

        if (!shouldSearch && searchTriggered) {
            return;
        }

        const params: any = {
            page: 1,
            pageSize: 1000,
            fullName: nameFilter || undefined,
            phone: phoneFilter || undefined
        };

        await getBlackCatalog(params);
        setHasSearched(true);
    }, [nameFilter, phoneFilter, getBlackCatalog, searchTriggered]);

    useEffect(() => {
        if (searchTriggered) {
            loadBlacklist();
        }
    }, [searchTriggered, loadBlacklist]);

    const handlePhoneFilterChange = (value: string) => {
        setPhoneFilter(value);
        setSearchTriggered(false);
        
        if (!value && !nameFilter) {
            resetFilters();
        }
    };

    const handleFilterChange = (value: string) => {
        setNameFilter(value);
        setSearchTriggered(false);
        
        if (!value && !phoneFilter) {
            resetFilters();
        }
    };

    const handleSearch = () => {
        setSearchTriggered(true);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const handleCardRightClick = useCallback((e: React.MouseEvent, client: BlacklistClient) => {
        e.preventDefault();
        if (isSuperAdminCompany()) {
            setContextMenu({
                x: e.clientX,
                y: e.clientY,
                client
            });
        }
    }, [isSuperAdminCompany]);

    const handleContextMenuAction = useCallback((action: 'edit' | 'delete') => {
        if (!contextMenu?.client) return;

        if (action === 'edit') {
            handleEditClient(contextMenu.client);
        } else if (action === 'delete') {
            handleDeleteFromBlackCatalog(contextMenu.client);
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
        setEditingClient(null);
        setIsModalOpen(true);
    };

    const handleEditClient = (client: BlacklistClient) => {
        setEditingClient(client);
        setIsModalOpen(true);
    };

    const handleSaveClient = async (clientData: Partial<BlacklistClient>) => {
        try {
            if (editingClient?.id) {
                await updateBlackCatalog(editingClient.id, clientData);
            } else {
                await addBlackCatalog(clientData);
                // Обновляем общее количество после добавления
                setTotalBlackCatalogCount(prev => prev + 1);
            }
            loadBlacklist();
            setIsModalOpen(false);
            setEditingClient(null);
        } catch (err) {
            console.error('Ошибка при сохранении клиента:', err);
        }
    };

    const handleDeleteFromBlackCatalog = async (client: BlacklistClient) => {
        if (window.confirm('Вы уверены, что хотите убрать этого клиента из чёрного каталога?')) {
            try {
                await deleteFromBlackCatalog(client.id);
                loadBlacklist();
                // Обновляем общее количество после удаления
                setTotalBlackCatalogCount(prev => prev - 1);
            } catch (err) {
                console.error('Ошибка при удалении клиента:', err);
            }
        }
    };

    const handleOpenDossier = useCallback((client: BlacklistClient) => {
        // setSelectedClientDossier(client);
    }, []);

    const handleCardClick = (client: BlacklistClient) => {
        setSelectedClientDossier(client);
    };

    const getClientInfoBadges = (client: BlacklistClient) => {
        const badges = [];
        
        if (client.debt && client.debt > 0) {
            badges.push(
                <InfoBadge key="debt" variant="danger">
                    Долг: {client.debt.toLocaleString('ru-RU')} ₽
                </InfoBadge>
            );
        }
        
        if (client.doc) {
            badges.push(
                <InfoBadge key="doc" variant="warning">
                    Док: {client.doc}
                </InfoBadge>
            );
        }
        
        if (client.birthdate) {
            badges.push(
                <InfoBadge key="birthdate">
                    {formatDate(client.birthdate)}
                </InfoBadge>
            );
        }
        
        return badges;
    };

    const renderContent = () => {
        if (isLoading) {
            return <div>Загрузка...</div>;
        }

        if (error) {
            return <div>{error}</div>;
        }

        if (!hasSearched) {
            return (
                <EmptyStateContainer>
                    <EmptyStateIcon>📋</EmptyStateIcon>
                    <EmptyStateTitle>Чёрный каталог</EmptyStateTitle>
                    <EmptyStateText>
                        Введите ФИО клиента (минимум 3 символа) или полный номер телефона для поиска в чёрном каталоге.
                    </EmptyStateText>
                    {isSuperAdminCompany() && (
                        <DarkCyanButton onClick={handleAddToBlacklist}>
                            + Добавить в чёрный каталог
                        </DarkCyanButton>
                    )}
                </EmptyStateContainer>
            );
        }

        if (blacklistData && blacklistData.items.length === 0) {
            return (
                <EmptyStateContainer>
                    <EmptyStateIcon>🔍</EmptyStateIcon>
                    <EmptyStateTitle>Клиент в чёрном каталоге не найден</EmptyStateTitle>
                    <EmptyStateText>
                        По вашему запросу "{nameFilter || phoneFilter}" ничего не найдено в чёрном каталоге.
                    </EmptyStateText>
                    {isSuperAdminCompany() && (
                        <DarkCyanButton onClick={handleAddToBlacklist}>
                            + Добавить в чёрный каталог
                        </DarkCyanButton>
                    )}
                    <ResetButton onClick={resetFilters} style={{ marginTop: '16px' }}>
                        Сбросить фильтры
                    </ResetButton>
                </EmptyStateContainer>
            );
        }

        return (
            <div>
                {blacklistData?.items.map((client) => (
                    <ClientCard 
                        key={client.id} 
                        client={{
                            ...client,
                            secondPhone: client.secondPhone || '',
                            doc: client.doc || '',
                            docIssueDate: client.docIssueDate || null,
                            docIssueYear: client.docIssueYear || 0,
                            registrationAddress: client.address || client.registrationAddress || '',
                            birthdate: client.birthdate || null,
                            creditIds: client.creditIds || [],
                            creditRestTerms: client.creditRestTerms || []
                        }}
                        onEdit={() => handleEditClient(client)}
                        onDelete={() => handleDeleteFromBlackCatalog(client)}
                        onRightClick={(e) => handleCardRightClick(e, client)}
                        showMenu={isSuperAdminCompany()}
                        onOpenDossier={handleOpenDossier}
                        additionalInfo={getClientInfoBadges(client)}
                    />
                ))}
            </div>
        );
    };

    return (
        <PageLayout onClick={closeContextMenu}>
            {selectedClientDossier ? (
                <ClientDossier
                    client={selectedClientDossier}
                    comments={[]}
                    installments={[]}
                    onBack={() => setSelectedClientDossier(null)}
                    onAddComment={(comment) => console.log('Add comment:', comment)}
                    onUploadPassport={(file) => console.log('Upload passport:', file)}
                />
            ) : (
                <>
                    <TitleContainer style={{ position: "sticky"}}>
                        <TitleContainer style={{maxWidth: "290px"}}>
                            <CustomTitle>Чёрный каталог</CustomTitle>
                            {blacklistData && blacklistData.items.length > 0 && (
                                <ClientCount>({blacklistData.totalItemsCount})</ClientCount>
                            )}
                        </TitleContainer>
                        <StyledCountInfo
                            total={totalBlackCatalogCount} 
                        />
                    </TitleContainer>
                    
                    <StickyFilterField>
                        <Container style={{display: "flex", flexDirection: "row", width: "50vw", gap: "15px" }}>
                            <CustomInput 
                                inputType="fullname"
                                placeholder="ФИО клиента (минимум 3 символа)"
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
                                Сбросить фильтры
                            </ResetButton>
                            <DarkCyanButton 
                                onClick={handleSearch}
                                disabled={!(nameFilter.length >= 3 || phoneFilter.replace(/\D/g, '').length >= 11)}
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
                    
                    {isSuperAdminCompany() && (
                        <BlackCatalogModal
                            mode={editingClient?.id ? 'edit' : 'create'}
                            isOpen={isModalOpen}
                            onClose={() => {
                                setIsModalOpen(false);
                                setEditingClient(null);
                            }}
                            onSubmit={handleSaveClient}
                            initialData={editingClient || undefined}
                        />
                    )}

                    {contextMenu && isSuperAdminCompany() && (
                        <>
                            <Backdrop onClick={closeContextMenu} />
                            <ContextMenu x={contextMenu.x} y={contextMenu.y}>
                                <MenuItem onClick={() => handleContextMenuAction('edit')}>
                                    Редактировать
                                </MenuItem>
                                <MenuItem 
                                    danger 
                                    onClick={() => handleContextMenuAction('delete')}
                                >
                                    Удалить из чёрного каталога
                                </MenuItem>
                            </ContextMenu>
                        </>
                    )}
                </>
            )}
        </PageLayout>
    );
};

export default BlackCatalogPage;