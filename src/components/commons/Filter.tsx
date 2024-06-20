import React, { useState } from 'react';

import styles from '../../styles/commons/Filter.module.scss';
import { time } from 'console';

interface FilterProps {
  onFilterChange: (filter: { 'vote_average.gte': number; 'vote_average.lte': number; primary_release_year: number, year:number }) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [minRating, setMinRating] = useState(0);
  const [maxRating, setMaxRating] = useState(10);
  const [minYear, setMinYear] = useState(1900);
  const [maxYear, setMaxYear ] = useState(new Date().getFullYear());

  const handleFilterChange = () => {
    onFilterChange({
      'vote_average.gte': minRating,
      'vote_average.lte': maxRating,
      'primary_release_year': minYear,
      'year': maxYear,
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
      <div>
        <label htmlFor="minYear">From Year</label>
        <input
          type="number"
          id="minYear"
          value={minYear || ''}
          onChange={(e) => setMinYear(e.target.value ? Number(e.target.value):1900)}
          min="1900"
          max={new Date().getFullYear()}
        />
      </div>
      <div>
        <label htmlFor="maxYear">to Year</label>
        <input
          defaultValue={new Date().getFullYear()}
          type="number"
          id="maxYear"
          value={maxYear || ''}
          onChange={(e) => setMaxYear(e.target.value ? Number(e.target.value) : new Date().getFullYear())}
          min="1900"
          max={new Date().getFullYear()}
        />
      </div>
      <button disabled={(minRating>maxRating)||(minYear>maxYear)} onClick={handleFilterChange}>Apply Filter</button>
    </div>
  );
};

export default Filter;
