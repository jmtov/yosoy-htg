import React from 'react';
import styles from './styles.module.scss';
import atripla from '../../../assets/atripla.png';

class Targets extends React.Component {
  render() {
    return (
      <div className={styles.target}>
        <div className={styles.contFondo}>
          <div className={styles.title}>
            <h1>ATRIPLA</h1>
          </div>
          <hr />
            <img className={styles.imgPastilla} src={atripla} alt="medicineImagen" />
        </div>
        <div className={styles.containerInferior}>
          <p>100 mg</p>
        </div>
        <input type="checkbox" name="checkbox" className={styles.radio} />
      </div>
    );
  }
}

export default Targets;
