import React from 'react';
import styles from './styles.module.scss';

class ContainerTwo extends React.Component {
    render() {
        return (
            <div className={styles.cont2}>
                <div className={styles.containerButton}>
                <button className={styles.button1}><strong>QUIERO DONAR</strong></button>
                <button className={styles.button2}><strong>QUIERO PEDIR</strong></button>
                </div>
            </div>
        );
    }
}

export default ContainerTwo;