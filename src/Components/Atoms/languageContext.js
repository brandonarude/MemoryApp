import React, { Component, useState } from "react";

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
    }

  };
    return <LanguageContext.Provider value={provider}>{children}</LanguageContext.Provider>;
}
