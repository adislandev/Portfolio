import React from 'react';
import styles from './Projects.module.css';
import SectionTitle from '../components/SectionTitle';
import { FiGithub, FiExternalLink } from 'react-icons/fi'; // Ícones para links

const Projects = () => {

  // Dados dos projetos (adicionar manualmente)
  const projectData = [
    {
      title: 'Sistema de Gestão de Membros (IEQ)',
      description:
        'Sistema web full-stack para gerenciamento de membros, departamentos e células da igreja, com autenticação JWT, CRUDs completos, controle de acesso e dashboard de resumo.',
      tech: ['React', 'Node.js', 'Express', 'MySQL', 'JWT', 'Argon2', 'Bootstrap 5', 'React Bootstrap'],
      githubLink: 'https://github.com/adislandev/Sistema-de-Gestao-de-Membro',
      liveLink: null, // Adicionar link da demo se houver
      image: null // Adicionar caminho para imagem/preview se houver
    },
    // Adicionar mais projetos aqui...
    // {
    //   title: 'Outro Projeto Incrível',
    //   description:
    //     'Descrição do seu outro projeto...',
    //   tech: ['React', 'Firebase', 'Styled Components'],
    //   githubLink: 'https://github.com/adislandev/outro-projeto',
    //   liveLink: 'https://demo.outroprojeto.com',
    //   image: '../assets/outro-projeto.png'
    // },
  ];

  return (
    <section id="projects" className={styles.projects}>
      <SectionTitle title="Meus Projetos" />
      <ul className={styles.grid}>
        {projectData.map((project, i) => (
          <li key={i} className={styles.projectItem}>
            <div className={styles.projectContent}>
              <div className={styles.projectHeader}>
                <div className={styles.folderIcon}> {/* Placeholder para ícone de pasta */}
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-folder"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <div className={styles.projectLinks}>
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link">
                      <FiGithub />
                    </a>
                  )}
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label="External Link">
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <div className={styles.projectDescription}>
                <p>{project.description}</p>
              </div>
              {/* Remover a imagem se não for usada, ou ajustar o layout */}
              {/* {project.image && <img src={project.image} alt={project.title} className={styles.projectImage}/>} */}
            </div>
            <footer className={styles.projectFooter}>
              <ul className={styles.projectTechList}>
                {project.tech.map((tech, j) => (
                  <li key={j}>{tech}</li>
                ))}
              </ul>
            </footer>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects; 