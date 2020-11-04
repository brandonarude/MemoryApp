import * as React from 'react';
import { useState, Component } from 'react';
import { Button, View, Text, TextInput, Easing, Image, ImageBackground, TouchableOpacity, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import styles from './src/Styles/styles.js';
import DailyEncouragement from './src/Navigations/Screens/dailyEncouragement.js';
import DailyReadingTabs from './src/Navigations/dailyReadingTabs.js'
import AppDrawer from './src/Navigations/drawerNavigation.js'

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <AppDrawer />
    </NavigationContainer>
  );

}

export default App;
