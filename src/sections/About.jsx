import React from 'react';
import styles from './About.module.css';
import SectionTitle from '../components/SectionTitle';
import profilePic from '../assets/adislanperfil.jpg';

const About = () => {
  const skills = [
    'React (Vite)', 
    'Node.js', 
    'MySQL', 
    'JavaScript (ES6+)', 
    'HTML5 & CSS3', 
    'Git & GitHub'
  ];
  const certifications = [
    'Google Certified Educator L1',
    'Google Certified Educator L2',
    'Google Certified Trainer',
    'Fortinet NSE 1 Network Security Associate',
    'Fortinet NSE 3 Network Security Associate',
  ];

  return (
    <section id="about" className={styles.about}>
      <SectionTitle title="Sobre Mim" />
      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            Olá! Sou Adislan Fernandes, um Desenvolvedor Web Full-Stack e entusiasta de tecnologia,
            com vasta experiência em docência e coordenação educacional.
          </p>
          <p>
            Possuo graduação em <strong>Sistemas para Internet</strong> e pós-graduações em 
            <strong> Desenvolvimento de Sistemas Web</strong> e <strong> Análise e Desenvolvimento Web</strong>, 
            complementadas por certificações Google (Educator L1/L2, Trainer) e Fortinet (NSE 1/3).
          </p>
          <p>
            Minha paixão é combinar desenvolvimento de software com educação, criando soluções web impactantes e 
            capacitando pessoas através da tecnologia. Atualmente, meu foco está em aprimorar minhas habilidades em:
          </p>
          <ul className={styles.skillsList}>
            {skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
          <p>Minhas principais certificações incluem:</p>
          <ul className={styles.certificationsList}>
            {certifications.map((cert, i) => <li key={i}>{cert}</li>)}
          </ul>
        </div>
        <div className={styles.imageWrapper}>
          <img 
            src={profilePic} 
            alt="Foto de perfil de Adislan Fernandes" 
            className={styles.profileImage} 
          />
        </div>
      </div>
    </section>
  );
};

export default About; 