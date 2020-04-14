import React from 'react';
import styles from './styles.module.scss';
import images from '../../../assets';
import Logo from './logo';
import Back from './back';

function Topbar(props) {
  return (
    <nav className={styles.nav}>
      <Back link={props.link} assets={images[0].url} />
      <Logo assets={images[1].url} />
    </nav>
  );
}

export default Topbar;
