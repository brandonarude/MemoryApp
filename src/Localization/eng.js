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
    case "day2":
      content = {
        passage: "Therefore, we are ambassadors for Christ, God making His appeal through \
        us. We implore you on behalf of Christ, be reconciled to God.",
        reference: "2 Corinthians 5:20",
        translation: "ESV",
        theme: "Anointing",
      }
      break;
    case "day3":
      content = {
        passage: "The Spirit of the Lord GOD is upon me, because the LORD has anointed me to bring \
        good news to the afflicted; He has sent me to bind up the brokenhearted, to proclaim liberty to \
        captives and freedom to prisoners;",
        reference: "Isaiah 61:1",
        translation: "NASB",
        theme: "Anointing",
      }
      break;
    case "day4":
      content = {
        passage: 'And Jesus came up and spoke to them, saying, “All authority has been \
        given to Me in heaven and on earth. "Go therefore and make disciples of all the nations, \
        baptizing them in the name of the Father and the Son and the Holy Spirit, teaching them to \
        observe all that I commanded you; and lo, I am with you always, even to the end of the age."',
        reference: "Matthew 28:18-20",
        translation: "NASB",
        theme: "Anointing",
      }
      break;
    case "day5":
      content = {
        passage: "You therefore, my son, be strong in the grace that is in Christ Jesus. The \
        things which you have heard from me in the presence of many witnesses, entrust these to faithful \
        men who will be able to teach others also.",
        reference: "2 Timothy 2:1-2",
        translation: "NASB",
        theme: "Anointing",
      }
      break;
    case "day6":
      content = {
        passage: "All Scripture is breathed out by God and profitable for teaching, for reproof, \
        for correction, and for training in righteousness, that the man of God may be complete, equipped \
        for every good work.",
        reference: "2 Timothy 3:16-17",
        translation: "ESV",
        theme: "Using God's Word",
      }
      break;
    case "day7":
      content = {
        passage: "Be diligent to present yourself approved to God as a workman who does not \
        need to be ashamed, accurately handling the word of truth.",
        reference: "2 Timothy 2:15",
        translation: "ESV",
        theme: "Using God's Word",
      }
      break;
    case "day8":
      content = {
        passage: "For no matter how many promises God has made, they are &quot;Yes&quot; \
        in Christ. And so through Him the &quot;Amen&quot; is spoken by us to the glory of God.",
        reference: "2 Corinthians 1:20",
        translation: "NIV",
        theme: "Using God's Word",
      }
      break;
    case "day9":
      content = {
        passage: "In your hearts honor Christ the Lord as holy, always being prepared to make a \
        defense to anyone who asks you for a reason for the hope that is in you; yet do it with gentleness \
        and respect.",
        reference: "1 Peter 3:15",
        translation: "ESV",
        theme: "Witnessing",
      }
      break;
    case "day10":
      content = {
        passage: "For I am not ashamed of the gospel, for it is the power of God for salvation to \
        everyone who believes, to the Jew first and also to the Greek.",
        reference: "Romans 1:16",
        translation: "ESV",
        theme: "Witnessing",
      }
      break;
    case "day11":
      content = {
        passage: "And my message and my preaching were not in persuasive words of \
        wisdom, but in demonstration of the Spirit and of power, so that your faith would not rest on \
        the wisdom of men, but on the power of God.",
        reference: "1 Corinthians 2:4-5",
        translation: "NASB",
        theme: "Witnessing",
      }
      break;
    case "day12":
      content = {
        passage: "You were taught, with regard to your former way of life, to put off your \
        old self, which is being corrupted by its deceitful desires; to be made new in the spirit of your \
        minds; and to put on the new self, created to be like God in true righteousness and holiness.",
        reference: "Ephesians 4:22-24",
        translation: "NIV",
        theme: "Renewing our Minds",
      }
      break;
    case "day13":
      content = {
        passage: "Do not be conformed to this age, but be transformed by the renewing of your \
        mind, so that you may test and prove what is the good, pleasing, and perfect will of God.",
        reference: "Romans 12:2",
        translation: "HCSB",
        theme: "Renewing our Minds",
      }
      break;
    case "day14":
      content = {
        passage: "Finally, brethren, whatever is true, whatever is honorable, whatever is right, \
        whatever is pure, whatever is lovely, whatever is of good repute, if there is any excellence and if \
        anything worthy of praise, dwell on these things.",
        reference: "Philippians 4:8",
        translation: "NASB",
        theme: "Renewing our Minds",
      }
      break;
    case "day15":
      content = {
        passage: "For those who live according to the flesh set their minds on the things of the \
        flesh, but those who live according to the Spirit set their minds on the things of the Spirit. For \
        to set the mind on the flesh is death, but to set the mind on the Spirit is life and peace.",
        reference: "Romans 8:5-6",
        translation: "ESV",
        theme: "Renewing our Minds",
      }
      break;
    case "day16":
      content = {
        passage: "From now on, therefore, we regard no one according to the flesh. Even though we \
        once regarded Christ according to the flesh, we regard him thus no longer. Therefore, if \
        anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come.",
        reference: "2 Corinthians 5:16-17",
        translation: "ESV",
        theme: "Abiding in His Power",
      }
      break;
    case "day17":
      content = {
        passage: "His divine power has granted to us all things that pertain to life and godliness, \
        through the knowledge of Him who called us to his own glory and excellence.",
        reference: "2 Peter 1:3",
        translation: "ESV",
        theme: "Abiding in His Power",
      }
      break;
    case "day18":
      content = {
        passage: "Now to Him who is able to do far more abundantly than all that we ask or think, \
        according to the power at work within us.",
        reference: "Ephesians 3:20",
        translation: "ESV",
        theme: "Abiding in His Power",
      }
      break;
    case "day19":
      content = {
        passage: "Abide in me, and I in you. As the branch cannot bear fruit by itself, unless it abides \
        in the vine, neither can you, unless you abide in me. I am the vine; you are the branches. \
        Whoever abides in me and I in him, he it is that bears much fruit, for apart from me you can do nothing.",
        reference: "John 15:4-5",
        translation: "ESV",
        theme: "Abiding in His Power",
      }
      break;
    case "day20":
      content = {
        passage: "I can do all things through Him who strengthens me.",
        reference: "Philippians 4:13",
        translation: "ESV",
        theme: "Abiding in His Power",
      }
      break;
    case "day21":
      content = {
        passage: "But we have this treasure in jars of clay to show that this all-surpassing \
        power is from God and not from us.",
        reference: "2 Corinthians 4:7",
        translation: "ESV",
        theme: "Abiding in His Power",
      }
      break;
    case "day22":
      content = {
        passage: "Or do you not know that your body is a temple of the Holy Spirit within \
        you, whom you have from God? You are not your own, for you were bought with a price. So \
        glorify God in your body.",
        reference: "I Corinthians 6:19-20",
        translation: "ESV",
        theme: "Abiding in His Power",
      }
      break;
    case "day23":
      content = {
        passage: "For though we walk in the flesh, we do not war according to the flesh, \
        for the weapons of our warfare are not of the flesh, but divinely powerful for the destruction of \
        fortresses. We are destroying speculations and every lofty thing raised up against the \
        knowledge of God, and we are taking every thought captive to the obedience of Christ,",
        reference: "2 Corinthians 10:3-5",
        translation: "NASB",
        theme: "Spiritual Warfare",
      }
      break;
    case "day24":
      content = {
        passage: "For God has not given us the spirit of fear; but of power, and of love, and of a sound mind.",
        reference: "2 Timothy 1:7",
        translation: "KJV",
        theme: "Spiritual Warfare",
      }
      break;
    case "day25":
      content = {
        passage: "For our struggle is not against flesh and blood, but against the rulers, \
        against the powers, against the world forces of this darkness, against the spiritual forces of \
        wickedness in the heavenly places. Therefore, take up the full armor of God, so that you will \
        be able to resist in the evil day, and having done everything, to stand firm.",
        reference: "Ephesians 6:12-13",
        translation: "NASB",
        theme: "Spiritual Warfare",
      }
      break;
    case "day26":
      content = {
        passage: "Through Him then let us continually offer up a sacrifice of praise to God, that is, \
        the fruit of lips that acknowledge His name.",
        reference: "Hebrews 13:15",
        translation: "ESV",
        theme: "Spiritual Warfare",
      }
      break;
    case "day27":
      content = {
        passage: "Truly, truly, I say to you, unless a grain of wheat falls into the earth and dies, it \
        remains alone; but if it dies, it bears much fruit.",
        reference: "John 12:24",
        translation: "ESV",
        theme: "Life of a Servant",
      }
      break;
    case "day28":
      content = {
        passage: "For even the Son of Man came not to be served but to serve, and to \
        give his life as a ransom for many.",
        reference: "Mark 10:45",
        translation: "NIV",
        theme: "Life of a Servant",
      }
      break;
    case "day29":
      content = {
        passage: "For we are his workmanship, created in Christ Jesus for good works, which God \
        prepared beforehand, that we should walk in them.",
        reference: "Ephesians 2:10",
        translation: "ESV",
        theme: "Life of a Servant",
      }
      break;
    case "day30":
      content = {
        passage: "Do not let any unwholesome talk come out of your mouths, but only what is \
        helpful for building others up according to their needs, that it may benefit those who listen.",
        reference: "Ephesians 4:29",
        translation: "NIV",
        theme: "Life of a Servant",
      }
      break;
    case "day31":
      content = {
        passage: "Do nothing out of selfish ambition or empty pride, but in humility consider \
        others more important than yourselves. Each of you should look not only to your own interests, \
        but also to the interests of others",
        reference: "Philippians 2:3-4",
        translation: "BSB",
        theme: "Life of a Servant",
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
