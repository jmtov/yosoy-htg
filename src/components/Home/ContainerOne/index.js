import React from 'react';
import styles from './styles.module.scss';

class ContainerOne extends React.Component {
    render() {
        return (
            <div className={styles.cont1}>
                <div className={styles.containerHome}>
                    <h1 className={styles.title}>¡Hola!</h1>
                    <p>Queremos darte una mano :)</p>
                    <p>¿Cómo podemos ayudarte hoy?</p>
                </div>
            </div>
        );
    }
}

export default ContainerOne;