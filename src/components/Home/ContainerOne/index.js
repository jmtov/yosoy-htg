import React from 'react';
import styles from './styles.module.scss';

class ContainerOne extends React.Component {
    render() {
        return (
            <div className={styles.cont1}>
                <div className={styles.containerHome}>
                    <h1 className={styles.title}>¡Hola!</h1>
                    <strong>Queremos darte una mano :)</strong><br/>
                    <strong>¿Cómo podemos ayudarte hoy?</strong>
                </div>
            </div>
        );
    }
}

export default ContainerOne;