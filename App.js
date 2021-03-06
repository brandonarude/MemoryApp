import * as React from 'react';
import { Component } from 'react';
import { NavigationContainer  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LanguageContextProvider from './src/Components/Atoms/languageContext.js';
import AppDrawer from './src/Navigations/drawerNavigation.js';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { AppLoading } from 'expo';
import styles from './src/Styles/styles.js';


//Render Screens for App
const Stack = createStackNavigator();

function App() {

  // Load Fonts
  let [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/Fonts/Roboto-Regular.ttf'),
    'Roboto-Light': require('./assets/Fonts/Roboto-Light.ttf'),
    'Hind-Light': require('./assets/Fonts/Hind-Light.ttf'),
    'Hind-Bold': require('./assets/Fonts/Hind-Light.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  //Create App View
  return (
    <LanguageContextProvider>
      <NavigationContainer>
        <AppDrawer />
      </NavigationContainer>
    </LanguageContextProvider>
  );

}

export default App;
