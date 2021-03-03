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


//Exports Daily Encouragements for the Tab Navigation dailyReadingTabs from
///Navigations/dailyReadingTabs.js
export default function DailyEncouragement({navigation}) {

  //Localize content to set language based on current dayIndex
  const langContext = React.useContext(LanguageContext);
  const dayContext = React.useContext(DayContext);
  let dayIndex = dayContext.dayIndex;

  //retrieve content based on a string that ranges from day1 to day31
  let content = LocalizeText(langContext.lang, "day" + dayIndex);

  //Allows for options 8th paragraph
  let conditionalFinalEncouragement = undefined;
  if(content.para8) {
    conditionalFinalEncouragement =
    <Text style={[styles.baseText, styles.baseTextMargin, langContext.fontLight()]}>
          {content.para8};
    </Text>
  }


  return (
    <GestureRecognizer
    style={ styles.container }
    onSwipeRight={() => navigation.navigate('Daily Prayer')}
    config={gestureRecognizerConfig}
    >
    <TouchableOpacity style={styles.drawerHamburgerContainer} onPress={() => navigation.openDrawer()}>
      <Image source={images.hamburgerButtonImage} style={styles.drawerHamburgerImage}/>
    </TouchableOpacity>
    <ScrollView style={styles.scrollView} contentContainerStyle={[styles.justifyAndAlign, styles.scrollViewPadding]}>
      <Text style={[styles.passageText, langContext.fontBold(),{textAlign: 'center'}]}>
        { content.iAmTitle }
      </Text>
      <View style={styles.horizontalBar} />
      <Text style={[styles.baseText, styles.baseTextMargin, langContext.fontLight()]}>
        {content.para1}
      </Text>
      <Text style={[styles.baseText, styles.baseTextMargin, langContext.fontLight()]}>
        {content.para2}
      </Text>
      <Text style={[styles.baseText, styles.baseTextMargin, langContext.fontLight()]}>
        {content.para3}
      </Text>
      <Text style={[styles.baseText, styles.baseTextMargin, langContext.fontLight()]}>
        {content.para4}
      </Text>
      <Text style={[styles.baseText, styles.baseTextMargin, langContext.fontLight()]}>
        {content.para5}
      </Text>
      <Text style={[styles.baseText, styles.baseTextMargin, langContext.fontLight()]}>
        {content.para6}
      </Text>
      <Text style={[styles.baseText, styles.baseTextMargin, langContext.fontLight()]}>
        {content.para7}
      </Text>
      {conditionalFinalEncouragement}
    </ScrollView>
    </GestureRecognizer>
  )
}
