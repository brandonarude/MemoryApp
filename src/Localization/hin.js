//Provides localization support for English Language
//  Takes page as an argument to determine which text is necessary

import {Alert} from 'react-native';

export default function LocalizeDrawerTitles(page) {
  var translatedText;
  switch(page){
    case "drawer":
      translatedText = {
        dailyReadingTitle: "आज का पढ़ना",
        languageSelectionTitle: "भाषा चयन",
        powerOfGodsWordTitle: "परमेश्वर के वचन की शक्ति",
        fiveVoicesInfoTitle: 'पाँच स्वर क्या हैं?',
        covenantTitle: "स्मृति वाचा",
        keyWordInfoTitle: "शब्दकोष",
        translationsUsedTitle: "उपयोग किए गए अनुवाद"
      }
      break;
    default:
      translatedText = "";
      alert("No Translations found for this page.");
      break;
  }

  return translatedText;
}
