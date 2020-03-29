import React from 'react';
import Topbar from '../../reusable-components/topbar';
import Searcher from "../../reusable-components/searcher";
import ContainerPastis from "../../medicine-container";
import Button from "../../reusable-components/button";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";




class MedicineSelector extends React.Component {
  render() {
    return (
      <div>
        <Topbar />
        <div className={styles.contenedorPrincipal}>
          <Searcher contBuscador="¿Que medicamentos estas buscando?" title="MEDICAMENTOS UTILIZADOS" />
          <ContainerPastis />
          <Link to="/tablet">
            {}
            <Button title="Continuar" />
          </Link>
        </div>

      </div>
    );
  }


}

export default MedicineSelector;
