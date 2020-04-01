import React from 'react';
import Targets from './targets';
import styles from './styles.module.scss';

class ContainerFundaciones extends React.Component {

  render() {
    return (
      <form className={styles.contTarjetas}>
        <Targets />
        <Targets />
        <Targets />
        <Targets />
        <Targets />
        <Targets />
        <Targets />
        <Targets />
      </form>
    );
  }
}

export default ContainerFundaciones;
