import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import styles from '../../styles/elements/MovieCardSkeleton.module.scss';
import { Colors } from '../../constants';

const MovieCardSkeleton: React.FC = () => {
  return (
    <div className={styles.movieCard}>
      <Skeleton className={styles.poster} baseColor={Colors.skeletonColors.baseColor} highlightColor={Colors.skeletonColors.highlightColor}/>
      <div className={styles.details}>
        <Skeleton width={`80%`} height={24} baseColor={Colors.skeletonColors.baseColor} highlightColor={Colors.skeletonColors.highlightColor}/>
        <Skeleton width={`60%`} height={20} baseColor={Colors.skeletonColors.baseColor} highlightColor={Colors.skeletonColors.highlightColor}/>
        <Skeleton width={`90%`} height={20} baseColor={Colors.skeletonColors.baseColor} highlightColor={Colors.skeletonColors.highlightColor}/>
      </div>
    </div>
  );
};

export  {MovieCardSkeleton};
