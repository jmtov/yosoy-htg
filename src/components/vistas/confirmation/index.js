import React from 'react';
import styles from './styles.module.scss';
import { Link } from "react-router-dom";


function Confirmation() {
    return (
        <div className={styles.cont1}>
            <div className={styles.info}>
                <h1 className={styles.title}>¡Todo listo!</h1>
                <p className={styles.text}>La Fundacion Hablemos de HIV te está esperando.<br></br>
                <br></br> Recordá que solo podemos reservar la medicación que pediste durante las proximas 72hs.</p>
                <h2 className={styles.subtitle}>¿Qué tengo que llevar?</h2>
                <p className={styles.text}>Solo necesitás presentar tu DNI.</p>   
                </div>             
                    <Link to="/">
                        {}
                        <button className={styles.button1}>
                            FINALIZAR
                        </button>
                    </Link> 
        </div>
    );
}

export default Confirmation;
