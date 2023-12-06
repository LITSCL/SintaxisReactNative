import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactoScreen } from '../screens/ContactoScreen';
import { AlbumScreen } from '../screens/AlbumScreen';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

export const SecundarioTopTabNavigator: () => JSX.Element = () => {
  var safeAreaInsets: EdgeInsets = useSafeAreaInsets(); //El hook "useSafeAreaInsets" permite obtener las dimensiones no utilizables de la pantalla (Top = Notch).

  return (
    <Tab.Navigator
      initialRouteName="ChatScreen" //El atributo "initialRouteName" indica cual es el screen principal del stack.
      sceneContainerStyle={{ //Estilos para la parte central.
        backgroundColor: "white",
      }}
      screenOptions={({route}) => ({ //El atributo "screenOptions", permite establecer varios parámetros que afectan a todos los screens del stack.
        tabBarPressColor: "red", //Asignando color rojo cuando se selecciona una un botón de la barra de botones.
        tabBarShowIcon: true, //Habilitando el espacio para iconos de los botones.
        tabBarIndicatorStyle: {
          backgroundColor: "green" //Asignando el color verde cuando se encuentra seleccionada una tab de la barra de botones.
        },
        tabBarStyle: { 
          borderBottomWidth: 0, //Asignando una unidad de tamaño al borde de abajo de la barra de botones.
          elevation: 0, //Borrando la línea grís (Solo afecta a Android).
          shadowColor: "transparent" //Borrando la línea grís (Solo afecta a IOS).
        },
        tabBarIcon: ({color}) => {
          var nombreIcono: string = "";

          switch (route.name) {
            case "ChatScreen":
              nombreIcono = "chatbox-ellipses-outline"
              break;
            case "ContactoScreen":
              nombreIcono = "game-controller-outline"
              break;
            case "AlbumScreen":
              nombreIcono = "albums-outline"
              break;
            default:
              break;
          }
            return <Icon name={nombreIcono} size={25} color="red"></Icon>
        }
      })}
      style={{
        paddingTop: safeAreaInsets.top
      }}
    >
      <Tab.Screen name="ChatScreen" component={ChatScreen} options={{title: "Chat"}}/>
      <Tab.Screen name="ContactoScreen" component={ContactoScreen} options={{title: "Contacto"}}/>
      <Tab.Screen name="AlbumScreen" component={AlbumScreen} options={{title: "Album"}}/>
    </Tab.Navigator>
  );
}