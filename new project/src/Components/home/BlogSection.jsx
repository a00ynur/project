import React from 'react';
import Button from '../Utils/Button';
import styles from './BlogSection.module.css';
import tags from '../../assets/tags.svg';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  return (
    <section className={styles.blogsection_bg}>
      <div className={styles.blogsection + ' container'}>
        <h1 className={styles.blogsection_title + ' title-exbold-1'}>
          Glad to help your success
        </h1>
        <div className={styles.blogsection_carrossel}>
          <ul>
            <li className={styles.blogsection_item}>
              <p className={styles.blogsection_data + ' para-regular-3'}>
                22 June 2020
              </p>
              <div className={styles.blogsection_text}>
                <h2 className={styles.blogsection_title_item + ' title-bold-4'}>
                  Sed ut perspiciatis unde omnis at vero blanditils
                </h2>
                <p className={styles.blogsection_paragraph + ' para-regular-2'}>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti...
                </p>
                <img src={tags} alt="tags" />
              </div>
            </li>
            <li className={styles.blogsection_item}>
              <p className={styles.blogsection_data + ' para-regular-3'}>
                22 June 2020
              </p>
              <div className={styles.blogsection_text}>
                <h2 className={styles.blogsection_title_item + ' title-bold-4'}>
                  Sed ut perspiciatis unde omnis at vero blanditils
                </h2>
                <p className={styles.blogsection_paragraph + ' para-regular-2'}>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti...
                </p>
                <img src={tags} alt="tags" />
              </div>
            </li>
            <li className={styles.blogsection_item}>
              <p className={styles.blogsection_data + ' para-regular-3'}>
                22 June 2020
              </p>
              <div className={styles.blogsection_text}>
                <h2 className={styles.blogsection_title_item + ' title-bold-4'}>
                  Sed ut perspiciatis unde omnis at vero blanditils
                </h2>
                <p className={styles.blogsection_paragraph + ' para-regular-2'}>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti...
                </p>
                <img src={tags} alt="tags" />
              </div>
            </li>
          </ul>
        </div>
        <Link to="/blog">
          <Button>Learn more</Button>
        </Link>
      </div>
    </section>
  );
};

export default BlogSection;
