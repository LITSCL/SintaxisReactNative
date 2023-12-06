import React, { useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../themes/appTheme';

export const Pagina2Screen: () => JSX.Element = () => {
  var navigation: any = useNavigation(); //Creando la navegación en base al hook useNavigation (Es lento).

  useEffect(() => {
    navigation.setOptions({ //La función "setOptions" permite modificar las opciones que fueron definidas en el "StackScreen".
      title: "Página 2 MOD",
      headerBackTitle: "Atrás"
    });
  }, []);

  return (
    <View style={styles.margen}>

      <Text style={styles.titulo}>Pagina2Screen</Text>
      
      <Button
        title="Ir a página 3"
        onPress={() => navigation.navigate("Pagina3Screen")} //La función "navigate" permite dirigir al screen espacificado por parámetro.
      ></Button>

    </View>
  );
}
