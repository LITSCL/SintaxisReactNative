import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../themes/appTheme';

export const Tab1Screen: () => JSX.Element = () => {

  useEffect(() => {
    console.log("Tab1Screen");
  }, []);

  return (
    <View>
      <Text style={styles.titulo}>Tab1Screen</Text>
    </View>
  );
}
