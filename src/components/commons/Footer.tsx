import React from 'react';

import styles from '../../styles/commons/Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 oMovie. All rights reserved.</p>
    </footer>
  );
};

export  {Footer};
