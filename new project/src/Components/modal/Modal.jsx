import React, { Children, useRef, useState } from 'react';
import styles from './Modal.module.css';

const modal = ({ cor, children }) => {
  const [modalabrir, setModalabrir] = useState(false);
  const umaRef = useRef();

  function abrirModal() {
    setModalabrir(true);
  }
  function fecharModal() {
    setModalabrir(false);
  }

  function foraModal(event) {
    if (event.target === umaRef.current) {
      setModalabrir(false);
    }
  }

  return (
    <div>
      {modalabrir ? (
        <section
          ref={umaRef}
          onClick={foraModal}
          className={styles.modal_container}
        >
          <div className={styles.modal}>
            <button onClick={fecharModal} className={styles.fechar}>
              X
            </button>
            <iframe
              className={styles.modal_video}
              src="https://www.youtube.com/embed/24mqihFM1Xw"
            ></iframe>
          </div>
        </section>
      ) : null}
      <button className={cor ? cor : 'btn_azul'} onClick={abrirModal}>
        {children}
      </button>
    </div>
  );
};

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/24mqihFM1Xw"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>;

export default modal;
