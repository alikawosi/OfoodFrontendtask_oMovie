import React from 'react';

import { Movie } from '../../types';
import {MovieCardSkeleton,MovieCard} from './';
import styles from '../../styles/elements/MovieList.module.scss';


interface MovieListProps {
  data:any,
  isLoading?:boolean,
  isFetching?:boolean,
  error?:Error | null
}

const MovieList: React.FC<MovieListProps> = ({data, isFetching, isLoading, error }) => {
  return (
    <div className={styles.movieListContainer}>
      <div className={`${styles.movieList} ${(!isLoading ||!isFetching )&& styles.fadeInUp}`}>
        {isLoading || isFetching
          ? Array.from({ length: 10 }, (_, index) => <MovieCardSkeleton key={index} />)
          : data?.results.map((movie: Movie) => <MovieCard  key={movie.title} movie={movie} />)}
      </div>
      {(error) && <p>Error: {error.message}</p>}
    </div>
  );
};

export  {MovieList};
