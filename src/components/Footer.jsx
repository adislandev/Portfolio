import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Pega o ano atual

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logoName}>AdislanDev</div>
        <div className={styles.tagline}>
          Especialista em desenvolvimento web moderno.
        </div>
      </div>
      <div className={styles.copyright}>
        © {currentYear} AdislanDev. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer; 