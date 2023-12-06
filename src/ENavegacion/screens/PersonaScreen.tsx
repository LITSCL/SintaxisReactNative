import React, { useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { styles } from '../themes/appTheme';

interface Props extends StackScreenProps<any, any>{}

export const PersonaScreen: (props: Props) => JSX.Element = (props: Props) => {
  var id: number = props.route.params!.id;
  var nombre: string = props.route.params!.nombre;
  var navigation: StackNavigationProp<any, any, undefined> = props.navigation; //Creando la navegación en base a las props del stack (Es rápido).

  useEffect(() => {
    navigation.setOptions({
      title: "Persona",
      headerBackTitle: "Atrás"
    });
  }, []);

  return (
    <View style={styles.margen}>

      <Text style={styles.titulo}>PaginaPersona</Text>

      <Button
        title="Regresar a la página anterior"
        onPress={() => navigation.pop()} //La función "pop" permite volver al screen anterior.
      ></Button>

      <Text>
        {
          JSON.stringify(id, null, 3) + JSON.stringify(nombre, null, 3)
        }
      </Text>

    </View>
  );
}