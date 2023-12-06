import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../themes/appTheme';

export const Tab3Screen: () => JSX.Element = () => {

  useEffect(() => {
    console.log("Tab3Screen");
  }, []);

  return (
    <View>
      <Text style={styles.titulo}>Tab3Screen</Text>
    </View>
  );
}
