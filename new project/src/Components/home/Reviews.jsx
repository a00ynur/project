import React from 'react';
import styles from './Reviews.module.css';
import i from '../Utils/imgs';

const Reviews = () => {
  function next() {
    var slides = document.querySelectorAll('.rv');
    var curr = document.querySelector('.ctAtivo');
    curr.classList.remove('ctAtivo');
    if (curr.nextElementSibling)
      curr.nextElementSibling.classList.add('ctAtivo');
    else slides[0].classList.add('ctAtivo');
  }

  function ante() {
    var slides = document.querySelectorAll('.rv');
    var curr = document.querySelector('.ctAtivo');
    curr.classList.remove('ctAtivo');
    if (curr.previousElementSibling)
      curr.previousElementSibling.classList.add('ctAtivo');
    else slides[slides.length - 1].classList.add('ctAtivo');
  }

  return (
    <div className={styles.reviews + ' container'}>
      <div className={styles.reviews_text}>
        <h1 className="title-exbold-1">
          Trusted by the best <br /> in the business 
        </h1>
        <div className={styles.btns}>
          <button onClick={ante} className={styles.btn}>
            <img src={i.seta_l} alt="seta esquerda" />
          </button>
          <button onClick={next}>
            <img src={i.seta_r} alt="seta direita" />
          </button>
        </div>
      </div>

      <div className={styles.contents}>
        <div className={styles.content + ' rv ctAtivo'}>
          <div className={styles.content_container}>
            <img src={i.pessoa1} alt="pessoa" />
            <div className={styles.content_text}>
              <p className="para-regular-2">
                “Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur, vel
                illum.”
              </p>
              <h3 className="title-bold-6">Alex bern</h3>
              <span className="para-regular-3">CEO by PixelPerfect</span>
            </div>
          </div>
          <div className={styles.content_container}>
            <img src={i.pessoa2} alt="pessoa" />
            <div className={styles.content_text}>
              <p className="para-regular-2">
                “Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur, vel
                illum.”
              </p>
              <h3 className="title-bold-6">Alex bern</h3>
              <span className="para-regular-3">CEO by NOX</span>
            </div>
          </div>
        </div>

        <div className={styles.content + ' rv'}>
          <div className={styles.content_container}>
            <img src={i.pessoa3} alt="pessoa" />
            <div className={styles.content_text}>
              <p className="para-regular-2">
                “Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur, vel
                illum.”
              </p>
              <h3 className="title-bold-6">Alicia lin</h3>
              <span className="para-regular-3">CEO by Artex</span>
            </div>
          </div>
          <div className={styles.content_container}>
            <img src={i.pessoa4} alt="pessoa" />
            <div className={styles.content_text}>
              <p className="para-regular-2">
                “Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur, vel
                illum.”
              </p>
              <h3 className="title-bold-6">Merylin</h3>
              <span className="para-regular-3">CEO by Okon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
