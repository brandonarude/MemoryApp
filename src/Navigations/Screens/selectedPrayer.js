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

//Exports selected Prayer for the Tab Navigation selectedPassageTabs from
///Navigations/dailyPassageTabs.js

export default function SelectedPrayer({navigation}) {

  //localize content based on set language and passageIndex (ranges from day1 to day31)
  const langContext = React.useContext(LanguageContext);
  const passageContext = React.useContext(PassageContext);
  let passageIndex = passageContext.selectedIndex;
  let content = LocalizeText(langContext.lang, "day" + passageIndex);
  let font;

  return (
    <GestureRecognizer
    style={ styles.container }
    onSwipeLeft={() => navigation.navigate('Selected Encouragement')}
    onSwipeRight={() => navigation.navigate('Selected Passage')}
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
