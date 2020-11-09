//Provides localization support for English Language
//  Takes page as an argument to determine which text is necessary

import {Alert} from 'react-native';

export default function ReturnEnglishText(page) {
  var content;
  switch(page){
    case "day1":
      content = {
        passage: "For you are a chosen people, a royal priesthood, a holy nation, \
        God's special possesion, that you may declare the praises of Him who called \
        you out of darkness into His wonderful light.",
        reference: "1 Peter 2:9",
        translation: "NIV",
        theme: "Anointing",
      }
      break;
    case "drawer":
      content = {
        dailyReadingTitle: "Today's Reading!",
        languageSelectionTitle: "Language Selection",
        powerOfGodsWordTitle: "Power of God's Word",
        fiveVoicesInfoTitle: 'What are the Five Voices?',
        covenantTitle: "Memory Covenant",
        keyWordInfoTitle: "Glossary",
        translationsUsedTitle: "Translations Used"
      }
      break;

    default:
      content = "";
      alert("No Translations found for this page.");
      break;
  }

  return content;
}
