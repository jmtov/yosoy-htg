import React from 'react';

import Targets from './targets';
import styles from './styles.module.scss';

class ContainerPastis extends React.Component {
  render() {
    return (
      <div>
        <h4>{this.props.title}</h4>
        <form className={styles.contPastis}>
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

export default ContainerPastis;
