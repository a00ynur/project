import React from 'react';
import styles from './BlogContainer.module.css';
import i from '../Utils/imgs';
import Button from '../Utils/Button';

const BlogContainer = () => {
  return (
    <div className={styles.blog + ' container'}>
      <div className={styles.blogs}>
        <div className={styles.blog_item}>
          <img src={i.blog1} alt="Blog 01" />
          <ul className={styles.blog_item_container}>
            <li className={styles.blog_data + ' para-regular-3'}>
              22 June 2020
            </li>
            <li className={styles.blog_title + ' title-bold-4'}>
              Sed ut perspiciatis unde omnis at vero blanditils
            </li>
            <li className={styles.blog_subtext + ' para-regular-2'}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas. Quis autem vel eum iure...
            </li>
            <ul className={styles.blog_tags}>
              <li>App</li>
              <li>CIO</li>
              <li>Futuro</li>
            </ul>
          </ul>
        </div>

        <div className={styles.blog_item}>
          <img src={i.blog2} alt="Blog 02" />
          <ul className={styles.blog_item_container}>
            <li className={styles.blog_data + ' para-regular-3'}>
              22 June 2020
            </li>
            <li className={styles.blog_title + ' title-bold-4'}>
              2022 software development trends explained with benefits
            </li>
            <li className={styles.blog_subtext + ' para-regular-2'}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas. Quis autem vel eum iure...
            </li>
            <ul className={styles.blog_tags}>
              <li>App</li>
              <li>CIO</li>
              <li>Futuro</li>
            </ul>
          </ul>
        </div>

        <div className={styles.blog_item}>
          <img src={i.blog3} alt="Blog 03" />
          <ul className={styles.blog_item_container}>
            <li className={styles.blog_data + ' para-regular-3'}>
              22 June 2020
            </li>
            <li className={styles.blog_title + ' title-bold-4'}>
              Data lake vs. data warehouse: why you don’t have to choose
            </li>
            <li className={styles.blog_subtext + ' para-regular-2'}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas. Quis autem vel eum iure...
            </li>
            <ul className={styles.blog_tags}>
              <li>App</li>
              <li>CIO</li>
              <li>Futuro</li>
            </ul>
          </ul>
        </div>

        <div className={styles.blog_item}>
          <img src={i.blog4} alt="Blog 04" />
          <ul className={styles.blog_item_container}>
            <li className={styles.blog_data + ' para-regular-3'}>
              16 June 2020
            </li>
            <li className={styles.blog_title + ' title-bold-4'}>
              40 stats and real-life examples of how companies use big data
            </li>
            <li className={styles.blog_subtext + ' para-regular-2'}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas. Quis autem vel eum iure...
            </li>
            <ul className={styles.blog_tags}>
              <li>App</li>
              <li>CIO</li>
              <li>Futuro</li>
            </ul>
          </ul>
        </div>

        <div className={styles.blog_item}>
          <img src={i.blog5} alt="Blog 05" />
          <ul className={styles.blog_item_container}>
            <li className={styles.blog_data + ' para-regular-3'}>
              22 June 2020
            </li>
            <li className={styles.blog_title + ' title-bold-4'}>
              Staffing software: key capabilities and top products
            </li>
            <li className={styles.blog_subtext + ' para-regular-2'}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas. Quis autem vel eum iure...
            </li>
            <ul className={styles.blog_tags}>
              <li>App</li>
              <li>CIO</li>
              <li>Futuro</li>
            </ul>
          </ul>
        </div>

        <div className={styles.blog_item}>
          <img src={i.blog6} alt="Blog 06" />
          <ul className={styles.blog_item_container}>
            <li className={styles.blog_data + ' para-regular-3'}>
              22 June 2020
            </li>
            <li className={styles.blog_title + ' title-bold-4'}>
              5 web portal examples your business can learn from
            </li>
            <li className={styles.blog_subtext + ' para-regular-2'}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas. Quis autem vel eum iure...
            </li>
            <ul className={styles.blog_tags}>
              <li>App</li>
              <li>CIO</li>
              <li>Futuro</li>
            </ul>
          </ul>
        </div>
      </div>
      <Button>More articles</Button>
    </div>
  );
};

export default BlogContainer;
