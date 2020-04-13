import React from 'react';
import styles from './styles.module.scss';
import Topbar from '../../reusable-components/topbar';
import Searcher from '../../reusable-components/searcher';
import ContainerFundaciones from './contenedor-fundaciones';
import Button from '../../reusable-components/button';
import { Link } from 'react-router-dom';

function FoundationsSelector() {
  return (
    <div>
      <Topbar link={"/tablet"} />
      <div className={styles.contenedorPrincipal}>
        <Searcher placeholder="¿En qué fundación querés retirar?" />
        <ContainerFundaciones title="FUNDACIONES AMIGAS" />
        <Link to="/scanner">
          <Button title="CONTINUAR" />
        </Link>
        <footer className={styles.footer}>
          <hr className={styles.hrFoot} />
          <p className={styles.textFooter}>Copyright © 2019 YOSOY. Todos los derechos reservados.</p>
        </footer>
      </div>
    </div>
  );
}

export default FoundationsSelector;
