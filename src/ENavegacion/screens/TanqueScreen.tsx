import React, { useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { SecundarioStackNavigatorParams } from '../navigations/SecundarioStackNavigator';
import { styles } from '../themes/appTheme';

interface Props extends StackScreenProps<SecundarioStackNavigatorParams, "TanqueScreen">{}

export const TanqueScreen: (props: Props) => JSX.Element = (props: Props) => {
  var id: number = props.route.params.id;
  var modelo: string = props.route.params.modelo;
  var navigation: StackNavigationProp<SecundarioStackNavigatorParams, "TanqueScreen", undefined> = props.navigation; //Creando la navegación en base a las props del stack (Es rápido).

  useEffect(() => {
    navigation.setOptions({
      title: "Tanque",
      headerBackTitle: "Atrás"
    });
  }, []);

  return (
    <View style={styles.margen}>

      <Text style={styles.titulo}>PaginaTanque</Text>

      <Button
        title="Regresar a la página anterior"
        onPress={() => navigation.pop()} //La función "pop" permite volver al screen anterior.
      ></Button>

      <Text>
        {
          JSON.stringify(id, null, 3) + JSON.stringify(modelo, null, 3)
        }
      </Text>

    </View>
  );
}