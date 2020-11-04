import * as React from 'react';
import {  View, Text, Easing, Image,TouchableOpacity } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { useState, Component } from 'react';
import styles from '../../Styles/styles.js';
import gestureRecognizerConfig from '../../Configs/gestureRecognizerConfig.js';
import images from '../../Assets/Images/imageLibrary.js';

//Exports Daily Prayer for the Tab Navigation dailyReadingTabs from
///Navigations/dailyReadingTabs.js
export default function DailyPrayer({navigation}) {
  return (
    <GestureRecognizer
    style={ styles.container }
    onSwipeLeft={() => navigation.navigate('Daily Voices')}
    onSwipeRight={() => navigation.navigate('Daily Passage')}
    config={gestureRecognizerConfig}
    >
    <TouchableOpacity style={styles.drawerHamburgerContainer} onPress={() => navigation.openDrawer()}>
      <Image source={images.hamburgerButtonImage} style={styles.drawerHamburgerImage}/>
    </TouchableOpacity>
      <Text>
        Daily Prayer Goes Here.
      </Text>
    </GestureRecognizer>
  )
}
