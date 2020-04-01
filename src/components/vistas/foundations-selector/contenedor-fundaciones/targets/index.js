import React from 'react';
import styles from './styles.module.scss';

function Targets() {
  return (
    <div className={styles.containerTarget}>
      <div className={styles.containgerFondo}>
        <div className={styles.containterTitle}>
          <h4 className={styles.title}>HABLEMOS DE HIV</h4>
        </div>
        <hr />
        <div className={styles.containerDates}>
          <p><b>Direccion:</b></p>
          <p>Entre Rios 671 Olivos.</p>
          <p><b>Horarios:</b></p>
          <p>9. a 19.</p>
        </div>
      </div>
      <input type="radio" name="card" id="1" className={styles.radio3} />
    </div>
  );
}

export default Targets;
