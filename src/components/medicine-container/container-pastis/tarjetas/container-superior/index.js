import React from "react";
import styles from "./styles.module.scss"

class ContSuperior extends React.Component{

    render(){
        return(
            <div className={styles.contFondo}>
                <div className={styles.title}>
                   <h1 className={styles.font}>ATRIPLA</h1>
                </div>

                <hr/>

                <div className={styles.imgPastilla}>
                    <img src="" alt=""/>
                </div>

            </div>
        );
    }

}
export default ContSuperior;
