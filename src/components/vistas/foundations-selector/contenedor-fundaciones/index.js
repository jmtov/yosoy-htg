import React from 'react';
import Targets from './targets';
import styles from './styles.module.scss';

class ContainerFundaciones extends React.Component {

  render() {
    return (
      <div>
        <h4 className={styles.titleContainer}>{this.props.title}</h4>
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
      </div>
    );
  }
}

export default ContainerFundaciones;
