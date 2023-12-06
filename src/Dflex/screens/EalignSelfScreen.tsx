import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const EalignSelfScreen = () => {
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
  //NOTA: La propiedad "AlignSelf" se aplica a un elemento hijo y sobreescribe el posicionamiento forsozo de un elemento padre.
  //NOTA: Al usar la propiedad "AlignSelf", el elemento se ajusta a su contenido.

  contenedor: {
    flex: 1,
    backgroundColor: "#28C4D9",
    alignItems: "center" //Asignando el alineamiento a los elementos hijos.
  },
  caja1: {
    borderWidth: 2,
    borderColor: "white",
    fontSize: 25,
    alignSelf: "flex-start" //Sobreescribiendo el alineamiento transversal.
  },
  caja2: {
    borderWidth: 2,
    borderColor: "white",
    fontSize: 25,
    alignSelf: "center" //Sobreescribiendo el alineamiento transversal.
  },
  caja3: {
    borderWidth: 2,
    borderColor: "white",
    fontSize: 25,
    alignSelf: "flex-end" //Sobreescribiendo el alineamiento transversal.
  }
});