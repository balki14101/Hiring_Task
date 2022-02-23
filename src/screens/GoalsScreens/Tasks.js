import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../../Constants/Colors';

import {SvgUri} from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';

const Tasks = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <Text>{'sdkhfjskdfjsdfjkjdskb'}</Text>
        <Text>{'sdkhfjskdfjsdfjkjdskb'}</Text>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.linearGradient}>
          <Text style={styles.buttonText}>Sign in with Facebook</Text>
        </LinearGradient>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          flexDirection: 'row',
          backgroundColor: 'white',
          borderRadius: 8,
          padding: 16,
          bottom: 8,
          right: 16,
        }}>
        <Text style={{color: Colors.PRIMARY}}>{'+'}</Text>

        <Text style={{color: Colors.PRIMARY}}>{'New Task'}</Text>
      </View>
    </View>
  );
};

export default Tasks;

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
