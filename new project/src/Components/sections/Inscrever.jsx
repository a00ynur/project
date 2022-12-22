import React from 'react';
import styles from './Inscrever.module.css';

const inscrever = () => {
  return (
    <section className={styles.inscrever_bg}>
      <div className={styles.inscrever + ' container'}>
        <div className={styles.inscrever_text}>
          <h2 className="title-exbold-2">Subscribe to our newsletter</h2>
          <p className="para-regular-1">
            Sed ut perspiciatis unde omnis iste natus error sit <br />
            voluptatem accusantium doloremque laudantium.
          </p>
        </div>
        <div className={styles.inscrever_input}>
          <input className="para-semi-3" placeholder="Your email" type="text" />
          <button className="title-bold-6">Send</button>
        </div>
      </div>
    </section>
  );
};

export default inscrever;
