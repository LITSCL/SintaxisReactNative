import React from 'react';
import { Text, View, StyleSheet, useWindowDimensions } from 'react-native';

export const BdimensionesScreen = () => {
  var windowDimensions: any = useWindowDimensions(); //El hook "useWindowDimensions" permite obtener las dimensiones de la pantalla (Recalcula en caso de rotación del SmartPhone).

  return (
    <View>
      <View style={styles.contenedor}>
        <View style={{
          ...styles.cajaMorada,
          width: windowDimensions.width * 0.50 //Añadiendo un ancho del 50%.
        }}>
        </View>
        <View style={styles.cajaVerde}></View>
        <View style={styles.cajaNaranja}></View>
      </View>
      <Text style={styles.titulo}>W: {windowDimensions.width}, H: {windowDimensions.height}</Text>
    </View>
  );
}

//Zona de estilos locales.
const styles: any = StyleSheet.create({
  contenedor: {
    width: "100%",
    height: 200,
    backgroundColor: "red"
  },
  cajaMorada: {
    height: "25%",
    backgroundColor: "#5856D6"
  },
  cajaVerde: {
    width: "50%",
    height: "25%",
    backgroundColor: "#008F39"
  },
  cajaNaranja: {
    backgroundColor: "#F0A23B"
  },
  titulo: {
    fontSize: 15,
    textAlign: "center"
  }
});
