import React from 'react';
import styles from './styles.module.scss';
import imgNavbar from "../../../assets";
import Logo from './logo';
import Back from './back';

function Topbar() {
    return(
        <nav className={styles.nav}>
            <Back assets={imgNavbar[0]}/>
            <Logo assets={imgNavbar[1]}/>
        </nav>
    );
}

export default Topbar;