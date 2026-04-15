import { useCallback, useEffect, useState, useRef } from "react";
import { CustomInput, CustomTitle } from "waypay_react_library";
import useBlackCatalog from "../../api/BlackCatalog/useBlackCatalog";
import type { BlackCatalogFormData, BlackCatalogItem } from "../../api/BlackCatalog/blackCatalog";
import BlackCatalogCard from "../BlackCatalogCard";
import { BlackCatalogModal } from "../BlackCatalogModal";
import BlackCatalogDossier from "../BlackCatalogDossier";
import type { BlackCatalogPageContentProps } from "./types";
import {
  AddButton,
  AddButtonMenu,
  AddButtonMenuItem,
  Backdrop,
  Container,
  ContextMenu,
  EmptyStateContainer,
  EmptyStateIcon,
  EmptyStateText,
  EmptyStateTitle,
  HeaderTitleGroup,
  MenuItem,
  StickyHeader,
  StyledCountInfo,
  UserAvatar,
  SearchInputContainer,
  ClearSearchButton,
  AddButtonMenuBackdrop,
  BlacklistIcon,
  CompletedIcon,
  MobileBottomSheetHeader,
  MobileBottomSheetTitle,
  MobileBottomSheetClose,
  MobileBottomSheetOption,
  MobileFilterField,
  WildInputContainer,
} from "./styles";
import MobileBottomSheetPortal from "../Portal";
import AddDebtModal from "../AddDebtModal";

const BlackCatalogPageContent: React.FC<BlackCatalogPageContentProps> = ({
  texts,
  userId,
  allowEdit = true,
}) => {
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
  
  const UserIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );

 const BlacklistIconSvg = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="#94A3B8" fillOpacity="0.8"/>
    </svg>
  );

  const CompletedIconSvg = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 4h10l3 3v12H6V4z" stroke="#64748B" strokeWidth="1.5" strokeOpacity="0.7" fill="none" strokeLinejoin="round"/>
      <path d="M16 4v3h3M9 8h8M9 12h8M9 16h5" stroke="#64748B" strokeWidth="1.5" strokeOpacity="0.8" strokeLinecap="round"/>
    </svg>
  );

  const storageKey = "black_catalog_search_state";
  const readStoredState = () => {
    try {
      const storedRaw = sessionStorage.getItem(storageKey);
      if (!storedRaw) {
        return { nameFilter: '', hasSearched: false, searchTriggered: false };
      }
      const stored = JSON.parse(storedRaw) as { nameFilter?: string; hasSearched?: boolean };
      const nameFilter = typeof stored.nameFilter === 'string' ? stored.nameFilter : '';
      const canSearch = nameFilter.length >= 5;
      return {
        nameFilter,
        hasSearched: Boolean(stored.hasSearched) && canSearch,
        searchTriggered: Boolean(stored.hasSearched) && canSearch,
      };
    } catch {
      sessionStorage.removeItem(storageKey);
      return { nameFilter: '', hasSearched: false, searchTriggered: false };
    }
  };
  
  const initialState = readStoredState();
  const [nameFilter, setNameFilter] = useState(initialState.nameFilter);
  const [hasSearched, setHasSearched] = useState(initialState.hasSearched);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Partial<BlackCatalogItem> | null>(null);
  const [selectedItemDossier, setSelectedItemDossier] = useState<BlackCatalogItem | null>(null);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [isAddMenuOpen, setIsAddMenuOpen] = useState(false);
  const [isMobileSheetOpen, setIsMobileSheetOpen] = useState(false);
  const [addMenuPosition, setAddMenuPosition] = useState<{ x: number; y: number } | null>(null);
  const [selectedAddOption, setSelectedAddOption] = useState<'blacklist' | 'completed' | null>(null);
  const [isAddDebtModalOpen, setIsAddDebtModalOpen] = useState(false);
  const [selectedDebtItem, setSelectedDebtItem] = useState<BlackCatalogItem | null>(null);
  
  const addButtonRef = useRef<HTMLButtonElement>(null);

  const {
    isLoading,
    error,
    searchResults,
    createEntry,
    updateEntry,
    deleteEntry,
    searchEntries,
    getTotalCount,
    addDebt,
    deleteDebt
  } = useBlackCatalog();

  const [contextMenu, setContextMenu] = useState<{
    x: number;
    y: number;
    item: BlackCatalogItem | null;
  } | null>(null);

  const addButtonContainerRef = useRef<HTMLDivElement>(null);
  const isMobile = () => {
    return window.innerWidth <= 768;
  };

  useEffect(() => {
    sessionStorage.setItem(
      storageKey,
      JSON.stringify({ nameFilter, hasSearched })
    );
  }, [nameFilter, hasSearched, storageKey]);

  useEffect(() => {
    const loadTotalCount = async () => {
      const total = await getTotalCount();
      if (total !== null) {
        setTotalCount(total);
      }
    };
    loadTotalCount();
  }, [getTotalCount]);

  useEffect(() => {
    const searchTimeout = setTimeout(() => {
      if (nameFilter.length >= 5) {
        loadBlacklist();
      } else if (nameFilter.length === 0) {
        setHasSearched(false);
      } else {
        setHasSearched(false);
      }
    }, 300);

    return () => clearTimeout(searchTimeout);
  }, [nameFilter]);

  const resetFilters = useCallback(() => {
    setNameFilter('');
    setHasSearched(false);
  }, []);

  const loadBlacklist = useCallback(async () => {
    const params: {
      name?: string;
    } = {};
    
    if (nameFilter && nameFilter.length >= 5) {
      params.name = nameFilter;
    }

    if (!params.name) {
      setHasSearched(false);
      return;
    }

    await searchEntries(params);
    setHasSearched(true);
  }, [nameFilter, searchEntries]);

  const handleAddDebt = (item: BlackCatalogItem) => {
    setSelectedDebtItem(item);
    setIsAddDebtModalOpen(true);
  };

  const handleSaveDebt = async (debtEndingAt: Date) => {
    if (!selectedDebtItem) return;
    
    try {
      await addDebt({
        blacklist_id: selectedDebtItem.id,
        debt_ending_at: debtEndingAt,
      });
      
      // Обновляем данные после добавления долга
      if (hasSearched) {
        await loadBlacklist();
      }
      
      // Если открыто досье, обновляем его
      if (selectedItemDossier?.id === selectedDebtItem.id) {
        const params: { name?: string } = {};
        if (nameFilter && nameFilter.length >= 5) {
          params.name = nameFilter;
        }
        const response = await searchEntries(params);
        if (response?.black_catalogs) {
          const updatedItem = response.black_catalogs.find(
            (entry) => entry.id === selectedDebtItem.id
          );
          if (updatedItem) {
            setSelectedItemDossier(updatedItem);
          }
        }
      }
    } catch (err) {
      console.error('Ошибка при добавлении долга:', err);
      throw err;
    }
  };

  const handleFilterChange = (value: string) => {
    setNameFilter(value);
  };

  const canEditItem = (item: BlackCatalogItem): boolean => {
    if (userId === 'b3873201-0ae4-44ff-ba1f-de55daf8318b'   // Аюб
      || userId === 'bcec9c2b-5cee-4a1c-aac6-d0336ef59802'  // Ибрагим
      || userId === 'e57d8bdf-77f2-4e07-b54a-4044754da41d'  // Второй номер Ибрагима
      || userId === '01eb28db-609b-4906-9423-aa4b65f622cf'  // Микиев Турпал 
      || userId === '221bf643-573e-4e61-be7b-8557d462743f' // Элипханов Идрис
      || userId === '354ab5e9-3446-4380-811e-ff93df5d2f01' // Кирилл
      || userId === 'a8f2d5a2-48d8-45ae-8dd7-de43de1d8fd4')// Элипханов Исаак Якубович
      return true;

      console.log(userId);
    if (!allowEdit) return false;
    
    if (!item.creator_id) return false;
    
    return item.creator_id === userId;
  };

  const handleContextMenuAction = useCallback(
    (action: 'edit' | 'delete') => {
      if (!contextMenu?.item) return;

      if (action === 'edit') {
        if (canEditItem(contextMenu.item)) {
          handleEditItem(contextMenu.item);
        } else {
          console.warn('Нет прав на редактирование этой записи');
          alert('У вас нет прав на редактирование этой записи');
        }
      } else if (action === 'delete') {
        handleDeleteFromBlackCatalog(contextMenu.item);
      }

      setContextMenu(null);
    },
    [contextMenu, userId, allowEdit]
  );

  const handleDeleteDebt = async (debtId: number) => {
    try {
      await deleteDebt(debtId);
      
      if (hasSearched) {
        await loadBlacklist();
      }
    } catch (err) {
      console.error('Ошибка при удалении долга:', err);
      alert('Не удалось удалить долг');
    }
  };

  const closeContextMenu = useCallback(() => {
    setContextMenu(null);
  }, []);

  const closeAddMenu = useCallback(() => {
    setIsAddMenuOpen(false);
    setAddMenuPosition(null);
  }, []);

  const closeMobileSheet = useCallback(() => {
    setIsMobileSheetOpen(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (contextMenu) {
        const menuElement = document.getElementById('context-menu');
        if (menuElement && !menuElement.contains(event.target as Node)) {
          closeContextMenu();
        }
      }
      
      if (isAddMenuOpen && !isMobile()) {
        const menuElement = document.getElementById('add-menu');
        const buttonElement = addButtonRef.current;
        
        if (menuElement && !menuElement.contains(event.target as Node) && 
            buttonElement && !buttonElement.contains(event.target as Node)) {
          closeAddMenu();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [contextMenu, isAddMenuOpen, closeContextMenu, closeAddMenu]);

  const handleAddButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    
    if (isMobile()) {
      setIsMobileSheetOpen(true);
    } else {
      if (isAddMenuOpen) {
        closeAddMenu();
      } else {
        const rect = e.currentTarget.getBoundingClientRect();
        setAddMenuPosition({
          x: rect.right - 180,
          y: rect.bottom + 5,
        });
        setIsAddMenuOpen(true);
      }
    }
  };

  const handleAddMenuSelect = (option: 'blacklist' | 'completed') => {
    setSelectedAddOption(option);
    closeAddMenu();
    closeMobileSheet();
    setEditingItem(null);
    setIsModalOpen(true);
  };

  const handleAddMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleEditItem = (item: BlackCatalogItem) => {
    if (!canEditItem(item)) {
      console.warn('Нет прав на редактирование этой записи');
      alert('У вас нет прав на редактирование этой записи');
      return;
    }
    
    setEditingItem(item);
    setSelectedAddOption(null);
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
          birthdate: formatDateForAPI(itemData.birthdate),
        });
      } else {
        result = await createEntry({
          fullname: itemData.fullname!,
          doc: itemData.doc!,
          address: itemData.address!,
          birthdate: formatDateForAPI(itemData.birthdate),
          comment: itemData.comment?.trim() || undefined,
          main_page: itemData.main_page || undefined,
          is_swindler: itemData.debt_ending_at ? false : true,
          registration_page: itemData.registration_page || undefined,
          debt_ending_at: itemData.debt_ending_at
            ? formatDateForAPI(itemData.debt_ending_at)
            : undefined,
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
      setSelectedAddOption(null);
    } catch (err) {
      console.error('Ошибка при сохранении записи:', err);
    }
  };

  const handleDeleteFromBlackCatalog = async (item: BlackCatalogItem) => {
    if (window.confirm(texts.deleteConfirmText(item.fullname))) {
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
    e.stopPropagation();
    
    if (canEditItem(item))
    {
      setContextMenu({
        x: e.clientX,
        y: e.clientY,
        item,
      });
    }
  };

  const handleOpenDossier = (item: BlackCatalogItem) => {
    setSelectedItemDossier(item);
  };

  const isSuperAdminCompany = () => {
    return true;
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditingItem(null);
    setSelectedAddOption(null);
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
          <EmptyStateTitle>{texts.emptyStateTitle}</EmptyStateTitle>
          <EmptyStateText>{texts.emptyStateDescription}</EmptyStateText>
          <div style={{display: "none"}}><StyledCountInfo total={totalCount} /> </div>
        </EmptyStateContainer>
      );
    }

    if (searchResults && searchResults.black_catalogs.length === 0) {
      return (
        <EmptyStateContainer>
          <EmptyStateIcon>🔍</EmptyStateIcon>
          <EmptyStateTitle>{texts.notFoundTitle}</EmptyStateTitle>
          <EmptyStateText>{texts.notFoundDescription(nameFilter)}</EmptyStateText>
        </EmptyStateContainer>
      );
    }

    return (
      <div style={{marginTop: "20px"}}>
        {searchResults?.black_catalogs.map((item) => {
          const canEdit = canEditItem(item);
          
          return (
            <BlackCatalogCard
              key={item.id}
              item={item}
              onEdit={() => canEdit && handleEditItem(item)}
              onDelete={() => handleDeleteFromBlackCatalog(item)}
              onDeleteDebt={handleDeleteDebt}
              onRightClick={(e) => handleCardRightClick(e, item)}
              onOpenDossier={handleOpenDossier}
              showMenu={isSuperAdminCompany()}
              allowEdit={canEditItem(item)}
              allowDelete={canEditItem(item)}
              allowAddDebt={true}
              onAddDebt={handleAddDebt}
              userId={userId}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <BlackCatalogModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSave={handleSaveItem}
        editingItem={editingItem}
        mode={editingItem ? 'edit' : 'create'}
        showDebtSection={selectedAddOption !== 'blacklist'}
        requireDebtDate={selectedAddOption !== 'blacklist'}
      />

      {selectedItemDossier ? (
        <>
          <BlackCatalogDossier
            item={selectedItemDossier}
            userId={userId}
            onBack={() => setSelectedItemDossier(null)}
            onRefresh={async (id) => {
              const params: { name?: string } = {};
              if (nameFilter && nameFilter.length >= 5) {
                params.name = nameFilter;
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
        </>
      ) : (
        <div style={{padding: "15px"}}>
          <StickyHeader>
            <HeaderTitleGroup>
              <UserAvatar>
                <UserIcon />
              </UserAvatar>
              <CustomTitle style={{whiteSpace: 'nowrap'}}>{texts.pageTitle}</CustomTitle>
              <WildInputContainer>
                <CustomInput
                  inputType="fullname"
                  placeholder="ФИО (минимум 5 символов)"
                  value={nameFilter}
                  onChange={(e) => handleFilterChange(e.target.value)}
                />
                {nameFilter && (
                  <ClearSearchButton onClick={resetFilters} title="Очистить поиск">
                    ✕
                  </ClearSearchButton>
                )}
              </WildInputContainer>
              <div ref={addButtonContainerRef} style={{ marginLeft: 'auto' }}>
                <AddButton onClick={handleAddButtonClick}>
                  {texts.addButtonLabel}
                </AddButton>
              </div>
            </HeaderTitleGroup>
          </StickyHeader>

          <MobileFilterField>
            <Container>
              <SearchInputContainer>
                <CustomInput
                style={{fontSize: "16px"}}
                  inputType="fullname"
                  placeholder="ФИО (минимум 5 символов)"
                  value={nameFilter}
                  onChange={(e) => handleFilterChange(e.target.value)}
                />
                {nameFilter && (
                  <ClearSearchButton onClick={resetFilters} title="Очистить поиск">
                    ✕
                  </ClearSearchButton>
                )}
              </SearchInputContainer>
            </Container>
          </MobileFilterField>

          {renderContent()}
        </div>
      )}

      {contextMenu && (
        <>
          <Backdrop onClick={closeContextMenu} />
          <ContextMenu 
            id="context-menu"
            x={contextMenu.x} 
            y={contextMenu.y}
            onClick={(e) => e.stopPropagation()}
          >
            {allowEdit && contextMenu.item && canEditItem(contextMenu.item) && (
              <MenuItem onClick={() => handleContextMenuAction('edit')}>Редактировать</MenuItem>
            )}
            {contextMenu.item && (
              <MenuItem onClick={() => {
                handleAddDebt(contextMenu.item!);
                closeContextMenu();
              }}>Добавить долг</MenuItem>
            )}
            <MenuItem danger onClick={() => handleContextMenuAction('delete')}>Удалить</MenuItem>
          </ContextMenu>
        </>
      )}

      {isAddMenuOpen && addMenuPosition && !isMobile() && (
        <>
          <AddButtonMenuBackdrop onClick={closeAddMenu} />
          <AddButtonMenu 
            id="add-menu"
            x={addMenuPosition.x} 
            y={addMenuPosition.y}
            onClick={handleAddMenuClick}
          >
            <AddButtonMenuItem onClick={() => handleAddMenuSelect('blacklist')}>
              <BlacklistIcon>
                <BlacklistIconSvg />
              </BlacklistIcon>
              Чёрный список
            </AddButtonMenuItem>
            <AddButtonMenuItem onClick={() => handleAddMenuSelect('completed')}>
              <CompletedIcon>
                <CompletedIconSvg />
              </CompletedIcon>
              Оформленный
            </AddButtonMenuItem>
          </AddButtonMenu>
        </>
      )}

      {isMobileSheetOpen && (
        <MobileBottomSheetPortal
          isOpen={isMobileSheetOpen}
          onClose={closeMobileSheet}
        >
          <MobileBottomSheetHeader>
            <MobileBottomSheetTitle>Добавить</MobileBottomSheetTitle>
            <MobileBottomSheetClose onClick={closeMobileSheet}>✕</MobileBottomSheetClose>
          </MobileBottomSheetHeader>
          <MobileBottomSheetOption onClick={() => handleAddMenuSelect('blacklist')}>
            <BlacklistIcon>
              <BlacklistIconSvg />
            </BlacklistIcon>
            Чёрный список
          </MobileBottomSheetOption>
          <MobileBottomSheetOption onClick={() => handleAddMenuSelect('completed')}>
            <CompletedIcon>
              <CompletedIconSvg />
            </CompletedIcon>
            Оформленный
          </MobileBottomSheetOption>
        </MobileBottomSheetPortal>
      )}

      <AddDebtModal
        isOpen={isAddDebtModalOpen}
        onClose={() => {
          setIsAddDebtModalOpen(false);
          setSelectedDebtItem(null);
        }}
        onSave={handleSaveDebt}
        itemName={selectedDebtItem?.fullname || ''}
      />
    </div>
  );
};

export default BlackCatalogPageContent;
export type { BlackCatalogPageContentTexts } from "./types";