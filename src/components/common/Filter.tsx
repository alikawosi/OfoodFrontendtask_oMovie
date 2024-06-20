import React, { useState } from 'react';
import styles from '../styles/Filter.module.scss';

interface FilterProps {
  onFilterChange: (filter: { 'vote_average.gte': number; 'vote_average.lte': number }) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [minRating, setMinRating] = useState(0);
  const [maxRating, setMaxRating] = useState(10);

  const handleFilterChange = () => {
    onFilterChange({
      'vote_average.gte': minRating,
      'vote_average.lte': maxRating,
    });
  };

  return (
    <div className={styles.filter}>
      <div>
        <label htmlFor="minRating">Min Rating</label>
        <input
          type="number"
          id="minRating"
          value={minRating}
          onChange={(e) => setMinRating(Number(e.target.value))}
          min="0"
          max="10"
        />
      </div>
      <div>
        <label htmlFor="maxRating">Max Rating</label>
        <input
          type="number"
          id="maxRating"
          value={maxRating}
          onChange={(e) => setMaxRating(Number(e.target.value))}
          min="0"
          max="10"
        />
      </div>
      <button onClick={handleFilterChange}>Apply Filter</button>
    </div>
  );
};

export default Filter;
