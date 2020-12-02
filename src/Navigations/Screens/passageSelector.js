import * as React from 'react';
import { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, Button, Alert, ScrollView } from 'react-native';
import { Component } from 'react';
import styles from '../../Styles/styles.js';
import images from '../../Assets/Images/imageLibrary.js';
import { PassageContext } from '../../Components/Atoms/passageContext.js';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import gestureRecognizerConfig from '../../Configs/gestureRecognizerConfig.js';
import { LanguageContext } from '../../Components/Atoms/languageContext.js';
import LocalizeText from '../../Localization/localizeText.js'

//TODO customize this for the PassageSelector Context

export default function PassageSelection({navigation}) {
  const selectedPassage = React.useContext(PassageContext);
  const langContext = React.useContext(LanguageContext);
  let content = LocalizeText(langContext.lang, "passageSelection");


  return (
    <View>
      <TouchableOpacity style={styles.drawerHamburgerContainer} onPress={() => navigation.openDrawer()}>
        <Image source={images.hamburgerButtonImage} style={styles.drawerHamburgerImage}/>
      </TouchableOpacity>
      <ScrollView style={[styles.scrollView]} contentContainerStyle={[styles.justifyAndAlign, styles.scrollViewPadding]}>
        <Text style={[styles.passageText, langContext.fontBold(),{textAlign: 'center'}]}>
          { content.passageSelectionTitle }
        </Text>
        <View style={styles.horizontalBar} />
        <Text style={[styles.baseText, langContext.fontBold(),{textAlign: 'center'}]}>
          { content.theme1 }
        </Text>
        <TouchableOpacity onPress={()=>{selectedPassage.changeSelected('1');
                                        navigation.navigate('Selected Passage') }}
                style={styles.button}>
                <Text style={[styles.buttonText, langContext.fontLight()]}>
                {content.verse1}
                </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{selectedPassage.changeSelected('2');
                                        navigation.navigate('Selected Passage') }}
                style={styles.button}>
                <Text style={[styles.buttonText]}>
                {content.verse2}
                </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{selectedPassage.changeSelected('3');
                                        navigation.navigate('Selected Passage') }}
                style={styles.button}>
                <Text style={[styles.buttonText]}>
                {content.verse3}
                </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{selectedPassage.changeSelected('4');
                                        navigation.navigate('Selected Passage') }}
                style={styles.button}>
                <Text style={[styles.buttonText]}>
                {content.verse4}
                </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{selectedPassage.changeSelected('5');
                                        navigation.navigate('Selected Passage') }}
                style={styles.button}>
                <Text style={[styles.buttonText]}>
                {content.verse5}
                </Text>
        </TouchableOpacity>
        <Text style={[styles.baseText, langContext.fontBold(),{textAlign: 'center'}]}>
          { content.theme2 }
        </Text>
        <TouchableOpacity onPress={()=>{selectedPassage.changeSelected('6');
                                        navigation.navigate('Selected Passage') }}
                style={styles.button}>
                <Text style={[styles.buttonText]}>
                {content.verse6}
                </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{selectedPassage.changeSelected('7');
                                        navigation.navigate('Selected Passage') }}
                style={styles.button}>
                <Text style={[styles.buttonText]}>
                {content.verse7}
                </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{selectedPassage.changeSelected('8');
                                        navigation.navigate('Selected Passage') }}
                style={styles.button}>
                <Text style={[styles.buttonText]}>
                {content.verse8}
                </Text>
        </TouchableOpacity>
        <Text style={[styles.baseText, langContext.fontBold(),{textAlign: 'center'}]}>
          { content.theme3 }
        </Text>
        <TouchableOpacity onPress={()=>{selectedPassage.changeSelected('9');
                                        navigation.navigate('Selected Passage') }}
                style={styles.button}>
                <Text style={[styles.buttonText]}>
                {content.verse9}
                </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{selectedPassage.changeSelected('10');
                                        navigation.navigate('Selected Passage') }}
                style={styles.button}>
                <Text style={[styles.buttonText]}>
                {content.verse10}
                </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{selectedPassage.changeSelected('11');
                                        navigation.navigate('Selected Passage') }}
                style={styles.button}>
                <Text style={[styles.buttonText]}>
                {content.verse11}
                </Text>
        </TouchableOpacity>
        <Text style={[styles.baseText, langContext.fontBold(),{textAlign: 'center'}]}>
          { content.theme4 }
        </Text>
        <TouchableOpacity onPress={()=>{selectedPassage.changeSelected('12');
                                        navigation.navigate('Selected Passage') }}
                style={styles.button}>
                <Text style={[styles.buttonText]}>
                {content.verse12}
                </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{selectedPassage.changeSelected('13');
                                        navigation.navigate('Selected Passage') }}
                style={styles.button}>
                <Text style={[styles.buttonText]}>
                {content.verse13}
                </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{selectedPassage.changeSelected('14');
                                        navigation.navigate('Selected Passage') }}
                style={styles.button}>
                <Text style={[styles.buttonText]}>
                {content.verse14}
                </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{selectedPassage.changeSelected('15');
                                        navigation.navigate('Selected Passage') }}
                style={styles.button}>
                <Text style={[styles.buttonText]}>
                {content.verse15}
                </Text>
        </TouchableOpacity>
        <Text style={[styles.baseText, langContext.fontBold(),{textAlign: 'center'}]}>
          { content.theme5 }
        </Text>
        <TouchableOpacity onPress={()=>{selectedPassage.changeSelected('16');
                                        navigation.navigate('Selected Passage') }}
                style={styles.button}>
                <Text style={[styles.buttonText]}>
                {content.verse16}
                </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{selectedPassage.changeSelected('17');
                                        navigation.navigate('Selected Passage') }}
                style={styles.button}>
                <Text style={[styles.buttonText]}>
                {content.verse17}
                </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{selectedPassage.changeSelected('18');
                                        navigation.navigate('Selected Passage') }}
                style={styles.button}>
                <Text style={[styles.buttonText]}>
                {content.verse18}
                </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{selectedPassage.changeSelected('19');
                                        navigation.navigate('Selected Passage') }}
                style={styles.button}>
                <Text style={[styles.buttonText]}>
                {content.verse19}
                </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{selectedPassage.changeSelected('20');
                                        navigation.navigate('Selected Passage') }}
                style={styles.button}>
                <Text style={[styles.buttonText]}>
                {content.verse20}
                </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{selectedPassage.changeSelected('21');
                                        navigation.navigate('Selected Passage') }}
                style={styles.button}>
                <Text style={[styles.buttonText]}>
                {content.verse21}
                </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{selectedPassage.changeSelected('22');
                                        navigation.navigate('Selected Passage') }}
                style={styles.button}>
                <Text style={[styles.buttonText]}>
                {content.verse22}
                </Text>
        </TouchableOpacity>
        <Text style={[styles.baseText, langContext.fontBold(),{textAlign: 'center'}]}>
          { content.theme6 }
        </Text>
        <TouchableOpacity onPress={()=>{selectedPassage.changeSelected('23');
                                        navigation.navigate('Selected Passage') }}
                style={styles.button}>
                <Text style={[styles.buttonText]}>
                {content.verse23}
                </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{selectedPassage.changeSelected('24');
                                        navigation.navigate('Selected Passage') }}
                style={styles.button}>
                <Text style={[styles.buttonText]}>
                {content.verse24}
                </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{selectedPassage.changeSelected('25');
                                        navigation.navigate('Selected Passage') }}
                style={styles.button}>
                <Text style={[styles.buttonText]}>
                {content.verse25}
                </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{selectedPassage.changeSelected('26');
                                        navigation.navigate('Selected Passage') }}
                style={styles.button}>
                <Text style={[styles.buttonText]}>
                {content.verse26}
                </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{selectedPassage.changeSelected('27');
                                        navigation.navigate('Selected Passage') }}
                style={styles.button}>
                <Text style={[styles.buttonText]}>
                {content.verse27}
                </Text>
        </TouchableOpacity>
        <Text style={[styles.baseText, langContext.fontBold(),{textAlign: 'center'}]}>
          { content.theme7 }
        </Text>
        <TouchableOpacity onPress={()=>{selectedPassage.changeSelected('28');
                                        navigation.navigate('Selected Passage') }}
                style={styles.button}>
                <Text style={[styles.buttonText]}>
                {content.verse28}
                </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{selectedPassage.changeSelected('29');
                                        navigation.navigate('Selected Passage') }}
                style={styles.button}>
                <Text style={[styles.buttonText]}>
                {content.verse29}
                </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{selectedPassage.changeSelected('30');
                                        navigation.navigate('Selected Passage') }}
                style={styles.button}>
                <Text style={[styles.buttonText]}>
                {content.verse30}
                </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{selectedPassage.changeSelected('31');
                                        navigation.navigate('Selected Passage') }}
                style={styles.button}>
                <Text style={[styles.buttonText]}>
                {content.verse31}
                </Text>
        </TouchableOpacity>
      </ScrollView>

    </View>
  )
}
