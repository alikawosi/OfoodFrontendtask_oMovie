import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from '../../../styles/pages/movieInfo/MovieInfoSkeleton.module.scss';
import { Colors } from '../../../constants';

const MovieInfoSkeleton: React.FC = () => {
  return (
    <div className={styles.movieInfoSkeleton}>
      <Skeleton className={styles.poster} baseColor={Colors.skeletonColors.baseColor} highlightColor={Colors.skeletonColors.highlightColor} />
      <div className={styles.details}>
        <Skeleton width={300} height={40} baseColor={Colors.skeletonColors.baseColor} highlightColor={Colors.skeletonColors.highlightColor}/>
        <Skeleton width={200} height={20} baseColor={Colors.skeletonColors.baseColor} highlightColor={Colors.skeletonColors.highlightColor}  />
        <Skeleton width={100} height={20} baseColor={Colors.skeletonColors.baseColor} highlightColor={Colors.skeletonColors.highlightColor} />
        <Skeleton width={`100%`} height={100} baseColor={Colors.skeletonColors.baseColor} highlightColor={Colors.skeletonColors.highlightColor} />
      </div>
    </div>
  );
};

export default MovieInfoSkeleton;
