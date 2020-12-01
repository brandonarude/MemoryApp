import * as React from 'react';
import { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, Button, Alert, ScrollView } from 'react-native';
import { Component } from 'react';
import styles from '../../Styles/styles.js';
import images from '../../Assets/Images/imageLibrary.js';
import { PassageContext } from '../../Components/Atoms/passageContext.js';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import gestureRecognizerConfig from '../../Configs/gestureRecognizerConfig.js';

//TODO customize this for the PassageSelector Context

export default function PassageSelection({navigation}) {
  const selectedPassage = useContext(PassageContext);

  return (
    <GestureRecognizer
    style={ styles.container }
    onSwipeLeft={() => navigation.navigate('Selected Passage')}
    config={gestureRecognizerConfig}
    >
      <TouchableOpacity style={styles.drawerHamburgerContainer} onPress={() => navigation.openDrawer()}>
        <Image source={images.hamburgerButtonImage} style={styles.drawerHamburgerImage}/>
      </TouchableOpacity>
      <ScrollView style={[styles.scrollView]} contentContainerStyle={styles.justifyAndAlign}>
        <TouchableOpacity onPress={()=>selectedPassage.changeSelected('1')}
                style={styles.button}>
                <Text style={[styles.buttonText]}>
                1 Peter 2:9
                </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>selectedPassage.changeSelected('2')}
                style={styles.button}>
                <Text style={[styles.buttonText]}>
                2 Corinthians 5:20
                </Text>
        </TouchableOpacity>
      </ScrollView>

    </GestureRecognizer>
  )
}
