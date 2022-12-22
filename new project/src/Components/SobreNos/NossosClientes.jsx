import React from 'react';
import styles from './NossosClientes.module.css';
import i from '../Utils/imgs';

const NossosClientes = () => {
  return (
    <div className={styles.nossos_clientes + ' container'}>
      <h1 className="title-exbold-1">Our Clientes</h1>
      <p className="para-regular-1">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudan, totam rem aperiam.
      </p>
      <ul className={styles.clientes}>
        <li>
          <img src={i.cliente1} alt="" />
        </li>
        <li>
          <img src={i.cliente2} alt="" />
        </li>
        <li>
          <img src={i.cliente3} alt="" />
        </li>
        <li>
          <img src={i.cliente4} alt="" />
        </li>
        <li className={styles.image_hidden}>
          <img src={i.cliente5} alt="" />
        </li>
        <li className={styles.image_hidden}>
          <img src={i.cliente6} alt="" />
        </li>
      </ul>
    </div>
  );
};

export default NossosClientes;
