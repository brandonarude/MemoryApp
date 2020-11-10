import * as React from 'react';
import { useContext } from 'react';
import {  View, Text, Easing, Image,TouchableOpacity } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { useState, Component } from 'react';
import styles from '../../Styles/styles.js';
import gestureRecognizerConfig from '../../Configs/gestureRecognizerConfig.js';
import images from '../../Assets/Images/imageLibrary.js';
import { LanguageContext } from '../../Components/Atoms/languageContext.js';
import LocalizeText from '../../Localization/localizeText.js'
import { DayContext } from '../../Components/Atoms/dayContext.js';

//Exports Daily Passage for the Tab Navigation dailyReadingTabs from
///Navigations/dailyReadingTabs.js
export default function DailyPassage({navigation}) {
  const langContext = React.useContext(LanguageContext);
  const dayContext = React.useContext(DayContext);
  let dayIndex = dayContext.dayIndex;
  let content = LocalizeText(langContext.lang, "day" + dayIndex);

  return (

    <GestureRecognizer
    style={ styles.container }
    onSwipeLeft={() => navigation.navigate('Daily Prayer')}
    config={gestureRecognizerConfig}
    >
    <TouchableOpacity style={styles.drawerHamburgerContainer} onPress={() => navigation.openDrawer()}>
      <Image source={images.hamburgerButtonImage} style={styles.drawerHamburgerImage}/>
    </TouchableOpacity>
      <Text style={styles.passageText}>
        { content.passage }
      </Text>
      <Text>
        {content.reference}, {content.translation}
      </Text>
    </GestureRecognizer>
  )
}
