import React, { useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../themes/appTheme';

interface Props extends StackScreenProps<any, any>{}

export const Pagina3Screen: (props: Props) => JSX.Element = (props: Props) => {
  var navigation: any = props.navigation; //Creando la navegación en base a las props del stack (Es rápido).

  useEffect(() => {
    navigation.setOptions({
      title: "Página 3 MOD",
      headerBackTitle: "Atrás"
    });
  }, []);

  return (
    <View style={styles.margen}>

      <Text style={styles.titulo}>Pagina3Screen</Text>

      <Button
        title="Regresar a la página anterior"
        onPress={() => navigation.pop()} //La función "pop" permite volver al screen anterior.
      ></Button>
      
      <Button
        title="Ir al Home"
        onPress={() => navigation.popToTop()} //La función "pop" permite volver al screen principal del stack.
      ></Button>

    </View>
  );
}
