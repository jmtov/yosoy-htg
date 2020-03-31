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
      <Topbar />
      <div className={styles.contenedorPrincipal}>
        <Searcher contBuscador="¿En que fundacion queres retirar?" title="FUNDACIONES AMIGAS" />
        <ContainerFundaciones />
        <Link to="/scanning">
          {/*ACA VA EL COMPONENTE QUE LE SIGUE, HABRIA QUE IMPORTARLO EN LA LINEA 8*/}
          <Button title="CONTINUAR" />
        </Link>
      </div>
    </div>
  );
}

export default FoundationsSelector;
