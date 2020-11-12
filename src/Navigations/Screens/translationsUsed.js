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

  const langContext = React.useContext(LanguageContext);
  let content = LocalizeText(langContext.lang, "translations");
  let font;


  return (
    <GestureRecognizer
    style={ styles.container }
    onSwipeRight={() => navigation.navigate('Daily Voices')}
    config={gestureRecognizerConfig}
    >
    <TouchableOpacity style={styles.drawerHamburgerContainer} onPress={() => navigation.openDrawer()}>
      <Image source={images.hamburgerButtonImage} style={styles.drawerHamburgerImage}/>
    </TouchableOpacity>
    <ScrollView style={styles.scrollView} contentContainerStyle={[styles.justifyAndAlign, styles.scrollViewPadding]}>
      <Text style={[styles.passageText, langContext.fontBold(),{textAlign: 'center'}]}>
        { content.title }
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
      <Text style={[styles.baseText, langContext.fontLight()]}>
        {content.para6}
      </Text>
      <Text style={[styles.baseText,  langContext.fontLight()]}>
        {content.para7}
      </Text>
      <Text style={[styles.baseText,  langContext.fontLight()]}>
        {content.para8}
      </Text>
      <Text style={[styles.baseText,  langContext.fontLight()]}>
        {content.para9}
      </Text>
      <Text style={[styles.baseText,  langContext.fontLight()]}>
        {content.para10}
      </Text>
      <Text style={[styles.baseText, langContext.fontLight()]}>
        {content.para11}
      </Text>
      <Text style={[styles.baseText, styles.baseTextMargin, langContext.fontLight()]}>
        {content.para12}
      </Text>
    </ScrollView>
    </GestureRecognizer>
  )
}
