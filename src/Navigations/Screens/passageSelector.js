import * as React from 'react';
import { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, Button, Alert, ScrollView } from 'react-native';
import { Component } from 'react';
import styles from '../../Styles/styles.js';
import images from '../../Assets/Images/imageLibrary.js';
import { LanguageContext } from '../../Components/Atoms/languageContext.js';

//TODO customize this for the PassageSelector Context

export default function LanguageSelection({navigation}) {
  const langContext = useContext(LanguageContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.drawerHamburgerContainer} onPress={() => navigation.openDrawer()}>
        <Image source={images.hamburgerButtonImage} style={styles.drawerHamburgerImage}/>
      </TouchableOpacity>
      <ScrollView style={[styles.scrollView]} contentContainerStyle={styles.justifyAndAlign}>
        <TouchableOpacity onPress={()=>langContext.changeLang('Eng')}
                style={styles.button}>
                <Text style={[styles.buttonText, styles.buttonTextFontEng]}>
                Language: English
                </Text>
                </TouchableOpacity>
        <TouchableOpacity onPress={() => langContext.changeLang('Hin')}
                style={styles.button}>
                <Text style={[styles.buttonText, styles.buttonTextFontHin]}>
                भाषा: हिन्दी
                </Text>
                </TouchableOpacity>
      </ScrollView>

    </View>
  )
}
