import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../themes/appTheme';

export const Tab2Screen: () => JSX.Element = () => {

  useEffect(() => {
    console.log("Tab2Screen");
  }, []);

  return (
    <View>
      <Text style={styles.titulo}>Tab2Screen</Text>
    </View>
  );
}
