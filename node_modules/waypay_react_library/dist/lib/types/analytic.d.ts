export interface AnalyticResponse {
    investmentAmount: number;
    investmentAmountDiffrence: number;
    cash: number;
    cashDiffrence: number;
    currentCash: number;
    currentCashDiffrence: number;
    unconfirmedCash: number;
    unconfirmedCashDiffrence: number;
    latePayment: number;
    latePaymentDiffrence: number;
    totalCredits: number;
    activeCredits: number;
    activeCreditsDiffrence: number;
    sales: number;
    purchases: number;
    restAmount: number;
    restAmountDiffrence: number;
    closedCreditsPerPeriod: number;
    closedCreditsPerPeriodDiffrence: number;
}
export interface AnalyticParams {
    start?: Date;
    end?: Date;
    predefinedPeriod?: PredefinedPeriod;
}
export type PredefinedPeriod = 'Last7Days' | 'ThisMonth' | 'Last31Days' | 'PreviousMonth' | 'ThisYear' | 'PreviousYear' | 'Custom';
export interface PeriodItem {
    periodName: string;
    value: number;
}
export interface GraphResponse {
    graphName: string;
    periods: PeriodItem[];
}
export interface SellInfoResponse {
    sellsSum: GraphResponse;
    purchasesSum: GraphResponse;
    cash: GraphResponse;
}
export interface DebtDynamicResponse {
    paymentsDynamic: GraphResponse;
    debtDynamic: GraphResponse;
}
export interface ScheduleAnalitycResponse {
    title: string;
    expectedIncome: number;
    realIncome: number;
    debt: number;
    incomePercent: number;
    debtPercent: number;
}
