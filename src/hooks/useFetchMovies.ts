import { useState, useEffect } from 'react';
import { fetchMovies } from '../utils/api';
import { MovieResponse } from '../types/Movie';

export const useFetchMovies = (query: Record<string, any>) => {
  const [data, setData] = useState<MovieResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const result = await fetchMovies(query);
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [query]);

  return { data, loading, error };
};
