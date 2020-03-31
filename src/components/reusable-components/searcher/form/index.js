import React from 'react';
import styles from './styles.module.scss';
import lupa from '../../../../assets/lupa.png';

class Form extends React.Component {

  render() {
    return (
      <form action="" className={styles.containerBuscador}>
        <div className={styles.containerLupa}>
          <img src={lupa} className={styles.lupa} alt="lupa" />
        </div>
        <input type="text" placeholder={this.props.contBuscador} className={styles.buscador} />
      </form>
    );
  }
}

export default Form;
