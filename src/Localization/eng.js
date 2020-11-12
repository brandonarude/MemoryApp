//Provides localization support for English Language
//  Takes page as an argument to determine which text is necessary

import {Alert} from 'react-native';

export default function ReturnEnglishText(page) {
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
        theme: "Anointing",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "I am chosen by God to walk in His light",
        para2: "I am a royal priest in the service of the King",
        para3: "I am called by God to be His special possession",
        para4: "I am assigned to declare God's greatness",
        para5: "You have been chosen by God and are His special possession.",
        para6: "Your life and words reveal how good and amazing God is",
        para7: "You are a priest of the King and are equipped to glorify Him.",
        para8: ""
      }
      break;
    case "day2":
      content = {
        passage: "Therefore, we are ambassadors for Christ, God making His appeal through " +
        "us. We implore you on behalf of Christ, be reconciled to God.",
        reference: "2 Corinthians 5:20",
        translation: "ESV",
        theme: "Anointing",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "I am an ambassador for God's kingdom",
        para2: "I am God's representative to the world",
        para3: "God reaches out to others through me",
        para4: "I am chosen to bring people back to God",
        para5: "You have been chosen by God to reach out to others.",
        para6: "Your life and words show the world what God is like.",
        para7: "Your life reminds others that God never gives up on us!",
        para8: "Your words and counsel draw people back to God’s love."
      }
      break;
    case "day3":
      content = {
        passage: "The Spirit of the Lord GOD is upon me, because the LORD has anointed me to bring " +
        "good news to the afflicted; He has sent me to bind up the brokenhearted, to proclaim liberty to " +
        "captives and freedom to prisoners;",
        reference: "Isaiah 61:1",
        translation: "NASB",
        theme: "Anointing",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "I am connected with the power of God's Spirit",
        para2: "I am a messenger of good news to the afflicted",
        para3: "I am sent by God to help the broken hearted",
        para4: "My words extend freedom to satan's prisoners",
        para5: "You have been anointed in God’s Spirit & sent to declare His good news",
        para6: "You life and words of faith bring healing to the brokenhearted.",
        para7: "Your words set prisoners free and shed light on the darkness of satan’s lies",
        para8: "Your words offer liberty to those in bondage – hope to those who are hurting.",
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
        theme: "Anointing",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "I am assigned to make disciple makers",
        para2: "I am a fisher of men baptizing them in His name",
        para3: "I am sent from God to teach others to obey Him",
        para4: "I am always in the presence and care of God",
        para5: "Your life has been set apart to draw others to God",
        para6: "Your words remind others to love and obey God.",
        para7: "You have a heart for the lost and vision for the nations",
        para8: "God is always with you – in the present in His presence.",
      }
      break;
    case "day5":
      content = {
        passage: "You therefore, my son, be strong in the grace that is in Christ Jesus. The " +
        "things which you have heard from me in the presence of many witnesses, entrust these to faithful " +
        "men who will be able to teach others also.",
        reference: "2 Timothy 2:1-2",
        translation: "NASB",
        theme: "Anointing",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "Jesus has made me strong in the Father's grace",
        para2: "I give to others what God has given me",
        para3: "I am a maker of disciple makers",
        para4: "I am committed to men who will teach others",
        para5: "You are strong in God’ grace",
        para6: "You faithfully give your life away to others.",
        para7: "Because you have been teachable, you are a leader among men",
        para8: "Your life promotes faithfulness to God and others.",
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
        para6: "You have been a faithful steward of God’s Word with no regrets.",
        para7: "You bring honor to God and yourself by how you use His Word",
        para8: "",
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
        para7: "You are always considerate while helping others understand spiritual things",
        para8: "",
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
        para4: "My words carry the message of eternal life",
        para5: "You are never ashamed to invite others to know God",
        para6: "You share God’s truth with others no matter their background.",
        para7: "You understand that God’s word has the power of eternal life in it",
        para8: "You represent God with boldness and power",
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
        para4: "My words cause others to trust in God",
        para5: "Your words show that you do not lean on your own understanding ",
        para6: "Your words demonstrate the power of the Holy Spirit speaking through you.",
        para7: "Your reliance on the Lord for understanding helps others to trust in Him",
        para8: "The way you live and speak encourages others to depend on God rather than men.",
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
        para2: "I choose to say no to deception and corrupt ideas ",
        para3: "I am a new person in both my mind & spirit",
        para4: "As God lives through me, I am righteousness & holy",
        para5: "The you that you made is dead; the you that God made is free and powerful",
        para6: "Your mind is set free by His Spirit and you can have the mind of Christ.",
        para7: "God’s Spirit is helping you to walk in new levels of understanding and power",
        para8: "",
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
        para2: "I am transformed as I renew my mind",
        para3: "I have tested God's will & found it to be perfect",
        para4: "I now live in the good and acceptable will of God",
        para5: "Your life represents a mind that is now under the control of the Holy Spirit",
        para6: "Your transformation in Christ has led you to live without compromise",
        para7: "Your life proves that living God’s way is good, pleasing and perfect",
        para8: "",
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
        para1: "I can say no to my flesh and yes to the Spirit",
        para2: "I have set my mind on His presence and power",
        para3: "I am choosing to let His Spirit live through me",
        para4: "I am filled with His life, peace and rest",
        para5: "Your life is evidence of choosing to live by the influence of the Holy Spirit",
        para6: "Your dependency on the Spirit has equipped you to serve and walk in power.",
        para7: "Because you have surrendered to His Spirit, you experience peace and rest",
        para8: "",
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
        para4: "I have spiritual eyes - I can see God living in you",
        para5: "The you that God has made is becoming more and more obvious each day",
        para6: "You have the ability to see past the outward appearance into a person’s heart.",
        para7: "You are doing a great job of letting the new life of God in you take over",
        para8: "",
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
      }
      break;
    case "day21":
      content = {
        passage: "But we have this treasure in jars of clay to show that this all-surpassing " +
        "power is from God and not from us.",
        reference: "2 Corinthians 4:7",
        translation: "ESV",
        theme: "Abiding in His Power",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "I am God's temple and His Spirit dwells within me",
        para2: "I am God's possession, I no longer belong to myself",
        para3: "I have been purchased by God to bring Him glory",
        para4: "I am what a person is like when God lives inside them",
        para5: "God has made you His temple and His Holy Spirit lives within you",
        para6: "You have been purchased by the blood of His son to glorify God.",
        para7: "Since you belong to God, He will be a good steward of your life",
        para8: "",
      }
      break;
    case "day22":
      content = {
        passage: "Or do you not know that your body is a temple of the Holy Spirit within " +
        "you, whom you have from God? You are not your own, for you were bought with a price. So " +
        "glorify God in your body.",
        reference: "I Corinthians 6:19-20",
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
      }
      break;
    case "day23":
      content = {
        passage: "For though we walk in the flesh, we do not war according to the flesh," +
        "for the weapons of our warfare are not of the flesh, but divinely powerful for the destruction of"+
        "fortresses. We are destroying speculations and every lofty thing raised up against the"+
        "knowledge of God, and we are taking every thought captive to the obedience of Christ,",
        reference: "2 Corinthians 10:3-5",
        translation: "NASB",
        theme: "Spiritual Warfare",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "I am humble and ready to give myself away to others",
        para2: "I am quick to consider other’s needs above my own",
        para3: "I am willing to serve whether I am noticed or not",
        para4: "I am created to bring glory to Him, not myself",
        para5: "Christ’s sacrificial love has transformed your heart to live in the same manner",
        para6: "You are a humble servant always considering others’ needs before your own.",
        para7: "Your willingness to be treated like a servant is evidence that you truly are one",
        para8: "",
      }
      break;
    case "day24":
      content = {
        passage: "For God has not given us the spirit of fear; but of power, and of love, and of a sound mind.",
        reference: "2 Timothy 1:7",
        translation: "KJV",
        theme: "Spiritual Warfare",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "I am a regular recipient of God's care and comfort",
        para2: "I have suffered in order to support others in their pain",
        para3: "I am able to serve others with the comfort God gives me",
        para4: "God's purpose in my suffering is His glory & my reward",
        para5: "Your strength and faith during your suffering has been a great comfort to others",
        para6: "Your reliance on God during your trials shows you understand His love for you.",
        para7: "God has prepared you to empathize with others’ doubts, fears and brokenness",
        para8: "",
      }
      break;
    case "day25":
      content = {
        passage: "For our struggle is not against flesh and blood, but against the rulers," +
        "against the powers, against the world forces of this darkness, against the spiritual forces of" +
        "wickedness in the heavenly places. Therefore, take up the full armor of God, so that you will" +
        "be able to resist in the evil day, and having done everything, to stand firm.",
        reference: "Ephesians 6:12-13",
        translation: "NASB",
        theme: "Spiritual Warfare",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "I am an example of God changing a life to do His will",
        para2: "I have been created to do great things for God",
        para3: "God does His best work in & through me",
        para4: "I am filled with His desires & power to do His work",
        para5: "God’s plan from the beginning was to do His best work in and through you",
        para6: "You have been created and fully equipped to do great things for God.",
        para7: "Your desire to do good things for God reveals how much He rules in your heart",
        para8: "",
      }
      break;
    case "day26":
      content = {
        passage: "Through Him then let us continually offer up a sacrifice of praise to God, that is, " +
        "the fruit of lips that acknowledge His name.",
        reference: "Hebrews 13:15",
        translation: "ESV",
        theme: "Spiritual Warfare",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "My words reveal who is in charge of my mind & heart",
        para2: "I am one whose speech is wholesome and helpful",
        para3: "My words build others up, not tear them down",
        para4: "His Spirit speaks through me so that my words heal",
        para5: "Your words reveal that you care for the emotional and spiritual well being of others",
        para6: "Your words are evidence that Jesus lives in you and you are under the Spirit’s control.",
        para7: "Your words bring light into the darkness, hope into despair, peace into chaos",
        para8: "",
      }
      break;
    case "day27":
      content = {
        passage: "Truly, truly, I say to you, unless a grain of wheat falls into the earth and dies, it " +
        "remains alone; but if it dies, it bears much fruit.",
        reference: "John 12:24",
        translation: "ESV",
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
      }
      break;
    case "day28":
      content = {
        passage: "For even the Son of Man came not to be served but to serve, and to " +
        "give his life as a ransom for many.",
        reference: "Mark 10:45",
        translation: "NIV",
        theme: "Life of a Servant",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "I am a warrior battling wickedness and darkness",
        para2: "I am able to resist the powers of the dark world ",
        para3: "I am a conqueror taking authority over satan",
        para4: "My struggle is not just my flesh but dark powers",
        para5: "Your calling is to victoriously fight against unseen forces of rebellion and darkness",
        para6: "You are able to resist, stand firm, take authority and effectively fight for dominion.",
        para7: "You are able to discern where the real battles in people’s lives are fought",
        para8: "",
      }
      break;
    case "day29":
      content = {
        passage: "For we are his workmanship, created in Christ Jesus for good works, which God " +
        "prepared beforehand, that we should walk in them.",
        reference: "Ephesians 2:10",
        translation: "ESV",
        theme: "Life of a Servant",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "I am a warrior who fights against the darkness",
        para2: "I do not depend on my flesh but His divine power",
        para3: "I am able to destroy arrogant speculations ",
        para4: "I can take thoughts captive in order to obey Christ",
        para5: "You have been equipped to stand against those who stand against God",
        para6: "Your words are weapons of truth dismantling the opposition of the deceived.",
        para7: "You are a warrior fighting against darkness with the knowledge of God",
        para8: "",
      }
      break;
    case "day30":
      content = {
        passage: "Do not let any unwholesome talk come out of your mouths, but only what is " +
        "helpful for building others up according to their needs, that it may benefit those who listen.",
        reference: "Ephesians 4:29",
        translation: "NIV",
        theme: "Life of a Servant",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "I am filled with His power and love at all times",
        para2: "I am a man/woman of courage and boldness",
        para3: "I am empowered with a mind of order & discipline",
        para4: "I have put aside darkness & am clothed in light",
        para5: "There is no fear in you; you know that you are covered in His armor of light",
        para6: "You are filled with His power and He pours out His love through your life.",
        para7: "You have said no to the dark deeds of the flesh by walking in His power and love",
        para8: "",
      }
      break;
    case "day31":
      content = {
        passage: "Do nothing out of selfish ambition or empty pride, but in humility consider " +
        "others more important than yourselves. Each of you should look not only to your own interests, " +
        "but also to the interests of others",
        reference: "Philippians 2:3-4",
        translation: "BSB",
        theme: "Life of a Servant",
        iAmTitle: "I AM AND YOU ARE STATEMENTS",
        para1: "I am being transformed by the truth of His word",
        para2: "I am equipped with the authority of His word",
        para3: "I effectively employ the power of His word",
        para4: "I am a practiced weapon in the hand of God",
        para5: "The Word of God is alive in your life. You are a living expression of its power",
        para6: "Your thoughts and intentions have been transformed by the Word of God.",
        para7: "You are a warrior; both skillful and competent in using God’s powerful words",
        para8: "",
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
    case "keyWords":
      content = {
        title: "The meanings of Key Words",
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
