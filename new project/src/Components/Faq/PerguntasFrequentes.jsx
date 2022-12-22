import React, { useState } from 'react';
import styles from './PerguntasFrequentes.module.css';
import image from '../Utils/imgs';

const PerguntasFrequentes = () => {
  const [ativo, setAtivo] = useState(0);

  const toggle = (i) => {
    if (ativo == i) {
      return setAtivo(null);
    }

    setAtivo(i);
  };

  return (
    <div className={styles.accordion_container}>
      <div className={styles.accordion + ' container'}>
        {dados.map((item, i) => (
          <div className={styles.accordion_item}>
            <div
              className={styles.accordion_pergunta}
              onClick={() => toggle(i)}
            >
              <h2
                className={`${
                  ativo === i
                    ? 'faq_accordion_pergunta_ativo'
                    : 'faq_accordion_pergunta'
                } title-bold-4`}
              >
                {item.Pergunta}
              </h2>
              <span>
                {ativo === i ? (
                  <img src={image.menos} alt="icon -" />
                ) : (
                  <img src={image.mais} alt="icon +" />
                )}
              </span>
            </div>
            <div
              className={`${
                ativo === i ? 'faq_accordion_ativo' : 'faq_accordion_resposta'
              } para-regular-1`}
            >
              {item.Resposta}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const dados = [
  {
    Pergunta: 'What are data analytics?',
    Resposta:
      'lorem input data business data form inpur that data business',
  },
  {
    Pergunta: 'What is data mining?',
    Resposta:
      'lorem input data business data form inpur that data business',
  },
  {
    Pergunta: 'What is business intelligence?',
    Resposta:
      'lorem input data business data form inpur that data business',
  },
  {
    Pergunta: 'What are predictive analytics',
    Resposta:
      'lorem input data business data form inpur that data business',
  },
  {
    Pergunta: 'What is data visualisation?',
    Resposta:
      'lorem input data business data form inpur that data business',
  },
];

export default PerguntasFrequentes;
