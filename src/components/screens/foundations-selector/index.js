import React from 'react';
import styles from './styles.module.scss';
import Topbar from '../../reusable-components/topbar';
import Searcher from '../../reusable-components/searcher';
import ContainerFundaciones from './contenedor-fundaciones';
import Button from '../../reusable-components/button';
import { withRouter } from 'react-router-dom';
import Foundations from '../../dates/foundations';

class FoundationsSelector extends React.Component {

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
    this.props.fundacion(this.state.id);
    this.props.history.push("/scanner");
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <Topbar link={"/Tablet"} />
        <form className={styles.contenedorPrincipal} onSubmit={this.submit}>
          <Searcher contBuscador="¿En que fundacion queres retirar?" buscador={this.buscador} />
          <ContainerFundaciones title="FUNDACIONES AMIGAS" datosFundaciones={Foundations} cambio={this.cambio} contBuscador={this.state.buscador} />
          <Button title="CONTINUAR" idFundaciones={this.state.id} />
        </form>
      </div>
    );
  }
}

export default withRouter(FoundationsSelector);
