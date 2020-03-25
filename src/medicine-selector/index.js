import React from 'react';
import Topbar from '../components/topbar';
import ContainerPastis from "../components/contenedor-medicamentos";
import Button from '../components/button';
import Searcher from '../components/searcher';
import styles from "./style.module.scss";



class MedicineSelector extends React.Component {
  render() {
    return(
      <div>    

        <Topbar/>
         <div className={styles.contenedorPrincipal}>
          <Searcher contBuscador="¿Que medicamentos estas buscando?" title="MEDICAMENTOS UTILIZADOS"/>
          <ContainerPastis/>
          <Button title="Continuar"/>
        </div>

    </div>
    );
  }

 
}

export default MedicineSelector;
