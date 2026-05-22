import React, { useState, useEffect, useMemo, useRef } from "react";
import useGifts from "../../api/Gifts/useGifts";
import type { Giftee, UserInfo } from "../../api/Gifts/gifts";

interface GiftSubscriptionBlockProps {
  onPaymentSuccess?: () => void;
}

interface SelectedUser {
  id: string;
  fullname: string;
  phone: string;
}

const PLANS = [
  { days: 30, price: 600, label: "1 месяц", pricePerDay: "20.00" },
  { days: 90, price: 1764, label: "3 месяца", discount: "2%", pricePerDay: "19.60" },
  { days: 180, price: 3456, label: "6 месяцев", discount: "4%", pricePerDay: "19.20" },
  { days: 365, price: 6860, label: "1 год", discount: "6%", pricePerDay: "18.79" },
];

const normalizePhone = (raw: string): string => {
  const digits = raw.replace(/\D/g, "");
  if (!digits) return "";
  if (digits.startsWith("8") && digits.length === 11) {
    return "+7" + digits.slice(1);
  }
  if (digits.startsWith("7") && digits.length === 11) {
    return "+" + digits;
  }
  if (raw.trim().startsWith("+")) {
    return "+" + digits;
  }
  return digits.length === 10 ? "+7" + digits : "+" + digits;
};

const formatDate = (dateString?: string) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "";
  return date.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

const GiftSubscriptionBlock: React.FC<GiftSubscriptionBlockProps> = ({ onPaymentSuccess }) => {
  const [selectedDays, setSelectedDays] = useState<number>(365);
  const [selectedUsers, setSelectedUsers] = useState<SelectedUser[]>([]);
  const [phoneQuery, setPhoneQuery] = useState<string>("");
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const {
    isLoading,
    error,
    giftees,
    foundUsers,
    findUsers,
    makeGifts,
    loadGiftees,
    deleteGiftee,
    clearError,
    clearFoundUsers,
  } = useGifts();

  useEffect(() => {
    loadGiftees();
  }, [loadGiftees]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target as Node)
      ) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedPlan = PLANS.find((p) => p.days === selectedDays) || PLANS[3];
  const totalPrice = useMemo(
    () => selectedPlan.price * Math.max(selectedUsers.length, 1),
    [selectedPlan, selectedUsers.length],
  );

  const isUserSelected = (id: string) =>
    selectedUsers.some((u) => u.id === id);

  const addUserToSelection = (user: SelectedUser) => {
    if (isUserSelected(user.id)) return;
    setSelectedUsers((prev) => [...prev, user]);
    setPhoneQuery("");
    setSearchOpen(false);
    clearFoundUsers();
  };

  const addUserInfoToSelection = (u: UserInfo) =>
    addUserToSelection({
      id: u.base.id,
      fullname: u.base.fullname || u.base.nickname || u.base.phone,
      phone: u.base.phone,
    });

  const addGifteeToSelection = (g: Giftee) =>
    addUserToSelection({
      id: g.user_id,
      fullname: g.fullname || g.phone,
      phone: g.phone,
    });

  const removeFromSelection = (id: string) => {
    setSelectedUsers((prev) => prev.filter((u) => u.id !== id));
  };

  const handleSearch = async () => {
    const phone = normalizePhone(phoneQuery);
    if (!phone || phone.length < 6) return;
    setSearchOpen(true);
    await findUsers({ phone });
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  const handleDeleteGiftee = async (id: string) => {
    if (!window.confirm("Убрать получателя из рекомендаций?")) return;
    await deleteGiftee(id);
  };

  const handleSubmit = async () => {
    if (selectedUsers.length === 0) return;
    const response = await makeGifts({
      days: selectedDays,
      user_ids: selectedUsers.map((u) => u.id),
    });
    if (response?.payment_url) {
      window.location.href = response.payment_url;
      onPaymentSuccess?.();
    }
  };

  // Подсказки из ранее одаренных, которые ещё не выбраны
  const suggestedGiftees = useMemo(
    () => giftees.filter((g) => !isUserSelected(g.user_id)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [giftees, selectedUsers],
  );

  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: isMobile ? "15px" : "20px",
        padding: isMobile ? "20px 15px" : "40px",
        boxShadow: isMobile
          ? "0 10px 30px rgba(0,0,0,0.2)"
          : "0 20px 60px rgba(0,0,0,0.3)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          margin: 0,
          color: "#333",
          fontSize: isMobile ? "22px" : "28px",
          marginBottom: "8px",
        }}
      >
        Подарить подписку ЧС+
      </h2>
      <p
        style={{
          textAlign: "center",
          color: "#666",
          fontSize: isMobile ? "14px" : "16px",
          marginTop: 0,
          marginBottom: isMobile ? "20px" : "30px",
        }}
      >
        Корпоративная подписка — оплачивайте сразу нескольким сотрудникам
      </p>

      {error && (
        <div
          style={{
            backgroundColor: "#fee",
            color: "#c33",
            padding: "12px",
            borderRadius: "8px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "14px",
          }}
        >
          <span style={{ flex: 1 }}>{error}</span>
          <button
            onClick={clearError}
            style={{
              background: "none",
              border: "none",
              color: "#c33",
              cursor: "pointer",
              fontSize: "20px",
            }}
            aria-label="Закрыть"
          >
            ×
          </button>
        </div>
      )}

      {/* Выбор тарифа */}
      <h3 style={{ color: "#333", fontSize: isMobile ? "16px" : "18px", marginBottom: "12px" }}>
        Срок подписки
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
          gap: isMobile ? "10px" : "16px",
          marginBottom: isMobile ? "24px" : "32px",
        }}
      >
        {PLANS.map((plan) => {
          const active = selectedDays === plan.days;
          return (
            <div
              key={plan.days}
              onClick={() => setSelectedDays(plan.days)}
              style={{
                border: `2px solid ${active ? "#007D88" : "#e0e0e0"}`,
                borderRadius: "10px",
                padding: isMobile ? "12px" : "16px",
                cursor: "pointer",
                transition: "all 0.2s",
                backgroundColor: active ? "#F9FAFA" : "white",
                position: "relative",
              }}
            >
              {plan.discount && (
                <div
                  style={{
                    position: "absolute",
                    top: "-10px",
                    right: "8px",
                    backgroundColor: "#25CBA1",
                    color: "white",
                    padding: "3px 8px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {plan.discount}
                </div>
              )}
              <div style={{ fontWeight: "bold", color: "#333", fontSize: isMobile ? "14px" : "16px" }}>
                {plan.label}
              </div>
              <div style={{ color: "#007D88", fontWeight: "bold", fontSize: isMobile ? "18px" : "20px", marginTop: "4px" }}>
                {plan.price} ₽
              </div>
              <div style={{ color: "#999", fontSize: "12px" }}>
                {plan.pricePerDay} ₽/день
              </div>
            </div>
          );
        })}
      </div>

      {/* Поиск пользователей */}
      <h3 style={{ color: "#333", fontSize: isMobile ? "16px" : "18px", marginBottom: "12px" }}>
        Кому подарить
      </h3>

      <div ref={searchContainerRef} style={{ position: "relative", marginBottom: "12px" }}>
        <div style={{ display: "flex", gap: "8px", flexDirection: isMobile ? "column" : "row" }}>
          <input
            type="tel"
            value={phoneQuery}
            placeholder="Номер телефона, например +79001234567"
            onChange={(e) => setPhoneQuery(e.target.value)}
            onKeyDown={handleSearchKeyDown}
            onFocus={() => {
              if (foundUsers.length > 0 || suggestedGiftees.length > 0) {
                setSearchOpen(true);
              }
            }}
            style={{
              flex: 1,
              padding: "12px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              fontSize: "16px",
              outline: "none",
            }}
          />
          <button
            onClick={handleSearch}
            disabled={isLoading || phoneQuery.trim().length === 0}
            style={{
              padding: "12px 20px",
              backgroundColor: "#007D88",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "15px",
              fontWeight: "bold",
              cursor: isLoading ? "not-allowed" : "pointer",
              opacity: isLoading || phoneQuery.trim().length === 0 ? 0.6 : 1,
              whiteSpace: "nowrap",
            }}
          >
            Найти
          </button>
        </div>

        {searchOpen && (foundUsers.length > 0 || suggestedGiftees.length > 0) && (
          <div
            style={{
              position: "absolute",
              top: "calc(100% + 4px)",
              left: 0,
              right: 0,
              backgroundColor: "white",
              border: "1px solid #ddd",
              borderRadius: "8px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
              maxHeight: "300px",
              overflowY: "auto",
              zIndex: 10,
            }}
          >
            {foundUsers.length > 0 && (
              <>
                <div style={{ padding: "8px 12px", fontSize: "12px", color: "#888", borderBottom: "1px solid #f0f0f0" }}>
                  Найденные пользователи
                </div>
                {foundUsers.map((u) => {
                  const alreadySelected = isUserSelected(u.base.id);
                  return (
                    <div
                      key={u.base.id}
                      onClick={() => !alreadySelected && addUserInfoToSelection(u)}
                      style={{
                        padding: "10px 12px",
                        cursor: alreadySelected ? "default" : "pointer",
                        opacity: alreadySelected ? 0.5 : 1,
                        borderBottom: "1px solid #f0f0f0",
                      }}
                    >
                      <div style={{ fontWeight: "bold", color: "#333" }}>
                        {u.base.fullname || u.base.nickname || "—"}
                      </div>
                      <div style={{ color: "#666", fontSize: "13px" }}>{u.base.phone}</div>
                      {alreadySelected && (
                        <div style={{ color: "#25CBA1", fontSize: "12px" }}>Уже выбран</div>
                      )}
                    </div>
                  );
                })}
              </>
            )}

            {suggestedGiftees.length > 0 && (
              <>
                <div style={{ padding: "8px 12px", fontSize: "12px", color: "#888", borderBottom: "1px solid #f0f0f0" }}>
                  Кому вы уже дарили
                </div>
                {suggestedGiftees.map((g) => (
                  <div
                    key={g.id}
                    onClick={() => addGifteeToSelection(g)}
                    style={{
                      padding: "10px 12px",
                      cursor: "pointer",
                      borderBottom: "1px solid #f0f0f0",
                    }}
                  >
                    <div style={{ fontWeight: "bold", color: "#333" }}>
                      {g.fullname || g.phone}
                    </div>
                    <div style={{ color: "#666", fontSize: "13px" }}>{g.phone}</div>
                  </div>
                ))}
              </>
            )}
          </div>
        )}
      </div>

      {/* Выбранные пользователи */}
      {selectedUsers.length > 0 && (
        <div style={{ marginBottom: "16px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {selectedUsers.map((u) => (
              <div
                key={u.id}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "#F0F8FF",
                  border: "1px solid #007D8830",
                  borderRadius: "20px",
                  padding: "6px 12px",
                  fontSize: "14px",
                }}
              >
                <span style={{ color: "#333", fontWeight: 600 }}>{u.fullname}</span>
                <span style={{ color: "#666" }}>{u.phone}</span>
                <button
                  onClick={() => removeFromSelection(u.id)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#c33",
                    cursor: "pointer",
                    fontSize: "18px",
                    lineHeight: 1,
                    padding: 0,
                  }}
                  aria-label="Удалить"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Итоговая стоимость и кнопка */}
      <div
        style={{
          padding: "16px",
          backgroundColor: "#F9FAFA",
          borderRadius: "10px",
          marginBottom: "16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: isMobile ? "column" : "row",
          gap: "10px",
        }}
      >
        <div style={{ color: "#666", fontSize: isMobile ? "14px" : "15px" }}>
          {selectedUsers.length > 0
            ? `${selectedUsers.length} × ${selectedPlan.price} ₽`
            : "Выберите получателей"}
        </div>
        <div style={{ fontSize: isMobile ? "20px" : "22px", fontWeight: "bold", color: "#007D88" }}>
          Итого: {selectedUsers.length > 0 ? totalPrice : 0} ₽
        </div>
      </div>

      <button
        onClick={handleSubmit}
        disabled={isLoading || selectedUsers.length === 0}
        style={{
          width: "100%",
          padding: "14px",
          backgroundColor: "#007D88",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor:
            isLoading || selectedUsers.length === 0 ? "not-allowed" : "pointer",
          opacity: isLoading || selectedUsers.length === 0 ? 0.6 : 1,
        }}
      >
        {isLoading ? "Обработка..." : "Подарить подписку"}
      </button>

      {/* Список ранее одаренных */}
      {giftees.length > 0 && (
        <div style={{ marginTop: "32px" }}>
          <h3 style={{ color: "#333", fontSize: isMobile ? "16px" : "18px", marginBottom: "12px" }}>
            Подаренные подписки
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {giftees.map((g) => (
              <div
                key={g.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px",
                  backgroundColor: "#F9FAFA",
                  borderRadius: "8px",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ flex: "1 1 200px" }}>
                  <div style={{ fontWeight: "bold", color: "#333" }}>
                    {g.fullname || g.phone}
                  </div>
                  <div style={{ color: "#666", fontSize: "13px" }}>{g.phone}</div>
                </div>
                <div style={{ color: "#555", fontSize: "13px" }}>
                  Действует до: <strong>{formatDate(g.end_at) || "—"}</strong>
                </div>
                <button
                  onClick={() => handleDeleteGiftee(g.id)}
                  disabled={isLoading}
                  style={{
                    background: "none",
                    border: "1px solid #dc3545",
                    color: "#dc3545",
                    borderRadius: "6px",
                    padding: "6px 12px",
                    cursor: isLoading ? "not-allowed" : "pointer",
                    fontSize: "13px",
                  }}
                >
                  Убрать
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GiftSubscriptionBlock;
