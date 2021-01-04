//Provides localization support for drawer titles
// Takes lang and page as arguments to determine which
// file to take the appropriate text from
// lang determines file, page determines content
import ReturnEnglishText from "./eng.js"
import ReturnHindiText from "./hin.js"
import ReturnMarathiText from "./mar.js"

export default function LocalizeText(lang, page) {
  var translatedText;
  switch(lang) {
    // Default to English
    case 'unset':
      translatedText = ReturnEnglishText(page);
      break;
    //Return English text for page argument
    case 'Eng':
      translatedText = ReturnEnglishText(page);
      break;
    //Return Hindi text for page argument
    case 'Hin':
      translatedText = ReturnHindiText(page);
      break;
    //Return Marathi text for page argument
    case 'Mar':
      translatedText = ReturnMarathiText(page);
    //Default to English
    default: 'Eng'
  }
  return translatedText;
}
