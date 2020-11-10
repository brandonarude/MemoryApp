import * as React from 'react';
import { Component, useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DailyReadingTabs from './dailyReadingTabs';
import LanguageSelection from './Screens/languageSelect.js';
import PowerOfGodsWord from './Screens/powerOfGodsWord.js';
import TranslationsUsed from './Screens/translationsUsed.js';
import KeyWords from './Screens/keyWordDescription.js';
import FiveVoicesInfo from './Screens/fiveVoicesInfo.js';
import Covenant from './Screens/covenant.js';
import { LanguageContext } from '../Components/Atoms/languageContext.js';
import LocalizeText from '../Localization/localizeText.js';

//Instantiates Drawer
let Drawer = createDrawerNavigator();

//  Populates Drawer and localizes Titles based on Language Context
export default function AppDrawer() {
const langContext = React.useContext(LanguageContext);
let title = LocalizeText(langContext.lang, "drawer")

  return (
      <Drawer.Navigator initialRouteName="Today's Reading">
        <Drawer.Screen name="Today's Reading" component={DailyReadingTabs}
          options={{title:  title.dailyReadingTitle}} />
        <Drawer.Screen name="Language Selection" component={LanguageSelection}
          options={{title:  title.languageSelectionTitle}} />
        <Drawer.Screen name="Power of God's Word" component={PowerOfGodsWord}
          options={{title:  title.powerOfGodsWordTitle}} />
        <Drawer.Screen name="What are the Five Voices?" component={FiveVoicesInfo}
          options={{title:  title.fiveVoicesInfoTitle}} />
        <Drawer.Screen name="Memory Covenant" component={Covenant}
          options={{title:  title.covenantTitle}} />
        <Drawer.Screen name="Glossary" component={KeyWords}
          options={{title:  title.keyWordInfoTitle}} />
        <Drawer.Screen name="Translations Used" component={TranslationsUsed}
          options={{title:  title.translationsUsedTitle}} />
      </Drawer.Navigator>
  );
}
