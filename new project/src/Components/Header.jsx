import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../assets/logo.svg';
import logoblue from '../assets/logoblue.svg';
import Modal from './modal/Modal';

const Header = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);

  return (
    <div>
      <header className={styles.header + ' container'}>
        <Link className={styles.header_logo} to="/">
          <img src={mobileMenu ? logo : logoblue} alt="Logo ensome" />
        </Link>

        <nav>
          <button
            aria-label="Menu"
            className={`${mobileMenu && styles.activeButton} ${
              styles.mobile_button
            }`}
            onClick={() => setMobileMenu(!mobileMenu)}
          ></button>
          <ul
            className={`${mobileMenu && styles.activeMenu} ${
              styles.header_nav
            }`}
          >
            <li>
              <Link className={styles.nav_home + ' title-semi-7'} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className={styles.nav_home_a + ' title-medium-7'}
                to="/solucoes"
              >
                Solution
              </Link>
            </li>
            <li>
              <Link
                className={styles.nav_home_a + ' title-medium-7'}
                to="/sobre-nos"
              >
                Elements
              </Link>
            </li>
            <li>
              <Link
                className={styles.nav_home_a + ' title-medium-7'}
                to="/blog"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className={styles.nav_home_a + ' title-medium-7'}
                to="/contatos"
              >
                Contacts
              </Link>
            </li>
            <li>
              <div className={styles.header_button}>
                <Modal>Watch the demo</Modal>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
