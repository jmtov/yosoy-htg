import React from 'react';
import { withRouter } from 'react-router-dom';
import Topbar from '../../reusable-components/topbar';
import ContainerCard from './container-card';
import Button from '../../reusable-components/button';
import styles from './styles.module.scss';

class Tablet extends React.Component {
  submit = (e) => {
    e.preventDefault();
    this.props.history.push("/foundations-selector");
  }
  render() {
    return (
      <div className={styles.containerTabletMain}>
        <Topbar link={"medicine-selector"} />
        <div className={styles.containerTablet}>
          <ContainerCard />
          <form onSubmit={this.submit} className={styles.containerBut}>
            <Button title="CONTINUAR" />
          </form>
          <footer className={styles.footer}>
            <hr className={styles.hrFoot} />
            <p className={styles.textFooter}>Copyright © 2019 YOSOY. Todos los derechos reservados.</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default withRouter(Tablet);
