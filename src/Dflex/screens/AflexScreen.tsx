import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const AflexScreen = () => {
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
  //NOTA: La propiedad "Flex" define la fluidez del elemento la proporcion del tamaño con respecto al tamaño del padre.

  contenedor: {
    flex: 1, //Utiliza todo el tamaño del padre (SafeAreaView), debido a que no comparte el espacio con otros elementos.
    backgroundColor: "#28C4D9",
  },
  caja1: {
    flex: 3, //Utiliza 3 partes del total (6).
    borderWidth: 2,
    borderColor: "white",
    fontSize: 25
  },
  caja2: {
    flex: 2, //Utiliza 2 partes del total (6).
    borderWidth: 2,
    borderColor: "white",
    fontSize: 25
  },
  caja3: {
    flex: 1, //Utiliza 1 partes del total (6).
    borderWidth: 2,
    borderColor: "white",
    fontSize: 25
  }
});
