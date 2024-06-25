import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import { Movie } from '../../types';
import { PostersInfo } from '../../constants';
import {ErrorMessage, Layout} from '../../components/commons';
import MovieInfoSkeleton from '../../components/pages/movieInfo/MovieInfoSkeleton';

import styles from '../../styles/pages/movieInfo/MovieInfo.module.scss'



const MovieInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isDelayed, setIsDelayed] = useState(true);

  const { data, isLoading, error, isFetching } = useQuery<Movie, Error>({
    queryKey: ['movieInfo',id],
    queryFn: ()=>axios.get(`/movie/${id}`),
  });  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDelayed(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, [data]);

  if (error) return <ErrorMessage message={error.message} />;

  return (
        <Layout>
          {(isLoading || isFetching ||isDelayed)?<MovieInfoSkeleton />:data && (
            <div className={styles.movieInfoContainer}>
            <div className={styles.movieInfo}>
                <img src={ PostersInfo.url +`/${PostersInfo.size}`+data.poster_path} alt={data.title} className={styles.poster} />
                <div className={styles.details}>
                  <h2>{data.title}</h2>
                  <p><strong>Release Date:</strong> {data.release_date}</p>
                  <p><strong>Rating:</strong> {data.vote_average} ({data.vote_count} votes)</p>
                  <p><strong>Overview:</strong> {data.overview}</p>
                </div>
            </div>
            </div>
            )}
        </Layout>
  );
};

export default MovieInfo;
