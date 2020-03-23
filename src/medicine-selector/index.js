import React from 'react';
import Topbar from '../components/topbar';
import ContainerPastis from "../components/contenedor-medicamentos";
import Boton from '../components/boton';
import Buscador from '../components/buscador';
import styles from "./style.module.scss";



class MedicineSelector extends React.Component {
  render() {
    return(
      <div>    

        <Topbar/>
         <div className={styles.contenedorPrincipal}>
          <Buscador contBuscador="¿Que medicamentos estas buscando?" title="MEDICAMENTOS UTILIZADOS"/>
          <ContainerPastis/>
          <Boton title="Continuar"/>
        </div>

    </div>
    );
  }

 
}

export default MedicineSelector;
