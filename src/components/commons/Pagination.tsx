import React from 'react';
import styles from '../../styles/commons/Pagination.module.scss';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const createPageArray = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage > 3) pages.push(1, '...');
      for (let i = Math.max(currentPage - 1, 1); i <= Math.min(currentPage + 1, totalPages); i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push('...', totalPages);
    }
    return pages;
  };

  return (
    <div className={styles.pagination}>
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
      {createPageArray().map((page, index) => (
        <button
          key={index}
          className={currentPage === page ? styles.active : ''}
          onClick={() => typeof page === 'number' && onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
    </div>
  );
};

export default Pagination;
