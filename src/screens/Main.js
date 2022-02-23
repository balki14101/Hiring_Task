import React from 'react';
import {View, Text} from 'react-native';

//Bottom-Tabs-Package
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Screens
import HomeScreen from './Home';
import GoalsScreen from './Goals';
import ExpensesScreen from './Expenses';
import SavingsScreen from './Savings';

const {Navigator, Screen} = createBottomTabNavigator();

const Main = () => {
  return (
    <Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: '#500472'},
      }}>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Goals" component={GoalsScreen} />
      <Screen name="Expenses" component={ExpensesScreen} />
      <Screen name="Savings" component={SavingsScreen} />
    </Navigator>
  );
};

export default Main;
