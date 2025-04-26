import React from 'react';
import styles from './Services.module.css';
import SectionTitle from '../components/SectionTitle';
import { FiCode, FiLayout, FiCloud, FiMonitor } from 'react-icons/fi'; // Ícones para serviços

const Services = () => {
  const servicesData = [
    {
      icon: <FiMonitor />,
      title: 'Sites Institucionais & Blogs',
      description:
        'Desenvolvo sites utilizando React com Vite para interatividade moderna, ou HTML, CSS e JavaScript puro para sites mais leves como portfólios e blogs. Todos com design atraente e totalmente responsivo.'
    },
    {
      icon: <FiCode />,
      title: 'Sistemas Web',
      description: 
        'Desenvolvimento de aplicações web completas e personalizadas, desde o frontend com React até o backend com Node.js e bancos de dados como MySQL. Foco em performance, segurança e escalabilidade.'
    },
    {
      icon: <FiLayout />,
      title: 'Landing Pages', // Exemplo de outro serviço
      description: 
        'Criação de landing pages otimizadas para conversão, com design moderno e responsivo, focadas em apresentar produtos, serviços ou capturar leads de forma eficaz.'
    },
    // Adicionar mais serviços se desejar (Ex: Consultoria, APIs, etc.)
    // {
    //   icon: <FiCloud />,
    //   title: 'Desenvolvimento de APIs',
    //   description: 
    //     'Construção de APIs RESTful robustas e bem documentadas para integrar sistemas e fornecer dados para aplicações frontend e mobile.'
    // }
  ];

  return (
    <section id="services" className={styles.services}>
      <SectionTitle title="O Que Eu Faço" />
      <div className={styles.grid}>
        {servicesData.map((service, i) => (
          <div key={i} className={styles.serviceItem}>
            <div className={styles.iconWrapper}>
              {service.icon}
            </div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services; 