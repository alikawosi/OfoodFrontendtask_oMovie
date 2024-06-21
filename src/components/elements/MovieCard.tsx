import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Movie } from '../../types';
import { PostersInfo } from '../../constants';
import styles from '../../styles/elements/MovieCard.module.scss';


interface MovieCardProps {
  movie: Movie;
}
const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div id={movie.id} className={styles.movieCard} onClick={handleClick}>
      <img src={ PostersInfo.url +`/${PostersInfo.size}` + movie.poster_path} alt={movie.title} loading="lazy" className={styles.poster} />
      <div className={styles.details}>
        <h3>{movie.title}</h3>
        <p>Release Date: {movie.release_date}</p>
        <p>Rating: {movie.vote_average} ({movie.vote_count} votes)</p>
      </div>
    </div>
  );
};

export  {MovieCard};
