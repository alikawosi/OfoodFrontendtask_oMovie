import React from 'react';

import { Error } from '../../types/commons';
import styles from '../../styles/commons/ErrorMessage.module.scss';


const ErrorMessage: React.FC<Error> = ({ message }) => {
  return (
    <div className={styles.errorMessage}>
      <span className={styles.icon}>⚠️</span>
      <span className={styles.message}>{message}</span>
    </div>
  );
};

export  {ErrorMessage};
