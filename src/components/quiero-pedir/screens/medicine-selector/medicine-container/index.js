import React from 'react';

import Card from './cards';
import styles from './styles.module.scss';

class ContainerPastis extends React.Component {
  render() {
    return (
      <div>
        <h4 className={styles.titleContainer}>{this.props.title}</h4>
        <form className={styles.contCards}>
          <Card titleMedicine="ATRIPLA"/>
          <Card titleMedicine="STRIBILD"/>
          <Card titleMedicine="ATRIPLA"/>
          <Card titleMedicine="STRIBILD"/>
          <Card titleMedicine="GENVOYA"/>
          <Card titleMedicine="OFDESEY"/>
          <Card titleMedicine="GENVOYA"/>
          <Card titleMedicine="OFDESEY"/>
        </form>
      </div>
    );
  }
}

export default ContainerPastis;
