import React from "react";
import styles from "./styles.module.scss";
import Tarjetas from "./tarjetas";

class ContPastis extends React.Component {


    render() {
        return (
            <div className={styles.contPastis}>
                <Tarjetas />
                <Tarjetas />
                <Tarjetas />
                <Tarjetas />
                <Tarjetas />
                <Tarjetas />
                <Tarjetas />
                <Tarjetas />

            </div>
        );
    }
}

export default ContPastis;
