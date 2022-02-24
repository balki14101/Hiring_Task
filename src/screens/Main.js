import React from 'react';
import {Image, View} from 'react-native';

//Bottom-Tabs-Package
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Colors
import Colors from '../Constants/Colors';

//Screens
import HomeScreen from './Home';
import GoalsScreen from './Goals';
import ExpensesScreen from './Expenses';
import SavingsScreen from './Savings';

//Icons
import Home from '../Assets/Images/Home.png';
import Goals from '../Assets/Images/Goals.png';
import Expenses from '../Assets/Images/Expenses.png';
import Savings from '../Assets/Images/Savings.png';

const {Navigator, Screen} = createBottomTabNavigator();

const Main = () => {
  return (
    <Navigator
      initialRouteName="Goals"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: Colors.PRIMARY, height: 70},
        tabBarActiveTintColor: Colors.TAB_BAR,
        tabBarInactiveTintColor: Colors.TAB_BAR,
        // tabBarActiveBackgroundColor: '#7501B5', // needs to be changed

        tabBarItemStyle: {padding: 16},
      }}>
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Image source={Home} style={{height: 20, width: 20}} />
          ),
        }}
      />
      <Screen
        name="Goals"
        component={GoalsScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Image source={Goals} style={{height: 20, width: 20}} />
          ),
        }}
      />
      <Screen
        name="Expenses"
        component={ExpensesScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Image source={Expenses} style={{height: 20, width: 20}} />
          ),
        }}
      />
      <Screen
        name="Savings"
        component={SavingsScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Image source={Savings} style={{height: 20, width: 20}} />
          ),
        }}
      />
    </Navigator>
  );
};

export default Main;
