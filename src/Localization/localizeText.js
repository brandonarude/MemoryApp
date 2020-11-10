//Provides localization support for drawer titles
// Takes lang and page as arguments to determine which
// file to take the appropriate text from
// lang determines file, page determines content
import ReturnEnglishText from "./eng.js"
import ReturnHindiText from "./hin.js"

export default function LocalizeText(lang, page) {
  var translatedText;
  switch(lang) {
    case 'Eng':
      translatedText = ReturnEnglishText(page);
      break;

    case 'Hin':
      translatedText = ReturnHindiText(page);
      break;

    default: 'Eng'
  }
  return translatedText;
}
