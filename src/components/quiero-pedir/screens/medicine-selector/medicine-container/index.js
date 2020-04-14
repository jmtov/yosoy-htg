import React from 'react';

import Card from './cards';
import styles from './styles.module.scss';

class ContainerPastis extends React.Component {
  render() {
    return (
      <div className={styles.contCards}>
        <h4>{this.props.title}</h4>
        {
          this.props.datosMedicamentos.map((tarjetas) => {
            let title = tarjetas.title;
            let lista = title.split(" ");
            let cantidad = this.props.placeholder.length;
            let texto = this.props.placeholder.toUpperCase();
            if (this.props.placeholder == "") {
              return <Card datos={tarjetas} cambio={this.props.cambio} />
            }
            else {
              for (let i = 0; i < lista.length; i++) {
                if (cantidad <= lista[i].length) {
                  let comparacion = "";
                  for (let x = 0; x < cantidad; x++) {
                    comparacion = comparacion + lista[i][x];
                  }
                  if (comparacion == texto) {
                    return <Card datos={tarjetas} cambio={this.props.cambio} />
                  }
                }
              }
            }
          })
        }
      </div>
    );
  }
}

export default ContainerPastis;
