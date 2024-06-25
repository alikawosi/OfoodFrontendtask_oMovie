import React, { useState } from 'react';

import { FilterProps } from '../../types';
import { Button } from './';

import styles from '../../styles/commons/Filter.module.scss';


const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [minRating, setMinRating] = useState(0);
  const [maxRating, setMaxRating] = useState(10);
  const [minYear, setMinYear] = useState("");
  const [maxYear, setMaxYear ] = useState("");

  const handleFilterChange = () => {
    onFilterChange({
      'vote_average.gte': minRating,
      'vote_average.lte': maxRating,
      'primary_release_date.gte': `${minYear}-1-1`,
      'primary_release_date.lte': `${maxYear}-1-1`,
    });
  };

  const handleClearFilter = () => {
    setMinRating(0);
    setMaxRating(10);
    setMinYear("");
    setMaxYear("")
    onFilterChange({
      'vote_average.gte': minRating,
      'vote_average.lte': maxRating,
      'primary_release_date.gte': ``,
      'primary_release_date.lte': ``,
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
          onChange={(e) => setMinYear(e.target.value ? e.target.value:"")}
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
          onChange={(e) => setMaxYear(e.target.value ? e.target.value : "")}
          min="1900"
          max={new Date().getFullYear()}
        />
      </div>
      <div className={styles.buttonContainer}>
        <Button onClick={handleFilterChange}>Apply Filter</Button>
        <Button onClick={handleClearFilter} className={styles.clearButton}>Clear Filter</Button>
      </div>
     
    </div>
  );
};

export  {Filter};
