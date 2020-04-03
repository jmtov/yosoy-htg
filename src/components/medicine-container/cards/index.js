import React from 'react';
import styles from './styles.module.scss';
import atripla from '../../../assets/atripla.png';

class Card extends React.Component {
  render() {
    return (
      <div className={styles.containerCards}>
        <div className={styles.containerBackground}>
          <div className={styles.containerTitle}>
            <h1 className={styles.titleMedicine}>{this.props.titleMedicine}</h1>
          </div>
          <hr />
          <img className={styles.imgPastilla} src={atripla} alt="medicineImagen" />
        </div>
        <div className={styles.containerDates}>
          <p className={styles.grams}>100 mg</p>
        </div>
        <input type="checkbox" name="checkbox" className={styles.checkbox} />
      </div>
    );
  }
}

export default Card;
