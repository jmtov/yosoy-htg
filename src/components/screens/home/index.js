import React from 'react';
import { Link } from 'react-router-dom';

import MedicineSelector from '../medicine-selector';
import styles from './styles.module.scss';

function Home() {
  return (
    <div className={styles.containerHome}>
      <div className={styles.containerWelcome}>
        <h1 className={styles.titleHome}>¡Hola!</h1>
        <p className={styles.textHome}>Queremos darte una mano :)</p>
        <p className={styles.textHome}>¿Cómo podemos ayudarte hoy?</p>
      </div>
      <hr className={styles.hr} />
      <div className={styles.containerButton}>
        <button type="submit" className={styles.button1}>
          QUIERO DONAR
            </button>
        <Link to="/medicine-selector">
          {MedicineSelector}
          <button type="submit" className={styles.button2}>
            QUIERO PEDIR
              </button>
        </Link>
        <footer className={styles.footer}>
          <hr className={styles.hrFoot} />
          <p className={styles.textFooter}>Copyright © 2019 YOSOY. Todos los derechos reservados.</p>
        </footer>
      </div>
    </div>
  );
}

export default Home;
