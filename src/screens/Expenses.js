import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

//Colors
import Colors from '../Constants/Colors';

const Expenses = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Expenses</Text>
    </View>
  );
};

export default Expenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.BLACK,
    fontSize: 16,
    fontWeight: '700',
  },
});
