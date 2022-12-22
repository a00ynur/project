import React from 'react';
import styles from './Contate.module.css';
import Button from '../Utils/Button';

const Contate = () => {
  return (
    <section className={styles.contate_bg}>
      <div className={styles.contate + ' container'}>
        <div className={styles.contate_text}>
          <h1 className={styles.contate_text_title + ' title-exbold-2'}>
            Left questions? Contacts us now for a free consultation and free trial!
          </h1>
          <p className={styles.contate_text_subtitle + ' para-regular-2'}>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam <br />{' '}
            corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
          </p>
          <ul className={styles.contate_ul}>
            <li>
              <p className="para-regular-2">Email adress</p>
              <span className="para-bold-2">ensome@info.com.us</span>
            </li>
            <li>
              <p className="para-regular-2">Phone number</p>
              <span className="para-bold-2">+1601-201-5580</span>
            </li>
            <li>
              <p className="para-regular-2">Address</p>
              <span className="para-bold-2">1642 Washington Avenue, Jackson, MS, Mississippi, 39201</span>
            </li>
          </ul>
          <Button>Contacte-nos</Button>
        </div>
        <div className={styles.contate_form}>
          <div className={styles.contate_form_container}>
            <h1 className="title-exbold-3">Contact us</h1>
            <form>
              <div>
                <label className="para-semi-8">Name</label>
                <input className="para-semi-3" type="text" name="nome" />
              </div>
              <div>
                <label>Email</label>
                <input className="para-semi-3" type="email" name="email" />
              </div>
              <div>
                <label>Theme</label>
                <input className="para-semi-3" type="text" name="assunto" />
              </div>
              <div>
                <label>Message</label>
                <input className="para-semi-3" type="text" name="mensagem" />
              </div>
              <Button>Send</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contate;
