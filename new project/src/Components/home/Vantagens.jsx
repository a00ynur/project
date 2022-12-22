import React from 'react';
import styles from './Vantagens.module.css';
import i from '../Utils/imgs';

const vantagens = () => {
  return (
    <div className={styles.vantagens_bg}>
      <div className={styles.vantagens_text + ' container'}>
        <h1 className={styles.vantagens_title + ' title-exbold-1'}>
          Why our clients <br /> chosse Ensome?
        </h1>
        <p className={styles.vantagens_paragraph + ' para-regular-1'}>
          Doloremque laudantium, totam rem aperiam, eaque ipsa <br /> quae ab
          illo inventore veritatis et quasi architecto beatae <br /> vitae dicta
          sunt explicabo.
        </p>
      </div>
      <div className={styles.vantagens_carrossel + ' container'}>
        <ul>
          <li className={styles.vantagen}>
            <img src={i.v_icon1} />
            <h2 className={styles.carrosel_title + ' title-bold-4'}>
              Machine learning
            </h2>
            <p className={styles.carrosel_paragraph + ' para-regular-2'}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores.
            </p>
          </li>
          <li className={styles.vantagen}>
            <img src={i.v_icon2} />
            <h2 className={styles.carrosel_title + ' title-bold-4'}>
              Embed analytics
            </h2>
            <p className={styles.carrosel_paragraph + ' para-regular-2'}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores.
            </p>
          </li>
          <li className={styles.vantagen}>
            <img src={i.v_icon3} />
            <h2 className={styles.carrosel_title + ' title-bold-4'}>
              Access control
            </h2>
            <p className={styles.carrosel_paragraph + ' para-regular-2'}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default vantagens;
