import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import Home from '../home';

function Confirmation() {
  return (
    <div className={styles.contenedorPrincipal}>
      <div className={styles.containerText}>
        <h1 className={styles.title}>¡Todo listo!</h1>
        <p>La Fundacion Hablemos de HIV te está esperando.</p>
        <p className={styles.text}> Recordá que solo podemos reservar la medicación que pediste durante las proximas 72hs.</p>
        <h2 className={styles.subtitle}>¿Qué tengo que llevar?</h2>
        <p className={styles.text}>Solo necesitás presentar tu DNI.</p>
      </div>
      <Link to="/">
        {Home}
        <button className={styles.buttonEnd}>
          FINALIZAR
        </button>
      </Link>
      <footer className={styles.footer}>
        <hr className={styles.hrFoot} />
        <p className={styles.textFooter}>Copyright © 2019 YOSOY. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Confirmation;
