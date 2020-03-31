import React from 'react';
import { Link } from 'react-router-dom';

import Topbar from '../../reusable-components/topbar';
import Searcher from '../../reusable-components/searcher';
import ContainerPastis from '../../medicine-container';
import Button from '../../reusable-components/button';

import styles from './styles.module.scss';

function MedicineSelector() {
  return (
    <div>
      <Topbar />
      <div className={styles.contenedorPrincipal}>
        <Searcher contBuscador="¿Que medicamentos estas buscando?" title="MEDICAMENTOS UTILIZADOS" />
        <ContainerPastis />
        <Link to="/tablet">
          {}
          <Button title="CONTINUAR" />
        </Link>
      </div>
    </div>
  );
}

export default MedicineSelector;
