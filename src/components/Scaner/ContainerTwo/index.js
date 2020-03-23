import React from 'react';
import styles from './styles.module.scss'
import Icon from './assets/Icon.png'
class ContainerTwo extends React.Component {
    render() {
        return (
            <div className={styles.cont2}>
                <div className={styles.containercamera}>    
                    <h1 className={styles.subtitle}>Escanear acá</h1> <br/> <br/>
                     <img src={Icon} className={styles.Icon}></img>
                </div>
            </div>
        );
    }
}

export default ContainerTwo;





