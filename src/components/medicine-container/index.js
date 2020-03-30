import React from 'react';

import Tarjetas from './targets';
import styles from './styles.module.scss';

function ContainerPastis() {

  return (
    <form className={styles.contPastis}>
      <Tarjetas />
      <Tarjetas />
      <Tarjetas />
      <Tarjetas />
      <Tarjetas />
      <Tarjetas />
      <Tarjetas />
      <Tarjetas />
    </form>
  );
}

export default ContainerPastis;
