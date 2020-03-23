import React from 'react';
import styles from './styles.module.scss'

class ContainerOne extends React.Component {
    render() {
        return (
            <div className={styles.cont1}>
                <div className={styles.containerConfirmation}>
                    <h1 className={styles.title}>¡Todo listo!</h1>
                    <strong >La Fundacion Hablemos de HIV te está esperando.</strong>
                    <div className={styles.strong}>
                     <strong >Recordá que solo podemos reservar la medicación que pediste durante las proximas 72hs.</strong>
                    </div>
                     <h2 className={styles.subtitle}>¿Qué tengo que llevar?</h2>
                     <strong >Solo necesitás presentar tu DNI.</strong>

                      <div className={styles.containerButton}>
                
                       <button className={styles.button1}><strong>FINALIZAR</strong></button>

                      </div>
                </div>
            </div>
        );
    }
}

export default ContainerOne;