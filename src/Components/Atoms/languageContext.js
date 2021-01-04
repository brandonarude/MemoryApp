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
           // user has previously selected a language, set the language to that. Otherwise default language to English
           if(storedLang){
             setLang(storedLang);
           } else {
             setLang("Eng");
           }
         }
   });


  const provider = {
    lang,
    //changeLang is used by languageSelect.js to set language context and change user language setting.
    changeLang: selected => {
      // Set selectedLang to selected, unless selected is not provided, then set selectedLang to Eng
      const selectedLang = selected ? selected : 'Eng'
      try {
        // update stored language with selected
        AsyncStorage.setItem("MyLang",selected);

        //return confirmation message with appropriate text
        let text = LocalizeText(selected, "languageSelection");
        Alert.alert("", text.alert);

        // set language context to selected text
        setLang(selected);
      } catch {
        alert("Something went wrong saving the language");
      }
    },
    //Allows setting light font dynamically based on language
    fontLight(){
      switch(lang) {
        case "Eng":
          return styles.baseTextFontEng;
          break;
        case "Hin":
          return styles.baseTextFontHin;
          break;
        case "Mar":
          return styles.baseTextFontHin;
          break;
        default:
          font = styles.baseTextFontEng;
      }
    },
    //allows setting bold font dynamically based on language
    fontBold(){
      switch(lang) {
        case "Eng":
          return styles.boldTextFontEng;
          break;
        case "Hin":
          return styles.boldTextFontHin;
          break;
        case "Mar":
          return styles.boldTextFontHin;
          break;
        default:
          font = styles.boldTextFontEng;
      }
    }

  };
    return <LanguageContext.Provider value={provider}>{children}</LanguageContext.Provider>;
}
