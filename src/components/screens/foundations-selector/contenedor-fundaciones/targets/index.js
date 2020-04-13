import React from 'react';
import styles from './styles.module.scss';

class Targets extends React.Component {

  pasoId = () => {
    this.props.cambio(this.props.datos.id)
  }


  render(){
  return (
    <div className={styles.containerTarget}>
      <div className={styles.containgerFondo}>
        <div className={styles.containterTitle}>
          <h4 className={styles.title}>{this.props.datos.title}</h4>
        </div>
        <hr />
        <div className={styles.containerDates}>
          <p><b>Direccion:</b></p>
          <p>
            {this.props.datos.direccion}<span> </span>
            {this.props.datos.altura}<span> </span>
            {this.props.datos.localidad}.</p>
          <p><b>Horarios:</b></p>
          <p>
            {this.props.datos.horarioApertura}
            <span> </span>a<span> </span>
            {this.props.datos.horarioCierre}.</p>
        </div>
      </div>
      <input type="radio" name="card" id={this.props.datos.id} className={styles.radio3} required
      onChange={this.pasoId}/>
    </div>
  );
}
}

export default Targets;
