/**
 * Генерирует цвет на основе строки (чтобы один и тот же текст давал один и тот же цвет)
 */
export declare const stringToColor: (str: string) => string;
/**
 * Генерирует инициалы из ФИО (например, "Иван Фёдоров" → "ИФ")
 */
export declare const getInitials: (name?: string | null) => string;
/**
 * Генерирует DataURL для аватара (можно вставить в img src="...">)
 */
export declare const generateAvatar: (initials: string, size?: number) => string;
