import React from 'react';

import { Header,Footer } from './';
import styles from '../../styles/commons/Layout.module.scss'

interface LayoutProps {
  mainBodyStyle?: string;
}

const Layout: React.FC<LayoutProps> = ({children, mainBodyStyle}) => {
  return (
  <div className={styles.layoutContainer}>
    <Header/>
    <main className={mainBodyStyle}>
      {children}
    </main>
    <Footer/>
  </div>

  );
};

export  {Layout};
