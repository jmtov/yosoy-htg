import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import scanner from '../../../assets/scanner.png';
import Topbar from '../../reusable-components/topbar';

function Scanner() {
  return (
    <div>
      <Topbar />
      <div className={styles.containerText}>
        <div className={styles.contenido}>
          <h1 className={styles.title}>¡Último paso!</h1>
          <p>
            Lo único que necesitamos para finalizar es que escanees el frente de
            tu DNI.
          </p>
          <h2 className={styles.subtitle}> ¿Para qué necesitan mi DNI?</h2>
          <p>
            Para asegurarnos de que el medicamento que pediste sea retirado y
            esté reservado solo para vos.
          </p>
        </div>
      </div>
      <div className={styles.containterScanner}>
        <Link to="/camara">
          {/*aca adentro va el componente que le sigue*/}
          <h1 className={styles.titleScan}>Escanear acá</h1>
        </Link>
        <img src={scanner} className={styles.scanner} />
      </div>
    </div>
  );
}

export default Scanner;
