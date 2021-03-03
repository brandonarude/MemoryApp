import * as React from 'react';
import { Component } from 'react';
import DayContextProvider from '../Components/Atoms/dayContext.js';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DailyPassage from './Screens/dailyPassage.js';
import DailyPrayer from './Screens/dailyPrayer.js';
import DailyEncouragement from './Screens/dailyEncouragement.js';
import styles from '../Styles/styles.js';
import images from '../Assets/Images/imageLibrary.js'

//  Renders main page with daily memorization, prayer,
//  five voices, and encouragements

const Tab = createBottomTabNavigator();

export default function DailyReadingTabs() {
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
        <Tab.Screen name="Daily Passage" component={DailyPassage} />
        <Tab.Screen name="Daily Prayer" component={DailyPrayer} />
        <Tab.Screen name="Daily Encouragement" component={DailyEncouragement} />
      </Tab.Navigator>
    </DayContextProvider>
  )
}
