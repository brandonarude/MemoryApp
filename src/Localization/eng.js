//Provides localization support for English Language
//  Takes page as an argument to determine which text is necessary

import {Alert} from 'react-native';

export default function LocalizeDrawerTitles(page) {
  var translatedText;
  switch(page){
    case "drawer":
      translatedText = {
        dailyReadingTitle: "Today's Reading",
        languageSelectionTitle: "Language Selection",
        powerOfGodsWordTitle: "Power of God's Word",
        fiveVoicesInfoTitle: 'What are the Five Voices?',
        covenantTitle: "Memory Covenant",
        keyWordInfoTitle: "Glossary",
        translationsUsedTitle: "Translations Used"
      }
      break;
    default:
      translatedText = "";
      alert("No Translations found for this page.");
      break;
  }

  return translatedText;
}
