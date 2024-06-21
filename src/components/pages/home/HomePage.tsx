import React from 'react';

import { MovieList } from '../../elements';
import {Header,Navbar,Footer,} from '../../../components/commons';
import styles from '../../../styles/pages/HomePage.module.scss'


const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <Header />
      <Navbar />
      <main className={styles.main}>
        <MovieList />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
