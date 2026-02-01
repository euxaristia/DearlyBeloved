// 30-Day Psalm Cycle for the Book of Common Prayer
// The Psalter is read through once each month at Morning and Evening Prayer

const psalmCycle = {
  1:  { morning: [1, 2, 3, 4, 5],       evening: [6, 7, 8] },
  2:  { morning: [9, 10, 11],           evening: [12, 13, 14] },
  3:  { morning: [15, 16, 17],          evening: [18] },
  4:  { morning: [19, 20, 21],          evening: [22, 23] },
  5:  { morning: [24, 25, 26],          evening: [27, 28, 29] },
  6:  { morning: [30, 31],              evening: [32, 33, 34] },
  7:  { morning: [35, 36],              evening: [37] },
  8:  { morning: [38, 39, 40],          evening: [41, 42, 43] },
  9:  { morning: [44, 45, 46],          evening: [47, 48, 49] },
  10: { morning: [50, 51, 52],          evening: [53, 54, 55] },
  11: { morning: [56, 57, 58],          evening: [59, 60, 61] },
  12: { morning: [62, 63, 64],          evening: [65, 66, 67] },
  13: { morning: [68],                  evening: [69, 70] },
  14: { morning: [71, 72],              evening: [73, 74] },
  15: { morning: [75, 76, 77],          evening: [78] },
  16: { morning: [79, 80, 81],          evening: [82, 83, 84, 85] },
  17: { morning: [86, 87, 88],          evening: [89] },
  18: { morning: [90, 91, 92],          evening: [93, 94] },
  19: { morning: [95, 96, 97],          evening: [98, 99, 100, 101] },
  20: { morning: [102, 103],            evening: [104] },
  21: { morning: [105],                 evening: [106] },
  22: { morning: [107],                 evening: [108, 109] },
  23: { morning: [110, 111, 112, 113],  evening: [114, 115] },
  24: { morning: [116, 117, 118],       evening: [119, 1, 32] }, // Ps 119:1-32
  25: { morning: [119, 33, 72],         evening: [119, 73, 104] }, // Ps 119:33-72, 119:73-104
  26: { morning: [119, 105, 144],       evening: [119, 145, 176] }, // Ps 119:105-144, 119:145-176
  27: { morning: [120, 121, 122, 123, 124, 125], evening: [126, 127, 128, 129, 130, 131] },
  28: { morning: [132, 133, 134, 135],  evening: [136, 137, 138] },
  29: { morning: [139, 140, 141],       evening: [142, 143] },
  30: { morning: [144, 145, 146],       evening: [147, 148, 149, 150] }
};

// Special handling for Psalm 119 sections
const psalm119Sections = {
  1: { start: 1, end: 32 },
  33: { start: 33, end: 72 },
  73: { start: 73, end: 104 },
  105: { start: 105, end: 144 },
  145: { start: 145, end: 176 }
};

// Get psalms for today's office
function getTodaysPsalms(office) {
  const dayOfMonth = new Date().getDate();
  // Day 31 uses day 30's psalms
  const cycleDay = dayOfMonth > 30 ? 30 : dayOfMonth;

  if (psalmCycle[cycleDay] && psalmCycle[cycleDay][office]) {
    return psalmCycle[cycleDay][office];
  }
  return null;
}

// Format psalm reference for API call
function formatPsalmReference(psalmNum, startVerse, endVerse) {
  if (startVerse && endVerse) {
    return `Psalm ${psalmNum}:${startVerse}-${endVerse}`;
  }
  return `Psalm ${psalmNum}`;
}

// Get psalm references formatted for display and fetching
function getPsalmReferences(office) {
  const psalms = getTodaysPsalms(office);
  if (!psalms) return [];

  const references = [];

  for (let i = 0; i < psalms.length; i++) {
    const psalmNum = psalms[i];

    // Check if this is Psalm 119 with section markers
    if (psalmNum === 119 && i + 2 < psalms.length) {
      const startVerse = psalms[i + 1];
      const endVerse = psalms[i + 2];
      references.push({
        number: 119,
        reference: formatPsalmReference(119, startVerse, endVerse),
        apiRef: `Psalm 119:${startVerse}-${endVerse}`,
        title: `Psalm 119:${startVerse}-${endVerse}`
      });
      i += 2; // Skip the verse markers
    } else if (psalmNum !== 119 || i === 0 || psalms[i - 1] !== 119) {
      // Regular psalm (not a verse marker for 119)
      references.push({
        number: psalmNum,
        reference: formatPsalmReference(psalmNum),
        apiRef: `Psalm ${psalmNum}`,
        title: `Psalm ${psalmNum}`
      });
    }
  }

  return references;
}

// Get Latin title for psalm (traditional BCP style)
const psalmLatinTitles = {
  1: "Beatus vir",
  2: "Quare fremuerunt gentes?",
  3: "Domine, quid multiplicati?",
  4: "Cum invocarem",
  5: "Verba mea auribus",
  6: "Domine, ne in furore",
  7: "Domine Deus meus",
  8: "Domine, Dominus noster",
  9: "Confitebor tibi",
  10: "Ut quid, Domine?",
  11: "In Domino confido",
  12: "Salvum me fac",
  13: "Usquequo, Domine?",
  14: "Dixit insipiens",
  15: "Domine, quis habitabit?",
  16: "Conserva me, Domine",
  17: "Exaudi, Domine",
  18: "Diligam te, Domine",
  19: "Caeli enarrant",
  20: "Exaudiat te Dominus",
  21: "Domine, in virtute tua",
  22: "Deus, Deus meus",
  23: "Dominus regit me",
  24: "Domini est terra",
  25: "Ad te, Domine, levavi",
  26: "Judica me, Domine",
  27: "Dominus illuminatio",
  28: "Ad te, Domine",
  29: "Afferte Domino",
  30: "Exaltabo te, Domine",
  31: "In te, Domine, speravi",
  32: "Beati quorum",
  33: "Exultate, justi",
  34: "Benedicam Dominum",
  35: "Judica, Domine",
  36: "Dixit injustus",
  37: "Noli aemulari",
  38: "Domine, ne in furore",
  39: "Dixi, Custodiam",
  40: "Expectans expectavi",
  41: "Beatus qui intelligit",
  42: "Quemadmodum",
  43: "Judica me, Deus",
  44: "Deus, auribus nostris",
  45: "Eructavit cor meum",
  46: "Deus noster refugium",
  47: "Omnes gentes, plaudite",
  48: "Magnus Dominus",
  49: "Audite haec, omnes",
  50: "Deus deorum",
  51: "Miserere mei, Deus",
  52: "Quid gloriaris?",
  53: "Dixit insipiens",
  54: "Deus, in nomine tuo",
  55: "Exaudi, Deus",
  56: "Miserere mei, Deus",
  57: "Miserere mei, Deus",
  58: "Si vere utique",
  59: "Eripe me de inimicis",
  60: "Deus, repulisti nos",
  61: "Exaudi, Deus",
  62: "Nonne Deo?",
  63: "Deus, Deus meus",
  64: "Exaudi, Deus",
  65: "Te decet hymnus",
  66: "Jubilate Deo",
  67: "Deus misereatur",
  68: "Exsurgat Deus",
  69: "Salvum me fac",
  70: "Deus, in adjutorium",
  71: "In te, Domine, speravi",
  72: "Deus, judicium tuum",
  73: "Quam bonus Israel!",
  74: "Ut quid, Deus?",
  75: "Confitebimur tibi",
  76: "Notus in Judaea",
  77: "Voce mea ad Dominum",
  78: "Attendite, popule",
  79: "Deus, venerunt",
  80: "Qui regis Israel",
  81: "Exultate Deo",
  82: "Deus stetit",
  83: "Deus, quis similis?",
  84: "Quam dilecta!",
  85: "Benedixisti, Domine",
  86: "Inclina, Domine",
  87: "Fundamenta ejus",
  88: "Domine, Deus salutis",
  89: "Misericordias Domini",
  90: "Domine, refugium",
  91: "Qui habitat",
  92: "Bonum est confiteri",
  93: "Dominus regnavit",
  94: "Deus ultionum",
  95: "Venite, exultemus",
  96: "Cantate Domino",
  97: "Dominus regnavit",
  98: "Cantate Domino",
  99: "Dominus regnavit",
  100: "Jubilate Deo",
  101: "Misericordiam et judicium",
  102: "Domine, exaudi",
  103: "Benedic, anima mea",
  104: "Benedic, anima mea",
  105: "Confitemini Domino",
  106: "Confitemini Domino",
  107: "Confitemini Domino",
  108: "Paratum cor meum",
  109: "Deus laudis",
  110: "Dixit Dominus",
  111: "Confitebor tibi",
  112: "Beatus vir",
  113: "Laudate, pueri",
  114: "In exitu Israel",
  115: "Non nobis, Domine",
  116: "Dilexi, quoniam",
  117: "Laudate Dominum",
  118: "Confitemini Domino",
  119: "Beati immaculati",
  120: "Ad Dominum",
  121: "Levavi oculos",
  122: "Laetatus sum",
  123: "Ad te levavi oculos",
  124: "Nisi quia Dominus",
  125: "Qui confidunt",
  126: "In convertendo",
  127: "Nisi Dominus",
  128: "Beati omnes",
  129: "Saepe expugnaverunt",
  130: "De profundis",
  131: "Domine, non est",
  132: "Memento, Domine",
  133: "Ecce, quam bonum!",
  134: "Ecce nunc",
  135: "Laudate nomen",
  136: "Confitemini",
  137: "Super flumina",
  138: "Confitebor tibi",
  139: "Domine, probasti",
  140: "Eripe me, Domine",
  141: "Domine, clamavi",
  142: "Voce mea ad Dominum",
  143: "Domine, exaudi",
  144: "Benedictus Dominus",
  145: "Exaltabo te, Deus",
  146: "Lauda, anima mea",
  147: "Laudate Dominum",
  148: "Laudate Dominum",
  149: "Cantate Domino",
  150: "Laudate Dominum"
};

function getPsalmLatinTitle(psalmNum) {
  return psalmLatinTitles[psalmNum] || "";
}
