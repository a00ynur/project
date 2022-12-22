import React from 'react';
import Button from '../Utils/Button';
import styles from './SobreSolutions.module.css';

const SobreSolutions = () => {
  return (
    <div className={styles.sobreS + ' container'}>
      <div className={styles.sobreS_title}>
        <h1 className="title-exbold-3">
          Technology doesn't just help businesses - it allows them to extract business value from vast big of data.
        </h1>
      </div>

      <div className={styles.sobreS_para}>
        <p className="para-regular-1">
          Phasellus tristique eu nisl eu consectetur. Morbi urna massa,
          imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit,
          tincidunt aliquam ligula.
        </p>
        <div className={styles.sobreS_btns}>
          <Button>See pricing </Button>
          <button className={styles.SobreS_button}>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default SobreSolutions;
