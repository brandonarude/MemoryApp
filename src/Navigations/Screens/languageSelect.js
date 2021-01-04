import * as React from 'react';
import { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, Button, Alert, ScrollView } from 'react-native';
import { Component } from 'react';
import styles from '../../Styles/styles.js';
import images from '../../Assets/Images/imageLibrary.js';
import { LanguageContext } from '../../Components/Atoms/languageContext.js';



export default function LanguageSelection({navigation}) {
  const langContext = useContext(LanguageContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.drawerHamburgerContainer} onPress={() => navigation.openDrawer()}>
        <Image source={images.hamburgerButtonImage} style={styles.drawerHamburgerImage}/>
      </TouchableOpacity>
      <ScrollView style={[styles.scrollView]} contentContainerStyle={[styles.justifyAndAlign, styles.scrollViewPadding]}>
        <TouchableOpacity onPress={()=>langContext.changeLang('Eng')}
                style={styles.button}>
                <Text style={[styles.buttonText, styles.buttonTextFontEng]}>
                Language: English
                </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => langContext.changeLang('Hin')}
                style={styles.button}>
                <Text style={[styles.buttonText, styles.buttonTextFontHin]}>
                भाषा: हिन्दी {/* Language: Hindi */}
                </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => langContext.changeLang('Mar')}
                style={styles.button}>
                <Text style={[styles.buttonText, styles.buttonTextFontHin]}>
                  भाषा: मराठीदी {/* Language: Marathi */}
                </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonDisabled}
                disabled={true}>
                <Text style={[styles.buttonText, styles.buttonTextFontHin]}>
                భాష: తెలుగు {/* Language: Telugu */}
                </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonDisabled}
                disabled={true}>
                <Text style={[styles.buttonText, styles.buttonTextFontHin]}>
                  भाषा: नेपाली {/* Language: Nepali */}
                </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonDisabled}
                disabled={true}>
                <Text style={[styles.buttonText, styles.buttonTextFontHin]}>
                ਭਾਸ਼ਾ: ਪੰਜਾਬੀ {/* Language: Punjabi */}
                </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonDisabled}
                disabled={true}>
                <Text style={[styles.buttonText, styles.buttonTextFontHin]}>
                மொழி: தமிழ் {/* Language: Tamil */}
                </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonDisabled}
                disabled={true}>
                <Text style={[styles.buttonText, styles.buttonTextFontHin]}>
                ಭಾಷೆ: ಕನ್ನಡ {/* Language: Kannada */}
                </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonDisabled}
                disabled={true}>
                <Text style={[styles.buttonText, styles.buttonTextFontHin]}>
                ଭାଷା: ଓଡିଆ {/* Language: Odia */}
                </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonDisabled}
                disabled={true}>
                <Text style={[styles.buttonText, styles.buttonTextFontHin]}>
                اللغة: العربية {/* Language: Arabic */}
                </Text>
        </TouchableOpacity>
      </ScrollView>

    </View>
  )
}
