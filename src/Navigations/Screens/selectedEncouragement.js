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
import { PassageContext } from '../../Components/Atoms/passageContext.js';
import RetrieveStoredData from '../../Components/Atoms/retrieveStoredData.js';


//Exports Selected Encouragements for the Tab Navigation selectedPassageTabs from
///Navigations/selectedPassageTabs.js
export default function SelectedEncouragement({navigation}) {
  const langContext = React.useContext(LanguageContext);
  const passageContext = React.useContext(PassageContext);
  let passageIndex = passageContext.selectedIndex;
  let content = LocalizeText(langContext.lang, "day" + passageIndex);
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
