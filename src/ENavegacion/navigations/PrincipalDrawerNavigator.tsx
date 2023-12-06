import React from 'react';
import { useWindowDimensions, View, Image, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { ConfiguracionScreen } from '../screens/ConfiguracionScreen';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import { SecundarioBottomTabNavigator } from './SecundarioBottomTabNavigator';
import { styles } from '../themes/appTheme';

const Drawer = createDrawerNavigator();

export const PrincipalDrawerNavigator: () => JSX.Element = () => {
  var windowDimensions: any = useWindowDimensions();

  return (
    <Drawer.Navigator
      initialRouteName="SecundarioBottomTabNavigator" //El atributo "initialRouteName" indica cual es el screen principal del stack.
      drawerContent={(props) => <ContenidoDrawer {...props}></ContenidoDrawer>} //El atributo "drawerContent", permite modificar el contenido del drawer (Recibe un JSX).
      screenOptions={{ //El atributo "screenOptions", permite establecer varios parámetros que afectan a todos los screens del stack.
        headerStyle: { 
          elevation: 0, //Borrando la línea grís del header (Solo afecta a Android).
          shadowColor: "transparent" //Borrando la línea grís del header (Solo afecta a IOS).
        },
        drawerPosition: "left", //El atributo "drawerPosition" indica por donde se despliega el drawer.
        headerShown: true, //El atributo "headerShown" indica si aparece o no un botón para desplegar el drawer.
        drawerType: windowDimensions.width > windowDimensions.height ? ("permanent") : ("front") //El atributo "drawerType" permite cambiar la forma en la cual se despliega el drawer.
      }}
    >
      <Drawer.Screen name="SecundarioBottomTabNavigator" component={SecundarioBottomTabNavigator}/>{/*Asignando un stack como componente.*/}
      <Drawer.Screen name="ConfiguracionScreen" component={ConfiguracionScreen}/>{/*Asignando un screen como componente.*/}
    </Drawer.Navigator>
  );
}

//Zona de configuración del contenido del drawer.
const ContenidoDrawer: (props: DrawerContentComponentProps) => JSX.Element = (props: DrawerContentComponentProps) => {
  var navigation: DrawerNavigationHelpers = props.navigation;
  
  return (
    <DrawerContentScrollView>

      {/*Avatar.*/}
      <View style={styles.contenedorAvatar}>
        <Image
          source={{
            uri: "https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg"
          }}
          style={styles.avatar}
        />
      </View>

      {/*Opciones de menú.*/}
      <View style={styles.contenedorMenu}>

        <TouchableOpacity 
        onPress={() => {
          navigation.navigate("SecundarioBottomTabNavigator")
        }}
        style={{
          ...styles.contenedorBoton,
          flexDirection: "row"
        }}
        >
          <Icon style={{top: 5}} name="compass-outline" size={25} color="black"></Icon>
          <Text style={styles.contenedorTexto}>Navegación</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => {
            navigation.navigate("ConfiguracionScreen")
          }}
          style={{
            ...styles.contenedorBoton,
            flexDirection: "row"
          }}
        >
          <Icon style={{top: 5}} name="settings-outline" size={25} color="black"></Icon>
          <Text style={styles.contenedorTexto}>Configuración</Text>
        </TouchableOpacity>

      </View>

    </DrawerContentScrollView>
  );
}