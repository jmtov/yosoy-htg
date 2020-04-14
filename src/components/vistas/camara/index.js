import React from 'react';
import styles from './styles.module.scss';
import Topbar from '../../reusable-components/topbar';
/*import camara from '../assets/camara.png'; abajo del div cam va este codigo <img src={camara} alt='camara' />*/
import Button from "../../reusable-components/button";
import { withRouter } from 'react-router-dom';

class Camara extends React.Component {

    submit = (e) =>{
        e.preventDefault();
        this.props.history.push("/confirmation");
      }

    render() {
        return (
            <div>
                <Topbar link={"/scanning"}/>
                <form className={styles.cam} onSubmit={this.submit}>
                    <Button title="Continuar"/>
                </form>
            </div>
        );
    }
}

export default withRouter(Camara);