import React from 'react';
import styles from './Notfound.module.css';
import { Link } from 'react-router-dom';
import Button from './Utils/Button';
import Head from './Utils/Head';

const NotFound = () => {
  return (
    <div className={styles.not_found + ' container'}>
      <Head title="404" />
      <h1>404</h1>
      <h2 className="title-exbold-1">404 not found</h2>
      <Link to="/">
        <Button>Retornar</Button>
      </Link>
    </div>
  );
};

export default NotFound;
