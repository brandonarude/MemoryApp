import * as React from 'react';
import { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, Button, Alert } from 'react-native';
import { Component } from 'react';
import styles from '../../Styles/styles.js';
import images from '../../Assets/Images/imageLibrary.js';
import { LanguageContext } from '../../Components/Atoms/languageContext.js';



export default function LanguageSelection({navigation}) {
  const langContext = useContext(LanguageContext);

  function changeToHindi() {
    console.log('Clicked!');
    langContext.changeLang('Hin');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.drawerHamburgerContainer} onPress={() => navigation.openDrawer()}>
        <Image source={images.hamburgerButtonImage} style={styles.drawerHamburgerImage}/>
      </TouchableOpacity>
      <Button title='English' onPress={()=>langContext.changeLang('Eng')} />
      <Button title='हिन्दी' onPress={() => langContext.changeLang('Hin')} />

    </View>
  )
}
