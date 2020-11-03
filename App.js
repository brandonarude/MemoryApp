import * as React from 'react';
import { useState, Component } from 'react';
import { Button, View, Text, TextInput, Easing, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './src/Styles/styles.js';

const images = {
  tabImageSelected: require('./src/Assets/Images/tabIconSelected.png'),
  tabImageUnselected: require('./src/Assets/Images/tabIconUnselected.png')
}

class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      myText: 'I\'m ready to get swiped!',
      gestureName: 'none',
      backgroundColor: '#fff',
      navigation: props.navigation,
    };
  }


  render() {

    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };

    return (
      <GestureRecognizer
        onSwipeLeft={() => this.props.navigation.navigate('Details')}
        config={config}
        style={{
          flex: 1,
          alignItems: 'center', justifyContent: 'center',
          backgroundColor: '#fff',
          width: '100%',
          height: '100%'
        }}
        >
        <Text>{this.state.myText}</Text>
        <Text>onSwipe callback received gesture: {this.state.gestureName}</Text>
      </GestureRecognizer>
    );
  }
}

class Details extends Component {
  constructor(props){
    super(props);
    this.state={
      navigation: props.navigation,
    }
    let thing = './src/Assets/Images/tabIconSelected.png';

  }

  render(){
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };



    return (



      <GestureRecognizer
      style={{ flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        width: '100%',
        height: '100%' }}
      onSwipeRight={() => this.props.navigation.navigate('Home')}
      config={config}
      >
        <Text>
          Hello there!
        </Text>
      </GestureRecognizer>
    );
  }

}

const Tab = createBottomTabNavigator();

const dailyReadingTabNavigator = () => (
  <Tab.Navigator
  screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName = './src/Assets/Images/tabIconSelected.svg';

            if (route.name === 'Home') {
              iconName = focused
                ? images.tabImageSelected
                : images.tabImageUnselected
            } else if (route.name === 'Details') {
              iconName = focused
                ? images.tabImageSelected
                : images.tabImageUnselected
            }
            return <Image source={iconName} style={{ height: 15, width: 15, resizeMode: 'stretch'}} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          showLabel: false,
          style: styles.bottonTabNavigation,
        }}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Details" component={Details} />
  </Tab.Navigator>
);

const Stack = createStackNavigator();


function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator
      headerMode="float"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false,
      }}
      >
      <Stack.Screen
        name="Home"
        component={dailyReadingTabNavigator}
      />
      <Stack.Screen
        name="Details"
        component={dailyReadingTabNavigator}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );

}

export default App;
