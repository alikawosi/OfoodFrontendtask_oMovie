import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import styles from '../../styles/elements/MovieCardSkeleton.module.scss';

const MovieCardSkeleton: React.FC = () => {
  return (
    <div className={styles.movieCard}>
      <Skeleton className={styles.poster} />
      <div className={styles.details}>
        <Skeleton width={`80%`} height={24} />
        <Skeleton width={`60%`} height={20} />
        <Skeleton width={`90%`} height={20} />
      </div>
    </div>
  );
};

export  {MovieCardSkeleton};
