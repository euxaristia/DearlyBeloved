// BCP Collects organized by liturgical season
// Each collect includes morning and evening versions where they differ

const collects = {
  advent: {
    1: {
      text: "Almighty God, give us grace that we may cast away the works of darkness, and put upon us the armour of light, now in the time of this mortal life in which thy Son Jesus Christ came to visit us in great humility; that in the last day, when he shall come again in his glorious majesty to judge both the quick and the dead, we may rise to the life immortal; through him who liveth and reigneth with thee and the Holy Ghost, now and ever. Amen."
    },
    2: {
      text: "Blessed Lord, who hast caused all holy Scriptures to be written for our learning; Grant us that we may in such wise hear them, read, mark, learn, and inwardly digest them, that by patience and comfort of thy holy Word we may embrace and ever hold fast the blessed hope of everlasting life, which thou hast given us in our Saviour Jesus Christ. Amen."
    },
    3: {
      text: "O Lord Jesus Christ, who at thy first coming didst send thy messenger to prepare thy way before thee; Grant us, we beseech thee, grace to prepare our hearts, and to make ready the way of thy coming; that when thou shalt appear we may be made whole of our infirmities, and stand before thee everlasting joy; who livest and reignest with the Father and the Holy Ghost, ever one God, world without end. Amen."
    },
    4: {
      text: "O Almighty Lord and everlasting God, vouchsafe, we beseech thee, to direct, sanctify, and govern both our hearts and bodies in the ways of thy laws, and in the works of thy commandments; that through thy most mighty protection, both here and ever, we may be preserved in body and soul; through our Lord and Saviour Jesus Christ. Amen."
    }
  },
  christmastide: {
    christmas: {
      text: "O God, who makest us glad with the yearly remembrance of the birth of thine only Son Jesus Christ; Grant that as we joyfully receive him for our Redeemer, so we may with sure confidence behold him when he shall come to be our Judge; who liveth and reigneth with thee and the Holy Ghost, ever one God, world without end. Amen."
    },
    sundayAfter: {
      text: "Almighty God, who hast given thine only Son to take upon him the form of man, and to suffer death upon the Cross, that all mankind should follow the example of his great humility; Mercifully grant, we beseech thee, that we may both follow the example of his patience, and also be made partakers of his Resurrection. Amen."
    }
  },
  epiphany: {
    epiphanyDay: {
      text: "O God, who by the leading of a star didst manifest thy only-begotten Son to the Gentiles; Mercifully grant, that we, who know thee now by faith, may after this life have the fruition of thy glorious Godhead. Amen."
    },
    1: {
      text: "O Lord, we beseech thee mercifully to receive the prayers of thy people who call upon thee; and grant that they may both perceive and know what things they ought to do, and also may have grace and power faithfully to fulfil the same. Amen."
    },
    2: {
      text: "Almighty and everlasting God, who dost govern all things in heaven and earth; Mercifully hear the supplications of thy people, and grant us thy peace all the days of our life. Amen."
    },
    3: {
      text: "O Lord, we beseech thee to keep thy Church with perpetual mercy: and since the frailty of man without thee cannot but fall; Keep us ever by thy help from all things hurtful, and lead us to all things profitable to our salvation. Amen."
    },
    4: {
      text: "O God, whose blessed Son was manifested that he might destroy the works of the devil, and make us the sons of God, and heirs of eternal life; Grant us, we beseech thee, that, having this hope, we may purify ourselves, even as he is pure. Amen."
    },
    5: {
      text: "O Lord, whose providence is never wanting to them that seek thee; Grant that we may so pass through things temporal, that we finally lose not the things eternal. Amen."
    },
    6: {
      text: "O God, whose days are without end, and whose mercies cannot be numbered; Make us, we beseech thee, deeply sensible of the shortness and uncertainty of life; and let thy Holy Spirit lead us in holiness and righteousness all our days. Amen."
    },
    last: {
      text: "O Almighty God, who alone canst order the unruly wills and affections of sinful men; Grant unto thy people, that they may love the thing which thou commandest, and desire that which thou dost promise; that so, among the sundry and manifold changes of the world, our hearts may surely there be fixed, where true joys are to be found. Amen."
    }
  },
  lent: {
    ashWednesday: {
      text: "Almighty and everlasting God, who hatest nothing that thou hast made, and dost forgive the sins of all them that are penitent; Create and make in us new and contrite hearts, that we, worthily lamenting our sins, and acknowledging our wretchedness, may obtain of thee, the God of all mercy, perfect remission and forgiveness. Amen."
    },
    1: {
      text: "O Lord, who for our sake didst fast forty days in the wilderness; Give us grace to use such abstinence, that, our flesh being subdued to the Spirit, we may ever obey thy voice in righteousness and true holiness, to thy honour and glory. Amen."
    },
    2: {
      text: "O God, who seest that we put not our trust in any thing that we do; Mercifully grant that by thy power we may be defended against all adversity. Amen."
    },
    3: {
      text: "We beseech thee, Almighty God, look upon the hearty desires of thy humble servants, and stretch forth the right hand of thy majesty, to be our defence against all our enemies. Amen."
    },
    4: {
      text: "Grant, we beseech thee, Almighty God, that we, who for our evil deeds do worthily deserve to be punished, by the comfort of thy grace may mercifully be relieved. Amen."
    },
    5: {
      text: "We beseech thee, Almighty God, mercifully to look upon thy people; that by thy great goodness they may be governed and preserved evermore in body and soul. Amen."
    }
  },
  easter: {
    easterDay: {
      text: "O God, who for our redemption didst give thine only-begotten Son to the death of the Cross, and by his glorious Resurrection hast delivered us from the power of our enemy; Grant us so to die daily unto sin, that we may evermore live with him in the joy of his Resurrection. Amen."
    },
    1: {
      text: "Almighty Father, who hast given thine only Son to die for our sins, and to rise again for our justification; Grant us so to put away the leaven of malice and wickedness, that we may always serve thee in pureness of living and truth. Amen."
    },
    2: {
      text: "Almighty God, who hast vouchsafed to thine only-begotten Son to sit upon thy right hand, and to sit in judgment at the last day; Grant that all the peoples of the earth, being made subject to his dominion, may serve him in unity, confidence, and love. Amen."
    },
    3: {
      text: "Grant, we beseech thee, Almighty God, that like as we do believe thy only-begotten Son our Lord to have risen from the dead and ascended into heaven; So we may by faith behold him sitting at the right hand of thy Majesty in heaven, and also ourselves hereafter rise and ascend thither. Amen."
    },
    4: {
      text: "O Merciful God, who didst make all men, and hatest nothing that thou hast made, nor wouldest the death of a sinner, but rather that he should turn from his wickedness and live; Have mercy upon all Jews, Turks, Infidels, and Heretics, and take from them all ignorance, hardness of heart, and contempt of thy Word; and so fetch them home, blessed Lord, to thy flock, that they may be saved among the remnant of the true Israelites, and be made one fold under one Shepherd, Jesus Christ our Lord. Amen."
    },
    5: {
      text: "O Lord, from whom all good things do come; Grant to us thy humble servants, that by thy holy inspiration we may think those things that are good, and by thy merciful guiding may perform the same. Amen."
    },
    6: {
      text: "O God, who hast prepared for them that love thee such good things as pass man's understanding; Pour into our hearts such love toward thee, that we, loving thee above all things, may obtain thy promises, which exceed all that we can desire. Amen."
    }
  },
  pentecost: {
    pentecost: {
      text: "God, who as at this time didst teach the hearts of thy faithful people, by the sending to them the light of thy Holy Ghost; Grant us by the same Holy Ghost to have a right judgment in all things, and evermore to rejoice in his holy comfort. Amen."
    }
  },
  trinity: {
    trinitySunday: {
      text: "Almighty and everlasting God, who art one God in Trinity, and Trinity in Unity; We beseech thee, that thou wouldest keep us steadfast in this faith, and evermore defend us from all adversities, who livest and reignest, one God, world without end. Amen."
    }
  },
  afterTrinity: {
    1: {
      text: "O God, the strength of all those that put their trust in thee; Mercifully accept our prayers; and because through the weakness of our mortal nature we can do no good thing without thee, grant us the help of thy grace, that in keeping thy commandments we may please thee, both in will and deed. Amen."
    },
    2: {
      text: "O Lord, we beseech thee, let thy continual pity cleanse and defend thy Church; and, because it cannot continue in safety without thy succour, preserve it evermore by thy help and goodness. Amen."
    },
    3: {
      text: "O Lord, we beseech thee, keep thy Church with perpetual mercy: and, since the frailty of man without thee cannot but fall, keep us ever by thy help from all things hurtful, and lead us to all things profitable to our salvation. Amen."
    },
    4: {
      text: "O God, the protector of all that trust in thee, without whom nothing is strong, nothing is holy; Increase and multiply upon us thy mercy; that, thou being our ruler and guide, we may so pass through things temporal, that we finally lose not the things eternal. Amen."
    },
    5: {
      text: "Grant, O Lord, we beseech thee, that the course of this world may be so peaceably ordered by thy governance, that thy Church may joyfully serve thee in all godly quietness. Amen."
    },
    6: {
      text: "O God, who hast prepared for them that love thee such good things as pass man's understanding; Pour into our hearts such love toward thee, that we, loving thee above all things, may obtain thy promises, which exceed all that we can desire. Amen."
    },
    7: {
      text: "Lord of all power and might, who art the author and giver of all good things; Graft in our hearts the love of thy Name, increase in us true religion, nourish us with all goodness, and of thy great mercy keep us in the same. Amen."
    },
    8: {
      text: "Grant us, we beseech thee, O Lord, the spirit to think and do always such things as are right; that we, who cannot do any thing that is good without thee, may by thee be enabled to live according to thy will. Amen."
    },
    9: {
      text: "Grant to us, Lord, we beseech thee, the spirit to think and do always such things as be rightful; that we, who cannot be without thee, may by thee be enabled to live after thy will. Amen."
    },
    10: {
      text: "Let thy merciful ears, O Lord, be open to the prayers of thy humble servants; and that they may obtain their petitions make them to ask such things as shall please thee. Amen."
    },
    11: {
      text: "O God, who declarest thy almighty power most chiefly in shewing mercy and pity; Mercifully grant unto us such a measure of thy grace, that we, running the way of thy commandments, may obtain thy gracious promises, and be made partakers of thy heavenly treasure. Amen."
    },
    12: {
      text: "Almighty and everlasting God, who art always more ready to hear than we to pray, and art wont to give more than either we desire or deserve; Pour down upon us the abundance of thy mercy; forgiving us those things whereof our conscience is afraid, and giving us those good things which we are not worthy to ask, but through the merits and mediation of Jesus Christ, thy Son, our Lord. Amen."
    },
    13: {
      text: "O God, righteous and merciful, grant unto us such confidence in thy power and love, that knowing thy will we may fearlessly do it, and for all our necessities may bring our requests before thee with the boldness of children; through Jesus Christ our Lord. Amen."
    },
    14: {
      text: "Almighty and most merciful God, of whose only gift it cometh that thy faithful people do unto thee true and laudable service; Grant, we beseech thee, that we may run without stumbling in the way of thy commandments. Amen."
    },
    15: {
      text: "Keep, we beseech thee, O Lord, thy Church with thy perpetual mercy; and, since the frailty of man without thee cannot but fall, keep us ever by thy help and goodness from all things hurtful, and lead us to all things profitable to our salvation. Amen."
    },
    16: {
      text: "O Lord, we beseech thee, let thy continual pity cleanse and defend thy Church; and, because it cannot continue in safety without thy succour, preserve it evermore by thy help and goodness. Amen."
    },
    17: {
      text: "Lord, we pray thee that thy grace may always precede and follow us, and make us continually to be given to all good works. Amen."
    },
    18: {
      text: "O God, whose nature and property is ever to have mercy and to forgive, receive our humble petitions; and though we be tied and bound by the chain of our sins, yet let the pitifulness of thy great mercy loose us. Amen."
    },
    19: {
      text: "O God, forasmuch as without thee we are not able to please thee; Grant that the working of thy mercy may in all things direct and rule our hearts. Amen."
    },
    20: {
      text: "Grant, we beseech thee, merciful Lord, to thy faithful people pardon and peace, that they may be cleansed from all their sins, and serve thee with a quiet mind. Amen."
    },
    21: {
      text: "Grant, we beseech thee, Almighty God, that like as we do believe thy only-begotten Son our Lord Jesus Christ to have ascended into the heavens; So we may also in heart and mind thither ascend, and with him continually dwell. Amen."
    },
    22: {
      text: "O God, who knowest us to be set in the midst of so many and great dangers, that by reason of the frailty of our nature we cannot always stand upright; Grant to us such strength and protection, as may support us in all dangers, and carry us through all temptations. Amen."
    },
    23: {
      text: "O Lord, we beseech thee, absolve thy people from their offences; that through thy bountiful goodness we may all be delivered from the bands of those sins, which by our frailty we have committed. Amen."
    },
    24: {
      text: "O Lord, we beseech thee, grant thy people grace to withstand the temptations of the world, the flesh, and the devil, and with pure hearts and minds to follow thee the only God. Amen."
    },
    25: {
      text: "Stir up, we beseech thee, O Lord, the wills of thy faithful people; that they, plenteously bringing forth the fruit of good works, may of thee be plenteously rewarded. Amen."
    },
    26: {
      text: "Almighty God, who hast built thy Church upon the foundation of the Apostles and Prophets, Jesus Christ himself being the head corner-stone; Grant us so to be joined together in unity of spirit by their doctrine, that we may be made an holy temple acceptable unto thee. Amen."
    }
  }
};

// Function to get the collect for today
function getTodaysCollect() {
  const now = new Date();
  const liturgicalInfo = getLiturgicalInfo(now);

  if (!liturgicalInfo) return null;

  // Parse the weekInfo to determine which collect to use
  const weekInfo = liturgicalInfo.weekInfo || "";
  const season = liturgicalInfo.season || "";

  // Check for special feast days first
  if (liturgicalInfo.saintDay) {
    // For saints' days without specific collects, use the general collect
    return getGeneralCollect(season);
  }

  // Parse the Sunday number from weekInfo
  // Examples: "the First Sunday after Epiphany", "the Second Sunday in Lent", "Ash Wednesday"

  if (weekInfo.includes("Advent")) {
    const match = weekInfo.match(/(\d+)/);
    const sundayNum = match ? parseInt(match[1]) : 1;
    return collects.advent[sundayNum]?.text || getGeneralCollect("advent");
  }

  if (weekInfo.includes("Christmas Day")) {
    return collects.christmastide.christmas.text;
  }

  if (weekInfo.includes("Epiphany")) {
    if (weekInfo.includes("the Epiphany")) {
      return collects.epiphany.epiphanyDay.text;
    }
    const match = weekInfo.match(/(\d+)/);
    const sundayNum = match ? parseInt(match[1]) : 1;
    return collects.epiphany[sundayNum]?.text || getGeneralCollect("epiphany");
  }

  if (weekInfo.includes("Lent")) {
    if (weekInfo.includes("Ash Wednesday")) {
      return collects.lent.ashWednesday.text;
    }
    const match = weekInfo.match(/(\d+)/);
    const sundayNum = match ? parseInt(match[1]) : 1;
    return collects.lent[sundayNum]?.text || getGeneralCollect("lent");
  }

  if (weekInfo.includes("Easter")) {
    if (weekInfo.includes("Easter Day")) {
      return collects.easter.easterDay.text;
    }
    const match = weekInfo.match(/(\d+)/);
    const sundayNum = match ? parseInt(match[1]) : 1;
    return collects.easter[sundayNum]?.text || getGeneralCollect("easter");
  }

  if (weekInfo.includes("Pentecost")) {
    return collects.pentecost.pentecost.text;
  }

  if (weekInfo.includes("Trinity")) {
    return collects.trinity.trinitySunday.text;
  }

  if (weekInfo.includes("after Trinity")) {
    const match = weekInfo.match(/(\d+)/);
    const sundayNum = match ? parseInt(match[1]) : 1;
    return collects.afterTrinity[sundayNum]?.text || getGeneralCollect("afterTrinity");
  }

  return getGeneralCollect(season);
}

// General collect fallback
function getGeneralCollect(season) {
  const generalCollects = {
    "Advent": "Almighty God, give us grace that we may cast away the works of darkness, and put upon us the armour of light. Amen.",
    "Christmastide": "O God, who makest us glad with the yearly remembrance of the birth of thine only Son. Amen.",
    "Epiphany": "O Lord, we beseech thee mercifully to receive the prayers of thy people. Amen.",
    "after Epiphany": "O Lord, we beseech thee mercifully to receive the prayers of thy people. Amen.",
    "Lent": "O Lord, who for our sake didst fast forty days in the wilderness. Amen.",
    "Eastertide": "O God, who for our redemption didst give thine only-begotten Son to die for our sins. Amen.",
    "Pentecost": "God, who didst teach the hearts of thy faithful people by the sending of the light of thy Holy Ghost. Amen.",
    "after Trinity": "O God, the strength of all those that put their trust in thee. Amen."
  };

  return generalCollects[season] || "Almighty God, who alone canst order the unruly wills and affections of sinful men. Amen.";
}

// Cache collects for performance
function cacheTodaysCollect() {
  const cacheKey = 'collect-cache-' + new Date().toDateString();
  const cached = localStorage.getItem(cacheKey);

  if (cached) {
    return JSON.parse(cached);
  }

  const collect = getTodaysCollect();
  localStorage.setItem(cacheKey, JSON.stringify(collect));
  return collect;
}
