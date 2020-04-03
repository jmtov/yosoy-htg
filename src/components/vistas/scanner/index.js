import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import scanner from '../../../assets/scanner.png';
import Topbar from '../../reusable-components/topbar';
import Camara from '../camara';

function Scanner() {
  return (
    <div className={styles.contenedorPrincipal}>
      <Topbar />
      <div className={styles.containerText}>
        <h1 className={styles.titleEnd}>¡Último paso!</h1>
        <p className={styles.text}>
          Lo único que necesitamos para finalizar es que escanees el frente de
          tu DNI.
          </p>
        <h2 className={styles.subtitle}> ¿Para qué necesitan mi DNI?</h2>
        <p className={styles.text}>
          Para asegurarnos de que el medicamento que pediste sea retirado y
          esté reservado solo para vos.
        </p>
      </div>
      <div className={styles.containterScanner}>
        <h1 className={styles.titleScan}>Escanear acá</h1>
        <Link to="/camara"> {Camara}
          <div className={styles.containerCard}>
            <img src={scanner} className={styles.scanner} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Scanner;
