import React from 'react';

import Cards from './cards';
import styles from './styles.module.scss';

class ContainerFundaciones extends React.Component {
  render() {
    return (
      <div className={styles.contCards}>
        <h4 className={styles.titleContainer}>{this.props.title}</h4>
        {
          this.props.datesFoundations.map((tarjetas) => {
            let title = tarjetas.title;
            let lista = title.split(" ");
            let cantidad = this.props.contBuscador.length;
            let texto = this.props.contBuscador.toUpperCase();
            if (this.props.contBuscador == "") {
              return <Cards datos={tarjetas} cambio={this.props.cambio} />
            }
            else {
              for (let i = 0; i < lista.length; i++) {
                if (cantidad <= lista[i].length) {
                  let comparacion = "";
                  for (let x = 0; x < cantidad; x++) {
                    comparacion = comparacion + lista[i][x];
                  }
                  if (comparacion == texto) {
                    return <Cards datos={tarjetas} cambio={this.props.cambio} />
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

export default ContainerFundaciones;
