import React from "react";
import styles from "./styles.module.scss"

class Form extends React.Component{

    render(){
        return(
            <form action="" className={styles.buscador}>
                <div className={styles.lupa1}>
                    <img src="./back.png" className={styles.lupa} alt=""/>
                </div>
                <input type="text" placeholder={this.props.contBuscador} className={styles.buscador2}/>
            </form>
        )
    }

}

export default Form;