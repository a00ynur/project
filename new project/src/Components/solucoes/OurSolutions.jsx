import React from 'react';
import styles from './OurSolutions.module.css';

const OurSolutions = () => {
  return (
    <div className={styles.ourSolutions + ' container'}>
      <h1 className="title-exbold-2">Our solutions</h1>
      <div className={styles.solutions}>
        <ul>
          <li className={styles.solutions_ultitle + ' title-bold-4'}>
            Data integration
          </li>
          <li className={styles.solutions_li + ' para-regular-2'}>
            Extrair, transformar, carregar (ETL)
          </li>
          <li className={styles.solutions_li + ' para-regular-2'}>
            Extrair, carregar, transformar (ELT)
          </li>
          <li className={styles.solutions_li + ' para-regular-2'}>
            Data governance
          </li>
          <li className={styles.solutions_saiba + ' title-semi-7'}>
            Read more
          </li>
        </ul>

        <ul>
          <li className={styles.solutions_ultitle + ' title-bold-4'}>
            Data science
          </li>
          <li className={styles.solutions_li + ' para-regular-2'}>
            Data preparation
          </li>
          <li className={styles.solutions_li + ' para-regular-2'}>
            Data management
          </li>
          <li className={styles.solutions_li + ' para-regular-2'}>
            Machine learning (ML)
          </li>
          <li className={styles.solutions_li + ' para-regular-2'}>
             Artificial intelligence (IA)
          </li>
          <li className={styles.solutions_saiba + ' title-semi-7'}>
            Read more
          </li>
        </ul>

        <ul>
          <li className={styles.solutions_ultitle + ' title-bold-4'}>
            Big data
          </li>
          <li className={styles.solutions_li + ' para-regular-2'}>
            Setup and support
          </li>
          <li className={styles.solutions_li + ' para-regular-2'}>
            Quality management
          </li>
          <li className={styles.solutions_li + ' para-regular-2'}>
            Security management
          </li>
          <li className={styles.solutions_li + ' para-regular-2'}>
            Big data capture and analysis 
          </li>
          <li className={styles.solutions_saiba + ' title-semi-7'}>
            Read more
          </li>
        </ul>

        <ul>
          <li className={styles.solutions_ultitle + ' title-bold-4'}>
            Data warehousing
          </li>
          <li className={styles.solutions_li + ' para-regular-2'}>
            Data warehouse
          </li>
          <li className={styles.solutions_li + ' para-regular-2'}>
            Data marts design
          </li>
          <li className={styles.solutions_li + ' para-regular-2'}>
            Data implementation
          </li>
          <li className={styles.solutions_saiba + ' title-semi-7'}>
            Read more
          </li>
        </ul>

        <ul>
          <li className={styles.solutions_ultitle + ' title-bold-4'}>
            Self-service BI
          </li>
          <li className={styles.solutions_li + ' para-regular-2'}>
            Data analytics infrastructure
          </li>
          <li className={styles.solutions_li + ' para-regular-2'}>
            Analytics querying and reporting
          </li>
          <li className={styles.solutions_li + ' para-regular-2'}>
            Business intelligence
          </li>
          <li className={styles.solutions_saiba + ' title-semi-7'}>
            Read more
          </li>
        </ul>

        <ul>
          <li className={styles.solutions_ultitle + ' title-bold-4'}>
            Data visualization
          </li>
          <li className={styles.solutions_li + ' para-regular-2'}>
            Interactive dashboarding
          </li>
          <li className={styles.solutions_li + ' para-regular-2'}>
            Custom and pre-built visuals
          </li>
          <li className={styles.solutions_li + ' para-regular-2'}>
            Multiple visualization
          </li>
          <li className={styles.solutions_saiba + ' title-semi-7'}>
            Read more
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OurSolutions;
