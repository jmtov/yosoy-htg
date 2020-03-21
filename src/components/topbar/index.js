import React from 'react';
import styles from './styles.module.scss';
import ButtonBack from '../../assets/buttonback.png';
import Logo from '../../assets/logo.png';

class Topbar extends React.Component {
    render() {
        return(
            <div className={styles.topbar}>
                <nav>
                    <div>
                        <button className={styles.buttonback}>
                            <img src={ButtonBack} alt='button back'/>
                        </button>
                    </div>
                    <div className={styles.logo}>
                        <img src={Logo} alt='logo yo soy'/>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Topbar;