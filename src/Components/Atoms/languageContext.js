import React, { Component, useState } from "react";
import { AsyncStorage, Alert } from 'react-native';

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
      setLang(selected);
      try {
        AsyncStorage.setItem("MyLang",selected)
      } catch {
        alert("Something went wrong saving the language");
      }
    }

  };
    return <LanguageContext.Provider value={provider}>{children}</LanguageContext.Provider>;
}
