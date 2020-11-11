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

//Exports Daily Passage for the Tab Navigation dailyReadingTabs from
///Navigations/dailyReadingTabs.js
export default function DailyPassage({navigation}) {
  const langContext = React.useContext(LanguageContext);
  const dayContext = React.useContext(DayContext);
  let dayIndex = dayContext.dayIndex;
  let content = LocalizeText(langContext.lang, "day" + dayIndex);

  //  Directs User to Language Selection if this is their first time.
  const returned = RetrieveStoredData("MyVisited");
  returned.then((returned) => {
    if(returned != "true"){
      navigation.navigate("Language Selection");
    }
  });
  //


  return (

    <GestureRecognizer
    style={ styles.container }
    onSwipeLeft={() => navigation.navigate('Daily Prayer')}
    config={gestureRecognizerConfig}
    >
    <TouchableOpacity style={styles.drawerHamburgerContainer} onPress={() => navigation.openDrawer()}>
      <Image source={images.hamburgerButtonImage} style={styles.drawerHamburgerImage}/>
    </TouchableOpacity>
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.justifyAndAlign}>
        <Text style={styles.baseText}>
          { content.passage }
        </Text>
        <Text style={[styles.baseText, { width: '100%', textAlign: 'right', fontSize: 20 }]}>
          {content.reference}, {content.translation}
        </Text>
      </ScrollView>
    </GestureRecognizer>
  )
}
