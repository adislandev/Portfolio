import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FadeInSection from './components/FadeInSection';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
// Importar outras seções aqui quando forem criadas
// import Contact from './sections/Contact';

import styles from './App.module.css'; // Criaremos este arquivo para estilos do App

function App() {

  // Efeito para rastrear mouse e atualizar variáveis CSS
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      // Normalizar para valores percentuais
      const xPercent = (clientX / innerWidth) * 100;
      const yPercent = (clientY / innerHeight) * 100;
      
      // Atualizar variáveis CSS na raiz (documentElement)
      document.documentElement.style.setProperty('--mouse-x', `${xPercent}%`);
      document.documentElement.style.setProperty('--mouse-y', `${yPercent}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Limpeza: remover listener ao desmontar o componente
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Array vazio significa que o efeito roda apenas no mount e unmount

  return (
    <div className={styles.appContainer}>
      <Header />
      <main className={styles.mainContent}>
        <Hero />
        <FadeInSection>
          <About />
        </FadeInSection>
        <FadeInSection>
          <Services />
        </FadeInSection>
        <FadeInSection>
          <Experience />
        </FadeInSection>
        <FadeInSection>
          <Projects />
        </FadeInSection>
        <FadeInSection>
          <Contact />
        </FadeInSection>
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
