import React from 'react';
import Topbar from '../../reusable-components/topbar';
import Searcher from '../../reusable-components/searcher';
import ContainerPastis from './medicine-container';
import Button from '../../reusable-components/button';
import styles from './styles.module.scss';
import Medicines from "../../dates/medicines";
import {withRouter} from "react-router-dom";

class MedicineSelector extends React.Component {

  state = {
    id: 0,
    buscador: ""
  }

  cambio = (param) =>{
    this.setState({id: param});
  }

  buscador = (palabra) =>{
    this.setState({buscador: palabra});
  }

  submit = (e) =>{
    e.preventDefault();
    this.props.medicamentos(this.state.id);
    this.props.history.push("tablet");
  }

  render(){
    console.log(this.state);

  return (
    <div className={styles.containerPrincipal}>
      <Topbar link={"/"}/>
      <form onSubmit={this.submit} className={styles.containerTwo}>
        <Searcher placeholder="¿Qué medicamentos estás buscando?" buscador={this.buscador}/>
        <ContainerPastis title="MEDICAMENTOS UTILIZADOS" datosMedicamentos={Medicines} cambio={this.cambio} contBuscador={this.state.buscador}/>
        <Button title="CONTINUAR" go={"tablet"} idMedicamentos={this.state.id}/>
      </form>
    </div>
  );
}
}

export default withRouter(MedicineSelector);
