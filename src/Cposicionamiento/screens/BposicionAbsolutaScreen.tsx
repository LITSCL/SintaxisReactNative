import React from 'react';
import { View, StyleSheet } from 'react-native';

export const BposicionAbsolutaScreen = () => {
  return (
    <View style={styles.contenedor}>
      <View style={styles.cajaMorada}></View>
      <View style={styles.cajaNaranja}></View>
      <View style={styles.cajaVerde}></View>
    </View>
  );
}

//Zona de estilos locales.
const styles: any = StyleSheet.create({
  //NOTA: La propiedad "Position" indica el tipo de posisionamiento de un elemento.
  //NOTA: Para que un elemento posea un posición absoluta, esto debe ser especificado "absolute".
  //NOTA: La posición de un elemento (TOP; LEFT; RIGHT; BOTTOM) siempre es relativa al elemento padre.
  //NOTA: Si un elemento padre posiciona forzosamente a sus hijos, la posición de los hijos sigue siendo relativa al elemento padre.

  contenedor: {
    flex: 1,
    backgroundColor: "#28C4D9",
    justifyContent: "center", //Posición forzosa.
    alignItems: "center" //Posición forzosa.
  },
  cajaMorada: {
    width: 100,
    height: 100,
    backgroundColor: "#5856D6",
    borderWidth: 5,
    borderColor: "white",
    position: "absolute", //Posición absoluta.
    top: 0,
    right: 0
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    backgroundColor: "#F0A23B",
    borderWidth: 5,
    borderColor: "white",
    position: "absolute", //Posición absoluta.
    bottom: 0,
    right: 0
  },
  cajaVerde: {
    width: 100,
    height: 100,
    backgroundColor: "#008F39",
    borderWidth: 5,
    borderColor: "white",
    position: "absolute", //Posición absoluta.
    bottom: 0,
    left: 0
  }
});
