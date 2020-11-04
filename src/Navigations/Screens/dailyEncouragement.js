import * as React from 'react';
import { Button, View, Text, TextInput,
         Easing, Image, ImageBackground,
         TouchableOpacity, SafeAreaView } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { useState, Component } from 'react';
import styles from '../../Styles/styles.js';
import gestureRecognizerConfig from '../../Configs/gestureRecognizerConfig.js';
import images from '../../Assets/Images/imageLibrary.js';

//Exports Daily Encouragements for the Tab Navigation dailyReadingTabs from 
///Navigations/dailyReadingTabs.js
export default function DailyEncouragement({navigation}) {
  return (
    <GestureRecognizer
    style={ styles.container }
    onSwipeRight={() => navigation.navigate('Daily Voices')}
    config={gestureRecognizerConfig}
    >
    <TouchableOpacity style={styles.drawerHamburgerContainer} onPress={() => navigation.openDrawer()}>
      <Image source={images.hamburgerButtonImage} style={styles.drawerHamburgerImage}/>
    </TouchableOpacity>
      <Text>
        Daily Encouragement Goes Here.
      </Text>
    </GestureRecognizer>
  )
}
