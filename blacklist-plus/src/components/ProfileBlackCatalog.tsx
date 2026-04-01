// ProfileBlackCatalog.tsx
import { useState, useEffect, useCallback, useRef } from "react";
import { CustomInput, CustomTitle } from "waypay_react_library";
import type { BlackCatalogItem, BlackCatalogFormData } from "../api/BlackCatalog/blackCatalog";
import useBlackCatalog from "../api/BlackCatalog/useBlackCatalog";
import { BlackCatalogModal } from "./BlackCatalogModal";
import BlackCatalogDossier from "./BlackCatalogDossier";
import { CardsContainer, ClearSearchButton, Container, EmptyStateContainer, EmptyStateIcon, EmptyStateText, EmptyStateTitle, ErrorContainer, HeaderTitleGroup, LoadingContainer, PaginationInfo, StickyHeader, UserAvatar, WildInputContainer, LoadingMoreIndicator, Backdrop, ContextMenu, MenuItem } from "./BlackCatalogPageContent/styles";
import BlackCatalogCard from "./BlackCatalogCard";

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

interface ProfileBlackCatalogProps {
  allowEdit?: boolean;
  pageSize?: number;
}

const ProfileBlackCatalog: React.FC<ProfileBlackCatalogProps> = ({
  allowEdit = true,
  pageSize = 10,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPageToken, setCurrentPageToken] = useState<string | null>(null);
  const [allItems, setAllItems] = useState<BlackCatalogItem[]>([]);
  const [hasMore, setHasMore] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isLoadingInitial, setIsLoadingInitial] = useState(false);
  const [contextMenu, setContextMenu] = useState<{
    x: number;
    y: number;
    item: BlackCatalogItem | null;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Partial<BlackCatalogItem> | null>(null);
  const [selectedItemDossier, setSelectedItemDossier] = useState<BlackCatalogItem | null>(null);
  
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreTriggerRef = useRef<HTMLDivElement | null>(null);
  
  const {
    isLoading,
    error,
    searchEntries,
    deleteEntry,
    updateEntry,
    getTotalCount,
  } = useBlackCatalog();

  const formatDateForAPI = (dateStr?: string): string => {
    if (!dateStr) return '';
    
    if (dateStr.includes('T')) {
      return dateStr.split('T')[0];
    }
    
    if (/^\d{2}\.\d{2}\.\d{4}$/.test(dateStr)) {
      const [day, month, year] = dateStr.split('.');
      return `${year}-${month}-${day}`;
    }
    
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
      return new Date(dateStr).toISOString();
    }
    
    return dateStr.trim();
  };

  const loadMyBlacklist = useCallback(async (pageToken?: string | null, append: boolean = false) => {
    const params: {
      mine: boolean;
      name?: string;
      page_token?: string;
      page_size: number;
    } = {
      mine: true,
      page_size: pageSize,
    };
    
    if (searchQuery && searchQuery.length >= 5) {
      params.name = searchQuery;
    }
    
    if (pageToken) {
      params.page_token = pageToken;
    }

    try {
      if (!append) {
        setIsLoadingInitial(true);
      }
      
      const response = await searchEntries(params);
      
      if (response && response.black_catalogs) {
        if (append) {
          setAllItems(prev => [...prev, ...response.black_catalogs]);
        } else {
          setAllItems(response.black_catalogs);
        }
        
        setHasMore(!!response.next_page_token);
        setCurrentPageToken(response.next_page_token || null);
      }
    } catch (err) {
      console.error("Error loading my blacklist:", err);
    } finally {
      if (!append) {
        setIsLoadingInitial(false);
      }
    }
  }, [searchQuery, pageSize, searchEntries]);

  // Initial load when search query changes
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchQuery.length >= 5 || searchQuery.length === 0) {
        setAllItems([]);
        setCurrentPageToken(null);
        setHasMore(false);
        loadMyBlacklist(null, false);
      }
    }, 300);
    
    return () => clearTimeout(timeoutId);
  }, [searchQuery, loadMyBlacklist]);

  const loadMore = useCallback(async () => {
    if (isLoadingMore || !hasMore || isLoadingInitial) return;
    
    setIsLoadingMore(true);
    try {
      await loadMyBlacklist(currentPageToken, true);
    } finally {
      setIsLoadingMore(false);
    }
  }, [currentPageToken, hasMore, isLoadingMore, isLoadingInitial, loadMyBlacklist]);

  // Setup intersection observer for infinite scroll
  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoadingMore && !isLoadingInitial) {
          loadMore();
        }
      },
      {
        root: null,
        rootMargin: "100px",
        threshold: 0.1,
      }
    );

    if (loadMoreTriggerRef.current) {
      observerRef.current.observe(loadMoreTriggerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [hasMore, isLoadingMore, isLoadingInitial, loadMore]);

  const resetFilters = useCallback(() => {
    setSearchQuery('');
    setAllItems([]);
    setCurrentPageToken(null);
    setHasMore(false);
    loadMyBlacklist(null, false);
  }, [loadMyBlacklist]);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  const canEditItem = (item?: BlackCatalogItem): boolean => {
    // В профиле пользователь может редактировать только свои записи
    if (!allowEdit) return false;
    // Если нет item, проверяем только allowEdit (для создания)
    if (!item) return allowEdit;
    // Проверяем, что это запись текущего пользователя
    return true; // Здесь можно добавить проверку на creator_id, если нужно
  };

  const handleEditItem = (item: BlackCatalogItem) => {
    if (!canEditItem(item)) {
      alert('У вас нет прав на редактирование этой записи');
      return;
    }
    
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleSaveItem = async (itemData: BlackCatalogFormData) => {
    try {
      if (editingItem?.id) {
        await updateEntry(editingItem.id, {
          fullname: itemData.fullname!,
          doc: itemData.doc!,
          address: itemData.address!,
          birthdate: formatDateForAPI(itemData.birthdate),
          comment: itemData.comment?.trim() || undefined,
          debt_ending_at: itemData.debt_ending_at
            ? formatDateForAPI(itemData.debt_ending_at)
            : undefined,
        });
      }

      // Refresh the list after update
      setAllItems([]);
      setCurrentPageToken(null);
      setHasMore(false);
      await loadMyBlacklist(null, false);

      setIsModalOpen(false);
      setEditingItem(null);
    } catch (err) {
      console.error('Ошибка при сохранении записи:', err);
      alert('Ошибка при сохранении записи');
    }
  };

  const handleDeleteFromBlackCatalog = async (item: BlackCatalogItem) => {
    if (window.confirm(`Вы уверены, что хотите удалить ${item.fullname} из чёрного каталога?`)) {
      try {
        await deleteEntry(item.id);
        
        // Refresh the list after deletion
        setAllItems([]);
        setCurrentPageToken(null);
        setHasMore(false);
        await loadMyBlacklist(null, false);
      } catch (err) {
        console.error('Ошибка при удалении записи:', err);
        alert('Ошибка при удалении записи');
      }
    }
  };

  const handleCardRightClick = (e: React.MouseEvent, item: BlackCatalogItem) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (canEditItem(item)) {
      setContextMenu({
        x: e.clientX,
        y: e.clientY,
        item,
      });
    }
  };

  const closeContextMenu = useCallback(() => {
    setContextMenu(null);
  }, []);

  const handleContextMenuAction = useCallback(
    (action: 'edit' | 'delete') => {
      if (!contextMenu?.item) return;

      if (action === 'edit') {
        if (canEditItem(contextMenu.item)) {
          handleEditItem(contextMenu.item);
        } else {
          alert('У вас нет прав на редактирование этой записи');
        }
      } else if (action === 'delete') {
        handleDeleteFromBlackCatalog(contextMenu.item);
      }

      setContextMenu(null);
    },
    [contextMenu]
  );

  const handleOpenDossier = (item: BlackCatalogItem) => {
    setSelectedItemDossier(item);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditingItem(null);
  };

  // Click outside to close context menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (contextMenu) {
        const menuElement = document.getElementById('profile-context-menu');
        if (menuElement && !menuElement.contains(event.target as Node)) {
          closeContextMenu();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [contextMenu, closeContextMenu]);

  const renderContent = () => {
    if (isLoadingInitial && allItems.length === 0) {
      return (
        <LoadingContainer>
          <div>Загрузка...</div>
        </LoadingContainer>
      );
    }

    if (error) {
      return (
        <ErrorContainer>
          <div>Ошибка: {error}</div>
        </ErrorContainer>
      );
    }

    if (allItems.length === 0 && !isLoadingInitial) {
      const hasSearched = searchQuery.length >= 5;
      return (
        <EmptyStateContainer>
          <EmptyStateIcon>📋</EmptyStateIcon>
          <EmptyStateTitle>Мой чёрный список</EmptyStateTitle>
          <EmptyStateText>
            {hasSearched 
              ? `По запросу "${searchQuery}" ничего не найдено.`
              : "Введите ФИО клиента (минимум 5 символов) для поиска в вашем чёрном каталоге."}
          </EmptyStateText>
        </EmptyStateContainer>
      );
    }

    return (
      <>
        <CardsContainer>
          {allItems.map((item) => (
            <BlackCatalogCard
              key={item.id}
              item={item}
              onEdit={() => canEditItem(item) && handleEditItem(item)}
              onDelete={() => handleDeleteFromBlackCatalog(item)}
              onRightClick={(e) => handleCardRightClick(e, item)}
              onOpenDossier={handleOpenDossier}
              showMenu={true}
              allowEdit={canEditItem(item)}
              allowDelete={canEditItem(item)}
            />
          ))}
        </CardsContainer>
        
        <div ref={loadMoreTriggerRef} style={{ height: '20px' }} />
        
        {isLoadingMore && (
          <LoadingMoreIndicator>
            <div>Загрузка ещё...</div>
          </LoadingMoreIndicator>
        )}
        
        {allItems.length > 0 && (
          <PaginationInfo>
            Показано {allItems.length} записей
            {hasMore && !isLoadingMore && " • Прокрутите для загрузки ещё"}
          </PaginationInfo>
        )}
      </>
    );
  };

  // Если открыто досье, показываем его
  if (selectedItemDossier) {
    return (
      <BlackCatalogDossier
        item={selectedItemDossier}
        userId=""
        onBack={() => setSelectedItemDossier(null)}
        onRefresh={async (id) => {
          const params: { mine: boolean; name?: string } = { mine: true };
          if (searchQuery && searchQuery.length >= 5) {
            params.name = searchQuery;
          }
          const response = await searchEntries(params);
          if (response?.black_catalogs) {
            const updatedItem = response.black_catalogs.find((entry) => entry.id === id);
            if (updatedItem) {
              setSelectedItemDossier(updatedItem);
            }
          }
        }}
      />
    );
  }

  return (
    <>
      <BlackCatalogModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSave={handleSaveItem}
        editingItem={editingItem}
        mode={editingItem ? 'edit' : 'create'}
        showDebtSection={true}
        requireDebtDate={false}
      />

      <div>
        <StickyHeader>
          <HeaderTitleGroup>
            <UserAvatar>
              <UserIcon />
            </UserAvatar>
            <CustomTitle>Мой чёрный список</CustomTitle>
            <WildInputContainer style={{ flex: 1, minWidth: '300px' }}>
              <CustomInput
                inputType="fullname"
                placeholder="Поиск по ФИО (минимум 5 символов)"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
              />
              {searchQuery && (
                <ClearSearchButton onClick={resetFilters} title="Очистить поиск">
                  ✕
                </ClearSearchButton>
              )}
            </WildInputContainer>
          </HeaderTitleGroup>
        </StickyHeader>

        <Container>
          {renderContent()}
        </Container>

        {/* Context Menu */}
        {contextMenu && (
          <>
            <Backdrop onClick={closeContextMenu} />
            <ContextMenu 
              id="profile-context-menu"
              x={contextMenu.x} 
              y={contextMenu.y}
              onClick={(e) => e.stopPropagation()}
            >
              {allowEdit && contextMenu.item && canEditItem(contextMenu.item) && (
                <MenuItem onClick={() => handleContextMenuAction('edit')}>
                  Редактировать
                </MenuItem>
              )}
              <MenuItem danger onClick={() => handleContextMenuAction('delete')}>
                Удалить
              </MenuItem>
            </ContextMenu>
          </>
        )}
      </div>
    </>
  );
};

export default ProfileBlackCatalog;