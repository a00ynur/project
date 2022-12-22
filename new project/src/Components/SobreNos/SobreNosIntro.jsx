import React from 'react';
import styles from './SobreNosIntro.module.css';
import i from '../Utils/imgs';

const SobreNosIntro = () => {
  return (
    <div className={styles.sobre_intros + ' container'}>
      <div className={styles.sobre_intro_01}>
        <div className={styles.sobre_intro_text}>
          <h2 className="title-exbold-1">Who we are</h2>
          <p className={styles.sobre_intro_p1 + ' para-regular-1'}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <p className={styles.sobre_intro_p2 + ' para-regular-1'}>
            Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque
            finibus consequat felis vel pretium. Aliquam gravida nisi vel
            convallis ultricies. Integer ante sapien, consequat et dolor vel,
            cursus lacinia lectus.
          </p>
        </div>
        <div className={styles.sobre_intro_img}>
          <img src={i.sobre1} alt="" />
        </div>
      </div>

      <div className={styles.sobre_intro_02}>
        <div className={styles.sobre_intro_img}>
          <img src={i.sobre2} alt="" />
        </div>
        <div className={styles.sobre_intro_text}>
          <h2 className="title-exbold-1">Our mission </h2>
          <p className={styles.sobre_intro_p1 + ' para-regular-1'}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <p className={styles.sobre_intro_p2 + ' para-regular-1'}>
            Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque
            finibus consequat felis vel pretium.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SobreNosIntro;
