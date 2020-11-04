import * as React from 'react';
import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppDrawer from './src/Navigations/drawerNavigation.js'

//Render Screens for App
const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <AppDrawer />
    </NavigationContainer>
  );

}

export default App;
