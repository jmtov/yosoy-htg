import React from "react";
import styles from "./style.module.scss"
import ContSuperior from "./contSuperior";
import ContInferior from "./contInferior";

class Tarjetas extends React.Component{


    render(){
        return(
            <div className={styles.tarjeta}>
                <div className={styles.contFondo}>
                    <ContSuperior/>
                    <hr/>
                    <ContInferior/>
                </div>
                <input type="radio" name="card" id="1" className={styles.radio3}/>
            </div>
        );
    }
}

export default Tarjetas;