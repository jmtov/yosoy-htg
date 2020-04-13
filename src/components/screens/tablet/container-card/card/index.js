import React from 'react';
import styles from './styles.module.scss';
import Stick from './stick';
/*import Medicamento from '../../../../../assets/atripla.png'; en la linea 18 va este codigo <img src={Medicamento} alt='medicamento' className={styles.medicamento}/>*/


class Card extends React.Component {
  render() {
    return (
      <div className={styles.card}>
        <h3 className={styles.title}>ATRIPLA</h3>
        <hr className={styles.hr}></hr>
        <h3 className={styles.subtitle}>Composición</h3>
        <div className={styles.text}>
          <p>Efavirenz 600mg</p>
          <p>Emtricitabina 200mg</p>
          <p>Tenofovir 300mg</p>
        </div>
        <h3 className={styles.subtitle}>Cantidad de pastillas</h3>
        <Stick />
        <p className={styles.alert}>Recordá pedir solo la cantidad de pastillas que necesites para que siempre haya medicación disponible para otres.</p>
        <div className={styles.condition}>
          <input type='checkbox' name='checkbox' className={styles.radio}></input>
          <u>Acepto términos y condiciones</u>
        </div>
      </div>
    );
  }
}

export default Card;
