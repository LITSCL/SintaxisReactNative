import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const BflexDirectionScreen = () => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
    </View>
  );
}

//Zona de estilos locales.
const styles: any = StyleSheet.create({
  //NOTA: La propiedad "FlexDirection" establece la dirección en la que se distribuyen los elementos hijos de un elemento padre.
  //NOTA: Todos los elementos por defecto poseen una dirección en columna "column".

  contenedor: {
    flex: 1,
    flexDirection: "row", //Indicando que la dirección de los hijos sea en fila.
    backgroundColor: "#28C4D9",
  },
  caja1: {
    flex: 1,
    borderWidth: 2,
    borderColor: "white",
    fontSize: 25
  },
  caja2: {
    flex: 2,
    borderWidth: 2,
    borderColor: "white",
    fontSize: 25
  },
  caja3: {
    flex: 3,
    borderWidth: 2,
    borderColor: "white",
    fontSize: 25
  }
});
