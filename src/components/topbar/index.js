import React from 'react';
import styles from './styles.module.scss';
import imgNavbar from "../Assets"
import Atras from './atras';
import Logo from './logo';

function Topbar() {
    return(
        <nav className={styles.nav}>
            <Atras assets={imgNavbar[0]}/>
            <Logo assets={imgNavbar[1]}/>
        </nav>
    );
}

export default Topbar;