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

//Exports Selected Passage for the Tab Navigation selectedPAssageTabs from
///Navigations/selectedPassageTabs.js
export default function SelectedPassage({navigation}) {
  const langContext = React.useContext(LanguageContext);
  const passageContext = React.useContext(PassageContext);
  let passageIndex = passageContext.selectedIndex;
  let content = LocalizeText(langContext.lang, "day" + passageIndex);
  let font;


  return (

    <GestureRecognizer
    style={ styles.container }
    onSwipeRight={() => navigation.navigate('Passage Selection')}
    onSwipeLeft={() => navigation.navigate('Selected Prayer')}
    config={gestureRecognizerConfig}
    >
    <TouchableOpacity style={styles.drawerHamburgerContainer} onPress={() => navigation.openDrawer()}>
      <Image source={images.hamburgerButtonImage} style={styles.drawerHamburgerImage}/>
    </TouchableOpacity>
    <ScrollView style={styles.scrollView} contentContainerStyle={[styles.justifyAndAlign, styles.scrollViewPadding]}>
        <Text style={[styles.passageText, langContext.fontLight()]}>
          { content.passage }
        </Text>
        <Text style={[styles.baseText, langContext.fontLight(), { width: '100%', textAlign: 'right' }]}>
          {content.reference}, {content.translation}
        </Text>
      </ScrollView>
    </GestureRecognizer>
  )
}
