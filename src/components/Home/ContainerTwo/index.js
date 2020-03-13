import React from 'react';
import styles from './styles.module.scss';

class ContainerTwo extends React.Component {
    render() {
        return (
            <div className={styles.cont2}>
                <div className={styles.containerButton}>
                <button className={styles.button1}>QUIERO DONAR</button>
                <button className={styles.button2}>QUIERO PEDIR</button>
                </div>
            </div>
        );
    }
}

export default ContainerTwo;