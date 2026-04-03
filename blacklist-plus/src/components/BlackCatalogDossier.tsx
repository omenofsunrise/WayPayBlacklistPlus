import styled from "styled-components";
import { useEffect, useState, useMemo } from "react";
import { BackButton as LibBackButton, DefaultButton, PhotoViewerModal } from "waypay_react_library";
import type { BlackCatalogItem } from "../api/BlackCatalog/blackCatalog";
import { blackCatalogService } from "../api/BlackCatalog/BlackCatalogService";
import useBlackCatalog from "../api/BlackCatalog/useBlackCatalog";
import { useParams, useNavigate } from "react-router-dom";
import { FaExclamationTriangle, FaClock, FaTrash } from "react-icons/fa";

const DossierContainer = styled.div`
    background: none;
    padding: 12px;
    position: relative;

    @media (max-width: 768px) {
        padding: 8px;
    }

    @media (max-width: 480px) {
        padding: 6px;
    }
`;

const BackButton = styled(LibBackButton)`
    border-radius: 6px;
    padding: 10px 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 500;
    width: fit-content;
    margin-bottom: 12px;

    @media (max-width: 768px) {
        width: 100%;
        justify-content: center;
    }
`;

const DossierHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 18px;
    margin-top: 0;
    padding-right: 120px;

    @media (max-width: 768px) {
        margin-top: 8px;
        padding-right: 0;
        flex-direction: column;
        gap: 10px;
    }
`;

const ClientName = styled.h2`
    font-size: 18px;
    font-weight: 600;
    color: #111827;
    margin: 0;

    @media (max-width: 480px) {
        font-size: 16px;
    }
`;

const BadgeRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 10px;
`;

const ClientId = styled.span`
    display: block;
    font-size: 12px;
    color: #9ca3af;
    font-weight: 400;
    margin-top: 4px;
`;

const DossierGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 28px;
    margin-bottom: 20px;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }

    @media (max-width: 640px) {
        gap: 18px;
    }
`;

const Section = styled.div`
    background: transparent;
`;

const SectionTitle = styled.h3`
    font-size: 14px;
    font-weight: 600;
    color: #374151;
    margin: 0 0 8px 0;
    display: flex;
    align-items: center;
    gap: 8px;

    @media (max-width: 480px) {
        font-size: 13px;
    }
`;

const InfoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(120px, 1fr));
    gap: 16px 24px;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, minmax(120px, 1fr));
    }

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`;

const InfoItem = styled.div`
    display: flex;
    flex-direction: column;
`;

const InfoLabel = styled.span`
    font-size: 12px;
    color: #6b7280;
    margin-bottom: 4px;
`;

const InfoValue = styled.span<{ $warning?: boolean; $debt?: boolean }>`
    font-size: 13px;
    color: ${props => {
        if (props.$warning) return '#EF4444';
        if (props.$debt) return '#B45309';
        return '#111827';
    }};
    font-weight: ${props => (props.$warning || props.$debt) ? '600' : '600'};
`;

const CommentsSection = styled(Section)`
    grid-column: 1 / -1;
`;

const CommentsHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;

    @media (max-width: 640px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
    }
`;

const CommentList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const CommentCard = styled.div`
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 12px 14px;

    @media (max-width: 480px) {
        padding: 10px 12px;
    }
`;

const CommentMeta = styled.div`
    font-size: 12px;
    color: #6b7280;
    margin-bottom: 6px;
`;

const CommentContent = styled.div`
    font-size: 14px;
    color: #111827;
    white-space: pre-wrap;
`;

const CommentFiles = styled.div`
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

const CommentImage = styled.img`
    width: 240px;
    height: 240px;
    object-fit: contain;
    background: #f9fafb;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
    cursor: pointer;

    @media (max-width: 640px) {
        width: 100%;
        height: auto;
        max-height: 280px;
    }
`;

const CommentFile = styled.a`
    font-size: 12px;
    color: #0f766e;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const CommentForm = styled.div`
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const CommentInput = styled.textarea`
    width: 100%;
    min-height: 90px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    padding: 10px 12px;
    font-size: 14px;
    font-family: inherit;
    color: #111827;
    background: #ffffff;
    resize: vertical;

    &:focus {
        outline: none;
        border-color: #007d88;
        box-shadow: 0 0 0 3px rgba(0, 125, 136, 0.15);
    }
`;

const CommentFormRow = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;

    @media (max-width: 640px) {
        flex-direction: column;
        align-items: stretch;
    }
`;

const CommentError = styled.div`
    font-size: 12px;
    color: #b91c1c;
`;

const CommentActions = styled.div`
    display: flex;
    gap: 8px;
    margin-top: 8px;
    flex-wrap: wrap;

    @media (max-width: 640px) {
        flex-direction: column;
        align-items: stretch;
    }
`;

const CommentWrapper = styled.div<{ $level: number }>`
    margin-left: ${({ $level }) => Math.min($level * 18, 54)}px;
`;

const InlineButton = styled.button`
    border: none;
    background: transparent;
    padding: 0;
    font-size: 12px;
    color: #0f766e;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

const DebtsSection = styled.div`
    margin-top: 16px;
    padding-top: 12px;
    border-top: 1px solid rgba(209, 213, 219, 0.5);
`;

const DebtsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

const DebtBadge = styled.div<{ $expired?: boolean }>`
    background: ${props => props.$expired ? '#9CA3AF' : '#FEF3C7'};
    color: ${props => props.$expired ? '#4B5563' : '#B45309'};
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;
    border: 1px solid ${props => props.$expired ? '#D1D5DB' : '#FDE68A'};
    
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

const StatusBadge = styled.div<{ $type: 'blacklist' | 'debt' }>`
    background: ${({ $type }) => $type === 'blacklist' 
        ? '#000000' 
        : '#F59E0B'};
    color: ${({ $type }) => $type === 'blacklist' ? '#EF4444' : 'white'};
    padding: 6px 10px;
    border-radius: 6px;
    font-weight: 700;
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    box-shadow: ${({ $type }) => $type === 'blacklist' 
        ? '0 2px 12px rgba(239, 68, 68, 0.5)' 
        : '0 2px 12px rgba(245, 158, 11, 0.5)'};
`;

type BlackCatalogDossierProps = {
    item?: BlackCatalogItem;
    onBack?: () => void;
    onRefresh?: (id: number) => Promise<void> | void;
    userId: string;
    onDeleteDebt?: (debtId: number) => Promise<void> | void;
};

const formatDate = (dateString?: string): string => {
    if (!dateString) return 'Не указана';
    
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return dateString;
        return date.toLocaleDateString('ru-RU', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    } catch {
        return dateString;
    }
};

const BlackCatalogDossier = ({ item: propItem, onBack, userId, onDeleteDebt }: BlackCatalogDossierProps) => {
    const { id: urlId } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { searchEntries, isLoading: isLoadingCatalog } = useBlackCatalog();
    
    const [item, setItem] = useState<BlackCatalogItem | null>(propItem || null);
    const [isLoadingItem, setIsLoadingItem] = useState(false);
    const [loadError, setLoadError] = useState<string | null>(null);
    const [isDeletingDebt, setIsDeletingDebt] = useState<number | null>(null);
    
    const [commentViewerUrl, setCommentViewerUrl] = useState<string | null>(null);
    const [comments, setComments] = useState<Array<{
        id: string;
        content: string;
        created_at: string;
        user_id: string;
        author?: { full_name?: string; avatar_url?: string };
        files?: Array<{ id: string; filename: string; url?: string }>;
        parent_id?: string;
    }>>([]);
    const [isLoadingComments, setIsLoadingComments] = useState(false);
    const [commentError, setCommentError] = useState<string | null>(null);
    const [commentContent, setCommentContent] = useState("");
    const [commentFile, setCommentFile] = useState<File | null>(null);
    const [isSubmittingComment, setIsSubmittingComment] = useState(false);
    const [editId, setEditId] = useState<string | null>(null);
    const [editContent, setEditContent] = useState("");
    const maxFileSizeBytes = 12 * 1024 * 1024;

    // Анализ долгов
    const activeDebts = useMemo(() => {
        if (!item?.debts || !Array.isArray(item.debts)) return [];
        
        const today = new Date();
        const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        
        return item.debts.filter(debt => {
            if (!debt.debt_ending_at) return false;
            const endDate = new Date(debt.debt_ending_at);
            if (isNaN(endDate.getTime())) return false;
            const endDateStart = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
            return endDateStart >= todayStart;
        });
    }, [item?.debts]);

    const expiredDebts = useMemo(() => {
        if (!item?.debts || !Array.isArray(item.debts)) return [];
        
        const today = new Date();
        const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        
        return item.debts.filter(debt => {
            if (!debt.debt_ending_at) return false;
            const endDate = new Date(debt.debt_ending_at);
            if (isNaN(endDate.getTime())) return false;
            const endDateStart = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
            return endDateStart < todayStart;
        });
    }, [item?.debts]);

    const hasActiveDebt = activeDebts.length > 0;

    const cardStatus = useMemo(() => {
        if (item?.is_swindler) return 'blacklist';
        if (hasActiveDebt) return 'debt';
        return 'blacklist';
    }, [item?.is_swindler, hasActiveDebt]);

    const allDebts = [...activeDebts, ...expiredDebts];

    const canDeleteDebt = (debtCreatorId?: string): boolean => {
        return !!userId && debtCreatorId === userId;
    };

    const handleDeleteDebt = async (debtId: number, e: React.MouseEvent) => {
        e.stopPropagation();
        
        if (!onDeleteDebt) return;
        
        if (window.confirm('Вы уверены, что хотите удалить этот долг?')) {
            try {
                setIsDeletingDebt(debtId);
                await onDeleteDebt(debtId);
                // Обновляем данные после удаления долга
                if (item) {
                    const response = await searchEntries({
                        id: item.id,
                        page_size: 1
                    });
                    if (response?.success && response.black_catalogs && response.black_catalogs.length > 0) {
                        setItem(response.black_catalogs[0]);
                    }
                }
            } catch (error) {
                console.error('Ошибка при удалении долга:', error);
                alert('Не удалось удалить долг');
            } finally {
                setIsDeletingDebt(null);
            }
        }
    };

    // Функция для навигации на страницу чёрного каталога
    const handleBack = () => {
        if (onBack) {
            onBack();
        } else {
            navigate("/black-catalog");
        }
    };

    // Загрузка элемента по ID из URL, если не передан через props
    useEffect(() => {
        const loadItemById = async () => {
            if (propItem) {
                setItem(propItem);
                return;
            }
            
            if (!urlId) {
                setLoadError("ID не указан");
                return;
            }
            
            setIsLoadingItem(true);
            setLoadError(null);
            
            try {
                const id = parseInt(urlId, 10);
                if (isNaN(id)) {
                    throw new Error("Некорректный ID");
                }
                
                const response = await searchEntries({
                    id: id,
                    page_size: 1
                });
                
                if (response?.success && response.black_catalogs && response.black_catalogs.length > 0) {
                    setItem(response.black_catalogs[0]);
                } else {
                    setLoadError("Запись не найдена");
                }
            } catch (error) {
                console.error("Ошибка при загрузке записи:", error);
                setLoadError(error instanceof Error ? error.message : "Ошибка при загрузке данных");
            } finally {
                setIsLoadingItem(false);
            }
        };
        
        loadItemById();
    }, [propItem, urlId, searchEntries]);

    const isImageFile = (file?: { content_type?: string; filename?: string }) => {
        if (file?.content_type?.startsWith("image/")) return true;
        if (!file?.filename) return false;
        return /\.(png|jpe?g|gif|webp)$/i.test(file.filename);
    };

    const formatDateShort = (value?: string) => {
        if (!value) return "Не указана";
        const date = new Date(value);
        if (Number.isNaN(date.getTime())) return value;
        return date.toLocaleDateString("ru-RU");
    };

    useEffect(() => {
        if (!item) return;
        
        let isActive = true;

        const fetchComments = async () => {
            setIsLoadingComments(true);
            setCommentError(null);
            try {
                const response = await blackCatalogService.getComments(String(item.id), 20);
                if (!isActive) return;
                setComments(response.comments || []);
            } catch (error) {
                if (!isActive) return;
                const message = error instanceof Error ? error.message : "Ошибка загрузки комментариев";
                setCommentError(message);
            } finally {
                if (isActive) setIsLoadingComments(false);
            }
        };

        fetchComments();
        return () => {
            isActive = false;
        };
    }, [item?.id]);

    const handleCreateComment = async () => {
        if (!item) return;
        
        if (!commentContent.trim()) {
            setCommentError("Введите текст комментария.");
            return;
        }
        if (commentFile && commentFile.size > maxFileSizeBytes) {
            setCommentError("Размер файла больше 12 МБ.");
            return;
        }
        setIsSubmittingComment(true);
        setCommentError(null);
        try {
            await blackCatalogService.createComment(String(item.id), {
                content: commentContent.trim(),
                file: commentFile || undefined,
            });
            setCommentContent("");
            setCommentFile(null);
            const response = await blackCatalogService.getComments(String(item.id), 20);
            setComments(response.comments || []);
        } catch (error) {
            const message = error instanceof Error ? error.message : "Ошибка создания комментария";
            setCommentError(message);
        } finally {
            setIsSubmittingComment(false);
        }
    };

    const openCommentViewer = (url: string) => {
        setCommentViewerUrl(url);
    };

    const handleDeleteComment = async (commentId: string) => {
        if (!item) return;
        
        setCommentError(null);
        try {
            await blackCatalogService.deleteComment(String(item.id), commentId);
            const response = await blackCatalogService.getComments(String(item.id), 20);
            setComments(response.comments || []);
        } catch (error) {
            const message = error instanceof Error ? error.message : "Ошибка удаления комментария";
            setCommentError(message);
        }
    };

    const handleStartEdit = (commentId: string, content: string) => {
        setEditId(commentId);
        setEditContent(content);
    };

    const handleSaveEdit = async () => {
        if (!editId) return;
        if (!editContent.trim()) {
            setCommentError("Введите текст комментария.");
            return;
        }
        setCommentError(null);
        try {
            await blackCatalogService.updateComment(editId, editContent.trim());
            setEditId(null);
            setEditContent("");
            if (item) {
                const response = await blackCatalogService.getComments(String(item.id), 20);
                setComments(response.comments || []);
            }
        } catch (error) {
            const message = error instanceof Error ? error.message : "Ошибка обновления комментария";
            setCommentError(message);
        }
    };

    const renderComment = (comment: {
        id: string;
        content: string;
        created_at: string;
        user_id: string;
        author?: { full_name?: string; avatar_url?: string };
        files?: Array<{ id: string; filename: string; url?: string }>;
        parent_id?: string;
    }) => {
        const canModify = comment.user_id === userId;
        return (
            <CommentWrapper key={comment.id} $level={0}>
                <CommentCard>
                    <CommentMeta>
                        {formatDateShort(comment.created_at)}
                    </CommentMeta>
                    {editId === comment.id ? (
                        <>
                            <CommentInput
                                value={editContent}
                                onChange={(e) => setEditContent(e.target.value)}
                            />
                            <CommentActions>
                                <InlineButton onClick={handleSaveEdit}>
                                    Сохранить
                                </InlineButton>
                                <InlineButton
                                    onClick={() => {
                                        setEditId(null);
                                        setEditContent("");
                                    }}
                                >
                                    Отмена
                                </InlineButton>
                            </CommentActions>
                        </>
                    ) : (
                        <CommentContent>{comment.content}</CommentContent>
                    )}
                    {comment.files && comment.files.length > 0 && (
                        <CommentFiles>
                            {comment.files.map(file => (
                                file.url ? (
                                    isImageFile(file) ? (
                                        <CommentImage
                                            key={file.id}
                                            src={file.url}
                                            alt={file.filename || "Изображение"}
                                            onClick={() => file.url && openCommentViewer(file.url)}
                                        />
                                    ) : (
                                        <CommentFile
                                            key={file.id}
                                            href={file.url}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {file.filename || "Файл"}
                                        </CommentFile>
                                    )
                                ) : (
                                    <CommentMeta key={file.id}>
                                        {file.filename || "Файл"}
                                    </CommentMeta>
                                )
                            ))}
                        </CommentFiles>
                    )}
                    {canModify && (
                        <CommentActions>
                            <InlineButton onClick={() => handleStartEdit(comment.id, comment.content)}>
                                Редактировать
                            </InlineButton>
                            <InlineButton onClick={() => handleDeleteComment(comment.id)}>
                                Удалить
                            </InlineButton>
                        </CommentActions>
                    )}
                </CommentCard>
            </CommentWrapper>
        );
    };

    // Отображение состояния загрузки
    if (isLoadingItem || isLoadingCatalog) {
        return (
            <DossierContainer>
                <BackButton onClick={handleBack}>
                    Назад к поиску
                </BackButton>
                <div style={{ textAlign: "center", padding: "40px" }}>
                    Загрузка данных...
                </div>
            </DossierContainer>
        );
    }

    // Отображение ошибки
    if (loadError || !item) {
        return (
            <DossierContainer>
                <BackButton onClick={handleBack}>
                    Назад к поиску
                </BackButton>
                <div style={{ textAlign: "center", padding: "40px", color: "#b91c1c" }}>
                    {loadError || "Данные не найдены"}
                </div>
            </DossierContainer>
        );
    }

    // Досье клиента
    return (
        <DossierContainer>
            <BackButton onClick={handleBack}>
                Назад к поиску
            </BackButton>

            <DossierHeader>
                <div>
                    <ClientName>{item.fullname}</ClientName>
                    <ClientId>ID: {item.id}</ClientId>
                    <BadgeRow>
                        <StatusBadge $type={cardStatus}>
                            <FaExclamationTriangle size={14} />
                            {cardStatus === 'blacklist' ? 'Чёрный список' : 'Есть оформления'}
                        </StatusBadge>
                    </BadgeRow>
                </div>
            </DossierHeader>

            <DossierGrid>
                <Section>
                    <SectionTitle>Общая информация</SectionTitle>
                    <InfoGrid>
                        <InfoItem>
                            <InfoLabel>Дата рождения</InfoLabel>
                            <InfoValue $warning={cardStatus === 'blacklist'} $debt={cardStatus === 'debt'}>
                                {formatDateShort(item.birthdate)}
                            </InfoValue>
                        </InfoItem>
                        <InfoItem>
                            <InfoLabel>Адрес</InfoLabel>
                            <InfoValue $warning={cardStatus === 'blacklist'} $debt={cardStatus === 'debt'}>
                                {item.address || "Не указан"}
                            </InfoValue>
                        </InfoItem>
                        <InfoItem>
                            <InfoLabel>Документ</InfoLabel>
                            <InfoValue $warning={cardStatus === 'blacklist'} $debt={cardStatus === 'debt'}>
                                {item.doc || "Не указан"}
                            </InfoValue>
                        </InfoItem>
                    </InfoGrid>

                    {allDebts.length > 0 && (
                        <DebtsSection>
                            <SectionTitle>Оформления</SectionTitle>
                            <DebtsContainer>
                                {activeDebts.map(debt => (
                                    <DebtBadge key={debt.id} $expired={false}>
                                        <FaExclamationTriangle size={12} />
                                        до {formatDate(debt.debt_ending_at)}
                                        {canDeleteDebt(debt.creator_id) && onDeleteDebt && (
                                            <DeleteDebtButton 
                                                onClick={(e) => handleDeleteDebt(debt.id, e)}
                                                disabled={isDeletingDebt === debt.id}
                                                title="Удалить оформление"
                                            >
                                                {isDeletingDebt === debt.id ? '...' : <FaTrash size={10} />}
                                            </DeleteDebtButton>
                                        )}
                                    </DebtBadge>
                                ))}
                                {expiredDebts.map(debt => (
                                    <DebtBadge key={debt.id} $expired={true}>
                                        <FaClock size={12} />
                                        просрочено {formatDate(debt.debt_ending_at)}
                                        {canDeleteDebt(debt.creator_id) && onDeleteDebt && (
                                            <DeleteDebtButton 
                                                onClick={(e) => handleDeleteDebt(debt.id, e)}
                                                disabled={isDeletingDebt === debt.id}
                                                title="Удалить оформление"
                                            >
                                                {isDeletingDebt === debt.id ? '...' : <FaTrash size={10} />}
                                            </DeleteDebtButton>
                                        )}
                                    </DebtBadge>
                                ))}
                            </DebtsContainer>
                        </DebtsSection>
                    )}
                </Section>

                <CommentsSection>
                    <CommentsHeader>
                        <SectionTitle>Комментарии</SectionTitle>
                    </CommentsHeader>
                    {isLoadingComments ? (
                        <div>Загрузка комментариев...</div>
                    ) : comments.length === 0 ? (
                        <div>Комментариев пока нет</div>
                    ) : (
                        <CommentList>
                            {comments
                                .filter(comment => !comment.parent_id)
                                .map(comment => renderComment(comment))}
                        </CommentList>
                    )}

                    <CommentForm>
                        <CommentInput
                            value={commentContent}
                            onChange={(e) => setCommentContent(e.target.value)}
                            placeholder="Добавить комментарий"
                        />
                        <CommentFormRow>
                            <DefaultButton
                                type="button"
                                onClick={handleCreateComment}
                                disabled={isSubmittingComment}
                            >
                                Добавить
                            </DefaultButton>
                        </CommentFormRow>
                        {commentError && <CommentError>{commentError}</CommentError>}
                    </CommentForm>
                </CommentsSection>
            </DossierGrid>
            {commentViewerUrl && (
                <PhotoViewerModal
                    images={[commentViewerUrl]}
                    initialIndex={0}
                    onClose={() => setCommentViewerUrl(null)}
                />
            )}
        </DossierContainer>
    );
};

export default BlackCatalogDossier;