import React from 'react';
import Tarjetas from './targets';
import styles from './styles.module.scss';

class ContainerPastis extends React.Component {

  render() {
    return (
      <div>
        <h4>{this.props.title}</h4>
        <div className={styles.contPastis}>
          {
            this.props.datosMedicamentos.map((tarjetas) => {
              let title = tarjetas.title;
              let lista = title.split(" ");
              let cantidad = this.props.contBuscador.length;
              let texto = this.props.contBuscador.toUpperCase();
              if (this.props.contBuscador == "") {
                return <Tarjetas datos={tarjetas} cambio={this.props.cambio} />
              }
              else {
                for (let i = 0; i < lista.length; i++) {
                  if (cantidad <= lista[i].length) {
                    let comparacion = "";
                    for (let x = 0; x < cantidad; x++) {
                      comparacion = comparacion + lista[i][x];
                    }
                    if (comparacion == texto) {
                      return <Tarjetas datos={tarjetas} cambio={this.props.cambio} />
                    }
                  }
                }
              }
            })
          }
        </div>
      </div>
    );
    /*
      return (
        <div className={styles.contPastis}>
          {
            this.props.datosMedicamentos.map((tarjetas)=>{
              return <Tarjetas datos={tarjetas} cambio={this.props.cambio}/>
            })
          }
          
        </div>
      );
      */
  }
}

export default ContainerPastis;
