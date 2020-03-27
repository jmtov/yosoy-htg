import React from "react";
import styles from "./style.module.scss";

class ContInferior extends React.Component{

    render(){
        return(
            <div className={styles.cont2}>
                <p><b>Direccion:</b></p>
                <p>Entre Rios 671 Olivos.</p>
                <p><b>Horarios:</b></p>
                <p>9. a 19.</p>
            </div>
        )
    }
}

export default ContInferior;