import React from 'react';
import styles from './styles.module.scss';

class Cards extends React.Component {
  render() {
    return (
      <div className={styles.containerCards}>
        <div className={styles.containerBackground}>
          <div className={styles.containerTitle}>
            <h1 className={styles.titleFoundation}>{this.props.titleFoundation}</h1>
          </div>
          <hr />
          <div className={styles.containerDates}>
            <p className={styles.titleDate}>Dirección:</p>
            <p>Entre Ríos 671 Olivos.</p>
            <p className={styles.titleDate}>Horarios:</p>
            <p>9. a 19.</p>
          </div>
        </div>
        <input type="checkbox" name="checkbox" className={styles.checkbox} />
      </div>
    );
  }
}

export default Cards;
