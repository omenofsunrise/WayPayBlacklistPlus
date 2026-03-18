import { useCallback, useEffect, useState } from "react";
import { CustomInput, DefaultButton } from "waypay_react_library";
import useBlackCatalog from "../../api/BlackCatalog/useBlackCatalog";
import type { BlackCatalogFormData, BlackCatalogItem } from "../../api/BlackCatalog/blackCatalog";
import BlackCatalogCard from "../BlackCatalogCard";
import { BlackCatalogModal } from "../BlackCatalogModal";
import BlackCatalogDossier from "../BlackCatalogDossier";
import type { BlackCatalogPageContentProps } from "./types";
import {
  AddButton,
  Backdrop,
  Container,
  ContextMenu,
  DarkCyanButton,
  EmptyStateContainer,
  EmptyStateIcon,
  EmptyStateText,
  EmptyStateTitle,
  HeaderTitleGroup,
  MenuItem,
  PageTitle,
  ResetButton,
  StickyFilterField,
  StickyHeader,
  StyledCountInfo,
} from "./styles";

const BlackCatalogPageContent: React.FC<BlackCatalogPageContentProps> = ({
  texts,
  userId,
  showDebtSection = true,
  requireDebtDate = false,
  allowEdit = true,
}) => {
  const formatDateForAPI = (dateStr?: string): string => {
    if (!dateStr) return '';
    if (dateStr.includes('T')) {
      return dateStr.split('T')[0];
    }
    if (/^\\d{2}\\.\\d{2}\\.\\d{4}$/.test(dateStr)) {
      const [day, month, year] = dateStr.split('.');
      return `${year}-${month}-${day}`;
    }
    if (/^\\d{4}-\\d{2}-\\d{2}$/.test(dateStr)) {
      return dateStr;
    }
    return dateStr.trim();
  };
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
  const [searchTriggered, setSearchTriggered] = useState(initialState.searchTriggered);
  const [hasSearched, setHasSearched] = useState(initialState.hasSearched);
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
    getTotalCount,
  } = useBlackCatalog();

  const [contextMenu, setContextMenu] = useState<{
    x: number;
    y: number;
    item: BlackCatalogItem | null;
  } | null>(null);

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

    if (!params.name) {
      setHasSearched(false);
      return;
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

  const handleContextMenuAction = useCallback(
    (action: 'edit' | 'delete') => {
      if (!contextMenu?.item) return;

      if (action === 'edit' && allowEdit) {
        handleEditItem(contextMenu.item);
      } else if (action === 'delete') {
        handleDeleteFromBlackCatalog(contextMenu.item);
      }

      setContextMenu(null);
    },
    [contextMenu, allowEdit]
  );

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
  }, [contextMenu, closeContextMenu]);

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
          registration_page: itemData.registration_page || undefined,
          is_swindler: itemData.is_swindler,
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
    setContextMenu({
      x: e.clientX,
      y: e.clientY,
      item,
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
          <EmptyStateTitle>{texts.emptyStateTitle}</EmptyStateTitle>
          <EmptyStateText>{texts.emptyStateDescription}</EmptyStateText>
          {isSuperAdminCompany() && (
            <DefaultButton onClick={handleAddToBlacklist}>
              {texts.addToCatalogLabel}
            </DefaultButton>
          )}
        </EmptyStateContainer>
      );
    }

    if (searchResults && searchResults.black_catalogs.length === 0) {
      return (
        <EmptyStateContainer>
          <EmptyStateIcon>🔍</EmptyStateIcon>
          <EmptyStateTitle>{texts.notFoundTitle}</EmptyStateTitle>
          <EmptyStateText>{texts.notFoundDescription(nameFilter)}</EmptyStateText>
          {isSuperAdminCompany() && (
            <DefaultButton onClick={handleAddToBlacklist}>
              {texts.addToCatalogLabel}
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
            allowEdit={allowEdit}
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
        mode={editingItem ? 'edit' : 'create'}
        showDebtSection={showDebtSection}
        requireDebtDate={requireDebtDate}
      />

      {selectedItemDossier ? (
        <>
          {/* Досье клиента вынесено в отдельный компонент для читаемости. */}
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
        <>
          <StickyHeader>
            <HeaderTitleGroup>
              <PageTitle>{texts.pageTitle}</PageTitle>
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
              <ResetButton onClick={resetFilters}>Сбросить</ResetButton>
              <DarkCyanButton onClick={handleSearch} disabled={!(nameFilter.length >= 5)}>
                Поиск
              </DarkCyanButton>
            </Container>
            {isSuperAdminCompany() && (
              <AddButton onClick={handleAddToBlacklist}>{texts.addButtonLabel}</AddButton>
            )}
          </StickyFilterField>

          {renderContent()}
        </>
      )}

      {contextMenu && (
        <>
          <Backdrop onClick={closeContextMenu} />
          <ContextMenu x={contextMenu.x} y={contextMenu.y}>
            {allowEdit && (
              <MenuItem onClick={() => handleContextMenuAction('edit')}>Редактировать</MenuItem>
            )}
            <MenuItem danger onClick={() => handleContextMenuAction('delete')}>
              Удалить
            </MenuItem>
          </ContextMenu>
        </>
      )}
    </div>
  );
};

export default BlackCatalogPageContent;
export type { BlackCatalogPageContentTexts } from "./types";
