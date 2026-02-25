import React, { useState, useEffect } from 'react';
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
          <CustomTitle style={{background: "white" }}>Калькулятор рассрочки</CustomTitle>
          <ActionsContainer>
            <SelectWrapper>
              <CustomSelect
                value={selectedMode}
                onChange={handleModeChange}
                options={calculatorMods}
                placeholder="Выберите режим расчета"
                customPlaceholder="Режим расчета"
              />
            </SelectWrapper>
          </ActionsContainer>
        </Header>

        <MainContent>
          <InputsSection>
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
                  {selectedMode === 'month-percent' ? 'Процент за 1 месяц, %' : 'Надбавка, %'}
                </Label>
                <CustomInput
                  name="percent"
                  placeholder="Введите процент"
                  value={formData.percent}
                  onChange={handleInputChange}
                />
              </InputGroup>
            </InputRow>

            <InputRow>
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
          </InputsSection>

          <ResultsSection>
            <ResultsCard>
              <ResultsTitle>Результаты расчёта</ResultsTitle>
              <ResultItem>
                <ResultLabel>Ежемесячный платёж</ResultLabel>
                <ResultValue>{results.monthlyPayment} ₽</ResultValue>
              </ResultItem>
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
              <ResultItem>
                <ResultLabel>Последний месяц оплаты</ResultLabel>
                <ResultValue>
                  {results.lastPaymentMonth && !results.lastPaymentMonth.includes('Invalid') 
                    ? results.lastPaymentMonth 
                    : 'Выбирете дату'}
                </ResultValue>
              </ResultItem>
              <RatioBar 
                percentage={
                  parseFloat(results.totalDebt.replace(/\s/g, '')) > 0 && parseFloat(results.overpayment.replace(/\s/g, '')) > 0
                    ? (parseFloat(results.totalDebt.replace(/\s/g, '')) / 
                      (parseFloat(results.totalDebt.replace(/\s/g, '')) + parseFloat(results.overpayment.replace(/\s/g, ''))) * 100)
                    : 50
                } 
              />
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
    padding: 0px;
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
    border-radius: 16px;
    margin: 0px;
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

  @media (max-width: 768px) {
    padding: 16px;
    flex-direction: column;
    align-items: stretch;
  }

  @media (max-width: 480px) {
    padding: 12px;
    gap: 12px;
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  gap: 12px;
  background: white;

  @media (max-width: 768px) {
    width: 100%;
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
`;

const MainContent = styled.div`
  padding: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  background: white;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 16px;
    gap: 20px;
  }

  @media (max-width: 480px) {
    padding: 12px;
    gap: 16px;
  }
`;

const InputsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: white;

  @media (max-width: 480px) {
    gap: 16px;
  }
`;

const InputRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  background: white;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: white;

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

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const ResultsSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResultsCard = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: fit-content;

  @media (max-width: 768px) {
    padding: 20px;
    gap: 14px;
  }

  @media (max-width: 480px) {
    padding: 16px;
    gap: 12px;
    border-radius: 12px;
  }
`;

const ResultsTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  background: white;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 17px;
    margin-bottom: 6px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 4px;
  }
`;

const ResultItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
  border-bottom: 1px solid #f3f4f6;
  background: white;

  &:last-of-type {
    border-bottom: none;
  }

  @media (max-width: 480px) {
    padding: 6px 0;
    gap: 6px;
  }
`;

const ResultLabel = styled.span`
  color: #6b7280;
  font-size: 14px;
  flex: 1;
  background: white;
  text-align: left;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const ResultValue = styled.span`
  color: #111827;
  font-weight: 500;
  font-size: 14px;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const ColorIndicator = styled.div<{ color: 'primary' | 'secondary' }>`
  width: 12px;
  height: 12px;
  border-radius: 4px;
  background-color: ${props => 
    props.color === 'primary' 
      ? 'rgba(0, 125, 136, 1)' 
      : 'rgba(37, 203, 161, 1)'};
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 10px;
    height: 10px;
    border-radius: 3px;
  }
`;

const RatioBar = styled.div<{ percentage: number }>`
  width: 100%;
  height: 10px;
  background: rgba(37, 203, 161, 1);
  border-radius: 5px;
  overflow: hidden;
  margin-top: 8px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${props => props.percentage}%;
    background: rgba(0, 125, 136, 1);
    transition: width 0.3s ease;
  }

  @media (max-width: 480px) {
    height: 8px;
    border-radius: 4px;
    margin-top: 6px;
  }
`;

export default CalculatorPage;