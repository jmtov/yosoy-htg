import React from 'react';

import Topbar from '../../reusable-components/topbar';
import Searcher from '../../reusable-components/searcher';
import ContainerPastis from './medicine-container';
import Button from '../../reusable-components/button';
import Medicines from '../../../dates/medicines';
import { withRouter } from 'react-router-dom';

import styles from './styles.module.scss';

class MedicineSelectorDonar extends React.Component {

  state = {
    id: 0,
    buscador: ""
  }

  cambio = (param) => {
    this.setState({ id: param });
  }

  buscador = (palabra) => {
    this.setState({ buscador: palabra });
  }

  submit = (e) => {
    e.preventDefault();
    this.props.medicamentos(this.state.id);
    this.props.history.push("tablet-donar");
  }

  render() {
    console.log(this.state);

    return (
      <div className={styles.containerPrincipal}>
        <Topbar link={"/"} />
        <form onSubmit={this.submit} className={styles.containerTwo}>
          <Searcher contBuscador="¿Qué medicamento querés donar?" buscador={this.buscador} title="MEDICAMENTOS MÁS DONADOS" />
          <ContainerPastis datosMedicamentos={Medicines} cambio={this.cambio} contBuscador={this.state.buscador} />
          <Button title="CONTINUAR" go={"tablet-donar"} idMedicamentos={this.state.id} />
        </form>
        <footer className={styles.footer}>
          <hr className={styles.hrFoot} />
          <p className={styles.textFooter}>Copyright © 2019 YOSOY. Todos los derechos reservados.</p>
        </footer>
      </div>
    );
  }
}
export default withRouter(MedicineSelectorDonar);
