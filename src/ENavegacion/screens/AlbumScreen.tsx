import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../themes/appTheme';

export const AlbumScreen: () => JSX.Element = () => {
  return (
    <View>
      <Text style={styles.titulo}>AlbumScreen</Text>
    </View>
  );
}