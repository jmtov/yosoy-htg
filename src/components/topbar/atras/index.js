import React from "react";

import styles from "./style.module.scss";

class Atras extends React.Component{
    render(){
        return(
            <ul className={styles.ul}>
                <li>
                    <button className={styles.button}>
                        <img src={this.props.assets} className={styles.assets} alt=""/>
                    </button>
                </li>
            </ul>
        );
    }
}

export default Atras;