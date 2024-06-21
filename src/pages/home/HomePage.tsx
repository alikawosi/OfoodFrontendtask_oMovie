import React from 'react';

import { Layout } from '../../components/commons';
import { MovieList } from '../../components/elements';

import styles from '../../styles/pages/HomePage.module.scss'


const Home: React.FC = () => {
  return (
  <Layout mainBodyStyle = {styles.main}>
    <MovieList />
  </Layout>
  );
};

export default Home;
