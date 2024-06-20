import React from 'react';
import { Movie } from '../../types/Movie';
import styles from '../../styles/elements/MovieCard.module.scss';
import { PostersInfo } from '../../constants';


interface MovieCardProps {
  movie: Movie;
}
const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className={styles.movieCard}>
      <img src={ PostersInfo.url +`/${PostersInfo.size}` + movie.poster_path} alt={movie.title} loading="lazy" className={styles.poster} />
      <div className={styles.details}>
        <h3>{movie.title}</h3>
        <p>Release Date: {movie.release_date}</p>
        <p>Rating: {movie.vote_average} ({movie.vote_count} votes)</p>
      </div>
    </div>
  );
};

export default MovieCard;
