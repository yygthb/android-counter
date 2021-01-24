import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { styles } from './Header_stiles'

export const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Counter App</Text>
    </View>
  );
}