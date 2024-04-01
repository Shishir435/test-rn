import React from 'react';
import {StyleSheet, View} from 'react-native';

const Separator = () => {
  return <View style={styles.seprator} />;
};
const styles = StyleSheet.create({
  seprator: {
    height: 0.8,
    backgroundColor: '#CAD5E2',
  },
});

export default Separator;
