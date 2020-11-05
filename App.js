import * as React from 'react';
import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LanguageContextProvider from './src/Components/Atoms/languageContext.js';
import AppDrawer from './src/Navigations/drawerNavigation.js';


//Render Screens for App
const Stack = createStackNavigator();

function App() {

  return (
    <LanguageContextProvider>
      <NavigationContainer>
        <AppDrawer />
      </NavigationContainer>
    </LanguageContextProvider>
  );

}

export default App;
