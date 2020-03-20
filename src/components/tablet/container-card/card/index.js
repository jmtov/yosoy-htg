import React from 'react';
import styles from './styles.module.scss';
import Composition from './composition';
import Alert from './alert';
import Terms from './terms'

class Card extends React.Component {
    render() {
        return(
            <div className={styles.Card}>
                <h1>ATRIPLA</h1>
                <hr className={styles.hr}></hr>
                <img></img>
                <Composition/>
                <h3>Cantidad de pastillas</h3>
                <input type='range' name='range'></input>
                <Alert/>
                <Terms/>
            </div>
        );
    }
}

export default Card;