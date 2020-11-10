import React from "react";
import { StyleSheet } from "react-native";

const colors = {
  background: '#FfE8E1',
  textColor: '#202020',
  buttonColors: {
    backgroundColor: '#18AB73',
  }
}

const fontSizes = {
    smallFont: 20,
    mediumFont: 25,
    largeFont: 30,
}

const fontFamilies = {
    baseFont: 'Roboto-Light',
    boldFont: 'Roboto-Regular',
}

const styles = StyleSheet.create({
  button: {
    width: '80%',
    backgroundColor: colors.buttonColors.backgroundColor,
    borderRadius: 50,
    height: 50,
    margin: 25,
    justifyContent: 'center',
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: fontSizes.smallFont,
    fontFamily: fontFamilies.boldFont,
  },

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
    flex: 1,
    backgroundColor: colors.background,
    height: '100%',
    width: '100%',
    zIndex: 2,
    padding: 40,
    marginBottom: 40,
  },

  justifyAndAlign:{
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  baseText: {
    color: '#121212',
    fontFamily: 'Roboto-Light',
    maxWidth: '100%',
    lineHeight: 35,
    fontSize: fontSizes.mediumFont,
    width: '100%',
  },


  //Style for botton tab navigation
  bottonTabNavigation: {
      backgroundColor: colors.background,
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
