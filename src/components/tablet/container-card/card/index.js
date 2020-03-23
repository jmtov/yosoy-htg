import React from 'react';
import styles from './styles.module.scss';
import Composition from './composition';
import Alert from './alert';
import Terms from './terms'
import Medicamento from '../../../assets/atripla.png';
import Bar from './qualitybar';

class Card extends React.Component {  
 
    render(
      
    ) {
        return(
            <div className={styles.Card}>
                <h3 className={styles.title}>ATRIPLA</h3>
                <hr className={styles.hr}></hr>
                <img src={Medicamento} alt='medicamento' className={styles.medicamento}/>
                <Composition/>
                <h3 className={styles.subtitle}>Cantidad de pastillas</h3>
                <Bar/>
                <Alert/>
                <Terms/>
            </div>
        );
    }
}

export default Card;