import React from "react";
import Tarjetas from "./tarjetas"
import styles from "./styles.module.scss"

class ContainerFundaciones extends React.Component{

    render(){
        return(
            <form className={styles.contTarjetas}>
                <Tarjetas/>
                <Tarjetas/>
                <Tarjetas/>
                <Tarjetas/>
                <Tarjetas/>
                <Tarjetas/>
                <Tarjetas/>
                <Tarjetas/>
            </form>
        );
    }

}

export default ContainerFundaciones;