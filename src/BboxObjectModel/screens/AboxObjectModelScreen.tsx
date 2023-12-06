import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const AboxObjectModelScreen = () => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Box Object Model</Text>
    </View>
  );
}

//Zona de estilos locales.
const styles: any = StyleSheet.create({
  contenedor: {
    flex: 1, //Utiliza el 100% del elemento padre (SafeAreaView).
    justifyContent: "center", //Centrar el contenido hijo verticalmente.
    alignItems: "center", //Centrar el contenido hijo horizontalmente.
    backgroundColor: "red" //Color de fondo rojo.
  },
  titulo: {
    width: 200, //Ancho de 200 unidades.
    textAlign: "center", //Centrar el texto.
    padding: 30, //Relleno de 30 unidades en todos los lados.
    fontSize: 15, //Tamaño de letra de 15 unidades.
    borderWidth: 5, //Borde de 5 unidades.
    borderRadius: 10, //Radio de borde de 5 unidades.
    backgroundColor: "green" //Color de fondo verde.
  }
});