import React from 'react';
import styles from './Numeros.module.css';

const Numeros = () => {
  return (
    <section className={styles.numeros_bg}>
      <div className="container">
        <ul className={styles.numeros}>
          <li>
            <p>1830+</p>
            <span>Projetos finalizados</span>
          </li>
          <li>
            <p>220</p>
            <span>Data analytics </span>
          </li>
          <li>
            <p>390</p>
            <span>Data management</span>
          </li>
          <li>
            <p>834+</p>
            <span>Clientes satisfeitos</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Numeros;
