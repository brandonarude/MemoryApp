import React from "react";
import { StyleSheet } from "react-native";

const colors = {
  background: '#fff',
  textColor: '#202020',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },

  justifyAndAlign:{
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

  baseText: {
    color: '#121212',
    fontFamily: 'Roboto-Light',
    maxWidth: '100%',
    lineHeight: 35,
    fontSize: 25,
    width: '100%',
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
