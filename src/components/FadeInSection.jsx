import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './FadeInSection.module.css';

const FadeInSection = (props) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animar apenas uma vez
    threshold: 0.1, // Trigger quando 10% do elemento estiver visível
    // rootMargin: '0px 0px -50px 0px' // Opcional: Ajustar margem da viewport
  });

  return (
    <div 
      ref={ref} 
      className={`${styles.fadeInSection} ${inView ? styles.isVisible : ''}`}
    >
      {props.children}
    </div>
  );
};

export default FadeInSection; 