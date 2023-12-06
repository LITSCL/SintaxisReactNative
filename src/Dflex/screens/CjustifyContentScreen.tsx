import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const CjustifyContentScreen = () => {
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
  //NOTA: La propiedad "JustifyContent" define cómo se distribuyen los espacios entre los elementos hijos.
  //NOTA: Todos los elementos por defecto poseen una justificación de contenido flexible incial "flex-start".

  contenedor: {
    flex: 1,
    backgroundColor: "#28C4D9",
    justifyContent: "space-between" //Distribuyendo el espacio uniformemente entre los elementos hijos.
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