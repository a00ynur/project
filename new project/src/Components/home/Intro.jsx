import React from 'react';
import styles from './Intro.module.css';
import img from '../../assets/ilustração01.png';
import Button from '../Utils/Button';
import i from '../Utils/imgs';
import { Link } from 'react-router-dom';
import Modal from '../modal/Modal';

const intro = () => {
  return (
    <main className={styles.intro}>
      <div className={styles.intro_infos + ' container'}>
        <div className={styles.intro_text}>
          <h1 className="title-exbold-1">
            Find true power in your data with Ensome
          </h1>
          <p className="para-regular-1">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <div className={styles.btns}>
            <Link to="/sobre-nos">
              <Button>Learn more</Button>
            </Link>
            <Modal cor={'btn_black'}>Watch the demo</Modal>
          </div>
        </div>
        <div className={styles.intro_img}>
          <img src={img} alt="Imagem de introdução" />
        </div>
      </div>
      <div className={styles.clientes}>
        <ul className={styles.cliente + ' container'}>
          <li className={styles.i1}>
            <img src={i.logo1} alt="" />
          </li>
          <li>
            <img src={i.logo2} alt="" />
          </li>
          <li>
            <img src={i.logo3} alt="" />
          </li>
          <li>
            <img src={i.logo4} alt="" />
          </li>
          <li>
            <img src={i.logo5} alt="" />
          </li>
          <li className={styles.i6}>
            <img src={i.logo6} alt="" />
          </li>
        </ul>
      </div>
    </main>
  );
};

export default intro;
