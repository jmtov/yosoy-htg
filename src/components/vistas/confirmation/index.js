import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

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
        {/*aca va el componente home para que cuando finalices vuelvas al inicio */}
        <button className={styles.buttonEnd}>
          FINALIZAR
        </button>
      </Link>
    </div>
  );
}

export default Confirmation;
