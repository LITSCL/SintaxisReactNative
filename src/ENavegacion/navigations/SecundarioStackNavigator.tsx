import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { PersonaScreen } from '../screens/PersonaScreen';
import { TanqueScreen } from '../screens/TanqueScreen';

//Esto es solo necesario para enviar parámetros de la forma 2.
export type SecundarioStackNavigatorParams = {
  Pagina1Screen: undefined,
  Pagina2Screen: undefined,
  Pagina3Screen: undefined,
  PersonaScreen: {id: number, nombre: string},
  TanqueScreen: {id: number, modelo: string}
}

const Stack: any = createStackNavigator<SecundarioStackNavigatorParams>(); //Agregar el "<StackNavigatorParams>", es solamente para enviar parámetros de la forma 2.

export const SecundarioStackNavigator: () => JSX.Element = () => {
  return (
    <Stack.Navigator 
      initialRouteName="Pagina1Screen" //El atributo "initialRouteName" indica cual es el screen principal del stack.
      screenOptions={{ //El atributo "screenOptions", permite establecer varios parámetros que afectan a todos los screens del stack.
        headerStyle: { //Estilos para la cabecera del stack.
          elevation: 0, //Borrando la línea grís del header (Solo afecta a Android).
          shadowColor: "transparent" //Borrando la línea grís del header (Solo afecta a IOS).
        },
        cardStyle: {
          backgroundColor: "white" //Asignando color de fondo blanco para todos los screens.
        },
      }}
    >
      <Stack.Screen name="Pagina1Screen" component={Pagina1Screen} options={{title: "Página 1"}}/>
      <Stack.Screen name="Pagina2Screen" component={Pagina2Screen} options={{title: "Página 2"}}/>
      <Stack.Screen name="Pagina3Screen" component={Pagina3Screen} options={{title: "Página 3"}}/>
      <Stack.Screen name="PersonaScreen" component={PersonaScreen}/>
      <Stack.Screen name="TanqueScreen" component={TanqueScreen}/>
    </Stack.Navigator>
  );
}