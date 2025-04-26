import React from 'react';
import styles from './SectionTitle.module.css';

const SectionTitle = ({ title }) => {
  return (
    <h2 className={styles.title}>
      {/* Remover o span do número */}
      {/* <span className={styles.number}>{number}.</span> */}
      {title}
      <span className={styles.line}></span>
    </h2>
  );
};

export default SectionTitle; 