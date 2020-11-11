import React, { Component, useState } from "react";
import { AsyncStorage, Alert } from 'react-native';
import LocalizeText from '../../Localization/localizeText.js';

//  Creates Language Context
export const LanguageContext = React.createContext({
  lang: 'Eng',
});

// Created Provider function for LanguageContext
export default function LanguageContextProvider({children}) {
  const [lang, setLang] = useState('Eng');


  const provider = {
    lang,
    changeLang: selected => {
      const selectedLang = selected ? selected : 'Eng'
      try {
        AsyncStorage.setItem("MyLang",selected);
        let text = LocalizeText(selected, "languageSelection");
        alert(text.alert);
        setLang(selected);
      } catch {
        alert("Something went wrong saving the language");
      }
    }

  };
    return <LanguageContext.Provider value={provider}>{children}</LanguageContext.Provider>;
}
