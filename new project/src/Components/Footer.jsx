import React from 'react';
import styles from './Footer.module.css';
import logoblue from '../assets/logoblue.svg';
import i from './Utils/imgs';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_infos + ' container'}>
        <div className={styles.footer_infos_logo}>
          <img src={logoblue} alt="Logo ensome azul" />
        </div>

        <div className={styles.footer_infos_text}>
          <ul className="para-regular-3">
            <li className="title-bold-6">About</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sobre-nos">About Us</Link>
            </li>
            <li>
              <Link to="/servicos">Services</Link>
            </li>
            <Link to="/solucoes">Solution</Link>
            <li></li>
          </ul>
          <ul className="para-regular-3">
            <li className="title-bold-6">Information</li>
            <li>
              <Link to="/contatos">Contacts</Link>
            </li>
            <li>
              <Link to="/nosso-time">Our team</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
          <ul className="para-regular-3">
            <li className="title-bold-6">Service</li>
            <li>
              <Link to="/contatos">Pages</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footer_contatos + ' container'}>
        <div className={styles.footer_contatos_text}>
          <h2 className="title-bold-6">Contacts</h2>
          <div className={styles.footer_ct_infos}>
            <ul>
              <li className="para-regular-3">+1 601-201-5580</li>
              <li className="title-semi-7">ensome@info.co.us</li>
            </ul>
            <ul>
              <li className="para-regular-3">
                1642 Washington Avenue, Jackson, MS, 39201
              </li>
              <li className="title-semi-7">Driving derections</li>
            </ul>
          </div>
        </div>

        <div className={styles.footer_contatos_redes}>
          <h2 className="title-bold-6">Social</h2>
          <ul>
            <li>
              <img src={i.facebook} />
            </li>
            <li>
              <img src={i.twitter} />
            </li>
            <li>
              <img src={i.linkedin} />
            </li>
            <li>
              <img src={i.youtube} />
            </li>
            <li>
              <img src={i.dribbble} />
            </li>
            <li>
              <img src={i.behance} />
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footer_termos + ' container'}>
        <div className={styles.footer_termos_text + ' title-semi-7'}>
          <p>Privacy policy</p>
          <p>Terms of us</p>
        </div>

        <div>
          <p className="para-regular-3">© 2022 Ensome. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
