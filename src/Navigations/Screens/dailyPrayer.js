import * as React from 'react';
import { useContext } from 'react';
import {  View, Text, Easing, Image,TouchableOpacity, ScrollView } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { useState, Component } from 'react';
import styles from '../../Styles/styles.js';
import gestureRecognizerConfig from '../../Configs/gestureRecognizerConfig.js';
import images from '../../Assets/Images/imageLibrary.js';
import { LanguageContext } from '../../Components/Atoms/languageContext.js';
import LocalizeText from '../../Localization/localizeText.js'
import { DayContext } from '../../Components/Atoms/dayContext.js';
import RetrieveStoredData from '../../Components/Atoms/retrieveStoredData.js';

//Exports Daily Prayer for the Tab Navigation dailyReadingTabs from
///Navigations/dailyReadingTabs.js

export default function DailyPrayer({navigation}) {

  //localize content based on set language and dayIndex
  const langContext = React.useContext(LanguageContext);
  const dayContext = React.useContext(DayContext);
  let dayIndex = dayContext.dayIndex;
  let content = LocalizeText(langContext.lang, "day" + dayIndex);

  return (
    <GestureRecognizer
    style={ styles.container }
    onSwipeLeft={() => navigation.navigate('Daily Encouragement')}
    onSwipeRight={() => navigation.navigate('Daily Passage')}
    config={gestureRecognizerConfig}
    >
    <TouchableOpacity style={styles.drawerHamburgerContainer} onPress={() => navigation.openDrawer()}>
      <Image source={images.hamburgerButtonImage} style={styles.drawerHamburgerImage}/>
    </TouchableOpacity>
    <ScrollView style={styles.scrollView} contentContainerStyle={[styles.justifyAndAlign, styles.scrollViewPadding]}>
      <Text style={[styles.passageText, langContext.fontBold(),{textAlign: 'center'}]}>
        { content.prayerTitle }
      </Text>
        <Text style={[styles.baseText, langContext.fontLight(), { width: '100%' }]}>
          {content.prayer}
        </Text>
      </ScrollView>
    </GestureRecognizer>
  )
}
