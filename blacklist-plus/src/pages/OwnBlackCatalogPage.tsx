import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import type { BlackCatalogFormData, BlackCatalogItem } from "../api/BlackCatalog/blackCatalog";
import { blackCatalogService } from "../api/BlackCatalog/BlackCatalogService";
import BlackCatalogCard from "../components/BlackCatalogCard";
import { BlackCatalogModal } from "../components/BlackCatalogModal";
import {
  EmptyStateContainer,
  EmptyStateIcon,
  EmptyStateText,
  EmptyStateTitle,
  HeaderTitleGroup,
  PageTitle,
  StickyHeader,
} from "../components/BlackCatalogPageContent/styles";

const LoadMoreSentinel = styled.div`
  height: 1px;
`;

const OwnBlackCatalogPage = () => {
  const [items, setItems] = useState<BlackCatalogItem[]>([]);
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedItemDossier, setSelectedItemDossier] = useState<BlackCatalogItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Partial<BlackCatalogItem> | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

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

  const loadPage = useCallback(async (pageToken?: string) => {
    const isLoadMore = Boolean(pageToken);
    setError(null);
    if (isLoadMore) {
      setIsLoadingMore(true);
    } else {
      setIsLoading(true);
    }

    try {
      const response = await blackCatalogService.search({
        mine: true,
        page_token: pageToken,
        page_size: 20,
      });

      if (!response?.success) {
        throw new Error(response?.error || 'Failed to load entries');
      }

      const newItems = response.black_catalogs || [];
      setItems(prev => {
        if (!isLoadMore) return newItems;
        const existingIds = new Set(prev.map(entry => entry.id));
        const merged = [...prev];
        newItems.forEach(entry => {
          if (!existingIds.has(entry.id)) {
            merged.push(entry);
          }
        });
        return merged;
      });
      setNextPageToken(response.next_page_token ?? null);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(message);
    } finally {
      setIsLoading(false);
      setIsLoadingMore(false);
    }
  }, []);

  useEffect(() => {
    loadPage();
  }, [loadPage]);

  useEffect(() => {
    if (!sentinelRef.current) return;
    if (!nextPageToken) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting && !isLoadingMore && !isLoading) {
          loadPage(nextPageToken);
        }
      },
      { rootMargin: '200px 0px' }
    );

    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [nextPageToken, isLoadingMore, isLoading, loadPage]);

  const handleEditItem = (item: BlackCatalogItem) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleSaveItem = async (itemData: BlackCatalogFormData) => {
    try {
      if (!editingItem?.id) return;
      await blackCatalogService.update(editingItem.id, {
        fullname: itemData.fullname,
        doc: itemData.doc,
        address: itemData.address,
        birthdate: formatDateForAPI(itemData.birthdate),
        comment: itemData.comment || undefined,
        is_swindler: itemData.is_swindler,
        debt_ending_at: itemData.debt_ending_at
          ? formatDateForAPI(itemData.debt_ending_at)
          : undefined,
      });
      setIsModalOpen(false);
      setEditingItem(null);
      await loadPage();
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Ошибка при сохранении записи';
      setError(message);
    }
  };

  const handleDeleteFromBlackCatalog = async (item: BlackCatalogItem) => {
    if (window.confirm(`Вы уверены, что хотите удалить ${item.fullname} из своего ЧС?`)) {
      try {
        await blackCatalogService.delete(item.id);
        setItems(prev => prev.filter(entry => entry.id !== item.id));
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Ошибка при удалении записи';
        setError(message);
      }
    }
  };

  const handleOpenDossier = (item: BlackCatalogItem) => {
    setSelectedItemDossier(item);
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

    if (items.length === 0) {
      return (
        <EmptyStateContainer>
          <EmptyStateIcon>📋</EmptyStateIcon>
          <EmptyStateTitle>Свой ЧС</EmptyStateTitle>
          <EmptyStateText>
            Здесь будут отображаться записи, созданные вашей компанией.
          </EmptyStateText>
        </EmptyStateContainer>
      );
    }

    return (
      <div>
        {items.map(item => (
          <BlackCatalogCard
            key={item.id}
            item={item}
            onEdit={() => handleEditItem(item)}
            onDelete={() => handleDeleteFromBlackCatalog(item)}
            onRightClick={() => undefined}
            onOpenDossier={handleOpenDossier}
            showMenu
            allowEdit
            allowDelete
          />
        ))}
        <LoadMoreSentinel ref={sentinelRef} />
        {isLoadingMore && <div>Загрузка...</div>}
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
        showDebtSection={false}
      />

      {selectedItemDossier ? (
        <></>
      ) : (
        <>
          <StickyHeader>
            <HeaderTitleGroup>
              <PageTitle>Свой ЧС</PageTitle>
            </HeaderTitleGroup>
          </StickyHeader>
          {renderContent()}
        </>
      )}
    </div>
  );
};

export default OwnBlackCatalogPage;
