import React from 'react';
import styles from './styles.module.scss';


function Home() {
    return(
        <div className={styles.home}>
            <div className={styles.cont1}>
                <div className={styles.containerHome}>
                    <h1 className={styles.title}>¡Hola!</h1>
                    <strong>Queremos darte una mano :)</strong><br/>
                    <strong>¿Cómo podemos ayudarte hoy?</strong>
                </div>
            </div>
            <hr className={styles.hr}/>
            <div className={styles.cont2}>
                <div className={styles.containerButton}>
                <button className={styles.button1}>QUIERO DONAR</button>
                <button className={styles.button2}>QUIERO PEDIR</button>
                </div>
            </div>
        </div>
    );
}

export default Home;