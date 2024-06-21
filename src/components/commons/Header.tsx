import React from 'react';

import { Navbar } from './Navbar';
import styles from '../../styles/commons/Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>... oMovie ...</h1>
      <Navbar/>
    </header>
  );
};

export  {Header};
