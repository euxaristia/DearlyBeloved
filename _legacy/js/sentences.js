// BCP Sentences of Scripture
// Provided for Morning Prayer, Evening Prayer, and other offices

const sentencesOfScripture = {
  morning: [
    {
      text: "Wherefore seeing we also are compassed about with so great a cloud of witnesses, let us lay aside every weight, and the sin which doth so easily beset us, and let us run with patience the race which is set before us, looking unto Jesus the author and finisher of our faith.",
      citation: "Hebrews 12:1-2"
    },
    {
      text: "Awake thou that sleepest, and arise from the dead, and Christ shall give thee light.",
      citation: "Ephesians 5:14"
    },
    {
      text: "Seek ye the Lord while he may be found, call ye upon him while he is near.",
      citation: "Isaiah 55:6"
    },
    {
      text: "The Lord is in his holy temple; let all the earth keep silence before him.",
      citation: "Habakkuk 2:20"
    },
    {
      text: "O send out thy light and thy truth, let them lead me.",
      citation: "Psalm 43:3"
    },
    {
      text: "God is a Spirit, and they that worship him must worship him in spirit and in truth.",
      citation: "John 4:24"
    },
    {
      text: "I was glad when they said unto me, We will go into the house of the Lord.",
      citation: "Psalm 122:1"
    },
    {
      text: "Grace be unto you, and peace, from God our Father, and from the Lord Jesus Christ.",
      citation: "1 Corinthians 1:3"
    },
    {
      text: "Blessed are they that dwell in thy house: they will be always praising thee.",
      citation: "Psalm 84:4"
    },
    {
      text: "Whoso entereth not by the door into the sheepfold, but climbeth up some other way, the same is a thief and a robber; but he that entereth in by the door is the shepherd of the sheep.",
      citation: "John 10:1-2"
    }
  ],
  evening: [
    {
      text: "O gracious Light, pure brightness of the everlasting Father in heaven, O Jesus Christ, holy and blessed.",
      citation: "From the ancient hymn Phos Hilaron"
    },
    {
      text: "Go ye into all the world, and preach the Gospel to every creature.",
      citation: "Mark 16:15"
    },
    {
      text: "Thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind. This is the first and great commandment. And the second is like unto it, Thou shalt love thy neighbor as thyself.",
      citation: "Matthew 22:37-39"
    },
    {
      text: "By this shall all men know that ye are my disciples, if ye have love one to another.",
      citation: "John 13:35"
    },
    {
      text: "O come, let us adore him, Christ the Lord.",
      citation: "Psalm 95:6"
    },
    {
      text: "The heavens declare the glory of God; and the firmament sheweth his handywork.",
      citation: "Psalm 19:1"
    },
    {
      text: "Let my prayer be set forth in thy sight as the incense; and let the lifting up of my hands be an evening sacrifice.",
      citation: "Psalm 141:2"
    },
    {
      text: "Blessed art thou, O Lord our God, who dwellest in the highest heavens, and humblest thyself to regard the things that are in heaven and in the earth.",
      citation: "From ancient liturgies"
    },
    {
      text: "Lighten our darkness, we beseech thee, O Lord; and by thy great mercy defend us from all perils and dangers of this night.",
      citation: "From the Evening Prayer Collects"
    },
    {
      text: "Behold, now is the accepted time; behold, now is the day of salvation.",
      citation: "2 Corinthians 6:2"
    }
  ]
};

// Get a random sentence for the given office
function getRandomSentence(office = 'morning') {
  const sentences = sentencesOfScripture[office] || sentencesOfScripture.morning;
  const randomIndex = Math.floor(Math.random() * sentences.length);
  return sentences[randomIndex];
}

// Get the first sentence for the given office
function getFirstSentence(office = 'morning') {
  const sentences = sentencesOfScripture[office] || sentencesOfScripture.morning;
  return sentences[0];
}

// Get all sentences for the given office
function getAllSentences(office = 'morning') {
  return sentencesOfScripture[office] || sentencesOfScripture.morning;
}
