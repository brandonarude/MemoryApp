import * as React from 'react';
import { Component } from 'react';
import PassageContextProvider from '../Components/Atoms/passageContext.js';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SelectedPassage from './Screens/selectedPassage.js';
import SelectedPrayer from './Screens/selectedPrayer.js';
import SelectedVoices from './Screens/selectedVoices.js';
import SelectedEncouragement from './Screens/selectedEncouragement.js';
import styles from '../Styles/styles.js';
import images from '../Assets/Images/imageLibrary.js'

//  Renders pages manual selection of passage, prayer
//  five voices, and encouragements

const Tab = createBottomTabNavigator();

export default function SelectedReadingTabs() {
  return(
    <DayContextProvider>
      <Tab.Navigator
      screenOptions={({ route }) => ({
              tabBarIcon: ({ focused }) => {
                let iconName = './src/Assets/Images/tabIconSelected.svg';
                if (route.name === 'Daily Passage') {
                  iconName = focused
                    ? images.tabImageSelected
                    : images.tabImageUnselected
                } else if (route.name === 'Daily Prayer') {
                  iconName = focused
                    ? images.tabImageSelected
                    : images.tabImageUnselected
                } else if (route.name === 'Daily Voices') {
                  iconName = focused
                    ? images.tabImageSelected
                    : images.tabImageUnselected
                } else if (route.name === 'Daily Encouragement') {
                  iconName = focused
                    ? images.tabImageSelected
                    : images.tabImageUnselected
                }
                return <Image source={iconName} style={{ height: 15, width: 15, resizeMode: 'stretch'}} />;
              },
            })}
            tabBarOptions={{
              showLabel: false,
              style: styles.bottonTabNavigation,
            }}>
            //TODO add PassageSelector.js
        <Tab.Screen name="Passage Selected" component={PassageSelector} />
        <Tab.Screen name="Selected Passage" component={SelectedPassage} />
        <Tab.Screen name="Selected Prayer" component={SelectedPrayer} />
        <Tab.Screen name="Selected Voices" component={SelectedVoices} />
        <Tab.Screen name="Selected Encouragement" component={SelectedEncouragement} />
      </Tab.Navigator>
    </DayContextProvider>
  )
}
