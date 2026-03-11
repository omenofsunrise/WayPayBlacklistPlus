import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { BackButton as LibBackButton, DefaultButton, apiRequest, API_BASE_URL, PhotoViewerModal } from "waypay_react_library";
import type { BlackCatalogItem } from "../api/BlackCatalog/blackCatalog";
import { blackCatalogService } from "../api/BlackCatalog/BlackCatalogService";

const DossierContainer = styled.div`
    background: none;
    padding: 12px;
    position: relative;

    @media (max-width: 768px) {
        padding: 8px;
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
    }
`;

const ClientName = styled.h2`
    font-size: 18px;
    font-weight: 600;
    color: #111827;
    margin: 0;
`;

const BadgeRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 10px;
`;

const Badge = styled.span<{ $tone: "danger" | "info" }>`
    padding: 4px 10px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 600;
    color: ${({ $tone }) => ($tone === "danger" ? "#991B1B" : "#92400E")};
    background: ${({ $tone }) => ($tone === "danger" ? "#FEE2E2" : "#FEF3C7")};
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

const InfoValue = styled.span`
    font-size: 13px;
    color: #111827;
    font-weight: 600;
`;

const PassportSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-top: 16px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const PassportPhotoSection = styled.div`
    margin-top: 16px;
`;

const PassportPhotoTitle = styled.h4`
    font-size: 14px;
    font-weight: 600;
    color: #374151;
    margin: 0;
`;

const PassportPhotoPlaceholder = styled.div`
    border: 1px dashed #d1d5db;
    border-radius: 6px;
    padding: 28px 16px;
    text-align: center;
    transition: border-color 0.2s;
    background: white;

    &:hover {
        border-color: #007D88;
    }
`;

const PassportPhoto = styled.img`
    width: 100%;
    max-height: 240px;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
    cursor: pointer;
`;

const SpoilerMedia = styled.div<{ $revealed: boolean }>`
    position: relative;
    border-radius: 8px;
    overflow: hidden;

    ${PassportPhoto} {
        filter: ${({ $revealed }) => ($revealed ? "none" : "blur(18px)")};
        transform: ${({ $revealed }) => ($revealed ? "none" : "scale(1.03)")};
        transition: filter 0.2s ease, transform 0.2s ease;
    }
`;

const SpoilerOverlay = styled.button<{ $revealed: boolean }>`
    position: absolute;
    inset: 0;
    border: none;
    background: ${({ $revealed }) =>
        $revealed ? "transparent" : "rgba(17, 24, 39, 0.35)"};
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    display: ${({ $revealed }) => ($revealed ? "none" : "flex")};
    align-items: center;
    justify-content: center;
`;

const PassportStatus = styled.span`
    font-size: 12px;
    color: #6b7280;
`;

const PassportHeaderRow = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 6px;
`;

const PassportHideButton = styled.button`
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

const HiddenPassportInput = styled.input`
    display: none;
`;

const PassportActions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 12px;
`;

const PassportButtons = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
`;

const PassportHint = styled.div`
    font-size: 12px;
    color: #6b7280;
`;

const PassportError = styled.div`
    font-size: 12px;
    color: #b91c1c;
`;

const CommentsSection = styled(Section)`
    grid-column: 1 / -1;
`;

const CommentsHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
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
`;

const CommentFileInput = styled.input`
    display: none;
`;

const CommentFilePicker = styled.label`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border-radius: 8px;
    border: 1px dashed #d1d5db;
    cursor: pointer;
    font-size: 12px;
    color: #6b7280;
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

type BlackCatalogDossierProps = {
    item: BlackCatalogItem;
    onBack: () => void;
    onRefresh?: (id: number) => Promise<void> | void;
};

const BlackCatalogDossier = ({ item, onBack, onRefresh }: BlackCatalogDossierProps) => {
    const mainInputRef = useRef<HTMLInputElement | null>(null);
    const registrationInputRef = useRef<HTMLInputElement | null>(null);
    const [mainPassportUrl, setMainPassportUrl] = useState<string | null>(null);
    const [registrationPassportUrl, setRegistrationPassportUrl] = useState<string | null>(null);
    const [mainFile, setMainFile] = useState<File | null>(null);
    const [registrationFile, setRegistrationFile] = useState<File | null>(null);
    const [isUpdatingPassport, setIsUpdatingPassport] = useState(false);
    const [isDeletingPassport, setIsDeletingPassport] = useState(false);
    const [passportError, setPassportError] = useState<string | null>(null);
    const [isMainRevealed, setIsMainRevealed] = useState(false);
    const [isRegistrationRevealed, setIsRegistrationRevealed] = useState(false);
    const [isPhotoViewerOpen, setIsPhotoViewerOpen] = useState(false);
    const [photoViewerIndex, setPhotoViewerIndex] = useState(0);
    const [commentViewerUrl, setCommentViewerUrl] = useState<string | null>(null);
    const [comments, setComments] = useState<Array<{
        id: string;
        content: string;
        created_at: string;
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

    const formatDateLong = (value: string) => {
        const date = new Date(value);
        if (Number.isNaN(date.getTime())) return value;
        return date.toLocaleDateString("ru-RU", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };

    const debtStatus = (() => {
        if (!item.debt_ending_at) return null;
        const endDate = new Date(item.debt_ending_at);
        if (Number.isNaN(endDate.getTime())) return null;
        const today = new Date();
        const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const endDateStart = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
        const formatted = formatDateLong(item.debt_ending_at);
        if (endDateStart >= todayStart) {
            return {
                isActive: true,
                text: `Клиент оформлен до ${formatted}`,
            };
        }
        return {
            isActive: false,
            text: `Был оформлен до ${formatted}`,
        };
    })();

    useEffect(() => {
        let isActive = true;

        const fetchPassportUrl = async (fileId: string, setter: (value: string | null) => void) => {
            try {
                const response = await apiRequest<{
                    url?: string;
                }>(`/black-catalog/file/passport/${fileId}`, { method: "GET" });
                if (!isActive) return;
                const normalizeUrl = (value?: string | null) => {
                    if (!value) return null;
                    if (value.startsWith("http")) return value;
                    if (value.startsWith("/")) return `${API_BASE_URL}${value}`;
                    return `${API_BASE_URL}/${value}`;
                };
                setter(normalizeUrl(response?.url));
            } catch {
                if (!isActive) return;
                setter(null);
            }
        };

        setMainPassportUrl(null);
        setRegistrationPassportUrl(null);
        setIsMainRevealed(false);
        setIsRegistrationRevealed(false);

        if (item.main_passport_page) {
            fetchPassportUrl(item.main_passport_page, setMainPassportUrl);
        }
        if (item.registration_passport_page) {
            fetchPassportUrl(item.registration_passport_page, setRegistrationPassportUrl);
        }

        return () => {
            isActive = false;
        };
    }, [item.main_passport_page, item.registration_passport_page]);

    useEffect(() => {
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
    }, [item.id]);

    const handleUploadPassport = async (kind: "main" | "registration") => {
        const file = kind === "main" ? mainFile : registrationFile;
        if (!file) return;
        if (file.size > maxFileSizeBytes) {
            setPassportError(
                kind === "main"
                    ? "Ошибка загрузки главной страницы: размер файла больше 12 МБ."
                    : "Ошибка загрузки страницы регистрации: размер файла больше 12 МБ."
            );
            return;
        }
        setIsUpdatingPassport(true);
        setPassportError(null);
        try {
            await blackCatalogService.setPassport({
                black_catalog_id: String(item.id),
                main_page: kind === "main" ? file : undefined,
                registration_page: kind === "registration" ? file : undefined,
            });
            if (kind === "main") setMainFile(null);
            if (kind === "registration") setRegistrationFile(null);
            if (onRefresh) {
                await onRefresh(item.id);
            } else if (kind === "main" && item.main_passport_page) {
                setMainPassportUrl(null);
            } else if (kind === "registration" && item.registration_passport_page) {
                setRegistrationPassportUrl(null);
            }
        } catch (error) {
            const message = error instanceof Error ? error.message : "Ошибка загрузки паспорта";
            setPassportError(
                kind === "main"
                    ? `Ошибка загрузки главной страницы: ${message}`
                    : `Ошибка загрузки страницы регистрации: ${message}`
            );
        } finally {
            setIsUpdatingPassport(false);
        }
    };

    const handleDeletePassport = async (kind: "main" | "registration") => {
        const fileId = kind === "main" ? item.main_passport_page : item.registration_passport_page;
        if (!fileId) return;
        setIsDeletingPassport(true);
        setPassportError(null);
        try {
            await blackCatalogService.deletePassport({
                black_catalog_id: String(item.id),
                main_page_id: kind === "main" ? fileId : undefined,
                registration_page_id: kind === "registration" ? fileId : undefined,
            });
            if (onRefresh) {
                await onRefresh(item.id);
            } else if (kind === "main") {
                setMainPassportUrl(null);
            } else {
                setRegistrationPassportUrl(null);
            }
        } catch (error) {
            const message = error instanceof Error ? error.message : "Ошибка удаления паспорта";
            setPassportError(
                kind === "main"
                    ? `Ошибка удаления главной страницы: ${message}`
                    : `Ошибка удаления страницы регистрации: ${message}`
            );
        } finally {
            setIsDeletingPassport(false);
        }
    };

    const handleCreateComment = async () => {
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

    const openPhotoViewer = (index: number) => {
        setPhotoViewerIndex(index);
        setIsPhotoViewerOpen(true);
    };

    const openCommentViewer = (url: string) => {
        setCommentViewerUrl(url);
    };

    const handleDeleteComment = async (commentId: string) => {
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
            const response = await blackCatalogService.getComments(String(item.id), 20);
            setComments(response.comments || []);
        } catch (error) {
            const message = error instanceof Error ? error.message : "Ошибка обновления комментария";
            setCommentError(message);
        }
    };

    const renderComment = (comment: {
        id: string;
        content: string;
        created_at: string;
        author?: { full_name?: string; avatar_url?: string };
        files?: Array<{ id: string; filename: string; url?: string }>;
        parent_id?: string;
    }) => {
        return (
            <CommentWrapper key={comment.id} $level={0}>
                <CommentCard>
                    <CommentMeta>
                        {comment.author?.full_name || "Без имени"} ·{" "}
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
                    <CommentActions>
                        <InlineButton onClick={() => handleStartEdit(comment.id, comment.content)}>
                            Редактировать
                        </InlineButton>
                        <InlineButton onClick={() => handleDeleteComment(comment.id)}>
                            Удалить
                        </InlineButton>
                    </CommentActions>
                </CommentCard>
            </CommentWrapper>
        );
    };

    // Досье клиента: открывается при клике на карточку клиента.
    return (
        <DossierContainer>
                    <BackButton onClick={onBack}>
                        Назад к поиску
                    </BackButton>

                    <DossierHeader>
                        <div>
                            <ClientName>{item.fullname}</ClientName>
                            <ClientId>ID: {item.id}</ClientId>
                            <BadgeRow>
                                {item.is_swindler && <Badge $tone="danger">Аферист</Badge>}
                                {debtStatus?.isActive && <Badge $tone="info">Оформлен</Badge>}
                            </BadgeRow>
                        </div>
                    </DossierHeader>

                    <DossierGrid>
                        <Section>
                            <SectionTitle>Общая информация</SectionTitle>
                            <InfoGrid>
                                <InfoItem>
                                    <InfoLabel>Дата рождения</InfoLabel>
                                    <InfoValue>{formatDateShort(item.birthdate)}</InfoValue>
                                </InfoItem>
                                <InfoItem>
                                    <InfoLabel>Адрес</InfoLabel>
                                    <InfoValue>{item.address || "Не указан"}</InfoValue>
                                </InfoItem>
                                <InfoItem>
                                    <InfoLabel>Документ</InfoLabel>
                                    <InfoValue>{item.doc || "Не указан"}</InfoValue>
                                </InfoItem>
                                {debtStatus && (
                                    <InfoItem>
                                        <InfoLabel>Оформление</InfoLabel>
                                        <InfoValue>{debtStatus.text}</InfoValue>
                                    </InfoItem>
                                )}
                            </InfoGrid>
                        </Section>

                        <Section>
                            <SectionTitle>
                                Паспорт
                            </SectionTitle>
                            <PassportSection>
                                <PassportPhotoSection>
                                    <PassportPhotoTitle>Основная страница</PassportPhotoTitle>
                                    <PassportHeaderRow>
                                        <PassportStatus>
                                            {item.main_passport_page ? "Загружено" : "Не загружено"}
                                        </PassportStatus>
                                        {isMainRevealed && (
                                            <PassportHideButton onClick={() => setIsMainRevealed(false)}>
                                                Скрыть
                                            </PassportHideButton>
                                        )}
                                    </PassportHeaderRow>
                                    <HiddenPassportInput
                                        ref={mainInputRef}
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => setMainFile(e.target.files?.[0] ?? null)}
                                    />
                                    {mainPassportUrl ? (
                                        <SpoilerMedia $revealed={isMainRevealed}>
                                            <PassportPhoto
                                                src={mainPassportUrl}
                                                alt="Основная страница паспорта"
                                                onClick={() => openPhotoViewer(0)}
                                            />
                                            <SpoilerOverlay
                                                type="button"
                                                $revealed={isMainRevealed}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setIsMainRevealed(true);
                                                }}
                                            >
                                                Нажмите, чтобы показать
                                            </SpoilerOverlay>
                                        </SpoilerMedia>
                                    ) : (
                                        <PassportPhotoPlaceholder>
                                                <p style={{ margin: "0", color: "#6b7280", fontSize: "12px" }}>
                                                    {item.main_passport_page
                                                        ? "Нажмите на фото, чтобы открыть"
                                                        : "Основная страница не загружена"}
                                                </p>
                                        </PassportPhotoPlaceholder>
                                    )}
                                    <PassportActions>
                                        <PassportButtons>
                                            <DefaultButton
                                                type="button"
                                                onClick={() => mainInputRef.current?.click()}
                                            >
                                                Выбрать файл
                                            </DefaultButton>
                                            <DefaultButton
                                                type="button"
                                                onClick={() => handleUploadPassport("main")}
                                                disabled={!mainFile || isUpdatingPassport}
                                            >
                                                {mainPassportUrl ? "Обновить" : "Загрузить"}
                                            </DefaultButton>
                                            <DefaultButton
                                                type="button"
                                                onClick={() => handleDeletePassport("main")}
                                                disabled={!item.main_passport_page || isDeletingPassport}
                                            >
                                                Удалить
                                            </DefaultButton>
                                        </PassportButtons>
                                        <PassportHint>Максимальный размер файла: 12 МБ.</PassportHint>
                                        {passportError?.includes("главной") && (
                                            <PassportError>{passportError}</PassportError>
                                        )}
                                    </PassportActions>
                                </PassportPhotoSection>
                                <PassportPhotoSection>
                                    <PassportPhotoTitle>Страница с регистрацией</PassportPhotoTitle>
                                    <PassportHeaderRow>
                                        <PassportStatus>
                                            {item.registration_passport_page ? "Загружено" : "Не загружено"}
                                        </PassportStatus>
                                        {isRegistrationRevealed && (
                                            <PassportHideButton onClick={() => setIsRegistrationRevealed(false)}>
                                                Скрыть
                                            </PassportHideButton>
                                        )}
                                    </PassportHeaderRow>
                                    <HiddenPassportInput
                                        ref={registrationInputRef}
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => setRegistrationFile(e.target.files?.[0] ?? null)}
                                    />
                                    {registrationPassportUrl ? (
                                        <SpoilerMedia $revealed={isRegistrationRevealed}>
                                            <PassportPhoto
                                                src={registrationPassportUrl}
                                                alt="Страница регистрации"
                                                onClick={() => openPhotoViewer(mainPassportUrl ? 1 : 0)}
                                            />
                                            <SpoilerOverlay
                                                type="button"
                                                $revealed={isRegistrationRevealed}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setIsRegistrationRevealed(true);
                                                }}
                                            >
                                                Нажмите, чтобы показать
                                            </SpoilerOverlay>
                                        </SpoilerMedia>
                                    ) : (
                                        <PassportPhotoPlaceholder>
                                                <p style={{ margin: "0", color: "#6b7280", fontSize: "12px" }}>
                                                    {item.registration_passport_page
                                                        ? "Нажмите на фото, чтобы открыть"
                                                        : "Страница с регистрацией не загружена"}
                                                </p>
                                        </PassportPhotoPlaceholder>
                                    )}
                                    <PassportActions>
                                        <PassportButtons>
                                            <DefaultButton
                                                type="button"
                                                onClick={() => registrationInputRef.current?.click()}
                                            >
                                                Выбрать файл
                                            </DefaultButton>
                                            <DefaultButton
                                                type="button"
                                                onClick={() => handleUploadPassport("registration")}
                                                disabled={!registrationFile || isUpdatingPassport}
                                            >
                                                {registrationPassportUrl ? "Обновить" : "Загрузить"}
                                            </DefaultButton>
                                            <DefaultButton
                                                type="button"
                                                onClick={() => handleDeletePassport("registration")}
                                                disabled={!item.registration_passport_page || isDeletingPassport}
                                            >
                                                Удалить
                                            </DefaultButton>
                                        </PassportButtons>
                                        <PassportHint>Максимальный размер файла: 12 МБ.</PassportHint>
                                        {passportError?.includes("регистрации") && (
                                            <PassportError>{passportError}</PassportError>
                                        )}
                                    </PassportActions>
                                </PassportPhotoSection>
                            </PassportSection>
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
                                    <CommentFilePicker>
                                        <CommentFileInput
                                            type="file"
                                            onChange={(e) => setCommentFile(e.target.files?.[0] ?? null)}
                                        />
                                        {commentFile ? commentFile.name : "Прикрепить файл (до 12 МБ)"}
                                    </CommentFilePicker>
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
                    {isPhotoViewerOpen && (
                        <PhotoViewerModal
                            images={[mainPassportUrl, registrationPassportUrl].filter(
                                (url): url is string => Boolean(url)
                            )}
                            initialIndex={photoViewerIndex}
                            onClose={() => setIsPhotoViewerOpen(false)}
                        />
                    )}
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
