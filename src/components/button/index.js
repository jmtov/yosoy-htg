import React from "react";
import styles from "./style.module.scss"

class Button extends React.Component{
    render(){
        return(
            <button className={styles.button}>{this.props.title}</button>
        )
    }
}

export default Button;