import React from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../themes/appTheme';

interface Props extends StackScreenProps<any, any>{}

export const Pagina1Screen: (props: Props) => JSX.Element = (props: any) => {
  var navigation: any = props.navigation; //Creando la navegación en base a las props del stack (Es rápido).

  return (
    <View style={styles.margen}>
      
      <Text style={styles.titulo}>Pagina1Screen</Text>

      <Text style={styles.textoNavegar}>Navegar sin argumentos</Text>

      <Button
        title="Ir a página 2"
        onPress={() => navigation.navigate("Pagina2Screen")} //La función "navigate" permite dirigir al screen espacificado por parámetro.
      ></Button>

      <Text style={styles.textoNavegar}>Navegar con argumentos</Text>

      <View style={{flexDirection: "row"}}>
        <TouchableOpacity
          style={{
            ...styles.boton,
            backgroundColor: "lightblue"
          }}
          onPress={() => {navigation.navigate("PersonaScreen", {id: 1, nombre: "Daniel"})}}
        >
          <Text style={styles.textoForma}>Forma 1:</Text>
          <Text>Daniel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.boton,
            backgroundColor: "lightgreen"
          }}
          onPress={() => {navigation.navigate("TanqueScreen", {id: 1, modelo: "Leopard 2A6"})}}
        >
          <Text style={styles.textoForma}>Forma 2:</Text>
          <Text>Leopard 2A6</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
