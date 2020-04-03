import React from 'react';
import Cards from './cards';
import styles from './styles.module.scss';

class ContainerFundaciones extends React.Component {
  render() {
    return (
      <div>
        <h4 className={styles.titleContainer}>{this.props.title}</h4>
        <form className={styles.contCards}>
          <Cards titleFoundation="HABLEMOS DE HIV" />
          <Cards titleFoundation="HELIOS SALUD"/>
          <Cards titleFoundation="HABLEMOS DE HIV"/>
          <Cards titleFoundation="HELIOS SALUD"/>
          <Cards titleFoundation="FUNDACIÓN HUESPED"/>
          <Cards titleFoundation="FUNDACIÓN ROSAS"/>
          <Cards titleFoundation="FUNDACIÓN HUESPED"/>
          <Cards titleFoundation="FUNDACIÓN ROSAS"/>
        </form>
      </div>
    );
  }
}

export default ContainerFundaciones;
