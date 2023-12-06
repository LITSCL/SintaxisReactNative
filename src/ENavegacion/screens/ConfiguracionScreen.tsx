import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../themes/appTheme';
import { useNavigation } from '@react-navigation/native';

export const ConfiguracionScreen: () => JSX.Element = () => {
  var navigation: any = useNavigation(); //Creando la navegación en base al hook useNavigation (Es lento).

  useEffect(() => {
    navigation.setOptions({ //La función "setOptions" permite modificar las opciones que fueron definidas en el "StackScreen".
      title: "Página Configuración",
      headerBackTitle: "Atrás"
    });
  }, []);
  
  return (
    <View style={styles.margen}>
      <Text style={styles.titulo}>ConfiguracionScreen</Text>
    </View>
  );
}
