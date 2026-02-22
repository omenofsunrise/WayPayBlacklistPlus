import React from 'react';
interface PaginationProps {
    total: number;
    current?: number;
    onChange?: (page: number) => void;
    itemsPerPage?: number;
}
declare const Pagination: React.FC<PaginationProps>;
export default Pagination;
