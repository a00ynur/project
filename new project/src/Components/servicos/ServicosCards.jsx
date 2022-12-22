import React from 'react';
import i from '../Utils/imgs';
import styles from './ServicosCards.module.css';

const ServicosCards = () => {
  return (
    <div className={styles.servicos_cards + ' container'}>
      <ul className={styles.servicos_card}>
        <li>
          <img src={i.servicos1} alt="" />
        </li>
        <li className={styles.servicos_card_title + ' title-bold-4'}>
          Machine learning
        </li>
        <li className={styles.servicos_card_text + ' para-regular-2'}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos
          dolores.
        </li>
        <li className={styles.servicos_card_saiba + ' title-semi-7'}>
          Read more
        </li>
      </ul>

      <ul className={styles.servicos_card}>
        <li>
          <img src={i.servicos2} alt="" />
        </li>
        <li className={styles.servicos_card_title + ' title-bold-4'}>
          Embed analytics
        </li>
        <li className={styles.servicos_card_text + ' para-regular-2'}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos
          dolores.
        </li>
        <li className={styles.servicos_card_saiba + ' title-semi-7'}>
          Read more
        </li>
      </ul>

      <ul className={styles.servicos_card}>
        <li>
          <img src={i.servicos3} alt="" />
        </li>
        <li className={styles.servicos_card_title + ' title-bold-4'}>
          Access control
        </li>
        <li className={styles.servicos_card_text + ' para-regular-2'}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos
          dolores.
        </li>
        <li className={styles.servicos_card_saiba + ' title-semi-7'}>
          Read more
        </li>
      </ul>

      <ul className={styles.servicos_card}>
        <li>
          <img src={i.servicos4} alt="" />
        </li>
        <li className={styles.servicos_card_title + ' title-bold-4'}>
          Data analytics
        </li>
        <li className={styles.servicos_card_text + ' para-regular-2'}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos
          dolores.
        </li>
        <li className={styles.servicos_card_saiba + ' title-semi-7'}>
          Read more
        </li>
      </ul>

      <ul className={styles.servicos_card}>
        <li>
          <img src={i.servicos5} alt="" />
        </li>
        <li className={styles.servicos_card_title + ' title-bold-4'}>
          Big data consulting
        </li>
        <li className={styles.servicos_card_text + ' para-regular-2'}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos
          dolores.
        </li>
        <li className={styles.servicos_card_saiba + ' title-semi-7'}>
          Read more
        </li>
      </ul>

      <ul className={styles.servicos_card}>
        <li>
          <img src={i.servicos6} alt="" />
        </li>
        <li className={styles.servicos_card_title + ' title-bold-4'}>
          Artificial intelligence
        </li>
        <li className={styles.servicos_card_text + ' para-regular-2'}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos
          dolores.
        </li>
        <li className={styles.servicos_card_saiba + ' title-semi-7'}>
          Read more
        </li>
      </ul>
    </div>
  );
};

export default ServicosCards;
