import React from 'react';
import { View, StyleSheet } from 'react-native';

export const AposicionRelativaScreen = () => {
  return (
    <View style={styles.contenedor}>
      <View style={styles.cajaMorada}></View>
      <View style={styles.cajaNaranja}></View>
    </View>
  );
}

//Zona de estilos locales.
const styles: any = StyleSheet.create({
  //NOTA: La propiedad "Position" indica el tipo de posisionamiento de un elemento.
  //NOTA: Todos los elementos por defecto poseen una posición relativa "relative".
  //NOTA: La posición de un elemento (TOP; LEFT; RIGHT; BOTTOM) siempre es relativa al elemento padre.
  //NOTA: Si un elemento padre posiciona forzosamente a sus hijos, la posición de los hijos es relativa a la posición forzosa.

  contenedor: {
    flex: 1,
    backgroundColor: "#28C4D9",
    //justifyContent: "center", //Posición forzosa.
    //alignItems: "center" //Posición forzosa.
  },
  cajaMorada: {
    width: 120,
    height: 120,
    backgroundColor: "#5856D6",
    borderWidth: 5,
    borderColor: "white",
    position: "relative", //No es necesario.
    top: 120,
    left: 50
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    backgroundColor: "#F0A23B",
    borderWidth: 5,
    borderColor: "white",
    position: "relative", //No es necesario.
    top: 100,
    left: 50
  }
});
