import React from 'react';
import styles from './styles.module.scss';
/*import Medicamento from '../../../../../assets/atripla.png'; en la linea 18 va este codigo <img src={Medicamento} alt='medicamento' className={styles.medicamento}/>*/
import Bar from './qualitybar';

class Card extends React.Component {
    render(

    ) {
        return (
            <div className={styles.card}>
                <h3 className={styles.title}>ATRIPLA</h3>
                <hr className={styles.hr}></hr>
                <h3 className={styles.subtitle}>Composicion</h3>
                <div className={styles.text}>
                    <p>Efavirenz 600mg</p>
                    <p>Emtricitabina 200mg</p>
                    <p>Tenofovir 300mg</p>
                </div>
                <h3 className={styles.subtitle}>Cantidad de pastillas</h3>
                <Bar />
                <p className={styles.alert}>Recorda pedir solo la cantidad de pastillas que necesites para que siempre haya medicacion disponible para otre</p>
                
                <input type='checkbox' name='checkbox'></input>
                <u>Acepto terminos y condiciones</u>
            </div>
    );
} 
}

export default Card;
