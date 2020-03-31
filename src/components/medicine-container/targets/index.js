import React from 'react';
import styles from './styles.module.scss';

class Tarjetas extends React.Component {
  render() {
    return (
      <div className={styles.tarjeta}>
        <div className={styles.contFondo}>
          <div className={styles.title}>
            <h1 className={styles.font}>ATRIPLA</h1>
          </div>
          <hr />
          <div className={styles.imgPastilla}>
            <img src="" alt="" />
          </div>
        </div>
        <div className={styles.radio2}>
          <p className={styles.gramos}>100 mg</p>
        </div>
        <input type="radio" name="card" id="1" className={styles.radio3} />
      </div>
    );
  }
}

export default Tarjetas;
