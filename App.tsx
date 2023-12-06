import React from 'react';
import 'react-native-gesture-handler';
import { LogBox } from 'react-native';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AholaMundo } from './src/AholaMundo/screens/AholaMundo'; //1.
import { AboxObjectModelScreen } from './src/BboxObjectModel/screens/AboxObjectModelScreen'; //2.
import { BdimensionesScreen } from './src/BboxObjectModel/screens/BdimensionesScreen'; //3.
import { AposicionRelativaScreen } from './src/Cposicionamiento/screens/AposicionRelativaScreen'; //4.
import { BposicionAbsolutaScreen } from './src/Cposicionamiento/screens/BposicionAbsolutaScreen'; //5.
import { AflexScreen } from './src/Dflex/screens/AflexScreen'; //6.
import { BflexDirectionScreen } from './src/Dflex/screens/BflexDirectionScreen'; //7.
import { CjustifyContentScreen } from './src/Dflex/screens/CjustifyContentScreen'; //8.
import { DalignItemsScreen } from './src/Dflex/screens/DalignItemsScreen'; //9.
import { EalignSelfScreen } from './src/Dflex/screens/EalignSelfScreen'; //10.
import { FflexWrapScreen } from './src/Dflex/screens/FflexWrapScreen'; //11.
import { SecundarioStackNavigator } from './src/ENavegacion/navigations/SecundarioStackNavigator'; //12.
import { SecundarioBottomTabNavigator } from './src/ENavegacion/navigations/SecundarioBottomTabNavigator'; //13.
import { PrincipalDrawerNavigator } from './src/ENavegacion/navigations/PrincipalDrawerNavigator'; //14.

LogBox.ignoreAllLogs(); //Esta instrucción evita que se muestren warnings durante el desarrollo de la aplicación.

const App: () => JSX.Element = () => {
  return (
    // {/*<SafeAreaView style={{flex: 1}}>*/}
    //   {/*<AholaMundo></AholaMundo>*/}
    //   {/*<AboxObjectModelScreen></AboxObjectModelScreen>*/}
    //   {/*<BdimensionesScreen></BdimensionesScreen>*/}
    //   {/*<AposicionRelativaScreen></AposicionRelativaScreen>*/}
    //   {/*<BposicionAbsolutaScreen></BposicionAbsolutaScreen>*/}
    //   {/*<AflexScreen></AflexScreen>*/}
    //   {/*<BflexDirectionScreen></BflexDirectionScreen>*/}
    //   {/*<CjustifyContentScreen></CjustifyContentScreen>*/}
    //   {/*<DalignItemsScreen></DalignItemsScreen>*/}
    //   {/*<EalignSelfScreen></EalignSelfScreen>*/}
    //   {/*<FflexWrapScreen></FflexWrapScreen>*/}
    // {/*</SafeAreaView>*/}

    <NavigationContainer>
      {/*<SecundarioStackNavigator></SecundarioStackNavigator>*/}
      {/*<SecundarioBottomTabNavigator></SecundarioBottomTabNavigator>*/}
      <PrincipalDrawerNavigator></PrincipalDrawerNavigator>
    </NavigationContainer>
  );
}

export default App;
