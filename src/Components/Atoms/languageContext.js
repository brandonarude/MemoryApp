import React, { Component, useState } from "react";

export const LanguageContext = React.createContext({
  lang: 'Eng',
});

// Note: You could also use hooks to provide state and convert this into a functional component.
export default function LanguageContextProvider({children}) {
  const provider = {
    lang: 'Eng',
  };

  /*changeLang = (lang) => {
  this.setState(prevState => {
    switch(lang) {
      case 'Eng':
        return 'Eng';
        break;
      case 'Hin':
        return 'Hin';
        break;
      default:
        return 'Eng';
      }
    });
  };*/
    return <LanguageContext.Provider value={provider}>{children}</LanguageContext.Provider>;
}
