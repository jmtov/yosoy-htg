import React from 'react';
import { Link } from 'react-router-dom';

import Topbar from '../../reusable-components/topbar';
import Searcher from '../../reusable-components/searcher';
import ContainerPastis from '../../medicine-container';
import Button from '../../reusable-components/button';
import Tablet from '../tablet';

import styles from './styles.module.scss';

function MedicineSelector() {
  return (
    <div className={styles.containerPrincipal}>
      <Topbar link={"/"}/>
        <Searcher placeholder="¿Qué medicamentos estás buscando?" />
        <ContainerPastis title="MEDICAMENTOS MÁS UTILIZADOS" />
      <Link to="/tablet">
        {Tablet}
        <Button title="CONTINUAR" />
      </Link>
    </div>
  );
}

export default MedicineSelector;
