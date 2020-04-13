import React from 'react';
import styles from './styles.module.scss';

class Tarjetas extends React.Component {

  pasoId = () => {
    this.props.cambio(this.props.datos.id)
  }


  render() {
    return (
      <div className={styles.tarjeta}>
        <div className={styles.contFondo}>
          <div className={styles.title}>
            <h1 className={styles.font}>{this.props.datos.title}</h1>
          </div>
          <hr />
          <div className={styles.imgPastilla}>
            <img src="" alt="" />
          </div>
        </div>
        <div className={styles.radio2}>
          <p className={styles.gramos}>{this.props.datos.gramos} mg</p>
        </div>
        <input type="radio" name="card" id={this.props.datos.id} className={styles.radio3} required 
        onChange={this.pasoId}
        />
      </div>
    );
  }
}

export default Tarjetas;