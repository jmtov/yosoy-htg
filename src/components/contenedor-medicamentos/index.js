import React from "react";
import Tarjetas from "./tarjetas"
import styles from "./style.module.scss"

class ContainerPastis extends React.Component{

    render(){
        return(
            <form className={styles.contPastis}>
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

export default ContainerPastis;