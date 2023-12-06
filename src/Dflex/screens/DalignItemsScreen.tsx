import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const DalignItemsScreen = () => {
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
  //NOTA: La propiedad "AlignItems" indica como alinear a los hijos a lo largo del eje transversal del elemento padre.
  //NOTA: Todos los elementos por defecto poseen un alineamiento de items estirado "stretch".

  contenedor: {
    flex: 1,
    backgroundColor: "#28C4D9",
    //justifyContent: "center", //Justificando elementos hijos (Arriba-Abajo).
    alignItems: "center" //Alineando los elementos hijos al centro del eje transversal (Izquierda-Derecha).
  },
  caja1: {
    borderWidth: 2,
    borderColor: "white",
    fontSize: 25
  },
  caja2: {
    borderWidth: 2,
    borderColor: "white",
    fontSize: 25
  },
  caja3: {
    borderWidth: 2,
    borderColor: "white",
    fontSize: 25
  }
});