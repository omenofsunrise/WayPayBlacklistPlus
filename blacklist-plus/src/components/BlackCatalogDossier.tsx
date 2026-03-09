import { useState } from "react";
import styled from "styled-components";
import { FaArrowLeft, FaComment, FaHistory } from "react-icons/fa";
import { DefaultButton } from "waypay_react_library";
import type { BlackCatalogItem } from "../api/BlackCatalog/blackCatalog";

const TabsContainer = styled.div`
    width: 100%;
    border-bottom: 1px solid rgba(209, 213, 219, 1);
    margin-bottom: 20px;
`;

const TabsList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 24px;
    align-items: center;
`;

const TabItem = styled.li<{ $isActive: boolean }>`
    position: relative;
    padding: 12px 0;
    cursor: pointer;
    font-size: 14px;
    font-weight: ${props => props.$isActive ? "600" : "400"};
    color: ${props => props.$isActive ? "rgba(0, 125, 136, 1)" : "rgba(107, 114, 128, 1)"};
    transition: all 0.2s ease;

    &:hover {
        color: rgba(0, 125, 136, 0.8);
    }
`;

const ActiveTabIndicator = styled.div`
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: rgba(0, 125, 136, 1);
    border-radius: 2px 2px 0 0;
`;

const TabContentContainer = styled.div`
    margin-top: 20px;
`;

const DossierContainer = styled.div`
    background: none;
    padding: 12px;
    position: relative;
`;

const BackButton = styled(DefaultButton)`
    position: absolute;
    top: 16px;
    left: 16px;
    border-radius: 6px;
    padding: 10px 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 500;
`;

const DossierHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 18px;
    margin-top: 64px;
    padding-right: 120px;
`;

const ClientName = styled.h2`
    font-size: 18px;
    font-weight: 600;
    color: #111827;
    margin: 0;
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
    cursor: pointer;
    transition: border-color 0.2s;
    background: white;

    &:hover {
        border-color: #007D88;
    }
`;

const CommentsSection = styled(Section)`
    grid-column: 1 / -1;
    position: relative;
    margin-top: 6px;
`;

const CommentsHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
`;

const AddCommentButton = styled(DefaultButton)`
    padding: 8px 14px;
    height: 36px;
    font-size: 15px;
`;

const CommentCard = styled.div`
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 14px 16px;
    display: flex;
    gap: 12px;
`;

const Avatar = styled.div`
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: #e5e7eb;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: #6b7280;
    flex-shrink: 0;
`;

const CommentMeta = styled.div`
    font-size: 12px;
    color: #9ca3af;
`;

const CommentText = styled.div`
    font-size: 13px;
    color: #374151;
    margin-top: 6px;
`;

type BlackCatalogDossierProps = {
    item: BlackCatalogItem;
    onBack: () => void;
};

const BlackCatalogDossier = ({ item, onBack }: BlackCatalogDossierProps) => {
    const [activeTab, setActiveTab] = useState<"comments" | "history">("comments");

    // Досье клиента: открывается при клике на карточку клиента.
    return (
        <DossierContainer>
                    <BackButton onClick={onBack}>
                        <FaArrowLeft />
                        Назад к поиску
                    </BackButton>

                    <DossierHeader>
                        <div>
                            <ClientName>{item.fullname}</ClientName>
                            <ClientId>ID: {item.id}</ClientId>
                        </div>
                    </DossierHeader>

                    <DossierGrid>
                        <Section>
                            <InfoGrid>
                                <InfoItem>
                                    <InfoLabel>WhatsApp</InfoLabel>
                                    <InfoValue>Не указан</InfoValue>
                                </InfoItem>
                                <InfoItem>
                                    <InfoLabel>Дата рождения</InfoLabel>
                                    <InfoValue>Не указана</InfoValue>
                                </InfoItem>
                                <InfoItem>
                                    <InfoLabel>Адрес регистрации</InfoLabel>
                                    <InfoValue>{item.address || "Не указан"}</InfoValue>
                                </InfoItem>
                                <InfoItem>
                                    <InfoLabel>Серия и номер</InfoLabel>
                                    <InfoValue>{item.doc || "Не указаны"}</InfoValue>
                                </InfoItem>
                            </InfoGrid>
                        </Section>

                        <Section>
                            <SectionTitle>Паспорт</SectionTitle>
                            <PassportSection>
                                <PassportPhotoSection>
                                    <PassportPhotoTitle>Основная страница</PassportPhotoTitle>
                                    <PassportPhotoPlaceholder>
                                        <p style={{ margin: "0 0 6px 0", color: "#6b7280", fontSize: "12px" }}>
                                            Основная страница не загружена
                                        </p>
                                        <DefaultButton style={{ padding: "8px 14px", fontSize: "13px" }}>
                                            Загрузить фото
                                        </DefaultButton>
                                    </PassportPhotoPlaceholder>
                                </PassportPhotoSection>
                                <PassportPhotoSection>
                                    <PassportPhotoTitle>Страница с регистрацией</PassportPhotoTitle>
                                    <PassportPhotoPlaceholder>
                                        <p style={{ margin: "0 0 6px 0", color: "#6b7280", fontSize: "12px" }}>
                                            Страница с регистрацией не загружена
                                        </p>
                                        <DefaultButton style={{ padding: "8px 14px", fontSize: "13px" }}>
                                            Загрузить фото
                                        </DefaultButton>
                                    </PassportPhotoPlaceholder>
                                </PassportPhotoSection>
                            </PassportSection>
                        </Section>

                        <CommentsSection>
                            <CommentsHeader>
                                <SectionTitle>
                                    {activeTab === "comments" ? <FaComment /> : <FaHistory />}
                                    {activeTab === "comments" ? "Комментарии" : "История"}
                                </SectionTitle>
                                <AddCommentButton type="button">+</AddCommentButton>
                            </CommentsHeader>

                            <TabsContainer>
                                <TabsList>
                                    <TabItem
                                        $isActive={activeTab === "comments"}
                                        onClick={() => setActiveTab("comments")}
                                    >
                                        Комментарии
                                        {activeTab === "comments" && <ActiveTabIndicator />}
                                    </TabItem>
                                    <TabItem
                                        $isActive={activeTab === "history"}
                                        onClick={() => setActiveTab("history")}
                                    >
                                        История
                                        {activeTab === "history" && <ActiveTabIndicator />}
                                    </TabItem>
                                </TabsList>
                            </TabsContainer>

                            <TabContentContainer>
                                {activeTab === "comments" ? (
                                    <CommentCard>
                                        <Avatar>Т</Avatar>
                                        <div>
                                            <div style={{ fontSize: "12px", fontWeight: 600, color: "#111827" }}>
                                                ТЕСТ
                                            </div>
                                            <CommentMeta>04.05.2026, 20:02</CommentMeta>
                                            <CommentText>Это комментарий</CommentText>
                                        </div>
                                    </CommentCard>
                                ) : (
                                    <div>История пока пуста</div>
                                )}
                            </TabContentContainer>
                        </CommentsSection>
                    </DossierGrid>
        </DossierContainer>
    );
};

export default BlackCatalogDossier;
