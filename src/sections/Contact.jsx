import React from 'react';
import styles from './Contact.module.css';
import SectionTitle from '../components/SectionTitle';
import { FiPlay } from 'react-icons/fi';

const Contact = () => {
  // !! IMPORTANTE: Substitua 'YOUR_FORMSPREE_ENDPOINT' pelo seu endpoint real do Formspree !!
  const formspreeEndpoint = 'https://formspree.io/f/meogorqj'; 

  return (
    <section id="contact" className={styles.contact}>
      <SectionTitle title="Qual o Próximo Passo?" />
      
      <h2 className={styles.subTitle}>Entre em Contato</h2>
      <p className={styles.description}>
        Estou sempre aberto a novas oportunidades e colaborações. Se você tem alguma pergunta, 
        proposta ou apenas quer dizer um "oi", sinta-se à vontade para me enviar uma mensagem!
        Farei o possível para responder o mais rápido possível.
      </p>

      <form 
        className={styles.contactForm}
        action={formspreeEndpoint} 
        method="POST"
      >
        <div className={styles.formGroup}>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Mensagem</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        {/* Campo oculto para evitar spam (honeypot) - opcional mas recomendado pelo Formspree */}
        <input type="text" name="_gotcha" style={{ display: 'none' }} />
        
        <button type="submit" className={styles.submitButton}>
          <FiPlay />
          Enviar Mensagem
        </button>
      </form>

    </section>
  );
};

export default Contact; 