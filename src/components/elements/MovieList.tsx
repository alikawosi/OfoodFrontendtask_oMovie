import React, { useState } from 'react';
import { useFetchMovies } from '../../hooks/useFetchMovies';
import MovieCard from './MovieCard';
import Pagination from '../common/Pagination';
import Filter from '../common/Filter';
import styles from '../styles/MovieList.module.scss';

const MovieList: React.FC = () => {
  const [query, setQuery] = useState({ page: 1, 'vote_average.gte': 0, 'vote_average.lte': 10 });
  const { data, loading, error } = useFetchMovies(query);

  const handleFilterChange = (filter: { 'vote_average.gte': number; 'vote_average.lte': number }) => {
    setQuery({ ...query, ...filter, page: 1 });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={styles.movieListContainer}>
      <Filter onFilterChange={handleFilterChange} />
      <div className={styles.movieList}>
        {data?.results.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
      <Pagination
        currentPage={query.page}
        totalPages={data?.total_pages || 1}
        onPageChange={(page) => setQuery({ ...query, page })}
      />
    </div>
  );
};

export default MovieList;
