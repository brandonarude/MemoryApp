import React from "react";
import { StyleSheet, useContext } from "react-native";
import LanguageContext from "../Components/Atoms/languageContext.js";

function languageFonts() {
  const langContext = React.useContext(LanguageContext);
  return langContext;
}

const colors = {
  background: '#FAF7EE',
  textColor: '#202020',
  accentColor: '#157E56',
  buttonColors: {
    backgroundColor: '#157E56',
    color: '#FAF7EE',
  }
}

const standardMargins = {
    smallMargin: 10,
    mediumMargin: 20,
    largeMargin: 40,
}

const fontSizes = {
    smallFont: 18,
    mediumFont: 25,
    largeFont: 30,
}

const fontFamilies = {
    baseFont: 'Roboto-Light',
    boldFont: 'Roboto-Regular',
    hindiFont: 'Hind-Light',
    HindiBoldFont: 'Hind-Bold',

}

const styles = StyleSheet.create({

  //Button Styles
  button: {
    width: '80%',
    backgroundColor: colors.buttonColors.backgroundColor,
    borderRadius: 50,
    height: 50,
    margin: 25,
    justifyContent: 'center',
  },

  buttonText: {
    color: colors.buttonColors.color,
    textAlign: 'center',
    fontSize: fontSizes.smallFont,
  },

  buttonTextFontEng:{
    fontFamily: fontFamilies.boldFont,
  },

  buttonTextFontHin:{
    fontFamily: fontFamilies.hindiFont,
  },


// Container Styles
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    width: '100%',
    height: '100%',
  },


  navigationContainerColor: {
    backgroundColor: colors.background,
  },

  scrollView:{
    backgroundColor: colors.background,
    height: '100%',
    width: '100%',
    zIndex: 2,
  },

  //This specific style needs to be applied to contentContainerStyle of Scrollview
  scrollViewPadding: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 40,
    paddingBottom: 20,
  },

  justifyAndAlign:{
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

// Horizontal Bar Styles
  horizontalBar: {
    borderBottomColor: colors.accentColor,
    borderBottomWidth: 1,
    width: '80%',
    marginTop: standardMargins.smallMargin,
    marginBottom: standardMargins.mediumMargin,
  },

// Text Styles
  baseText: {
    color: colors.textColor,
    maxWidth: '100%',
    lineHeight: 35,
    fontSize: fontSizes.smallFont,
    width: '100%',
  },

  baseTextMargin: {
    marginBottom: standardMargins.mediumMargin,
  },

  passageText: {
    color: colors.textColor,
    maxWidth: '100%',
    lineHeight: 35,
    fontSize: fontSizes.mediumFont,
    width: '100%',
  },

  baseTextFontEng: {
    fontFamily: fontFamilies.baseFont,
  },

  baseTextFontHin: {
    fontFamily: fontFamilies.hindiFont,
  },

  boldTextFontEng: {
    fontFamily: fontFamilies.boldFont,
  },

  boldTextFontHin: {
    fontFamily: fontFamilies.hindiBoldFont,
  },


  //Style for botton tab navigation
  bottonTabNavigation: {
      backgroundColor: 'transparent',
      position: 'absolute',
      left: 0,
      bottom: 0,
      right: 0,
      shadowColor: "transparent",
      shadowOffset: {
      	width: 0,
      	height: 0,
      },
      shadowOpacity: 0.0,
      shadowRadius: 0,

      elevation: 0,
      borderTopWidth: 0,
      width: "50%",
      left: "25%"
  },

  //Styles for Hamburger Button container + button to open drawer
  drawerHamburgerContainer: {
    position: "absolute",
    top: 30,
    left: 12,
    zIndex: 3,
  },
  drawerHamburgerImage: {
    height: 35,
    width: 35,
    resizeMode: 'stretch',
  }
})

export default styles
