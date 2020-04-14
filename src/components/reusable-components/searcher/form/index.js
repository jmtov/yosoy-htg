import React from 'react';
import styles from './styles.module.scss';
import lupa from '../../../../assets/lupa.png';

class Form extends React.Component {

  state = {value : ""}



  pasoPalabra = (e) =>{
    this.setState({value: e.target.value});
    this.props.buscador(e.target.value)
  }


  render() {
    console.log(this.state)
    return (
      <div action="" className={styles.containerBuscador}>
        <div className={styles.containerIcon}>
          <img src={lupa} className={styles.icon} alt="lupa" />
        </div>
        <input type="text" placeholder={this.props.contBuscador} value={this.state.value}
        className={styles.buscador}
        onChange={this.pasoPalabra}/>
      </div>
    );
  }
}

export default Form;
