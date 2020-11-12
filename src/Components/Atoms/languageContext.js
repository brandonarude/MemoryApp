import React, { Component, useState } from "react";
import { AsyncStorage, Alert } from 'react-native';
import LocalizeText from '../../Localization/localizeText.js';
import RetrieveStoredData from './retrieveStoredData';
import SaveAsyncData from './saveAsyncData.js';
import styles from '../../Styles/styles.js'

//  Creates Language Context
export const LanguageContext = React.createContext({
  lang: 'Eng',
});

// Created Provider function for LanguageContext
export default function LanguageContextProvider({children}) {
  const [lang, setLang] = useState("unset");

  let storedLang = RetrieveStoredData("MyLang");
  storedLang.then( (storedLang) => {
         if(lang === "unset") {
           // Indicates that the user has used the app before.
           SaveAsyncData("MyVisited", "true");
           //

           if(storedLang){
             setLang(storedLang);
           } else {
             setLang("Eng");
           }
         }
   });


  const provider = {
    lang,
    changeLang: selected => {
      const selectedLang = selected ? selected : 'Eng'
      try {
        AsyncStorage.setItem("MyLang",selected);
        let text = LocalizeText(selected, "languageSelection");
        Alert.alert("", text.alert);
        setLang(selected);
      } catch {
        alert("Something went wrong saving the language");
      }
    },
    fontLight(){
      switch(lang) {
        case "Eng":
          return styles.baseTextFontEng;
          break;
        case "Hin":
          return styles.baseTextFontHin;
          break;
        default:
          font = styles.baseTextFontEng;
      }
    }

  };
    return <LanguageContext.Provider value={provider}>{children}</LanguageContext.Provider>;
}
