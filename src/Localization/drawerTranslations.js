//Provides localization support for drawer titles
export default function LocalizeDrawerTitles() {
  let lang = "Hin";
  var translatedText;
  switch(lang) {
    case 'Eng':
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
    case 'Hin':
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
  }
  return translatedText;
}
