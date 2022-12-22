import React from 'react';
import styles from './Qualidade.module.css';
import Button from '../Utils/Button';
import i from '../Utils/imgs';
import { Link } from 'react-router-dom';

const qualidade = () => {
  return (
    <section className={styles.qualidade + ' container'}>
      <div className={styles.qualidade_container}>
        <div className={styles.qualidade_text}>
          <h2 className="title-exbold-1">
            The newest business analytics platform
          </h2>
          <p className="para-regular-1">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <Link to="/sobre-nos">
            <Button>Learn more</Button>
          </Link>
        </div>
        <div className={styles.qualidade_img}>
          <img src={i.q1} alt="dados" />
        </div>
      </div>

      <div className={styles.qualidade_container2}>
        <div className={styles.qualidade_img}>
          <img src={i.q2} alt="dados" />
        </div>
        <div className={styles.qualidade_text}>
          <h2 className="title-exbold-1">
            Radically new data solutions
          </h2>
          <p className="para-regular-1">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <Link to="/sobre-nos">
            <Button>Learn more</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default qualidade;
