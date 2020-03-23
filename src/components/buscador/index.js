import React from "react";
import styles from "./style.module.scss"
import Form from "./formulario";

class Buscador extends React.Component{
    render(){
        return(
            <div className={styles.contBuscador}>
                <Form contBuscador={this.props.contBuscador}/>
                <h4>{this.props.title}</h4>
            </div>
        )
    }
}

export default Buscador;