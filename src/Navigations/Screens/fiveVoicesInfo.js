import * as React from 'react';
import {  View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { useState, Component } from 'react';
import styles from '../../Styles/styles.js';
import gestureRecognizerConfig from '../../Configs/gestureRecognizerConfig.js';
import images from '../../Assets/Images/imageLibrary.js';
import { LanguageContext } from '../../Components/Atoms/languageContext.js';
import LocalizeText from '../../Localization/localizeText.js'
import RetrieveStoredData from '../../Components/Atoms/retrieveStoredData.js';

export default function FiveVoicesInfo({navigation}) {
  //localize content based on set language
  const langContext = React.useContext(LanguageContext);
  let content = LocalizeText(langContext.lang, "voices");


  return (
    <GestureRecognizer
    style={ styles.container }
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
      <Text style={[styles.baseText, styles.baseTextMargin, langContext.fontBold(),{textAlign: 'center'}]}>
        {content.para1}
      </Text>
      <Text style={[styles.baseText, styles.baseTextMargin, langContext.fontBold(),{textAlign: 'center'}]}>
        {content.para2}
      </Text>
      <Text style={[styles.baseText, styles.baseTextMargin, langContext.fontBold(),{textAlign: 'center'}]}>
        {content.para3}
      </Text>
      <Text style={[styles.baseText, styles.baseTextMargin, langContext.fontBold(),{textAlign: 'center'}]}>
        {content.para4}
      </Text>
      <Text style={[styles.baseText, styles.baseTextMargin, langContext.fontBold(),{textAlign: 'center'}]}>
        {content.para5}
      </Text>
      <Text style={[styles.baseText, styles.baseTextMargin, langContext.fontLight()]}>
        {content.para6}
      </Text>
      <Text style={[styles.baseText, styles.baseTextMargin, langContext.fontLight()]}>
        {content.para7}
      </Text>
      <Text style={[styles.baseText, styles.baseTextMargin, langContext.fontLight()]}>
        {content.para8}
      </Text>
    </ScrollView>
    </GestureRecognizer>
  )
}
