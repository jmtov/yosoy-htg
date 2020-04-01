import React from 'react';

import Card from './cards';
import styles from './styles.module.scss';

class ContainerPastis extends React.Component {
  render() {
    return (
      <div>
        <h4 className={styles.titleContainer}>{this.props.title}</h4>
        <form className={styles.contPastis}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </form>
      </div>
    );
  }
}

export default ContainerPastis;
