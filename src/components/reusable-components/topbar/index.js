import React from 'react';
import styles from './styles.module.scss';
import logo from '../../../assets/logo.png';
import back from '../../../assets/back.png';

function Topbar() {
  return (
    <nav className={styles.nav}>
      <button className={styles.button}>
        <img src={back} className={styles.iconBack} alt="back" />
      </button>
      <div>
        <img src={logo} className={styles.iconLogo} alt="logo" />
      </div>
    </nav>
  );
}

export default Topbar;
