import React from 'react';
import styles from './styles.module.scss';
import Topbar from '../../reusable-components/topbar';
import Searcher from '../../reusable-components/searcher';
import ContainerFundaciones from './contenedor-fundaciones';
import Button from '../../reusable-components/button';
import { Link } from 'react-router-dom';
import Scanner from '../scanner';


function FoundationsSelector() {
  return (
    <div>
      <Topbar link={"/tablet"}/>
      <div className={styles.contenedorPrincipal}>
        <Searcher placeholder="¿En qué fundación querés retirar?" />
        <ContainerFundaciones title="FUNDACIONES AMIGAS" />
        <Link to="/scanner">
          {Scanner}
          <Button title="CONTINUAR" />
        </Link>
      </div>
    </div>
  );
}

export default FoundationsSelector;
