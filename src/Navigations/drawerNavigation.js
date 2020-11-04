import * as React from 'react';
import { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DailyReadingTabs from './dailyReadingTabs';
import LanguageSelection from './Screens/languageSelect.js';
import PowerOfGodsWord from './Screens/powerOfGodsWord.js';
import TranslationsUsed from './Screens/translationsUsed.js';
import KeyWords from './Screens/keyWordDescription.js';
import FiveVoicesInfo from './Screens/fiveVoicesInfo.js';
import Covenant from './Screens/covenant.js';
import LocalizeDrawerTitles from '../Localization/drawerTranslations.js';

let Drawer = createDrawerNavigator();

let titles = LocalizeDrawerTitles();

export default function AppDrawer() {
  return (
      <Drawer.Navigator>
        <Drawer.Screen name="Today's Reading" component={DailyReadingTabs}
          options={{title: titles.dailyReadingTitle}} />
        <Drawer.Screen name="Language Selection" component={LanguageSelection}
          options={{title: titles.languageSelectionTitle}} />
        <Drawer.Screen name="Power of God's Word" component={PowerOfGodsWord}
          options={{title: titles.powerOfGodsWordTitle}} />
        <Drawer.Screen name="What are the Five Voices?" component={FiveVoicesInfo}
          options={{title: titles.fiveVoicesInfoTitle}} />
        <Drawer.Screen name="Memory Covenant" component={Covenant}
          options={{title: titles.covenantTitle}} />
        <Drawer.Screen name="Glossary" component={KeyWords}
          options={{title: titles.keyWordInfoTitle}} />
        <Drawer.Screen name="Translations Used" component={TranslationsUsed}
          options={{title: titles.translationsUsedTitle}} />
      </Drawer.Navigator>
  );
}
