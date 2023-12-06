import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../themes/appTheme';

export const ContactoScreen: () => JSX.Element = () => {
  return (
    <View>
      <Text style={styles.titulo}>ContactoScreen</Text>
    </View>
  );
}