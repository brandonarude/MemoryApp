//Provides localization support for Hindi Language
// Provided Translations were in Kruti Characters, so the unicode doesn't render properly
//  Takes page as an argument to determine which text is necessary

import {Alert} from 'react-native';

export default function ReturnHindiText(page) {
  var content;
  switch(page){
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
    case "day1":
      content = {
        passage: "For you are a chosen people, a royal priesthood, a holy nation, " +
        "God's special possesion, that you may declare the praises of Him who called " +
        "you out of darkness into His wonderful light.",
        reference: "1 Peter 2:9",
        translation: "NIV",
        theme: "Kingdom Living",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "eSa jktk dh lsok esa jktfd; ;ktd g qWa A",
        para2: "I am of great value to God who owns me",
        para3: "I am assigned to declare God's greatness",
        para4: "I am chosen by God to walk in His light",
        para5: "You have been chosen by God and are His special possession",
        para6: "Your life reveals God’s goodness as you walk in His light",
        para7: "You are a priest of the King and are equipped to glorify Him",
        para8: "",
        prayerTitle: "Today's Prayer",
        prayer: "Thank you for choosing me, for rescuing me from my darkness and " +
        "bringing me into your light and truth. It is amazing that You gave me a special " +
        "job-as a priest of the king. I am already blessed because You called me into " +
        "your community and have been preparing me for larger Kingdom purposes. " +
        "Thank you that you have chosen me to point to your awesomeness.",
      }
      break;
    case "day2":
      content = {
        passage: "Therefore, we are ambassadors for Christ, God making His appeal through " +
        "us. We implore you on behalf of Christ, be reconciled to God.",
        reference: "2 Corinthians 5:20",
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
        prayer: "Thank you for equipping me and sending me to represent You to a " +
        "broken world. Help me to feel deeply for those who are separated from You " +
        "and each other. Give me your words of forgiveness, hope, unity and freedom. " +
        "Help me be courageous to bring healing into the fractured relationships of " +
        "God and men. May they recognize You when they see me.",
      }
      break;
    case "day3":
      content = {
        passage: "The Spirit of the Lord GOD is upon me, because the LORD has anointed me to bring " +
        "good news to the afflicted; He has sent me to bind up the brokenhearted, to proclaim liberty to " +
        "captives and freedom to prisoners;",
        reference: "Isaiah 61:1",
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
        prayer: "Thank you for the power of the Holy Spirit on me and in me. May the " +
        "power of your words spoken through me bring hope and freedom to those who are " +
        "hurting and have become prisoners of sin. Help me to discern the roots of " +
        "sin that I might help others step into the freedom of your light and truth.",
      }
      break;
    case "day4":
      content = {
        passage: 'And Jesus came up and spoke to them, saying, "All authority has been ' +
        'given to Me in heaven and on earth. Go therefore and make disciples of all the nations, ' +
        'baptizing them in the name of the Father and the Son and the Holy Spirit, teaching them to ' +
        'observe all that I commanded you; and lo, I am with you always, even to the end of the age."',
        reference: "Matthew 28:18-20",
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
        prayer: "Thank you that you chose us to help build the kingdom one person at a " +
        "time. Let the seriousness of heaven and hell motivate me to share the gospel. " +
        "Give me eyes to see the lost, give me a heart to love them and make time for " +
        "them. Help me not be ashamed of the death and resurrection of Christ. " +
        "Choose me, use me! Thank you, Father, that you have placed the seeds of " +
        "eternal life in us. Help me to plant and water in the lives of others for an eternal harvest.",
      }
      break;
    case "day5":
      content = {
        passage: "You therefore, my son, be strong in the grace that is in Christ Jesus. The " +
        "things which you have heard from me in the presence of many witnesses, entrust these to faithful " +
        "men who will be able to teach others also.",
        reference: "2 Timothy 2:1-2",
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
        prayer: "Thank you for sending people into our lives to help us grow in Christ. " +
        "As You have leaned into me to give Yourself away to me, help me to lean into " +
        "others and give my life away to them. Show me how to teach them to do the same. " +
        "Help me to be faithful that I might teach others to be faithful to the next generation of believers.",
      }
      break;
    case "day6":
      content = {
        passage: "All Scripture is breathed out by God and profitable for teaching, for reproof, " +
        "for correction, and for training in righteousness, that the man of God may be complete, equipped " +
        "for every good work.",
        reference: "2 Timothy 3:16-17",
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
        prayer: "Thank you that You have breathed life into my soul and spirit. Thank " +
        "you for the gift of the living Word that helps me to know what is right, what " +
        "is not right, how to get right, and how to stay right. Thank you that your " +
        "Word trains me to walk in righteousness, equipping and enabling me to do good works for You.",
      }
      break;
    case "day7":
      content = {
        passage: "Be diligent to present yourself approved to God as a workman who does not " +
        "need to be ashamed, accurately handling the word of truth.",
        reference: "2 Timothy 2:15",
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
        prayer: "Help my faith be authentic and dependable. May I be approved by You " +
        "with no need to be ashamed as I learn to carefully handle your Word. Help me " +
        "always use your Word in such a way that it accomplishes what You have  " +
        "assigned it to do through the Holy Spirit.",
      }
      break;
    case "day8":
      content = {
        passage: "For no matter how many promises God has made, they are Yes " +
        "in Christ. And so through Him the Amen is spoken by us to the glory of God.",
        reference: "2 Corinthians 1:20",
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
        prayer: "Thank you that You have given me the inheritance of all your promises through " +
        "Christ. Thank you for the authority those promises give me for each day’s " +
        "living. Give me the confidence to take authority and walk in the power of " +
        "those promises that the Father might be glorified.",
      }
      break;
    case "day9":
      content = {
        passage: "In your hearts honor Christ the Lord as holy, always being prepared to make a " +
        "defense to anyone who asks you for a reason for the hope that is in you; yet do it with gentleness " +
        "and respect.",
        reference: "1 Peter 3:15",
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
        prayer: "Dear God, help me choose a disciplined life that I might bring honor " +
        "to You by defending the faith You have given me. Help me be a considerate and " +
        "patient teacher to those seeking You as I explain to them your holiness, " +
        "your love and the hope You have placed in my heart.",
      }
      break;
    case "day10":
      content = {
        passage: "For I am not ashamed of the gospel, for it is the power of God for salvation to " +
        "everyone who believes, to the Jew first and also to the Greek.",
        reference: "Romans 1:16",
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
        prayer: "Thank you that You have entrusted me with the words of eternal life. " +
        "I am grateful that You have chosen me to lead others to You. Help me to love " +
        "others more than I fear their rejection because it is all about eternity. " +
        "Give me eyes and ears to recognize those who are seeking to know You and " +
        "speak with boldness and the power of your word.",
      }
      break;
    case "day11":
      content = {
        passage: "And my message and my preaching were not in persuasive words of " +
        "wisdom, but in demonstration of the Spirit and of power, so that your faith would not rest on " +
        "the wisdom of men, but on the power of God.",
        reference: "1 Corinthians 2:4-5",
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
        prayer: "Dear Father, help me not depend on my own ideas or wisdom but prepare " +
        "myself to respond to those in need by using your truth alone. Help me " +
        "to humbly surrender to the power of your Spirit. Make me sensitive to your " +
        "Spirit to encourage repentance, obedience and transformation in others. " +
        "May my words be your Word through the Holy Spirit.",
      }
      break;
    case "day12":
      content = {
        passage: "You were taught, with regard to your former way of life, to put off your " +
        "old self, which is being corrupted by its deceitful desires; to be made new in the spirit of your " +
        "minds; and to put on the new self, created to be like God in true righteousness and holiness. ",
        reference: "Ephesians 4:22-24",
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
        prayer: "Thank you for sharing your righteousness and holiness with me so I " +
        "can put aside my old sinful self. It is beyond all that I could ask or " +
        "think that You have made me a new person inside. You said you have even given " +
        "me a new spirit and mind and have chosen to make me like yourself in " +
        "holiness. Thank you for the extravagance of your gifts to me.",
      }
      break;
    case "day13":
      content = {
        passage: "Do not be conformed to this age, but be transformed by the renewing of your " +
        "mind, so that you may test and prove what is the good, pleasing, and perfect will of God.",
        reference: "Romans 12:2",
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
        prayer: "Thank you for providing a way to set me free from the world and its " +
        "destructive influences. Thank you for providing a way to have the mind of " +
        "Christ. I have tested your principles of life in contrast to the world and " +
        "found them both true and good. With your help, I will resist conformity " +
        "and choose to think and live differently.",
      }
      break;
    case "day14":
      content = {
        passage: "Finally, brethren, whatever is true, whatever is honorable, whatever is right, "+
        "whatever is pure, whatever is lovely, whatever is of good repute, if there is any excellence and if "+
        "anything worthy of praise, dwell on these things.",
        reference: "Philippians 4:8",
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
        prayer: "Lord, please give me courage to change my thinking and take my thoughts " +
        "captive as I stand against a lazy, compromising mind. Help me to dwell on " +
        "things that are equal to who I am in Christ. Help me to choose the discipline " +
        "to wash my mind with your Word so I can begin to think and speak your thoughts. " +
        "Help my mind choose the light and not the dark things .",
      }
      break;
    case "day15":
      content = {
        passage: "For those who live according to the flesh set their minds on the things of the " +
        "flesh, but those who live according to the Spirit set their minds on the things of the Spirit. For " +
        "to set the mind on the flesh is death, but to set the mind on the Spirit is life and peace.",
        reference: "Romans 8:5-6",
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
        prayer: "Thank you for giving me the power to say no to the temptations of my " +
        "flesh. Help me not use my flesh to create an identity for myself. Help me to " +
        "use your Word to renew my mind and replace the thoughts of fleshly desires with " +
        "the life and peace of obedience. Let me surrender to the promptings of the " +
        "Spirit. Empower my ability to choose righteousness.",
      }
      break;
    case "day16":
      content = {
        passage: "From now on, therefore, we regard no one according to the flesh. Even though we" +
        "once regarded Christ according to the flesh, we regard him thus no longer. Therefore, if" +
        "anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come.",
        reference: "2 Corinthians 5:16-17",
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
        prayer: "Thank you that in Christ there is more to our identities than just our " +
        "bodies. Thank you that you have put to death our broken and sinful past on " +
        "the cross with Jesus. Help me to understand what it means to be a new creation " +
        "and embrace the new person that I have become inside. Thank you that I can " +
        "walk in newness of life each day and I do not need to let my past control me.",
      }
      break;
    case "day17":
      content = {
        passage: "His divine power has granted to us all things that pertain to life and godliness, " +
        "through the knowledge of Him who called us to his own glory and excellence.",
        reference: "2 Peter 1:3",
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
        prayer: "Thank you that You have given me everything I need to live a life of " +
        "godliness. As I have gotten to know You, I realize your gifts have been " +
        "complete and perfect for all my needs. Your willingness to allow me " +
        "to share your glory and perfection is truly generous and more than I deserve " +
        "or could have ever imagined.",
      }
      break;
    case "day18":
      content = {
        passage: "Now to Him who is able to do far more abundantly than all that we ask or think, " +
        "according to the power at work within us.",
        reference: "Ephesians 3:20",
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
        prayer: "I praise you for calling me away from ordinary living and equipping " +
        "me with the power to do great things for you. Help me to think big, pray big" +
        "and by faith declare big things for your kingdom. Choose me and use me in " +
        "powerful ways as I yield to the Holy Spirit that is working in me.",
      }
      break;
    case "day19":
      content = {
        passage: "Abide in me, and I in you. As the branch cannot bear fruit by itself, unless it abides " +
        "in the vine, neither can you, unless you abide in me. I am the vine; you are the branches. " +
        "Whoever abides in me and I in him, he it is that bears much fruit, for apart from me you can do nothing.",
        reference: "John 15:4-5",
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
        prayer: "Thank you that when I am weak, You are strong,. I know that depending " +
        "on you assures my fruitfulness. Help me understand and accept my weaknesses " +
        "so that You can be all that You are through me. Help me to understand how to "+
        "abide in You that I might tap into the true source of godliness. " +
        "Protect me from the temptation of doing things in my own strength.",
      }
      break;
    case "day20":
      content = {
        passage: "I can do all things through Him who strengthens me.",
        reference: "Philippians 4:13",
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
        prayer: "I am so grateful that your love for me and your presence in my life " +
        "ensures that I will be an overcomer. Help me to always depend on you and not " +
        "myself that I might walk in your power and do great things for your kingdom. " +
        "Thank you that you have may it possible for me to be one with the your Spirit " +
        "and a warrior who will finish the race in victory.",
      }
      break;
    case "day21":
      content = {
        passage: "Or do you not know that your body is a temple of the Holy Spirit " +
        "within you, whom you have from God? You are not your own, 20 for you were " +
        "bought with a price. So glorify God in your body.",
        reference: "I Corinthians 6:19-20",
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
        prayer: "Understanding that you have purchased me by the blood " +
        "of Christ and chose to live inside me as if I was your temple goes " +
        "above and beyond all that I could have ever imagined. I know that you " +
        "purchased me to bring you glory and help people understand what a person " +
        "is like when they have become your special possession and live inside" +
        "of them. I praise you for adopting me as your child, I know you will take " +
        "care of what you own.",
      }
      break;
    case "day22":
      content = {
        passage: "I have been crucified with Christ. It is no longer I who live, " +
        "but Christ who lives in me. And the life I now live in the flesh I live " +
        "by faith in the Son of God, who loved me and gave Himself for me.",
        reference: "Galatians 2:20",
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
        prayer: "I know that if I want to live a new life, I first must die to the old " +
        "one. It is so wonderful that you had a plan to set me completely free from " +
        "my old sinful nature and replaced it with the life of your son. Thank you " +
        "for giving me the faith to embrace the work of the cross, and dying with " +
        "Christ give me resurrection life. I praise you for your work of love that " +
        "sets me free from my flesh.",
      }
      break;
    case "day23":
      content = {
        passage: "Do nothing out of selfish ambition or empty pride, but in " +
        "humility consider others more important than yourselves. Each of you " +
        "should look not only to your own interests, but also to the interests of others.",
        reference: "Philippians 2:3-4",
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
        prayer: "Dear God, today’s prayer is crucial if I am to live like Christ did. " +
        "I am requesting that you help me with things often too difficult for me. " +
        "I know I need to be humble, to think of others as more important than myself, " +
        "to serve with out being noticed, to place others needs above my own. Please " +
        "transform my mind to choose sacrificial love so I willfully give away and " +
        "pour out my life for others. I choose to be your servant to others.",
      }
      break;
    case "day24":
      content = {
        passage: "He comforts us in all our affliction, so that we may be able to comfort " +
        "those who are in any kind of affliction, through the comfort we ourselves receive from God.",
        reference: "2 Corinthians 1:4",
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
        prayer: "I do not choose suffering but I know that you have been equipping me " +
        "to support and comfort others through my own difficulties. Help me to have " +
        "eyes to see and discipline to listen to other’s suffering speak hope into " +
        "their doubts, fears and brokenness as you lead me. May the strength and faith " +
        "you have built into my life be a gift of peace and hope to others during their " +
        "challenging times. Help me be the mouth, ears and feet of Jesus",
      }
      break;
    case "day25":
      content = {
        passage: "For we are his workmanship, created in Christ Jesus for good works, " +
        "which God prepared beforehand, that we should walk in them.",
        passage2: "it is God who works in you, both to will and to work for his good pleasure.",
        reference: "Ephesians 2:10",
        reference2: "Philippians 2:13",
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
        prayer: "I am excited for the things you are building into my life so I can " +
        "serve you. Thank you for giving me the desire and Holy Spirit power to do good " +
        "things for you. Please continue to mold and shape me and give me a humble heart " +
        "to fulfill your purpose in my life. Thank you that you not only gave me the " +
        "gift of faith but you also help me to want to serve your kingdom.",
      }
      break;
    case "day26":
      content = {
        passage: "Do not let any unwholesome talk come out of your mouths, but only what is " +
        "helpful for building others up according to their needs, that it may benefit those who listen.",
        reference: "Ephesians 4:29",
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
        prayer: "We understand that only You have the Words of life and You breathed "+
        "that life into me. Now may the breath of my words be life giving to others. " +
        "Thank you that by your word I can think your thoughts and declare your truths. " +
        "Help my words represent a heart transformed by your love. May my words be " +
        "filled with wisdom &amp; kindness and bring hope and healing. Help my speech " +
        "always be under the control and guidance of the Holy Spirit.",
      }
      break;
    case "day27":
      content = {
        passage: "Through Jesus, therefore, let us continually offer to God a sacrifice " +
        "of praise, the fruit of lips that confess His name. And do not neglect to do " +
        "good and to share with others, for with such sacrifices God is pleased.",
        reference: "John 12:24",
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
        prayer: "I choose to worship you with my mouth, my mind and my heart. " +
        "I choose to declare your name where ever you send me. I pray you will help " +
        "me encourage others and find your approval by my words and actions. Help me " +
        "not be selfish but sacrificial. Change my heart so that I live in such a way " +
        "that you are lifted up. May you increase and may I decrease.",
      }
      break;
    case "day28":
      content = {
        passage: "For our struggle is not against flesh and blood, but against the " +
        "rulers, against the powers, against the world forces of this darkness, against " +
        "the spiritual forces of wickedness in the heavenly places. Therefore, take up " +
        "the full armor of God, so that you will be able to resist in the evil day, and having done everything, to stand firm.",
        reference: "Ephesians 6:12-13",
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
        prayer: "Help me Lord for I am in a battle for my life and I must recognize " +
        "and resist the lies of my enemy. Help me use the armor of faith, your Word " +
        "and the power of the Holy Spirit that to withstand the onslaught of temptations " +
        "and deceptions that are part of my daily experience. Knowing how" +
        "easy it is to sin, please help me to discipline myself to plan for righteousness.",
      }
      break;
    case "day29":
      content = {
        passage: "For though we walk in the flesh, we do not war according to the flesh, " +
        "for the weapons of our warfare are not of the flesh, but divinely powerful for " +
        "the destruction of fortresses. 5 We are destroying speculations and every lofty " +
        "thing raised up against the knowledge of God, and we are taking every thought " +
        "captive to the obedience of Christ,",
        reference: "2 Corinthians 10:3-5",
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
        prayer: "Father in heaven, remind me to not fight spiritual battles " +
        "in my flesh but instead exercise the power of the Holy Spirit within me. " +
        "Give me the courage to fight as a warrior against foolishness thinking " +
        "with the authority of your Word. Remind me that I have the power to choose " +
        "what I think, say and do. Help me to stand against those who stand against you.",
      }
      break;
    case "day30":
      content = {
        passage: "For God has not given us the spirit of fear; but of power, and of " +
        "love, and of a sound mind.",
        reference: "2 Timothy 1:7",
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
        prayer: "Thank you for all the wonderful gifts you have given me to help me " +
        "live a victorious life over fear, anxiety and depression. You have poured " +
        "out your live in my heart, you have given me the power of the Holy Spirit " +
        "and most importantly, I can have the mind of Christ. Remind me that faith is " +
        "the strength of my heart and fear is the power of satan over my mind, will " +
        "and emotions. Help me to remember that the flesh brings death but dependency " +
        "on the Spirit brings life and peace.",
      }
      break;
    case "day31":
      content = {
        passage: "For the word of God is alive and active. Sharper than any " +
        "double-edged sword, it penetrates even to dividing soul and spirit, "
        +"joints and marrow; it judges the thoughts and attitudes of the heart.",
        reference: "Hebrews 4:12",
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
        prayer: "Thank you that You have given us a tool to truly know the deepest parts " +
        "of ourselves. Your truth is everlasting and powerful enough to open eyes and " +
        "change resistant hearts. Thank you that the Word can cut deep into my heart " +
        "with a light that pierces even the most stubborn darkness. Because your Word " +
        "is alive, we can speak truths that help people change from the inside out for all eternity.",
      }
      break;
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
    case "languageSelection":
      content = {
        alert: "Language Updated to English!"
      }
      break;
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
    default:
      content = "No Translations found for this page.";
      break;
  }

  return content;
}
