import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {SvgUri} from 'react-native-svg';

//Screens
import Tasks from './GoalsScreens/Tasks';
import Summary from './GoalsScreens/Summary';

const {Screen, Navigator} = createStackNavigator();

const Goals = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Tasks" component={Tasks} />
      <Screen name="Summary" component={Summary} />
    </Navigator>
  );
};

export default Goals;
