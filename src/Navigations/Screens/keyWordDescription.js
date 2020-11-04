import * as React from 'react';
import {  View, Text, TouchableOpacity, Image } from 'react-native';
import { Component } from 'react';
import styles from '../../Styles/styles.js';
import images from '../../Assets/Images/imageLibrary.js';

export default function KeyWords({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.drawerHamburgerContainer} onPress={() => navigation.openDrawer()}>
        <Image source={images.hamburgerButtonImage} style={styles.drawerHamburgerImage}/>
      </TouchableOpacity>
      <Text>
        Key Words Go Here.
      </Text>
    </View>
  )
}
