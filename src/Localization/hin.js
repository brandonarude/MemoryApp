//Provides localization support for Hindi Language
// Provided Translations were in Kruti Characters, so the unicode doesn't render properly
//  Takes page as an argument to determine which text is necessary

import {Alert} from 'react-native';

export default function ReturnHindiText(page) {
  var content;
  switch(page){
    // From page covenant.js
    case "covenant": {
      content = {
        title: "My Covenant To Memorize Scripture",
        para1: "By memorizing God’s Word, I understand that I will be equipping myself " +
        "to hear, obey and be lead by the Holy Spirit. His Word will empower me to choose " +
        "righteousness, motivate me to love Him, depend on and abide in Him. (John 14:21, John 15:4-5)",
        para2: "I will use Scripture to confirm my identity. Claiming that identity I will exercise my " +
        "authority and dominion over sin, the flesh and the world. Memorized scripture will aid the " +
        "Holy Spirit in fulfilling His intended works through me. (Romans 8:37, 2 Cor. 10:3-5, Ephesians 2:10, Phil. 2:13)",
        para3: "Walking in the Spirit, His Word will help me to convince, rebuke and exhort - defend the hope that " +
        "is in me. I will present doctrine, reproof, correction and instruction in righteousness, equipping" +
        "others for good works. (2 Tim 4:2, 2 Tim. 3:16-17)",
        para4: "I will choose to breathe out God’s Word over the lives of others. I will speak the language of the " +
        "kingdom recognizing that the tongue has the power of life and death...(Proverbs 18:21)",
      }
    }
    break;
    // For daily readings
    case "day1":
      content = {
        passage: "पर तुम एक चुना हुआ वंश, और राजपदधारी याजकों का समाज, और पवित्र लोग़ और परमेश्वर की निज प्रजा हो, इसलिए कि जिसने तुम्हें अंन्धकार में से अपनी अद्भुत ज्योती में बुलाया है उसके गुण प्रकट करो।",
        reference: "1 पतरस 2:9",
        translation: "NIV",
        theme: "Kingdom Living",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "I am a royal priest in the service of the King",
        para2: "I am of great value to God who owns me",
        para3: "I am assigned to declare God's greatness",
        para4: "I am chosen by God to walk in His light",
        para5: "You have been chosen by God and are His special possession",
        para6: "Your life reveals God’s goodness as you walk in His light",
        para7: "You are a priest of the King and are equipped to glorify Him",
        para8: "",
        prayerTitle: "Today's Prayer",
        prayer: "मुझे चुनने के लिए धन्यवाद, मुझे मेरे अंधकार से छुडाकर उजियाले में और सत्य में लाने के लिए धन्यवाद। राजा का याजक होना यह मेरे विषेश काम के लिए धन्यवाद। धन्यवाद मुझे आपका समुदाय बनाकर बडे राज्य के उददेश के लिए तैयार करने के लिए। आपका धन्यवाद की मुझे आपकी अद्भुतता की ओर संकेत करने के लिए चुना।",
      }
      break;
    case "day2":
      content = {
        passage: "इसलिए, हम मसीह के राजदुत है; माने परमेश्वर हमारे व्दारा विनती कर रहा है। हम मसीह की ओर से निवेदन करतें हैं कि परमेश्वर के साथ मेल-मिलाप कर लो।",
        reference: "2 कुरिन्थीयों 5:20",
        translation: "ESV",
        theme: "Kingdom Living",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "I am an ambassador for God's kingdom",
        para2: "I am God's representative to the world",
        para3: "God reaches out to others through me",
        para4: "I am chosen to bring people back to God",
        para5: "You have been chosen by God to reach out to others.",
        para6: "ou show the world what God is like.  The authority of God is in your words.",
        para7: "Your words are timely.  They bring healing and help others turn back to God",
        para8: "",
        prayerTitle: "Today's Prayer",
        prayer: "मुझे तैयार कर के अपना प्रतिनिधी बनाकर एक टुटे हुए संसार में भेजने के लिए धन्यवाद। जो तुझसे अलग हो गये है और एकदुसरे से अलग हो गए है उनके बारें में गहराई से सोचने के लिए मेरी सहायता कर। मुझे तेरी क्षमा, आशा, एकता, और स्वतंत्रता के शब्द दें। तेरे और मनुष्य के बीच टुटे हुए रिश्तों को बनाने के लिए मुझे साहस देकर मेरी मदद कर। जब वे मुझे देखें तब तुझे पहचानें।",
      }
      break;
    case "day3":
      content = {
        passage: "प्रभु यहोवा का आत्मा मुझपर है; क्योंकि यहोवा ने सुसमाचार सुनाने के लिए मेरा अभिषेक किया और मुझे इसलिए भेजा है कि खेदित मन के लोगों को शांती दॅुं; कि बंदियों के लिए स्वतंत्रता का और कैदियों के लिए छुटकारे का प्रचार करूं।",
        reference: "यशायाह 61:1",
        translation: "NASB",
        theme: "Kingdom Living",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "I am connected with the power of God's Spirit",
        para2: "I am a messenger of good news to the afflicted",
        para3: "I am sent to help comfort the broken hearted",
        para4: "My words extend freedom to satan's prisoners",
        para5: "You are anointed in God’s Spirit. You bring healing to the broken hearted",
        para6: "Your words set prisoners free & shed light on the darkness of satan’s lies.",
        para7: "Your words offer liberty to those in bondage – hope to those who are hurting",
        para8: "",
        prayerTitle: "Today's Prayer",
        prayer: "धन्यवाद मुझपे और मुझमें पवित्र आत्मा के सामर्थ के लिए। होने दें की तेरे वचनों का सामर्थ मेरे व्दारा जब बोलें जाए उस से चोंट खाकर पाप के बंदी बने है उनके लिए आशा और स्वतंत्रता आऐं। पाप की जडें परखनें में मेरी सहायता कर ताकी, मैं ज्योती और सत्य की स्वतंत्रता में लोंगों को आने में सहायता कर सकुं।",
      }
      break;
    case "day4":
      content = {
        passage: 'यीशु ने उनके पास आकर कहा, स्वर्ग और पृथ्वी का सारा अधिकार मुझे दिया गया है। इसलिए तुम जाओ, सब जातीयों के लोगों को चेला बनाओं; और उन्हे पिता, और पुत्र, और पवित्र आत्मा के नाम से बपतिस्मा दो, और उन्हें सब बातें जो मैंने तुम्हें आज्ञा दी है, मानना सिखाओ; और देखो मैं जगत के अंत तक सदा तुम्हारे संग हॅुं ।',
        reference: "मत्ती 28:18-20",
        translation: "NASB",
        theme: "Kingdom Living",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "I am assigned to make disciple makers",
        para2: "I am a fisher of men baptizing them in His name",
        para3: "I am sent from God to teach others to obey Him",
        para4: "God will always be with me as I serve Him",
        para5: "Your life has been set apart to draw others to God",
        para6: "Your words remind others to love and obey God.",
        para7: "You have a heart for the lost and vision for the nations",
        para8: "",
        prayerTitle: "Today's Prayer",
        prayer: "धन्यवाद की आपने एक समय में एक व्यक्ती कर आपके राज्य को बांधने के लिए हमें चुना। होने दे की स्वर्ग और नर्क की संवेदनशीलता मुझे सुसमाचार साझा करने में प्रेरित करें। मुझे ऐसी आँखे दे की मैं खोये हुओं को देख सकुं, ऐसा हृदय दें जहाँ मैं उनको समय दॅुं और उन्हे प्रेम करूं। मेरी सहायता कर की मैं मसीह की मृत्यु और पुनुरूथान से लज्जित न हो सकुं। मुझे चुन, मेरा उपयोग कर। धन्यवाद पिता के तुने सर्वकालीन बीज हमारे अंदर बोया है। लोगों के जीवन में अनंतकाल की फसल के लिए मैं बुआई और सिंचाई करने के लिए मेरी सहायता कर। ",
      }
      break;
    case "day5":
      content = {
        passage: "इसलिए हे मेरे पुत्र, तु उस अनुग्रह से जो मसीह यीशु में है, बलवंत हो जा। और जो बातें तुने मुझसे बहुत से गवाहों के सामने सुनी है, उन्हें विश्वासी मनुष्य को सौप दे; जो दुसरों को भी सिखाने के योग्य है।",
        reference: "2 तीमुथियुस 2:1-2",
        translation: "NASB",
        theme: "Kingdom Living",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "Jesus has made me strong in the Father's grace",
        para2: "I give to others what God has given me",
        para3: "I am called to be a maker of disciple makers",
        para4: "I am committed to men who will teach others",
        para5: "Because you are teachable, you are a leader of men/women",
        para6: "You give your life away to others and are an example of faithfulness",
        para7: "You are dedicated to advancing the kingdom by planting and watering",
        para8: "",
        prayerTitle: "Today's Prayer",
        prayer: "हमारे जीवन में उन लोगों को भेजने के लिए धन्यवाद जो मसीह में हमें बढने में सहायता करतें है। जैसे आप हमारे जीवन में आये और अपने आपको हमारे लिए दे दिया मेरी सहायता कर की मैं भी दुसरों के जीवन की ओर देखुं और उनके लिए अपना जीवन दे दॅुं। मुझे दिखा के मैं कैसे उन्हे सिखाऊं की वे वैसा ही करें। मुझे विश्वासयोग्य बना ताकी मैं भी आनेवाली नयी पीडी के विश्वासीओं को विश्वासयोग्य रहना सिखा सकुं।",
      }
      break;
    case "day6":
      content = {
        passage: "संपुर्ण पवित्रशास्त्र परमेश्वर की प्रेरणा से रचा गया है और उपदेश, और समझाने, और सुधारने, और धार्मिकता की शिक्षा के लिए लाभदायक है ताकि परमेश्वर का जन सिध्द बनें, और हर एक भले काम के लिए तत्पर हो जाऐं।",
        reference: "2 तीमुथियुस 3:16-17",
        translation: "ESV",
        theme: "Using God's Word",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "I am a guide and shepherd to others",
        para2: "I use God's Word to motivate others",
        para3: "I help others walk maturely and righteously",
        para4: "I am equipped for every good work",
        para5: "Your words are filled with righteousness. Your words are the breath of God",
        para6: "You motivate others to walk in obedience. You guide others into His truth.",
        para7: "You know what’s right, what’s not right, how to get right and how to stay right",
        para8: "",
        prayerTitle: "Today's Prayer",
        prayer: "धन्यवाद मेरे प्राण और आत्मा में जीवन का श्वास फूंकने के लिए। जीवीत वचन के वरदान के लिए धन्यवाद जो मुझे सही और गलत की पहचान दिलाकर सही कैसे करें और सही में कैसे बने रहें इसके लिए मेरी सहायता करता है। धन्यवाद तेरा वचन मुझे धार्मिकता में चलने के लिए तैयार करता, बनाता, और तेरे सारे अच्छे कामों के लिए सक्षम करता है।",
      }
      break;
    case "day7":
      content = {
        passage: "अपने आपको परमेश्वर का ग्रहणयोग्य और ऐसा काम करनेवाना ठहराने का प्रयत्न कर, जो लज्जीत होने न पाए, और जो सत्य के वचन को ठीक रीती से काम में लाता हो।",
        reference: "2 तीमुथियुस 2:15",
        translation: "ESV",
        theme: "Using God's Word",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "I am actively preparing to be useful to God",
        para2: "I am a workman approved by God",
        para3: "I am committed to protecting God's truth",
        para4: "I have been responsible in how I use God's Word",
        para5: "You have been diligent in preparing yourself to be useful to God",
        para6: "You have been a faithful steward of God’s Word without apology",
        para7: "You bring honor to God and yourself by how you carefully use His Word",
        para8: "",
        prayerTitle: "Today's Prayer",
        prayer: "मेरी सहायता कर की मेरा विश्वास सच्चा और भरोसेमंद हो। मैं तेरे व्दारा स्वीकृत हो सकुं मुझे लज्जीत होने की कोई जरूरत नही क्योंकि मैं तेरे वचनों को कैसे सही रीती से उपयोग में लाना है वह सिख चुका हूँ। मेरी सहायता कर मैं हमेशा तेरे वचनों को इस रीती से उपयोग में लाऊं की जो पवित्र आत्मा के व्दारा ठहराया है वह पुर्ण हो।",
      }
      break;
    case "day8":
      content = {
        passage: "क्योंकि परमेश्वर की जितनी प्रतिज्ञायें है, वे सब उसी में “हाँ” के साथ है। इसलिए उसके व्दारा आमीन भी हुई कि हमारे व्दारा परमेश्वर की महिमा हो।",
        reference: "2 कुरिन्थीयों 1:20",
        translation: "NIV",
        theme: "Using God's Word",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "I glorify God by trusting in His promises",
        para2: "Christ's promises give me authority and power",
        para3: "Christ's Words are confirmed by my words",
        para4: "I can do & be what God's word says I can do & be",
        para5: "Because of Christ in you, your words carry the weight of heaven’s authority",
        para6: "Your life is evidence of God’s promises working in and through you",
        para7: "Your confidence in Christ’s promises brings glory to the Father",
        para8: "",
        prayerTitle: "Today's Prayer",
        prayer: "धन्यवाद मसीह व्दारा आपकी सारी प्रतिज्ञाओं की विरासत के लिए जो आपने मुझे दी। आपकी प्रतिज्ञाओं के व्दारा जो अधिकार प्रती-दिन के जीवन के लिए मुझे मिला है उस के लिए धन्यवाद। आपको महिमा दे सकें ऐसी प्रतिज्ञाओं का अधिकार ले कर सामर्थ में चलने के लिए मुझे आत्मविश्वास दें ।",
      }
      break;
    case "day9":
      content = {
        passage: "मसीह को प्रभु जानकर अपने मन में पवित्र समझो। जो कोई तुम से तुम्हारी आशा के विषय में पुछे, उसे उत्तर देने के लिए सर्वदा तैयार रहो, पर नम्रता और भय के साथ।",
        reference: "1 पतरस 3:15",
        translation: "ESV",
        theme: "Witnessing",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "I honor the Lord by defending my faith in Him",
        para2: "I am prepared to help those seeking after God",
        para3: "My confidence in Him brings hope to others",
        para4: "I am a respectful and patient teacher",
        para5: "Your life brings honor to the Holy God who lives in your heart",
        para6: "You have done a good job of preparing yourself to defend the truths of God.",
        para7: "You are always respectful while helping others understand spiritual things",
        para8: "",
        prayerTitle: "Today's Prayer",
        prayer: "प्रिय प्रभु मेरी सहायता कर की जो विश्वास आपने मुझे दिया है उस की रक्षा कर, मैं अनुशासित जीवन जी सकुं जिस से आपको आदर मिलें। आपकी पवित्रता, प्रेम, आशा जो आपने मेरे हृदय में डाली जीनको मैंने आपके खोजीयों को बताया उनके लिए मैं एक दयालु और संयंमी शिक्षक बनने के लिए मेरी सहायता कर।",
      }
      break;
    case "day10":
      content = {
        passage: "क्योंकि मैं सुसमाचार से नही लजाता, इसलिए की वह हरएक विश्वास करनेवालों के लिए, पहले तो यहुदी फिर युनानी के लिए, उध्दार के निमित्त परमेश्वर की सामर्थ है।",
        reference: "रोमियों 1:16",
        translation: "ESV",
        theme: "Witnessing",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "God has chosen me to lead others to Himself ",
        para2: "I am not ashamed of sharing God's Word",
        para3: "I eagerly tell others about God's love for them",
        para4: "His words are the power of eternal life through me",
        para5: "You are never ashamed to invite others to know God",
        para6: "You share God’s truth with others with great boldness",
        para7: "You display the hope of eternal life in your words and life",
        para8: "",
        prayerTitle: "Today's Prayer",
        prayer: "धन्यवाद अनंतकाल के जीवन के वचनों को मुझे सौंपने के लिए। मैं आपका धन्यवाद करता हॅुं की आपने मुझे चुना लोगों को आपके करिब लाने के लिए। मेरी सहायता करें लोगों के तिरस्कार से डरने के बजाय मैं उनसे प्रेम करूं क्योंकि यह अनंतकाल के बारे में है। मुझे ऐसी आँखें और कान दें जीस से मैं जान सकुं की कौन आपको जानने की खोज में है और आपके वचनों के हियाव और सामर्थ को बोलतें है।",
      }
      break;
    case "day11":
      content = {
        passage: "और मेरे वचन, और मेरे प्रचार में ज्ञान की लुभावनेवाली बातें नही, परंतु आत्मा अैर सामर्थ का प्रमाण था। इसलिए के तुम्हारा विश्वास मनुष्य के ज्ञान पर नही, परंतु परमेश्वर की सामर्थ पर निर्भर हो।",
        reference: "1 कुरिन्थीयों 2:4-5",
        translation: "NASB",
        theme: "Witnessing",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "I am not boastful or proud when I speak",
        para2: "I do not depend on my own wisdom when I speak",
        para3: "My words are sourced in His Spirit and power",
        para4: "My words cause others to trust in God’s Words",
        para5: "Your words show that you do not lean on your own understanding ",
        para6: "Your words demonstrate the power of the Holy Spirit speaking through you.",
        para7: "The way you live and speak encourages others to depend on God rather than men",
        para8: "",
        prayerTitle: "Today's Prayer",
        prayer: "प्रिय पिता, मेरी सहायता करें की मैं अपने ज्ञान और कल्पनाओं पर निर्भर ना रहॅुं लेकिन जरूरत के समय प्रतिउत्तर देने के लिए सिर्फ आपके सत्यों को उपयोग कर अपने आप को तैयार करूं। मेरी सहायता करें कि मैं नम्रता से अपने आपको पवित्र आत्मा के सामर्थ को सौंप दॅुं। मुझे आपकी आत्मा के लिए संवेदनशील बनाओ ताकि मैं पच्छात्ताप, आज्ञाकारिता और परिवर्तन के लिए दुसरों को उत्तेजीत करूं। पवित्र आत्मा के व्दारा मेरा वचन आपका वचन होने दो।",
      }
      break;
    case "day12":
      content = {
        passage: "कि तुम पिछले चालचलन के मनुष्यत्व को उतार डालो जो भरमानेवाली अभिलाषाओं के अनुसार भ्रष्ट होता जाता है। और अपने मन के आत्मिक स्वभाव में नए बनते जाओ, और नए मनुष्यत्व को पहिन लो जो परमेश्वर के अनुरूप सत्य की धार्मिकता और पवित्रता में सृजा गया है।",
        reference: "इफिसीयों 4:22-24",
        translation: "NIV",
        theme: "Renewing our Minds",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "I am able to say no to my former way of living",
        para2: "I choose to say no to deception and corrupt ideas",
        para3: "I have been made new in both my mind & spirit",
        para4: "God shares His righteousness & holiness with me",
        para5: "The you that you made is dead; the you that God made is free and powerful",
        para6: "Your mind is set free by His Spirit and you can have the mind of Christ.",
        para7: "God’s Spirit is helping you to walk in new levels of understanding and power",
        para8: "",
        prayerTitle: "Today's Prayer",
        prayer: "आपकी धार्मिकता और पवित्रता मेरे साथ साझा करने के लिए धन्यवाद जीस से की मैं अपने पुराने पापमय स्वभाव को दुर कर सकुं। यह मेरे माँगने और सोचने से ज्यादा है आपने मुझे अंदर से नया व्यक्ती बनाया है। आपने कहा है कि आपने मुझे नया आत्मा और नया मन भी दिया है, और पवित्राई में आपके जैसा बनने के लिए मुझे चुना है। धन्यवाद आपके उपहारों का बहुतायत मुझे देने के लिए।",
      }
      break;
    case "day13":
      content = {
        passage: " इस संसार के अनुरूप न बनो, परंतु अपने मन के नये हो जाने से तुम परिवर्तित हो जाओ कि परमेश्वर की भली, ग्रहणयोग्य और सिध्द ईच्छा को तुम अनुभव से मालूम करते रहो।",
        reference: "रोमियों 12:2",
        translation: "HCSB",
        theme: "Renewing our Minds",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "I have chosen not to conform to this world",
        para2: "I am transformed by the renewal of my mind",
        para3: "I live in the good and acceptable will of God",
        para4: "I have tested God will & found it to be perfect",
        para5: "Your life represents a mind that is now under the control of the Holy Spirit",
        para6: "Your transformation in Christ has led you to live without compromise",
        para7: "Your life proves that living God’s way is good, pleasing and perfect",
        para8: "",
        prayerTitle: "Today's Prayer",
        prayer: "मुझे संसार और उसके विचलीत करनेवाले प्रभाव से स्वतंत्र होने का मार्ग दिखने के लिए धन्यवाद। मसीह के मन को किस तरह से प्राप्त करना है उसका का मार्ग दिखने के लिए धन्यवाद। मैंने आपके जीवन के सिध्दांतों को संसार के साथ तुलना कर परखा और उसे खरा और भला दानों पाया। आपकी मदद से मै रूढीवाद का सामना करूंगा, और अलग सोचना और जीना चुनुंगा।",
      }
      break;
    case "day14":
      content = {
        passage: "अतः हे भाइयों जो बातें सत्य है, जो-जो आदरणीय है, जो-जो बातें न्यायसंगत है, जो-जो बातें पवित्र है, जो-जो बातें मनोहर है, जो-जो बातें मनभावनी है, अर्थात् जो-जो उत्तम तथा प्रशंसनीय गुण है, उन्ही का ध्यान किया करो।",
        reference: "फिलिप्पीयों 4:8",
        translation: "NASB",
        theme: "Renewing our Minds",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "I have purposed my mind to dwell on the truth",
        para2: "I live in a manner that brings praises to God",
        para3: "I am committed to pure & honorable thoughts",
        para4: "I am careful to honor God in my living and thinking",
        para5: "Your life evidences a mind committed to purity, truth and excellence",
        para6: "Your spirit of kindness helps others embrace what is truly valuable.",
        para7: "Your words and actions bring deep respect for the majesty of God",
        para8: "",
        prayerTitle: "Today's Prayer",
        prayer: "प्रभु, कृपा करके मेरी सोच को बदलने और जैसे मैं आलसी और समझौता करनेवाले मन के विरोध में खडा होता हॅुं तब मेरे विचारों को बंदी बना लेने के लिए मुझे हियाव दो। मेरी मदद कर उन बातों में बने रहने जो बातें मुझे यह बताती है कि मैं मसीह में कौन हॅुं। आपके वचनों से मेरे मन को धोने के अनुशासन को चुनाव करने में मेरी सहायता कर ताकि मैं आपके विचार सोचना और बोलना आरंभ करू। मेरे मन को अंधकार की बजाय ज्योती को चुनने के लिए सहायता कर।",
      }
      break;
    case "day15":
      content = {
        passage: "क्योंकि वे जो शाररिक है, वह शरिर के बातों पर मन लगाते है, परंतु आध्यात्मिक तो आत्मिक बातों पर मन लगाते है। शरिर पर मन लगाना तो मृत्यु है परंतु आत्मा पर मन लगाना जीवन और शांती है।",
        reference: "रोमियों 8:5-6",
        translation: "ESV",
        theme: "Renewing our Minds",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "I have said yes to His Spirit and no to the world",
        para2: "I have set my mind on His presence and power",
        para3: "I am choosing to let His Spirit live through me",
        para4: "I am filled with His life, peace and rest",
        para5: "Your life is evidence of choosing to live by the influence of the Holy Spirit",
        para6: "Your dependency on the Spirit has equipped you to serve and walk in power.",
        para7: "Because you have surrendered to His Spirit, you experience peace and rest",
        para8: "",
        prayerTitle: "Today's Prayer",
        prayer: "मेरे शरिरीक परिक्षाओं को ना कहने का सामर्थ मुझे देने के लिए धन्यवाद। मेरी मदद करें की मैं मेरी पहचान बनाने के लिए मैं अपने शरिर का उपयोग ना करूं। मेरे शरिर के विचारों को जीवन और आज्ञाकारीता की शांती में बदलकर मेरे मन को नया करने के लिए मुझे आपके वचनों का उपयोग करने मेरी मदद करें। मुझे पवित्र आत्मा की सरलता में समर्पित होने दे। धार्मिकता चुनने के लिए मेरी क्षमता को बढा।",
      }
      break;
    case "day16":
      content = {
        passage: "इसलिए अब से हम किसी मनुष्य को शरिर के अनुसार न समझेंगें। यदयपी हमने मसीह को भी शरिर के अनुसार जाना है, तथापी अब से हम उसे ऐसा नही जानते। इसलिए जो कोई मसीह में है तो वह नई सृष्टी है। पुरानी बातें बीत गई। देखो, नई बातें आ गई है।",
        reference: "2 कुरिन्थीयों 5:16-17",
        translation: "ESV",
        theme: "Abiding in His Power",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "I am free from my past, the old me is crucified",
        para2: "The real me is unseen, beautiful, powerful & free",
        para3: "I am one with His Spirit, my flesh does not define me",
        para4: "I look past my flesh - I can see God’s glory in me",
        para5: "The you that God has made is becoming more and more obvious each day",
        para6: "You have the ability to see past the outward appearance into a person’s heart.",
        para7: "You are doing a great job of letting the new life of God in you take over",
        para8: "",
        prayerTitle: "Today's Prayer",
        prayer: "धन्यवाद हमारी पहचान में हमारी देह से बडकर भी और बहुत कुछ है। हमारे टुटे हुए पापमय अतीत को यीशु के साथ क्रुसपर मारने के लिए धन्यवाद। मेरी सहायता करें कि मैं नई सृष्टी का मतलब समझ सकुं और मेरे अंदर पैदा हुए नए व्यक्तीत्व को गले लगा लुं। धन्यवाद की अब, मैं प्रती-दिन जीवन के नएपन में चल सकता हॅुं और मेरा अतीत अब मुझपे हावी न होगा।",
      }
      break;
    case "day17":
      content = {
        passage: "उसकी ईश्वरीय सामर्थ ने उसी के पुर्ण ज्ञान के व्दारा जिसने हमें अपने महिमा और सद्भावना के अनुसार बुलाया है, वह सबकुछ जो जीवन और भक्ती से संबंध रखता है, हमें प्रदान किया है।",
        reference: "2 पतरस 1:3",
        translation: "ESV",
        theme: "Abiding in His Power",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "I am filled with His divine nature and power",
        para2: "I have everything I need to live a life of Godliness",
        para3: "I have been called into His glory and excellence",
        para4: "I have escaped destruction by knowing Him",
        para5: "Your walk with the Lord has let you partake in His life, glory and excellence",
        para6: "God’s promises and power has granted you to be like Him and live like Him.",
        para7: "Because you know Him, God has granted you a life that brings Him glory",
        para8: "",
        prayerTitle: "Today's Prayer",
        prayer: "मुझे ईश्वरीय जीवन जीने के लिए जो भी जरूरी है वह सब देने के लिए धन्यवाद । जैसे मैने आपको जाना मुझे पता चला की आपका उपहार मेरी सभी जरूरतों के लिए पुर्ण और सिध्द है। मुझे आपकी महिमा और पुर्णता साझा करने की अनुमती देने की आपकी इच्छा वास्तव में उदार है जो मेरी योग्यता से बढकर और मेरी सोच से परें हैं।",
      }
      break;
    case "day18":
      content = {
        passage: "अब जो ऐसा सामर्थी है कि हमारी विनती और समझ से कही अधिक काम कर सकता है, उस सामर्थ के अनुसार जो हम में कार्य करता है।",
        reference: "इफिसीयों 3:20",
        translation: "ESV",
        theme: "Abiding in His Power",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "I am called to live above and beyond the ordinary",
        para2: "I am equipped with His Power to do great things",
        para3: "I am empowered to think big, ask big, proclaim big",
        para4: "God chooses to do great works in me & through me",
        para5: "God intends to use you in powerful ways beyond anything you have imagined",
        para6: "God is going to take your ideas and prayers and make eternal things happen.",
        para7: "You are chosen to do great things that will point to and glorify God",
        para8: "",
        prayerTitle: "Today's Prayer",
        prayer: "मैं आपकी स्तुती करता हॅुं की आपने मुझे एक साधारण जीवन से बुलाया और आपके लिए महान काम करने के लिए सामर्थ के साथ तैयार किया। मेरी सहायता करो कि मैं बडा सोचु, बडी प्रार्थना करूं, और विश्वास के व्दारा आपके राज्य में बडी बातों की घोषणा करूं। पवित्र आत्मा जो मेरे अंदर काम करता है, जब मैं उसे समर्पित होता हॅुं तब आप मुझे चुनकर सामर्थ रीती से उपयोग करना।",
      }
      break;
    case "day19":
      content = {
        passage: "तुम मुझमें बने रहो, और मैं तुम मे। जैसे डाली यदि दाखलता में बनी न रहे तो अपने आप से नही फल सकती, वैसे ही तुम भी यदि मुझ में बने न रहो तो नही फल सकते। मैं दाखलता हुँ तुम डालियाँ हो । जो मुझ में बना रहता है और मैं उसमें, वह बहुत फल फलता है, क्योंकि मुझ से अलग होकर तुम कुछ भी नही कर सकते।",
        reference: "युहन्ना 15:4-5",
        translation: "ESV",
        theme: "Abiding in His Power",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "My dependency on Him assures my usefulness",
        para2: "I am intimately connected to His love and power",
        para3: "I am weak, He is strong - together we bear much fruit",
        para4: "I must abide in Him, for without Him I can do nothing",
        para5: "Accepting your weaknesses, you have let Him be all that He is through you",
        para6: "Depending on the power of God that is in you has made you strong and fruitful",
        para7: "By choosing to abide in Him, you have connected to the true source of godliness",
        para8: "",
        prayerTitle: "Today's Prayer",
        prayer: "धन्यवाद जब मै कमजोर होता हॅुं आप सामर्थी हो, मैं जानता हॅुं आप पर निर्भर रहना मुझे विश्वासयोग्यता की निच्छीतता दिखाता है। मेरी सहायता करें की मैं अपनी कमजोरीयों को स्विकार करूं ताकि आप जो मेरे व्दारा होना चाहते हो वह हो। मेरी सहायता करें की मैं जानुं कि आप में कैसे बने रहें ताकि मैं सच्चे ईश्वरीय स्त्रोत में प्रवेश कर सकुं। मुझे अपने बल से करनेवालें सारी परिक्षाओं से सुरक्षीत रखना।",
      }
      break;
    case "day20":
      content = {
        passage: "जो मुझे सामर्थ देता है उसमें मै सब कुछ कर सकता हॅुं। परंतु इन सब बातों में रोमियों",
        reference: "फिलिप्पीयों 4:13",
        translation: "ESV",
        theme: "Abiding in His Power",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "I am one with the Spirit, the Spirit is with me",
        para2: "I am in Him and He is in me, I am an overcomer",
        para3: "I am fully dependent on Him to give me the victory",
        para4: "In Him, I am a conqueror, a finisher, I am victorious",
        para5: "Your dependence on Him has set you free to do great things for the kingdom",
        para6: "Your choice to abide and remain in Him has made you an effective warrior",
        para7: "Abiding in God’s love has given you power and victory over your circumstances",
        para8: "",
        prayerTitle: "Today's Prayer",
        prayer: "मैं आभारी हॅुं आपका कि मेरे लिए आपका प्रेम और मेरे जीवन में आपकी उपस्थिती मुझे विजयी होने की निच्छितता दिलाती है। मेरी सहायता करें कि मैं सदा स्वयं पर नही आप पर निर्भर रहॅुं और आपके सामर्थ में चल कर आपके राज्य के लिए महान काम करूं। धन्यवाद आपने यह संभव किया की आपकी आत्मा के साथ मुझे एक किया और ऐसा योध्दा बनाया जो विजय में अपनी दौड पुरी करता है।",
      }
      break;
    case "day21":
      content = {
        passage: "क्या तुम नही जानते कि तुम्हारी देह पवित्र आत्मा का मंदिर है, जो तुम में बसा हुआ है और तुम्हे परमेश्वर की ओर से मिला है; और तुम अपने नही हो? क्योंकि दाम देकर मोल लिए गए हो, इसलिए अपनी देह व्दारा परमेश्वर की महिमा करो।",
        reference: "I कुरिन्थीयों 6:19-20",
        translation: "ESV",
        theme: "Abiding in His Power",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "I am God's temple and His Spirit dwells within me",
        para2: "I am God's possession, I no longer belong to myself",
        para3: "I have been purchased by God to bring Him glory",
        para4: "I am what a person is like when God lives inside them",
        para5: "God has made you His temple and His Holy Spirit lives within you",
        para6: "You have been purchased by the blood of His son to glorify God.",
        para7: "Since you belong to God, He will supply all your needs in Christ",
        para8: "",
        prayerTitle: "Today's Prayer",
        prayer: "यह समझना की मुझे मसीह के रक्त से मोल लीया, मेरे अंदर रहने का ठाना, जैसे की मैं आपका मंदिर था, यह मेरे सोच के परें और मेरी सारी कल्पनाओं के उपर हैं। मैं जानता हॅुं कि आपने मुझे आपको महिमा देने मोल लिया, और लोगों को यह समझने में मदद हो कि एक व्यक्ती जब आपका विशेष उत्तराधिरी बनता है तब कैसे दिखता है और आप उसमें कैसे वास करते हो। मुझे गोद लेने के लिए मैं आपकी स्तुती करता हूँ। मैं जानता हुँ आपका जो है उसे आप संभालोगे।",
      }
      break;
    case "day22":
      content = {
        passage: "मैं मसीह के साथ क्रुस पर चढाया गया हॅुं, अब मैं जीवित न रहा, पर मसीह मुझ में जीवित है; और मैं शरीर में अब जो जीवित हुँ तो केवल उस विश्वास से जीवित हूँ जो परमेश्वर के पुत्र पर है, जिसने मुझसे प्रेम किया और मेरे लिए अपने आप को दे दिया।",
        reference: "गलातियों 2:20",
        translation: "ESV",
        theme: "Abiding in His Power",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "I have died with Christ, my old man is gone for good",
        para2: "In my flesh I am required to live by faith in the Son",
        para3: "I am of such great value that He lives through me",
        para4: "I am the heir of God's sacrificial and faithful love",
        para5: "Since Christ died, I must crucify myself. As Christ lived by faith so must I",
        para6: "In His death, God has given you His life and the old you is completely gone.",
        para7: "You have died with Christ and now you bask in the love of His sacrifice for you",
        para8: "",
        prayerTitle: "Today's Prayer",
        prayer: "मैं जानता हॅुं कि अगर मुझे नया जीवन जीना है तो पुराने के लिए मरना होगा। यह बहुत अद्भुत है कि आपके पास योजना थी कि आप मेरे पुराने पापमय स्वभाव को निकालकर आपके पुत्र का जीवन मुझे दे। मुझे क्रुस के कार्य को गले लगानेवाला विश्वास देने के लिए धन्यवाद, मसीह के साथ मरना मुझे पुनुरूथ्थीत जीवन प्रदान करता है, मैं आपकी स्तुती करता हॅुं आपके प्रेम के कार्य के लिए जो मुझे मेरे देह से छुडाता है।",
      }
      break;
    case "day23":
      content = {
        passage: "विरोध या झुठी बडाई के लिये कुछ न करो, पर दीनता से एक दुसरे को अपने से अच्छा समझो। हर एक अपने ही हित की नही, वरन दुसरों के हित की भी चिंता करें।",
        reference: "फिलिप्पीयों 2:3-4",
        translation: "BSV",
        theme: "Life of a Servant",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "I am humble and ready to give myself away to others",
        para2: "I am quick to consider other’s needs above my own",
        para3: "I am willing to serve whether I am noticed or not",
        para4: "I am created to bring glory to Him, not myself",
        para5: "Christ’s sacrificial love has transformed your heart to live in the same manner",
        para6: "You are a humble servant always considering others’ needs before your own.",
        para7: "Your willingness to be treated like a servant is evidence that you truly are one",
        para8: "",
        prayerTitle: "Today's Prayer",
        prayer: "प्रिय परमेश्वर, आजकी प्रार्थना महत्पुर्ण है  अगर मुझे मसीह जैसे जीवन जीना है, मैं चाहता हॅुं आप मेरी मदद करें उन बातों में जो अकसर मेरे लिए कठीन है, मैं जानता हॅुं कि मुझे बहुत नम्र होना है और स्वयं से ज्यादा औरों के बारें में सोचना है, निस्वार्थ सेवा करना है, दुसरों की जरूरतों को मेरी जरूरतों से भी उपर रखना है। बलिदानी प्रेम को चुनने के लिए मेरे मन को बदल ताकि मैं अपनी इच्छा से अपना जीवन लोगों के लिए दे सकुं। मैं दुसरों के लिए आपका सेवक बनने का चुनाव करता हॅुं।",
      }
      break;
    case "day24":
      content = {
        passage: "वह हमारे सब क्लेशों में शांति देता है; ताकि हम उस शांति के कारण जो परमेश्वर हमें देता है, उन्हे भी शांति दें सकें जो किसी प्रकार के क्लेश में हो।",
        reference: "2 कुरिन्थीयों 1:4",
        translation: "HCSB",
        theme: "Life of a Servant",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "I am a regular recipient of God's care and comfort",
        para2: "My suffering helps me support others  in their pain",
        para3: "I am able to serve others with the comfort God gives",
        para4: "God's purpose in my suffering is His glory & my reward",
        para5: "Your strength and faith during your suffering has been a great comfort to others",
        para6: "Your reliance on God during your trials shows you understand His love for you.",
        para7: "God has prepared you to empathize with others’ doubts, fears and brokenness",
        para8: "",
        prayerTitle: "Today's Prayer",
        prayer: "मैं पिडाओं को नही चुनता परंतु मैं जानता हॅुं आप मुझे तैयार कर रहे हो मेरी समस्याओं के व्दारा दुसरों को सहायता और सांत्वना देने के लिए। मुझे दुसरों कि पिडा देखना और सुनना, और जैसे आप मेरी अगुवाई करते हो उनके संदेह, डर, टुटेपन में आशा, को बोलने का अनुशासन देकर मेरी सहायता कर। होने दें, जो सामर्थ और विश्वास आपने मेरे अंदर जागृत किया है वह दुसरों के लिए उनके चुनौती भरें समय में, एक शांती और आशा का उपहार बनें। मुझे यीशु का मुँह, कान, और पैर बनने के लिए मेरी सहायता कर।",
      }
      break;
    case "day25":
      content = {
        passage: "क्योंकि हम उसके हाथ कि कारीगरी है, जो मसीह यीशु मे उन भले कार्यों के लिए सृजे गये हैं जिन्हें परमेश्वर ने प्रारंभ से तैयार किया कि हम उन्हें करें।",
        passage2: "क्योंकि स्वयं परमेश्वर परमेश्वर अपनी सुइच्छा के लिए तुम्हारी इच्छा और कार्यों को प्रोत्साहित करने के लिए तुम में सक्रीय है।",
        reference: "इफिसीयों 2:10",
        reference2: "फिलिप्पीयों 2:13",
        translation: "ESV",
        translation2: "ESV",
        theme: "Life of a Servant",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "I am an example of God changing a life to do His will",
        para2: "I have been created to do great things for God",
        para3: "God does His best work in & through me",
        para4: "I am filled with His desires & power to do His work",
        para5: "God’s plan from the beginning was to do His best work in and through you",
        para6: "You have been created and fully equipped to do great things for God.",
        para7: "Your desire to do good things for God reveals how much He rules in your heart",
        para8: "",
        prayerTitle: "Today's Prayer",
        prayer: "मैं उत्तेजीत हॅुं उन बातों के लिए जो आप मेरे जीवन में बना रहो हो ताकि मैं आप की सेवा कर सकुं। धन्यवाद आपके लिए भले काम करने के लिए मुझे इच्छा और पवित्र आत्मा का सामर्थ देने के लिए। कृपा करके मुझे मोडना और आकार देने का काम मुझमें जारी रखें, और आपके उद्देश मेरे जीवन में पुर्ण होने के लिए एक नम्र हृदय दें। धन्यवाद आपने मुझे सिर्फ विश्वास का वरदान ही नही किंतु मेरे अंदर आपके राज्य की सेवा करने का उत्साह भी जागृत किया।",
      }
      break;
    case "day26":
      content = {
        passage: "कोई गंदी बात तुम्हारे मुँह से न निकलें, पर अवश्यक्ता के अनुसार वही निकलें जो उन्नती के लिए उत्तम हो, ताकि उससे सुननेवालों पर अनुग्रह हो।",
        reference: "इफिसीयों 4:29",
        translation: "NIV",
        theme: "Life of a Servant",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "My words reveal who is in charge of my mind & heart",
        para2: "I am one whose speech is wholesome and helpful",
        para3: "My words build others up, not tear them down",
        para4: "His Spirit speaks through me so that my words heal",
        para5: "Your words reveal that you care for the emotional and spiritual well being of others",
        para6: "Your words are evidence that Jesus lives in you and you are under the Spirit’s control.",
        para7: "Your words bring light into the darkness, hope into despair, peace into chaos",
        para8: "",
        prayerTitle: "Today's Prayer",
        prayer: "हम जान चुके हैं कि सिर्फ आपके पास जीवन के वचन है, और उन्हें आप ने हमारे जीवन में फुंका है। अब होने दो की मेरे शब्दों का श्वास लोगों को जीवन प्रदान करें। धन्यवाद आप के वचने के व्दारा मैं आप के विचारों को सोचता और आप के सत्यों की घोषणा करता हॅुं। मेरे शब्द प्रेम के व्दारा परिवर्तित हुआ हृदय का प्रतिनिधित्व करें। होने दो कि मेरे शब्द ज्ञान और दया से भरे हुए हो जो आशा और चंगाई लातें हो। होने दो कि मेरा बोलना सदा पवित्र आत्मा के मार्गदर्शन और नियंत्रण में हो।",
      }
      break;
    case "day27":
      content = {
        passage: "इसलिए हम उसके व्दारा स्तुतीरूपी बलिदान, अर्थात उन होटों का फल जो उसके नाम का अंगीकार करते है, परमेश्वर को सर्वदा चढाया करें। भलाई करना और उदरता दिखाना न भुलो, क्योंकि परमेश्वर ऐसे बलिदानें से प्रसन्न होता है।",
        reference: "इब्रानियों 13:15-16",
        translation: "BSB ",
        theme: "Life of a Servant",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "I live to worship Him, reveal Him and serve Him",
        para2: "I am an encourager & giver of good gifts to others",
        para3: "I am created to offer Him my heart & lift up His name",
        para4: "I daily use my words to declare the goodness of God",
        para5: "Your words and service to others are well pleasing to God",
        para6: "You understand that the best way to serve God is to give your life to others.",
        para7: "Your willingness to serve others is a form of true praise and respect for God",
        para8: "",
        prayerTitle: "Today's Prayer",
        prayer: "मैं अपने मुँह, मन, और हृदय से आपकी आराधना का चुनाव करता हॅुं। आप मुझे जहाँ भी भेजें वहाँ पर आपके नाम की घोषणा करने का चुनाव मैं करता हूँ। मेरी प्रार्थना है आप मेरी मदद करें लोगों को उत्साहित करने और मेरे कृती और शब्दों के व्दारा स्विकृती पायें। मेरी मदद करें कि में स्वार्थी नही किंतु त्याग करनेवाला बनुं। मेरे हृदय को बदलें ताकि मैं ऐसा जीवन जी सकुं जिससे की आपको महिमा मिलें । आप बढें और मैं घटुं।",
      }
      break;
    case "day28":
      content = {
        passage: "क्योंकि हमारा यह मल्लयुध्द लहु और मांस से नही परंतु प्रधानों से, अधिकारीयों से, और इस संसार के अंधकार के हकिमों से और उस दृष्टता की आत्मिक सेनाओं से है जो आकाश में है। इसलिए परमेश्वर के सारे हतियार बांध लो कि तुम बुरे दिन में सामना कर सको, और सब कुछ पुरा करके स्थिर रह सको।",
        reference: "इफिसीयों 6:12-13",
        translation: "NASB",
        theme: "Spiritual Warfare",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "I am a warrior battling wickedness and darkness",
        para2: "I am able to resist the powers of the dark world ",
        para3: "I am a conqueror taking authority over satan",
        para4: "My struggle is not just my flesh but dark powers",
        para5: "Your calling is to victoriously fight against unseen forces of rebellion and darkness",
        para6: "You are able to resist, stand firm, take authority and effectively fight for dominion.",
        para7: "You are able to discern where the real battles in people’s lives are fought",
        para8: "",
        prayerTitle: "Today's Prayer",
        prayer: "मेरी सहायता करें कि, मेरे जीवन के लिए मैं एक लडाई में हॅुं। मैं मेरे शत्रु के झुठ को समझ सकुं और उसका सामना कर सकुं। मेरी मदद करें कि मैं विश्वास के शस्त्र का उपयोग करूं। आपका शब्द और पवित्र आत्मा का सामर्थ जो मेरे दैनिक अनुभव का हिस्सा है, जो प्रलोभनों और धोखे के विरोध में खडा है। यह जानना कि पाप करना कितना आसान है, कृपया मुझे धार्मिकता कि योजना बनाने के लिए स्वयं को अनुशासित करने में मदद करें।",
      }
      break;
    case "day29":
      content = {
        passage: "क्योंकि यदयपी हम शरीर में चलते फिरते है, तौभी शरीर के अनुसार नही लडते। क्योंकि हमारी लडाई के हथियार शरिरीक नही, पर गढों को ढा देने के लिए परमेश्वर के व्दारा सामर्थी है। इसलिए हम कल्पनाओं का और हर एक उंची बात का, जो परमेश्वर की पहिचान के विरोध में उठती है खंडन करतें है; और हर एक भावना का कैद करके मसीह का अज्ञाकारी बना देते है।" +
        "captive to the obedience of Christ,",
        reference: "2 कुरिन्थीयों 10:3-5",
        translation: "NASB",
        theme: "Spiritual Warfare",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "I am a warrior who fights against the darkness",
        para2: "I do not depend on my flesh but His divine power",
        para3: "I am able to destroy arrogant speculations ",
        para4: "I can take thoughts captive in order to obey Christ",
        para5: "You have been equipped to stand against those who stand against God",
        para6: "Your words are weapons of truth dismantling the opposition of the deceived.",
        para7: "You are a warrior fighting against darkness with the knowledge of God",
        para8: "",
        prayerTitle: "Today's Prayer",
        prayer: "स्वर्गीय पिता, मुझे याद दिलाते है कि मैं मेरे शरीर में आत्मिक युध्द न लडने के लिए बल्की मेरे भितर पवित्र आत्मा के सामर्थ का प्रयोग करूं। मुझे आपके वचन के अधिकार के साथ मुर्खतापुर्ण सोच के विरोध एक योध्दा के रूप में लडने का साहस दें। मुझे याद दिलाए कि मेरे पास यह चुनने कि शक्ति है कि मैं क्या सोचता हॅुं, क्या कहता हॅु और क्या करता हॅुं। जो आपके विरोध में खडे होते हैं उनके विरोध में खडे होने के लिए मेरी सहायता करें।",
      }
      break;
    case "day30":
      content = {
        passage: "क्योंकि परमेश्वर ने हमें भय की नही पर सामर्थ और प्रेम और संयंम कि आत्मा दी है।",
        reference: "2 तीमुथीयुस 1:7",
        translation: "NKJV",
        theme: "Spiritual Warfare",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "I am filled with His power and love at all times",
        para2: "I am a man/woman of courage and boldness",
        para3: "I am empowered with a mind of order & discipline",
        para4: "I have put aside darkness & am clothed in light",
        para5: "There is no fear in you; you know that you are covered in His armor of light",
        para6: "You are filled with His power and He pours out His love through your life.",
        para7: "You have said no to the dark deeds of the flesh by walking in His power and love",
        para8: "",
        prayerTitle: "Today's Prayer",
        prayer: "धन्यवाद आपके सारें उन अदभुत् वरदानों के लिए जो आपने मुझे दिए जो मेरी सहायता करतें है भय, चिंता, और निराशा पर एक विजयी जीवन जीने के लिए। आपने मेरे हृदय में  अपनी जान डाल दी है। आपने मुझे पवित्र आत्मा कि सामर्थ दी और सबसे महत्वपुर्ण, मेरे पास मसीह का मन है। मुझे याद दिलायें कि विश्वास मेरे हृदय का सामर्थ है, और मेरे मन, इच्छा और भावना पर डर शैतान का सामर्थ है। मुझे यह याद रखने के लिए सहायता करें कि शरीर तो मृत्यु लाता है पर आत्मा पर निर्भर रहना जीवन और शांती लाता है।",
      }
      break;
    case "day31":
      content = {
        passage: "क्योंकि परमेश्वर का वचन जीवित, और प्रबल, और हर एक दोधारी तलवार से भी बहुत चोखा है; और प्राण और आत्मा को, और गाँठ-गाँठ और गुदे-गुदे को अलग कर के आर-पार छेदता है और मन की भावनाओं और विचारों को जाँचता है।",
        reference: "इब्रानियों  4:12",
        translation: "NIV",
        theme: "Spiritual Warfare",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "I am being transformed by the truth of His word",
        para2: "I am equipped with the authority of His word",
        para3: "I effectively employ the power of His word",
        para4: "I am a practiced weapon in the hand of God",
        para5: "The Word of God is alive in your life. You are a living expression of its power",
        para6: "Your thoughts and intentions have been transformed by the Word of God.",
        para7: "You are a warrior; both skillful and competent in using God’s powerful words",
        para8: "",
        prayerTitle: "Today's Prayer",
        prayer: "धन्यवाद ऐसे उपकरण हमें देने के लिए जिससे सचमुझ हम अपने आप के गहरे भागों को जान सकतें है। हमारी आँखे खोलने और प्रतिरोधक हृदय को बदलने में आपका सत्य अनंतकालीन और सामर्थी है। आपको धन्यवाद कि आपका वचन मेरे हृदय में गहरे प्रकाश को काट सकता है जो कि सबसे कठोर अंधेरे को भी छेदता है। क्योंकि आपका वचन जीवित है, हम सत्य बोल सकते है जो लोगों को अंदर से और बाहर से अनंतकाल के लिए बदलने में मदद करतें है।",
      }
      break;
    // For navigation titles in Drawer
    case "drawer":
      content = {
        dailyReadingTitle: "Today's Reading!",
        selectedReadingTitle: "Select a Passage",
        languageSelectionTitle: "Language Selection",
        powerOfGodsWordTitle: "Power of God's Word",
        fiveVoicesInfoTitle: 'What are the Five Voices?',
        covenantTitle: "Memory Covenant",
        keyWordInfoTitle: "Glossary",
        translationsUsedTitle: "Translations Used"
      }
      break;
    // for page keyWordDescription.js
    case "keyWords":
      content = {
        title: "The Meanings of Key Words",
        para1: "Grace, mercy, and peace will be with us, from God the Father and from Jesus Christ the Father’s " +
        "Son, in truth and love. 2 John 1:3",
        para2: "GRACE: Charis - Without merit, we experience the fullness of God as He leans in to favor us, He gives " +
        "Himself away to us, blessing us with His presence, being all that He is to us. Divine enablement.",
        para3: "JOY: Kara - 'joy because of grace' Grace recognized. Joy results from relationship- abiding in Him. It " +
        "is leaning back towards God motivating us to lean into others through service as did Christ. The fruit " +
        "of joy is to rejoice, a grateful heart. Joy is sourced in the Holy Spirit in us and through us.",
        para4: "REJOICING: Chair - leaning towards grace and rejoicing in it. the awareness and experience of God’s " +
        "grace causing delight. Praise that lifts the heart and mind into intimate fellowship with God",
        para5: "FAITH: Pistis - divine persuasion, leading to obedience, love fruitful works.",
        para6: "MERCY: Oleos - God’s covenant-loyalty, covered in the blood.",
        para7: "PEACE: Eiréné - to join all essential parts together into a whole (God's gift of wholeness).",
        para8: "RIGHTEOUSNESS: Dikaiosýnē - divine approval. Separated unto good works.",
      }
      break;
    // For when a user selects a language in languageSelect.js
    case "languageSelection":
      content = {
        alert: "Language Updated to English!"
      }
      break;
    // For page passageSelector.js
    case "passageSelection":
      content = {
        passageSelectionTitle: "Select a Passage",
        theme1: "Kingdom Living",
        theme2: "Using God's Word",
        theme3: "Witnessing",
        theme4: "Renewing Our Minds",
        theme5: "Abiding in His Power",
        theme6: "Life of a Servant",
        theme7: "Spiritual Warfare",
        verse1: "1 Peter 2:9",
        verse2: "2 Corinthians 5:20",
        verse3: "Isaiah 61:1",
        verse4: "Matthew 28:18-20",
        verse5: "2 Timothy 2:1-2",
        verse6: "2 Timothy 3:16-17",
        verse7: "2 Timothy 2:15",
        verse8: "2 Corinthians 1:20",
        verse9: "1 Peter 3:15",
        verse10: "Romans 1:16",
        verse11: "1 Corinthians 2:4-5",
        verse12: "Ephesians 4:22-24",
        verse13: "Romans 12:2",
        verse14: "Philippians 4:8",
        verse15: "Romans 8:5-6",
        verse16: "2 Corinthians 5:16-17",
        verse17: "2 Peter 1:3-4",
        verse18: "Ephesians 3:20",
        verse19: "John 15:4-5",
        verse20: "Philippians 4:13",
        verse21: "1 Corinthians 6:19-20",
        verse22: "Galatians 2:20",
        verse23: "Philippians 2:3-4",
        verse24: "2 Corinthians 1:4",
        verse25: "Ephesians 2:10 and \n Philippians 2:13",
        verse26: "Ephesians 4:29",
        verse27: "Hebrews 13:15-16",
        verse28: "Ephesians 6:12-13",
        verse29: "2 Corinthians 10:3-5",
        verse30: "2 Timothy 1:7",
        verse31: "Hebrews 4:12"
      }
      break;
    // For page powerOfGodsWord.js
    case "powerOfGodsWord":
      content = {
        title: "THE POWER OF GOD’S WORD IN US",
        para1: "Scripture Memory S/M will help me renew my mind by changing how I view God and God’s Word. " +
        "(Romans 12:2) S/M will create new pathways of thought, building a disciplined and orderly mind. It " +
        "will help me to set my mind on things above and not on things that are on earth. (Col 3:1-3, Phil. 4:8) " +
        "I will develop the mind of Christ.",
        para2: "The thoughts of God become your thoughts, His Words become your words. You will learn to talk " +
        "with Kingdom authority, think big and pray big with authority and accuracy.",
        para3: "You will speak out the very breath of God (His Word) to encourage, admonish, train others, " +
        "comfort the afflicted. 2 Tim. 3:16, Isa. 61:1.",
        para4: "S/M gives me the ability to establish a defensive shield, . S/M will help me discern good from evil, " +
        "alert me to satan’s schemes and lies guarding my heart and my mind (2 Tim. 4:2)",
        para5: "It will help me see my sin as God sees it, understand His unfailing love and forgiveness.",
        para6: "It will enable me to understand and live out my new identity in Christ and reveal my value and " +
        "purpose in His Kingdom (2 Cor. 5:16, 17,20)",
        para7: "It will remind me to give my life away to others by sacrificially loving and serving them. It will show " +
        "me what is actually valuable and lasts for eternity.",
        para8: "Scripture memory enhances the Spirit’s persuasion to believe who I am, what I have, what I can do, " +
        "what I will do and what we can do together. 2 Pet.1:3, Phil.2:13, Eph.2:10, Heb. 12:21",
        para9: "S/M will improve your ability to choose the indwelling Spirit over the flesh, S/M counteracts the " +
        "false promises of the material world (2 Cor 5:16.)",
        para10: "It will motivate me to control my thinking and my speech, choose kindness, patience and " +
        "self-control. (Ephesians 4:29, 5;4, Gal. 5:22)",
        para11: "It will equip me to say no to fear, anxiety, anger and un-forgiveness. It will teach me to take my " +
        "thoughts captive and control my emotions and speech. (2 Cor. 10-3-5)",
        para12: "Scripture memory will motivate and prepare us to correctly handle God’s Word. (2 Timothy 2:15) " +
        "We will gain spiritual eyes, able to discern and unlock the secrets of God’s divine will and nature.",
        para13: "It will equip us to share the gospel and defend our confidence in God. (1 Pet. 3:15, Rom. 1:16) You " +
        "will be a ready warrior with wisdom to understand the intentions of the hearts/minds of ourselves and others. (Heb. 4:12)",
        para14: "It will help us develop an eternal perspective. What is seen is temporary, but what is unseen is " +
        "eternal. (2 Cor. 4:18)",
      }
      break;
    // For page translationsUsed.js
    case "translations":
      content = {
        title: "Translations",
        para1: "In the English language, to support easier memorization, you will find that not all the verses " +
        "are in the same version for the reasons below:",
        para2: "Each verse’s text was carefully compared with the original languages for accuracy and also consider " +
        "the cognates - the word’s root origins.",
        para3: "The verse’s translations was chosen based on its smoothness in presentation and orderliness of the " +
        "ideas as best understood in the Greek or Hebrew.",
        para4: "Translations were chosen with the purposed of helping you share God’s Word with others in a clear " +
        "and understandable way.",
        para5: "The following translations were used with permission:",
        para6: "ESV - English Standard version,",
        para7: "NASB - New American Standard",
        para8: "NIV- New International Version,",
        para9: "BSB - Berean Study Bible,",
        para10: "HCSB - Holman Christian Std. Bible,",
        para11: "BSV- Bible Study Version,",
        para12: "KJV- King James Version",
      }
      break;
      // for page fiveVoicesInfo.js
      case "voices":
        content = {
          title: "5 Voices in Our Lives",
          para1: "God's",
          para2: "Satan's",
          para3: "Other's",
          para4: "Yourself",
          para5: "Encouragement of Believers",
          para6: "The power of death and life are in the tongue... Proverbs 18:21",
          para7: "Who have you been listening to today?",
          para8: "Faith comes by hearing and hearing by the Word of God,",
        }
        break;
    //Default text in case of no translations
    default:
      content = "No Translations found for this page.";
      break;
  }

  return content;
}
