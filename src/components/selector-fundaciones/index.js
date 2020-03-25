import React from 'react';
import Navbar from '../components/Navbar';
import Boton from '../components/boton';
import Buscador from '../components/buscador';
import styles from "./style.module.scss";
import ContainerFundaciones from "../components/contenedor-fundaciones"



function Selector_fundacion() {
  return (
    <div>
      <Navbar/>
      <div className={styles.contenedorPrincipal}>
        <Buscador contBuscador="¿En que fundacion queres retirar?" title="FUNDACIONES AMIGAS"/>
        <ContainerFundaciones/>
        <Boton title="Continuar"/>
      </div>

    </div>
  );
}

export default Selector_fundacion;
