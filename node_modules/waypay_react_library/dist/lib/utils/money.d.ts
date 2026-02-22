/**
 * Форматирует числовую строку в удобочитаемый формат с разделителями тысяч и символом рубля
 * @param {string} priceString - Строка с числом для форматирования
 * @param {string} [currencySymbol='₽'] - Символ валюты (по умолчанию '₽')
 * @returns {string} Отформатированная строка (например "1 000₽")
 */
export declare function formatMoney(priceString: string, currencySymbol?: string): string;
export declare function parseMoney(priceString: string): number;
