import React from 'react';
import camara from '../../assets/camara.png';
import styles from './styles.module.scss';

class Camara extends React.Component {
    render() {
        return(
            <div>
                    <div className={styles.cam}>
                        <img src={camara} alt='camara'/>
                    </div>
                
            </div>
        );
    }
}

export default Camara;