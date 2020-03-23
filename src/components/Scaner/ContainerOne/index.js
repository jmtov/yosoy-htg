import React from 'react';
import styles from './styles.module.scss';

class ContainerOne extends React.Component {
    render() {
        return (
            <div className={styles.cont1}>
                <div className={styles.containerScaner}>
                    <h1 className={styles.title}>¡Último paso!</h1>
                    <strong>Lo único que necesitamos para finalizar es que escanees el frente de tu DNI.</strong>
                    <h2 className={styles.subtitle}> ¿Para qué necesitan mi DNI?</h2>
                    <strong>Para asegurarnos de que el medicamento que pediste sea retirado y esté reservado solo para vos </strong>
                </div>
            </div>
        );
    }
}

export default ContainerOne;