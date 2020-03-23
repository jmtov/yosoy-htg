import React from "react";
import styles from "./style.module.scss";

class ContInferior extends React.Component{

    render(){
        return(
            <div className={styles.radio2}>
                <p className={styles.gramos}>100 mg</p>
                <input type="radio" name="card" id="1" className={styles.radio3}/>
            </div>
        )
    }
}

export default ContInferior;