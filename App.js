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

const images = {
  tabImageSelected: require('./src/Assets/Images/tabIconSelected.png'),
  tabImageUnselected: require('./src/Assets/Images/tabIconUnselected.png'),
  hamburgerButtonImage: require('./src/Assets/Images/drawerHamburgerButton.png')
}



class About extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.drawerHamburgerContainer} onPress={() => this.props.navigation.openDrawer()}>
          <Image source={images.hamburgerButtonImage} style={styles.drawerHamburgerImage}/>
        </TouchableOpacity>
        <Text>
          Hello!
        </Text>
      </View>
    )
  }
}

const Drawer = createDrawerNavigator();

function AppDrawer() {
  return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={DailyReadingTabs} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
  );
}

const Stack = createStackNavigator();


function App() {

  return (
    <NavigationContainer>
      <AppDrawer />
    </NavigationContainer>
  );

}

export default App;
