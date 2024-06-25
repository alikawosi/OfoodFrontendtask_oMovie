import React from 'react';

import { ButtonProps } from '../../types/commons';
import styles from '../../styles/commons/Button.module.scss';


const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'button', disabled = false }) => {
  return (
    <button className={styles.button} onClick={onClick} type={type} disabled={disabled}>
      {children}
    </button>
  );
};

export {Button};