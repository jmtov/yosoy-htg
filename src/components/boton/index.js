import React from "react";
import styles from "./style.module.scss"

class Boton extends React.Component{
    render(){
        return(
            <button className={styles.boton}>{this.props.title}</button>
        )
    }
}

export default Boton;