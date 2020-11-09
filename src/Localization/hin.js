//Provides localization support for English Language
//  Takes page as an argument to determine which text is necessary

import {Alert} from 'react-native';

export default function ReturnHindiText(page) {
  var content;
  switch(page){
    case "drawer":
      content = {
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
      content = "";
      alert("No Translations found for this page.");
      break;
  }

  return content;
}
