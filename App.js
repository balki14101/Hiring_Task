import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
//Screen
import MainContainer from './src/screens/Main';

const Height = Dimensions.get('screen').height;
const Width = Dimensions.get('screen').width;
const App = () => {
  return (
    <NavigationContainer>
      <MainContainer />
    </NavigationContainer>
  );
  // return (
  // <View style={{backgroundColor: 'red', flex: 1}}>
  //   <ScrollView>
  //     <Text>App</Text>
  //     <Image
  //       source={{
  //         uri: 'https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY=',
  //       }}
  //       style={{height: 200, width: Width}}
  //     />
  //     <Image
  //       source={{
  //         uri: 'https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY=',
  //       }}
  //       style={{height: 200, width: Width}}
  //     />
  //     <Image
  //       source={{
  //         uri: 'https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY=',
  //       }}
  //       style={{height: 200, width: Width}}
  //     />
  //     <Image
  //       source={{
  //         uri: 'https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY=',
  //       }}
  //       style={{height: 200, width: Width}}
  //     />
  //   </ScrollView>

  //   <View
  //     style={{
  //       backgroundColor: 'white',
  //       height: 100,
  //       width: Width,
  //       position: 'absolute',
  //       bottom: 0,
  //     }}>
  //     <Text style={{color: 'black'}}>{'this is overlapping view'}</Text>
  //   </View>
  // </View>
  // );
};

export default App;
