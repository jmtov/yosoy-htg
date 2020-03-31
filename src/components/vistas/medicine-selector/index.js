import React from 'react';
import { Link } from 'react-router-dom';

import Topbar from '../../reusable-components/topbar';
import Searcher from '../../reusable-components/searcher';
import ContainerPastis from '../../medicine-container';
import Button from '../../reusable-components/button';

import styles from './styles.module.scss';

function MedicineSelector() {
  return (
    <div className={styles.containerPrincipal}>
      <Topbar />
      <div className={styles.containerTwo}>
        <Searcher contBuscador="¿Que medicamentos estas buscando?" title="MEDICAMENTOS UTILIZADOS" />
        <ContainerPastis />
      </div>
      <Link to="/tablet">
        {} {/*ACA VA LA VISTA SIGUIENTE*/}
        <Button title="CONTINUAR" />
      </Link>
    </div>
  );
}

export default MedicineSelector;
