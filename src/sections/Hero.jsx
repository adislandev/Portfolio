import React from 'react';
import styles from './Hero.module.css';
import { FiGithub, FiLinkedin, FiPlay } from 'react-icons/fi'; // Ícones

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      {/* Links Sociais na Lateral (inspirado em rafaelpardal) */}
      <div className={styles.socialLinks}>
        <ul>
          <li>
            <a href="https://github.com/adislandev" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/adislan-fernandes-66071637" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
          </li>
          {/* Adicionar outros links se desejar (Ex: Email) */}
        </ul>
      </div>

      {/* Conteúdo Principal Atualizado */}
      <div className={styles.content}>
        <h2 className={styles.name}>Adislan Fernandes.</h2>
        <h3 className={styles.title}>Desenvolvedor Web Full-Stack.</h3>
        <p className={styles.description}>
          Desenvolvo aplicações web modernas, performáticas e sob medida, 
          focadas em otimizar seus processos, engajar seus usuários e 
          impulsionar seus resultados online.
        </p>
        <a href="#contact" className={styles.ctaButton}>
          <FiPlay />
          Vamos Conversar?
        </a>
      </div>

      {/* Email na Lateral (inspirado em rafaelpardal) */}
      <div className={styles.emailLink}>
        <a href="mailto:seu-email@exemplo.com">adislanconsultoria@gmail.com</a> 
        {/* !! Substituir pelo seu email real !! */}
      </div>

    </section>
  );
};

export default Hero; 