import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import scaner from '../../../assets/scaner.png';
import Topbar from '../../reusable-components/topbar';
import Camara from '../camara';

function Scaner() {
  return (
    <div>
      <Topbar link={"/foundations-selector"}/>
      <div className={styles.containerText}>
        <div className={styles.contenido}>
          <h1 className={styles.title}>¡Último paso!</h1>
          <strong>
            Lo único que necesitamos para finalizar es que escanees el frente de
            tu DNI.
          </strong>
          <h2 className={styles.subtitle}> ¿Para qué necesitan mi DNI?</h2>
          <strong>
            Para asegurarnos de que el medicamento que pediste sea retirado y
            esté reservado solo para vos.
          </strong>
        </div>

      </div>
      <div className={styles.containterScaner}>
        <Link to="/camara">
          {Camara}
          <h1 className={styles.titleScan}>Escanear acá</h1> <br /> <br />
        </Link>
        <img src={scaner} className={styles.scaner} />
      </div>
    </div>
  );
}

export default Scaner;
