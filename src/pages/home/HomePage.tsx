import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import { MovieResponse } from '../../types';
import { Filter, Layout, Pagination } from '../../components/commons';
import { MovieList } from '../../components/elements';

import styles from '../../styles/pages/home/HomePage.module.scss'

const Home: React.FC = () => {

  const [query, setQuery] = useState({ page: 1, 'vote_average.gte': 0, 'vote_average.lte': 10 });
  const [isDelayed, setIsDelayed] = useState(true);

  const { data, isLoading, error, isFetching } = useQuery<MovieResponse, Error>({
    queryKey: ['movies', query],
    queryFn: ()=>axios.get(`/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc`,{params:query}),
  });  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDelayed(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, [data]);

  const handleFilterChange = (
    filter: {
      'vote_average.gte': number;
      'vote_average.lte': number;
      'primary_release_date.gte':string;
      'primary_release_date.lte':string }
    ) => {
    setQuery({ ...query, ...filter, page: 1 });
  };

  return (
  <Layout mainBodyStyle = {styles.main}>
    <Filter onFilterChange={handleFilterChange} />
    <MovieList  data={data} isFetching={isFetching ||isDelayed} isLoading={isLoading ||isDelayed} error={error}/> 
    {data && (
    <Pagination
    currentPage={query.page}
    totalPages={data.total_pages}
    onPageChange={(page) => setQuery({ ...query, page })}
  />
    )}

  </Layout>
  );
};

export default Home;
