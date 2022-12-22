import React from 'react';
import styles from './ContatosForm.module.css';
import Button from '../Utils/Button';

const ContatosForm = () => {
  return (
    <div className={styles.contatos_container + ' container'}>
      <div className={styles.contatos_text}>
        <h1 className="title-exbold-1">Contacts</h1>
        <div className={styles.contatos_text_list}>
          <ul>
            <li className="title-bold-6">Email</li>
            <li className="para-regular-3">ensome@teste.com.us</li>
          </ul>
          <ul>
            <li className="title-bold-6">Phone</li>
            <li className="para-regular-3">+1 601-201-5580</li>
          </ul>
          <ul>
            <li className="title-bold-6">Adress</li>
            <li className="para-regular-3">1642 Washington Ave, Jackson, MS</li>
          </ul>
        </div>
      </div>

      <form>
        <div className={styles.NeE}>
          <div>
            <label className="para-semi-8">Name</label>
            <input className="para-semi-3" type="text" name="nome" />
          </div>
          <div>
            <label>Email</label>
            <input className="para-semi-3" type="email" name="email" />
          </div>
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
  );
};

export default ContatosForm;
