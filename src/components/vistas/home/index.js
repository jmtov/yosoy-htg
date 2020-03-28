import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

function Home() {
  return (
    <div className={styles.background}>
      <div className={styles.home}>
        <div className={styles.cont1}>
          <div className={styles.containerHome}>
            <h1 className={styles.title}>¡Hola!</h1>
            <strong>Queremos darte una mano :)</strong>
            <br />
            <strong>¿Cómo podemos ayudarte hoy?</strong>
          </div>
        </div>
        <hr className={styles.hr} />
        <div className={styles.cont2}>
          <div className={styles.containerButton}>
            <button type="submit" className={styles.button1}>
              QUIERO DONAR
            </button>
            <Link to="/medicine-selector">
              {}
              <button type="submit" className={styles.button2}>
                QUIERO PEDIR
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
