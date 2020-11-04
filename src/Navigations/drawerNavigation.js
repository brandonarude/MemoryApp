import * as React from 'react';
import { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DailyReadingTabs from './dailyReadingTabs';
import LanguageSelection from './Screens/languageSelect.js'
import PowerOfGodsWord from './Screens/powerOfGodsWord.js'

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
      <Drawer.Navigator>
        <Drawer.Screen name="Today's Reading" component={DailyReadingTabs} />
        <Drawer.Screen name="Language Selection" component={LanguageSelection} />
        <Drawer.Screen name="Power of God's Word" component={PowerOfGodsWord} />
      </Drawer.Navigator>
  );
}
