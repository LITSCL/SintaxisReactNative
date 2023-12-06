import React from 'react';
import { Text, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';
import { SecundarioStackNavigator } from './SecundarioStackNavigator';
import { SecundarioTopTabNavigator } from './SecundarioTopTabNavigator';

const TabAndroid = createMaterialBottomTabNavigator(); //Tab de Materiar Design.
const TabIOS = createBottomTabNavigator(); //Tab normal de react (Recomendado por que tiene más opciones).

export const SecundarioBottomTabNavigator: () => JSX.Element = () => {

  //JSX para Android.
  const android: () => JSX.Element = () => {
    return (
      <TabAndroid.Navigator
        initialRouteName="Tab1Screen" //El atributo "initialRouteName" indica cual es el screen principal del stack.
        activeColor="green" //Asignando color verde cuando el botón se encuentra seleccionado.
        inactiveColor="gray" //Asignando color grís cuando el botón no se encuentra seleccionado.
        barStyle={{
          backgroundColor: "lightpink", //Asignando fondo de color rosado a la barra de botonoes.
          borderTopColor: "black", //Asignando color negro al borde de arriba de la barra de botones.
          borderTopWidth: 1 //Asignando una unidad de tamaño al borde de arriba de la barra de botones.
        }}
        screenOptions={({route}) => ({ //El atributo "screenOptions", permite establecer varios parámetros que afectan a todos los screens del stack.
          tabBarIcon: ({color}) => {
            var nombreIcono: string = "";

            switch (route.name) {
              case "Tab1Screen":
                nombreIcono = "rocket"
                break;
              case "Tab2Screen":
                nombreIcono = "add-circle-outline"
                break;
              case "SecundarioStackNavigator":
                nombreIcono = "airplane-outline"
                break;
              default:
                break;
            }
            return <Icon name={nombreIcono} size={25} color="green"></Icon>
          }
        })}
      >
        <TabAndroid.Screen name="Tab1Screen" component={Tab1Screen} options={{title: "Tab 1"}}/>
        <TabAndroid.Screen name="Tab2Screen" component={SecundarioTopTabNavigator} options={{title: "Tab 2"}}/>{/*Entregando un stack como componente.*/}
        <TabAndroid.Screen name="SecundarioStackNavigator" component={SecundarioStackNavigator} options={{title: "Tab 3"}}/>{/*Entregando un stack como componente.*/}
      </TabAndroid.Navigator>
    );
  }

  //JSX para IOS.
  const ios: () => JSX.Element = () => {
    return (
      <TabIOS.Navigator
        initialRouteName="Tab1Screen" //El atributo "initialRouteName" indica cual es el screen principal del stack.
        sceneContainerStyle={{ //Estilos para la parte central.
          backgroundColor: "white",
        }}
        screenOptions={({route}) => ({ //El atributo "screenOptions", permite establecer varios parámetros que afectan a todos los screens del stack.
          headerStyle: { 
            shadowColor: "transparent" //Borrando la línea grís del header (Solo afecta a IOS).
          },
          tabBarActiveTintColor: "green", //Asignando color verde cuando el botón se encuentra seleccionado.
          tabBarInactiveTintColor: "gray", //Asignando color grís cuando el botón no se encuentra seleccionado.
          tabBarStyle: { 
            backgroundColor: "lightpink", //Asignando fondo de color rosado a la barra de botonoes.
            borderTopColor: "black", //Asignando color negro al borde de arriba de la barra de botones.
            borderTopWidth: 1, //Asignando una unidad de tamaño al borde de arriba de la barra de botones.
          },
          tabBarLabelStyle: {
            fontSize: 15 //Asignando 15 unidades de tamaño a la letra de la barra de botones.
          },
          tabBarIcon: ({color}) => {
            var nombreIcono: string = "";

            switch (route.name) {
              case "Tab1Screen":
                nombreIcono = "rocket"
                break;
              case "Tab2Screen":
                nombreIcono = "add-circle-outline"
                break;
              case "SecundarioStackNavigator":
                nombreIcono = "airplane-outline"
                break;
              default:
                break;
            }
            return <Icon name={nombreIcono} size={25} color="green"></Icon>
          }
        })}
      >
        <TabIOS.Screen name="Tab1Screen" component={Tab1Screen} options={{title: "Tab 1"}}/>
        <TabIOS.Screen name="Tab2Screen" component={SecundarioTopTabNavigator} options={{title: "Tab 2"}}/>{/*Entregando un stack como componente.*/}
        <TabIOS.Screen name="SecundarioStackNavigator" component={SecundarioStackNavigator} options={{title: "Tab 3"}}/>{/*Entregando un stack como componente.*/}
      </TabIOS.Navigator>
    );
  }
 
  return Platform.OS == "android" ? (android()) : (ios()); //Retornando el JSX correspondiente al sistema operativo.
}