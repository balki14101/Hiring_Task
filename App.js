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
import MainContainer from './Src/Screens/Main';

const App = () => {
  return (
    <NavigationContainer>
      <MainContainer />
    </NavigationContainer>
  );
};

export default App;
