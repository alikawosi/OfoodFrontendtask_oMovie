import axios from 'axios';

const API_URL = 'https://api.example.com/movies';

export const fetchMovies = async (params: Record<string, any>) => {
  const response = await axios.get(API_URL, { params });
  return response.data;
};
