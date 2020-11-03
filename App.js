import * as React from 'react';
import { useState, Component } from 'react';
import { Button, View, Text, TextInput, Easing } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

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
        onSwipeRight={() => this.props.navigation.navigate('Details')}
        config={config}
        style={{
          flex: 1,
          backgroundColor: this.state.backgroundColor
        }}
        >
        <Text>{this.state.myText}</Text>
        <Text>onSwipe callback received gesture: {this.state.gestureName}</Text>
      </GestureRecognizer>
    );
  }
}

function Details({ navigation, route }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        Hello there!
      </Text>
    </View>
  );
}

const Stack = createStackNavigator();


function App() {



  return (
    <NavigationContainer>
    <Stack.Navigator
      headerMode="float"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{

        }}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );

}

export default App;
