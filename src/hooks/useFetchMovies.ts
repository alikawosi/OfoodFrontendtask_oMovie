import { useQuery } from '@tanstack/react-query';

import { api } from '../utils/api';
import { MovieResponse } from '../types/Movie';

export const useFetchMovies = (query: Record<string, any>) => {
  const instanse = api.instanse();
  const fetchMovies = async()=>{
    return (await instanse.get(`/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc`,{params:query})).data
  }

  return useQuery<MovieResponse, Error>({
    queryKey: ['movies', query],
    queryFn: fetchMovies,
  });
};
