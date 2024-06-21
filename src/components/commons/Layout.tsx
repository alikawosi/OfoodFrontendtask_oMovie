import React from 'react';

import { Header,Footer } from './';
import styles from '../../styles/commons/Layout.module.scss'

const Layout: React.FC = ({children}) => {
  return (
  <div className={styles.layoutContainer}>
    <Header/>
    {children}
    <Footer/>
  </div>

  );
};

export  {Layout};
