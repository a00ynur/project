import React from 'react';
import styles from './Subheader.module.css';

const Subheader = ({ HeaderTitle }) => {
  return (
    <div className={styles.Subheader_bg}>
      <div className={styles.Sub_Header + ' container'}>
        <h1 className="title-exbold-1">{HeaderTitle}</h1>
        <div className={styles.Sub_header_para}>
          <p className={styles.p1 + ' title-medium-7'}>Home</p>
          <p className={styles.p2 + ' title-semi-7'}>{HeaderTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Subheader;
