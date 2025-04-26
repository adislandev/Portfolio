import React, { useState } from 'react';
import styles from './Experience.module.css';
import SectionTitle from '../components/SectionTitle';

const Experience = () => {
  const [activeTabId, setActiveTabId] = useState(0); // Controla a aba ativa

  const experiences = [
    {
      id: 0,
      company: 'UNISAPIENS',
      role: 'Professor (Ensino Superior)',
      period: 'Presente', // Ajustar período
      description: [
        'Leciono disciplinas na área de tecnologia para cursos de graduação.',
        'Oriento projetos e trabalhos acadêmicos.',
        // 'Adicionar mais detalhes relevantes...'
      ]
    },
    {
      id: 1,
      company: 'SAPIENS',
      role: 'Coordenador de Tecnologias Educacionais',
      period: '2017 - até o momento', // Ajustar período
      description: [
        'Responsável pela implementação e gestão de tecnologias educacionais.',
        'Desenvolvo e ministro formações para professores sobre ferramentas digitais.',
        'Presto suporte técnico e pedagógico para a comunidade escolar.'
      ]
    },
    {
      id: 2,
      company: 'IFRO',
      role: 'Professor (Cursos Técnicos)',
      period: '2018 - 2019', // Ajustar período
      description: [
        'Ministrei aulas de Lógica de Programação, Redes de Computadores e Protocolos.',
        'Adaptei materiais didáticos para o contexto técnico.',
        // 'Contribui para ...'
      ]
    },
    {
      id: 3,
      company: 'IDEP',
      role: 'Professor de Informática / Programador Web',
      period: '2024 - até o momento', // Ajustar período
      description: [
        'Lecionei informática básica e avançada.',
        'Leciono aula de Programação Web.',
        'Participei de banca examinadora de TCC para alunos de cursos técnicos.'
      ]
    }
  ];

  const activeExperience = experiences[activeTabId];

  return (
    <section id="experience" className={styles.experience}>
      <SectionTitle title="Onde Trabalhei" />
      <div className={styles.container}>
        {/* Abas Laterais */}
        <div className={styles.tabs}>
          {experiences.map((exp) => (
            <button
              key={exp.id}
              className={`${styles.tabButton} ${activeTabId === exp.id ? styles.active : ''}`}
              onClick={() => setActiveTabId(exp.id)}
            >
              {exp.company}
            </button>
          ))}
          <div className={styles.highlight} style={{ transform: `translateY(${activeTabId * 42}px)` }}></div>
        </div>

        {/* Conteúdo da Aba Ativa */}
        <div className={styles.content}>
          <h3 className={styles.role}>
            {activeExperience.role} <span className={styles.company}>@ {activeExperience.company}</span>
          </h3>
          <p className={styles.period}>{activeExperience.period}</p>
          <ul className={styles.descriptionList}>
            {activeExperience.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience; 