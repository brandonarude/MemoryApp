import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '100%',
    height: '100%'
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
  },
  drawerHamburgerImage: {
    height: 35,
    width: 35,
    resizeMode: 'stretch',
  }
})

export default styles
