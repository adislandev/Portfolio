import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { FiMenu, FiX } from 'react-icons/fi'; // Ícones para menu mobile

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Efeito para fechar menu ao clicar no link (opcional, mas bom para UX)
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // Detectar scroll para adicionar sombra/estilo ao header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // Adicionar classe .scrolled condicionalmente
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <a href="/">AdislanDev</a> {/* Ou um logo se preferir */}
      </div>

      {/* Navegação Desktop (esconder em mobile) */}
      <nav className={`${styles.nav} ${styles.navDesktop}`}>
        <ul>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#services">Serviços</a></li>
          <li><a href="#experience">Experiência</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
        {/* Poderia adicionar um botão "Currículo" aqui, como na referência */}
      </nav>

      {/* Botão Hamburguer (mostrar apenas em mobile) */}
      <div className={styles.menuIcon} onClick={toggleMenu}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Navegação Mobile (Overlay/Sidebar) */}
      <nav className={`${styles.navMobile} ${menuOpen ? styles.open : ''}`}>
        <ul>
          <li><a href="#about" onClick={handleLinkClick}>Sobre</a></li>
          <li><a href="#services" onClick={handleLinkClick}>Serviços</a></li>
          <li><a href="#experience" onClick={handleLinkClick}>Experiência</a></li>
          <li><a href="#projects" onClick={handleLinkClick}>Projetos</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contato</a></li>
          {/* Botão Currículo pode vir aqui também */}
        </ul>
      </nav>

    </header>
  );
};

export default Header; 