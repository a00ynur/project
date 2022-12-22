import React from 'react';
import styles from './ContatosMap.module.css';

const ContatosMap = () => {
  return (
    <div className={styles.Contatos_map}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1589.7797544388468!2d-43.180569684866704!3d-22.968150928608086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1666619012686!5m2!1spt-BR!2sbr"
        width="1920"
        height="460"
      ></iframe>
    </div>
  );
};

export default ContatosMap;
