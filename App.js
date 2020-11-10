import * as React from 'react';
import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LanguageContextProvider from './src/Components/Atoms/languageContext.js';
import AppDrawer from './src/Navigations/drawerNavigation.js';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { AppLoading } from 'expo';


//Render Screens for App
const Stack = createStackNavigator();

function App() {

  let [fontsLoaded] = useFonts({
    'Roboto-Black': require('./assets/Fonts/Roboto-Black.ttf'),
    'Roboto-Light': require('./assets/Fonts/Roboto-Light.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <LanguageContextProvider>
      <NavigationContainer>
        <AppDrawer />
      </NavigationContainer>
    </LanguageContextProvider>
  );

}

export default App;
