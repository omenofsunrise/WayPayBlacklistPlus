import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { CustomCalendar, CustomInput, CustomSelect, CustomTitle } from 'waypay_react_library';

// ==================== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ====================

const formatMoney = (value: string): string => {
  const num = parseFloat(value.replace(/\D/g, '')) || 0;
  return num.toLocaleString('ru-RU');
};

const parseMoney = (value: string): number => {
  return parseFloat(value.replace(/\D/g, '')) || 0;
};

const formatPercentValue = (value: string): string => {
  const sanitized = value.trim().replace(',', '.');
  const number = parseFloat(sanitized);
  if (Number.isNaN(number)) return '0';
  return new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 1 }).format(number);
};

const getRatioPercent = (
  debtValue: string,
  overValue: string,
  kind: 'debt' | 'over',
): number => {
  const debt = parseFloat(debtValue.replace(/\s/g, '')) || 0;
  const over = parseFloat(overValue.replace(/\s/g, '')) || 0;
  const sum = debt + over;
  if (!sum) return 0;
  return kind === 'debt' ? (debt / sum) * 100 : (over / sum) * 100;
};

const getNextMonthDate = () => {
  const date = new Date();
  date.setMonth(date.getMonth() + 1);
  return date;
};

const roundUp = (value: number, increment: number) => {
  return Math.ceil(value / increment) * increment;
};

// ==================== ТИПЫ ====================

type CalculationMode = 'standard' | 'after-initial' | 'month-percent';

// ==================== ОСНОВНОЙ КОМПОНЕНТ СТРАНИЦЫ ====================

const CalculatorPage = () => {
  const [selectedMode, setSelectedMode] = useState<CalculationMode>('standard');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isModeMenuOpen, setIsModeMenuOpen] = useState(false);
  const modeButtonRef = useRef<HTMLButtonElement | null>(null);
  const modeMenuRef = useRef<HTMLDivElement | null>(null);
  
  const [formData, setFormData] = useState({
    amount: '',
    months: '',
    initial: '',
    percent: '',
    round: '50',
    startDate: getNextMonthDate().toISOString().split('T')[0],
  });
  
  const [displayAmount, setDisplayAmount] = useState('');
  const [displayInitial, setDisplayInitial] = useState('');

  const [results, setResults] = useState({
    monthlyPayment: '0',
    totalDebt: '0',
    overpayment: '0',
    totalAmount: '0',
    lastPaymentMonth: '',
  });

  const calculatorMods = [
    { value: 'standard' as CalculationMode, label: 'Стандартный (на всю сумму)' },
    { value: 'after-initial' as CalculationMode, label: 'Надбавка после вычета взноса' },
    { value: 'month-percent' as CalculationMode, label: 'Процент за 1 месяц (x месяцев)' },
  ];

  // ==================== ОБРАБОТЧИКИ ВВОДА ====================

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    if (formData.months) return;
    setFormData(prev => ({
      ...prev,
      months: '0',
      round: prev.round || '50',
    }));
  }, [isMobile, formData.months, formData.round]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === 'amount') {
      const numericValue = parseMoney(value);
      setDisplayAmount(formatMoney(numericValue.toString()));
      setFormData(prev => ({
        ...prev,
        [name]: numericValue.toString()
      }));
    } else if (name === 'initial') {
      const numericValue = parseMoney(value);
      setDisplayInitial(formatMoney(numericValue.toString()));
      setFormData(prev => ({
        ...prev,
        [name]: numericValue.toString()
      }));
    } else if (name === 'percent') {
      const decimalValue = value.replace(/[^0-9.,]/g, '').replace(',', '.');
      const parts = decimalValue.split('.');
      if (parts.length > 1 && parts[1].length > 2) {
        return;
      }
      setFormData(prev => ({
        ...prev,
        [name]: decimalValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value.replace(/\D/g, '')
      }));
    }
  };

  const handleDateChange = (dateString: string) => {
    setFormData(prev => ({
      ...prev,
      startDate: dateString
    }));
  };

  const handleModeChange = (event: { target: { value: CalculationMode } }) => {
    setSelectedMode(event.target.value);
  };

  const handleModeSelect = (mode: CalculationMode) => {
    setSelectedMode(mode);
    setIsModeMenuOpen(false);
  };

  const handleReset = () => {
    setFormData({
      amount: '',
      months: isMobile ? '0' : '',
      initial: '',
      percent: '',
      round: '50',
      startDate: getNextMonthDate().toISOString().split('T')[0],
    });
    setDisplayAmount('');
    setDisplayInitial('');
  };


  useEffect(() => {
    if (!isModeMenuOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (modeMenuRef.current?.contains(target)) return;
      if (modeButtonRef.current?.contains(target)) return;
      setIsModeMenuOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isModeMenuOpen]);

  // ==================== РАСЧЕТ РЕЗУЛЬТАТОВ ====================

  useEffect(() => {
    const calculateResults = () => {
      const amount = parseFloat(formData.amount) || 0;
      const months = parseFloat(formData.months) || 1;
      const initial = parseFloat(formData.initial) || 0;
      const percent = parseFloat(formData.percent) || 0;
      const round = parseFloat(formData.round) || 50;

      let totalAmount = 0;
      let overpayment = 0;

      switch (selectedMode) {
        case 'standard':
          totalAmount = amount * (1 + percent / 100);
          overpayment = totalAmount - amount;
          break;
          
        case 'after-initial':
          const amountAfterInitial = amount - initial;
          totalAmount = initial + (amountAfterInitial * (1 + percent / 100));
          overpayment = totalAmount - amount;
          break;
          
        case 'month-percent':
          const totalPercent = percent * months;
          totalAmount = amount * (1 + totalPercent / 100);
          overpayment = totalAmount - amount;
          break;
          
        default:
          totalAmount = amount * (1 + percent / 100);
          overpayment = totalAmount - amount;
      }

      const roundedTotalAmount = roundUp(totalAmount, round);
      const roundedOverpayment = roundUp(overpayment, round);
      const totalDebt = roundedTotalAmount - initial;
      const roundedTotalDebt = roundUp(totalDebt, round);
      const monthlyPayment = roundedTotalDebt / months;
      const roundedMonthlyPayment = roundUp(monthlyPayment, round);

      const lastPaymentDate = new Date(formData.startDate);
      lastPaymentDate.setMonth(lastPaymentDate.getMonth() + months - 1);
      const lastPaymentMonth = lastPaymentDate.toLocaleDateString('ru-RU', {
        month: 'long',
        year: 'numeric'
      });

      setResults({
        monthlyPayment: roundedMonthlyPayment.toLocaleString('ru-RU'),
        totalDebt: roundedTotalDebt.toLocaleString('ru-RU'),
        overpayment: roundedOverpayment.toLocaleString('ru-RU'),
        totalAmount: roundedTotalAmount.toLocaleString('ru-RU'),
        lastPaymentMonth,
      });
    };

    calculateResults();
  }, [formData, selectedMode]);

  return (
    <PageContainer>
      <ContentWrapper>
        <Header>
          <HeaderLeft>
            <DesktopOnly>
              <CustomTitle style={{ background: 'white' }}>Калькулятор рассрочки</CustomTitle>
            </DesktopOnly>
            <MobileTitleWrap>
              <HeaderTitle>Калькулятор</HeaderTitle>
            </MobileTitleWrap>
          </HeaderLeft>
          <ActionsContainer>
            <DesktopOnly>
              <SelectWrapper>
                <CustomSelect
                  value={selectedMode}
                  onChange={handleModeChange}
                  options={calculatorMods}
                  placeholder="Выберите режим расчета"
                  customPlaceholder="Режим расчета"
                />
              </SelectWrapper>
            </DesktopOnly>
            <MobileOnly>
              <MobileActions>
                <IconButton
                  ref={modeButtonRef}
                  type="button"
                  aria-label="Переключить режим"
                  onClick={() => setIsModeMenuOpen(prev => !prev)}
                >
                  <IconTune />
                </IconButton>
                <IconButton type="button" aria-label="Экспорт в PDF">
                  <IconShare />
                </IconButton>
                <IconButton type="button" aria-label="Сбросить" onClick={handleReset}>
                  <IconRefresh />
                </IconButton>
                {isModeMenuOpen && (
                  <ModeMenu ref={modeMenuRef}>
                    {calculatorMods.map(option => (
                      <ModeMenuItem
                        key={option.value}
                        onClick={() => handleModeSelect(option.value)}
                      >
                        <ModeRadio $active={selectedMode === option.value}>
                          {selectedMode === option.value && <ModeRadioDot />}
                        </ModeRadio>
                        <ModeMenuLabel $active={selectedMode === option.value}>
                          {option.label}
                        </ModeMenuLabel>
                      </ModeMenuItem>
                    ))}
                  </ModeMenu>
                )}
              </MobileActions>
            </MobileOnly>
          </ActionsContainer>
        </Header>

        <MainContent>
          <InputsSection>
            {isMobile ? (
              <>
                <InputGroup>
                  <Label>Сумма рассрочки, ₽</Label>
                  <CustomInput
                    name="amount"
                    placeholder="Введите сумму"
                    value={displayAmount}
                    onChange={handleInputChange}
                  />
                </InputGroup>
                <InputGroup>
                  <Label>Первоначальный взнос, ₽</Label>
                  <CustomInput
                    name="initial"
                    placeholder="Введите сумму"
                    value={displayInitial}
                    onChange={handleInputChange}
                  />
                </InputGroup>
                <InputGroup>
                  <Label>Начало выплат</Label>
                  <CustomCalendar
                    value={formData.startDate}
                    onChange={handleDateChange}
                    placeholder="Выберите дату"
                  />
                </InputGroup>
                <InputGroup>
                  <Label>Количество месяцев</Label>
                  <CustomInput
                    name="months"
                    placeholder="Введите количество"
                    value={formData.months}
                    onChange={handleInputChange}
                  />
                </InputGroup>
                <InputRow $compactOnMobile>
                  <InputGroup>
                    <Label>Надбавка, %</Label>
                    <CustomInput
                      name="percent"
                      placeholder="Введите процент"
                      value={formData.percent}
                      onChange={handleInputChange}
                    />
                  </InputGroup>
                  <InputGroup>
                    <Label>Округлять до, ₽</Label>
                    <CustomInput
                      name="round"
                      placeholder="Введите сумму"
                      value={formData.round}
                      onChange={handleInputChange}
                    />
                  </InputGroup>
                </InputRow>
              </>
            ) : (
              <>
                <InputRow>
                  <InputGroup>
                    <Label>Сумма рассрочки, ₽</Label>
                    <CustomInput
                      name="amount"
                      placeholder="Введите сумму"
                      value={displayAmount}
                      onChange={handleInputChange}
                    />
                  </InputGroup>
                  <InputGroup>
                    <Label>Количество месяцев</Label>
                    <CustomInput
                      name="months"
                      placeholder="Введите количество"
                      value={formData.months}
                      onChange={handleInputChange}
                    />
                  </InputGroup>
                </InputRow>

                <InputRow>
                  <InputGroup>
                    <Label>Первоначальный взнос, ₽</Label>
                    <CustomInput
                      name="initial"
                      placeholder="Введите сумму"
                      value={displayInitial}
                      onChange={handleInputChange}
                    />
                  </InputGroup>
                  <InputGroup>
                    <Label>
                      {selectedMode === 'month-percent'
                        ? 'Процент за 1 месяц, %'
                        : 'Надбавка, %'}
                    </Label>
                    <CustomInput
                      name="percent"
                      placeholder="Введите процент"
                      value={formData.percent}
                      onChange={handleInputChange}
                    />
                  </InputGroup>
                </InputRow>

                <InputRow $compactOnMobile>
                  <InputGroup>
                    <Label>Начало выплат</Label>
                    <CustomCalendar
                      value={formData.startDate}
                      onChange={handleDateChange}
                      placeholder="Выберите дату"
                    />
                  </InputGroup>
                  <InputGroup>
                    <Label>Округлять до, ₽</Label>
                    <CustomInput
                      name="round"
                      placeholder="Введите сумму"
                      value={formData.round}
                      onChange={handleInputChange}
                    />
                  </InputGroup>
                </InputRow>
              </>
            )}
          </InputsSection>

          <ResultsSection>
            <ResultsCard>
              <ResultsTitle>Результаты расчёта</ResultsTitle>
              <ResultItem>
                <ResultLabel>Ежемесячный платеж</ResultLabel>
                <ResultValue>{results.monthlyPayment} ₽</ResultValue>
              </ResultItem>
              <ResultItem>
                <ResultLabel>Надбавка %</ResultLabel>
                <ResultValue>{formatPercentValue(formData.percent)}%</ResultValue>
              </ResultItem>
              <ResultSpacer />
              <ResultItem>
                <ColorIndicator color="primary" />
                <ResultLabel>Сумма долга</ResultLabel>
                <ResultValue>{results.totalDebt} ₽</ResultValue>
              </ResultItem>
              <ResultItem>
                <ColorIndicator color="secondary" />
                <ResultLabel>Переплата</ResultLabel>
                <ResultValue>{results.overpayment} ₽</ResultValue>
              </ResultItem>
              <ResultItem>
                <ResultLabel>Общая сумма</ResultLabel>
                <ResultValue>{results.totalAmount} ₽</ResultValue>
              </ResultItem>
              <ResultItem $isLast>
                <ResultLabel>Последний месяц оплаты</ResultLabel>
                <ResultValue>
                  {results.lastPaymentMonth && !results.lastPaymentMonth.includes('Invalid') 
                    ? results.lastPaymentMonth 
                    : 'Выбирете дату'}
                </ResultValue>
              </ResultItem>
              <RatioBar>
                <RatioDebt
                  $percentage={getRatioPercent(results.totalDebt, results.overpayment, 'debt')}
                />
                <RatioOver
                  $percentage={getRatioPercent(results.totalDebt, results.overpayment, 'over')}
                  $offset={getRatioPercent(results.totalDebt, results.overpayment, 'debt')}
                />
              </RatioBar>
            </ResultsCard>
          </ResultsSection>
        </MainContent>
      </ContentWrapper>
    </PageContainer>
  );
};

// ==================== СТИЛИ ====================

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: #f5f5f5;

  @media (max-width: 480px) {
    padding: 0;
    background: white;
    min-height: 100%;
  }

  @media (max-width: 768px) {
    padding: 0;
    background: white;
    min-height: 100%;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: 768px) {
    border-radius: 0;
    margin: 0;
    box-shadow: none;
  }
`;

const Header = styled.div`
  padding: 24px;
  background: white;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  position: relative;

  @media (max-width: 768px) {
    padding: 8px 12px;
    flex-direction: row;
    align-items: center;
    border-bottom: none;
    gap: 8px;
  }

  @media (max-width: 480px) {
    padding: 6px 10px;
    gap: 6px;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  min-width: 0;
`;

const HeaderTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #111827;
`;

const MobileTitleWrap = styled.div`
  display: none;

  @media (max-width: 768px) and (min-width: 420px) {
    display: block;
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  gap: 12px;
  background: white;

  @media (max-width: 768px) {
    width: auto;
    margin-left: auto;
    gap: 6px;
  }
`;

const SelectWrapper = styled.div`
  min-width: 300px;

  @media (max-width: 768px) {
    min-width: 100%;
    width: 100%;
    
    & > div {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    min-width: 100%;
  }
`;

const MobileActions = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  position: relative;
`;

const IconButton = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #111827;
  cursor: pointer;
`;

const IconTune = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 7H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M4 17H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="17" cy="7" r="3" stroke="currentColor" strokeWidth="2" />
    <circle cx="13" cy="17" r="3" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const IconShare = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 4V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 8L12 4L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path
      d="M5 14V18C5 19.1046 5.89543 20 7 20H17C18.1046 20 19 19.1046 19 18V14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const IconRefresh = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M4 11C4 6.58172 7.58172 3 12 3C15.3137 3 18.1824 4.91667 19.5 7.7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path d="M20 4V8H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path
      d="M20 13C20 17.4183 16.4183 21 12 21C8.68629 21 5.81758 19.0833 4.5 16.3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path d="M4 20V16H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ModeMenu = styled.div`
  position: absolute;
  top: 42px;
  right: 0;
  width: 220px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  padding: 8px 0;
  z-index: 20;
`;

const ModeMenuItem = styled.button`
  width: 100%;
  border: none;
  background: transparent;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  text-align: left;
  cursor: pointer;
`;

const ModeRadio = styled.span<{ $active: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  border: 2px solid ${({ $active }) => ($active ? '#007D88' : '#D1D5DB')};
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const ModeRadioDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background: #007d88;
`;

const ModeMenuLabel = styled.span<{ $active: boolean }>`
  font-size: 14px;
  color: ${({ $active }) => ($active ? '#111827' : '#6B7280')};
  line-height: 1.7;
`;

const DesktopOnly = styled.div`
  display: block;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileOnly = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MainContent = styled.div`
  padding: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  background: white;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 12px 12px 16px;
    gap: 12px;
  }

  @media (max-width: 480px) {
    padding: 10px 10px 14px;
    gap: 12px;
  }
`;

const InputsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: white;

  @media (max-width: 768px) {
    gap: 12px;
  }
`;

const InputRow = styled.div<{ $compactOnMobile?: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  background: white;

  @media (max-width: 768px) {
    grid-template-columns: ${props => (props.$compactOnMobile ? '1fr 1fr' : '1fr')};
    gap: 10px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: white;
  min-width: 0;

  @media (max-width: 480px) {
    gap: 6px;
  }
`;

const Label = styled.label`
  font-size: 14px;
  color: #333;
  font-weight: 500;
  text-align: left;
  background: white;

  @media (max-width: 768px) {
    font-size: 14px;
    font-weight: 400;
    color: #6b717c;
  }
`;

const ResultsSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResultsCard = styled.div`
  background: white;
  border-radius: 18px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 0;
  height: fit-content;

  @media (max-width: 768px) {
    padding: 18px 16px;
  }

  @media (max-width: 480px) {
    padding: 16px 14px;
    border-radius: 18px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.06);
  }
`;

const ResultsTitle = styled.h3`
  margin: 0 0 12px 0;
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  background: white;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 8px;
  }
`;

const ResultItem = styled.div<{ $isLast?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 0;
  border-bottom: ${({ $isLast }) => ($isLast ? 'none' : '1px solid #f3f4f6')};
  background: white;

  @media (max-width: 480px) {
    padding: 5px 0;
    gap: 6px;
  }
`;

const ResultLabel = styled.span`
  color: #6b717c;
  font-size: 14px;
  flex: 1;
  background: white;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ResultValue = styled.span`
  color: #111827;
  font-weight: 600;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ResultSpacer = styled.div`
  height: 6px;
`;

const ColorIndicator = styled.div<{ color: 'primary' | 'secondary' }>`
  width: 10px;
  height: 10px;
  border-radius: 3px;
  background-color: ${props => 
    props.color === 'primary' 
      ? 'rgba(0, 125, 136, 1)' 
      : 'rgba(37, 203, 161, 1)'};
  flex-shrink: 0;
`;

const RatioBar = styled.div`
  width: 100%;
  height: 10px;
  background: #d7dbe2;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 10px;
  position: relative;
`;

const RatioDebt = styled.div<{ $percentage: number }>`
  height: 100%;
  width: ${({ $percentage }) => $percentage}%;
  background: rgba(0, 125, 136, 1);
  position: absolute;
  left: 0;
  top: 0;
`;

const RatioOver = styled.div<{ $percentage: number; $offset: number }>`
  height: 100%;
  width: ${({ $percentage }) => $percentage}%;
  background: rgba(37, 203, 161, 1);
  position: absolute;
  left: ${({ $offset }) => $offset}%;
  top: 0;
`;

export default CalculatorPage;
