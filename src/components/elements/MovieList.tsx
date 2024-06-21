import React, { useState } from 'react';

import {MovieCardSkeleton,MovieCard} from './';
import {Pagination, Filter} from '../commons';
import { useFetchMovies } from '../../hooks/useFetchMovies';
import styles from '../../styles/elements/MovieList.module.scss';

const MovieList: React.FC = () => {
  const [query, setQuery] = useState({ page: 1, 'vote_average.gte': 0, 'vote_average.lte': 10 ,year:2000});
  const { data, isLoading, error, isFetching } = useFetchMovies(query);

  const handleFilterChange = (filter: { 'vote_average.gte': number; 'vote_average.lte': number ,year?: number }) => {
    setQuery({ ...query, ...filter, page: 1 });
  };

  return (
    <div className={styles.movieListContainer}>
      <Filter onFilterChange={handleFilterChange} />
      <div className={styles.movieList}>
        {isLoading || isFetching
          ? Array.from({ length: 10 }, (_, index) => <MovieCardSkeleton key={index} />)
          : data?.results.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
      {error && <p>Error: {error.message}</p>}
      {data && (
        <Pagination
          currentPage={query.page}
          totalPages={data.total_pages}
          onPageChange={(page) => setQuery({ ...query, page })}
        />
      )}
    </div>
  );
};

export  {MovieList};
