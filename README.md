# 📜 PrexCommunis - BCP Daily Office

A web-based daily office application following the Book of Common Prayer (1662 BCP) with traditional Anglican structure.

## ✨ Features

- 🌅 **Morning and Evening Prayer** with complete service structure matching 1962 BCP Canadian format
- 📖 **Dynamic Psalms** using the 30-day psalter cycle
- 🗓️ **Daily Readings** from the 1662 BCP two-year lectionary with full KJV text
- ⛪ **Liturgical Collects** selected automatically by season and Sunday
- 📜 **Sentences of Scripture** varied for each service
- 📱 **Responsive Design** for desktop and mobile
- 🌙 **Dark Mode** support
- 📶 **Offline Support** with service worker caching
- 📲 **Progressive Web App** installable on devices

---

## ⚙️ Core Algorithms

### 1. Liturgical Calendar Determination

**Input:** Current date (month, day, year)

**Process:**

1. **Check Fixed Feasts First**
   - Dec 25 = Christmas Day
   - Jan 6 = The Epiphany
   - Other fixed feast days from saints calendar

2. **Calculate Easter (Computus Algorithm)**
   - Find ecclesiastical full moon: first full moon after March 21 (vernal equinox)
   - Easter = first Sunday after that full moon
   - Example: In 2026, Easter falls on April 5

3. **Derive Related Moveable Dates**
   - Advent Sunday = 4th Sunday before Christmas (earliest: Nov 27, latest: Dec 3)
   - Ash Wednesday = 46 days before Easter
   - Pentecost (Whitsunday) = 49 days after Easter
   - Trinity Sunday = 7 days after Pentecost

4. **Determine Liturgical Season**
   - **Advent** → Advent 1 to Dec 24
   - **Christmastide** → Dec 25 to Jan 5
   - **Epiphany** → Jan 6 to day before Baptism of Lord
   - **After Epiphany** → Baptism of Lord to Ash Wednesday - 1
   - **Lent** → Ash Wednesday to Easter - 1
   - **Eastertide** → Easter to Pentecost - 1
   - **Pentecost** → Pentecost to Trinity - 1
   - **After Trinity** → Trinity Sunday to Advent Sunday - 1

5. **Calculate Sunday Number Within Season**
   - Count Sundays from season start
   - Example: 2nd Sunday after Epiphany = 2 Sundays elapsed since Jan 6 or Baptism of Lord

**Output Example:** "The Second Sunday after Epiphany" or "Ash Wednesday" or "the Fifth Sunday in Lent"

**Liturgical Year 2026 Key Dates:**
- Advent begins: Nov 29, 2025
- Christmas: Dec 25, 2025
- Epiphany: Jan 6, 2026
- Easter: April 5, 2026
- Pentecost: May 24, 2026
- Trinity Sunday: May 31, 2026

**Source Code:** `app.js` → `getLiturgicalInfo()` function

---

### 2. Psalm Selection (30-Day Psalter Cycle)

**Input:** Current date (day of month: 1-31)

**Process:**

The 30-day cycle ensures all 150 Psalms are distributed across the month evenly, then repeats:

| Day | Morning Psalms | Evening Psalms |
|-----|----------------|-----------------|
| 1   | 1-5            | 6-8             |
| 2   | 9-11           | 12-14           |
| 3   | 15-17          | 18              |
| 4   | 19-21          | 22-24           |
| 5   | 25-27          | 28-30           |
| ... | ...            | ...             |
| 30  | 144-145        | 146-150         |
| 31  | 1-5 (repeats Day 1) | 6-8 (repeats Day 1) |

**Advantages:**
- Works consistently every month (no calendar confusion)
- Covers all Psalms regularly
- No need for moveable feast adjustments
- Common in Anglican tradition

**Output:** Array of psalm numbers (e.g., [1, 2, 3, 4, 5]) with Latin titles and full Coverdale text

**Source Code:** `psalms.js` → `getTodaysPsalms()` function

---

### 3. Scripture Readings Selection

**Input:**
- Current date (month, day)
- Office type (morning or evening)

**Process:**

1. **Determine Day of Year** using month and day
2. **Index into lectionary data** (1662 BCP two-year cycle)
3. **Retrieve two lessons for the day:**
   - **First Lesson:** Usually Old Testament or Apocrypha
   - **Second Lesson:** Usually New Testament or Gospel
   - Each day, each office has unique readings

**Example Mapping:**
```javascript
lectionary[1][23] = {  // January 23
  morning: {
    first: "Genesis 32:22-32",
    second: "Matthew 13:24-53"
  },
  evening: {
    first: "Genesis 33",
    second: "Acts 14"
  }
}
```

**Reading Presentation:**
- Formatted as: "The First Lesson is written in the Book of Genesis, in the 32nd chapter, beginning at the 22nd verse."
- Full text fetched from **bible-api.com** in KJV
- Cached in browser's localStorage to minimize API calls (caches for 7 days)
- Each lesson includes:
  - Lesson title ("The First Lesson")
  - Intro formula with exact reference
  - Full scripture text
  - Closing: "Here endeth the First [or Second] Lesson."

**Lectionary Cycle:** 1662 BCP two-year cycle (repeats annually on Dec 31 → Jan 1)

**Output:**
- First lesson: { reference: "Genesis 32:22-32", verses: [full KJV text] }
- Second lesson: { reference: "Matthew 13:24-53", verses: [full KJV text] }

**Source Code:**
- Data: `lectionary.js`
- Fetching: `app.js` → `loadReadings()` function
- Display: `app.js` → `buildLessonHtml()` and `injectReadings()` functions

---

### 4. Collect Selection (Prayer of the Day)

**Input:** Liturgical season (from Algorithm 1) and Sunday number

**Process:**

1. **Parse the season string** to extract:
   - Season name (e.g., "after Epiphany", "Lent")
   - Sunday number (e.g., "2" for "the Second Sunday in Lent")

2. **Select from collects database** organized by season:

| Season | Sundays | Collects Available |
|--------|---------|-------------------|
| Advent | 1-4     | 4 unique collects  |
| Christmastide | - | Christmas + Sundays |
| Epiphany | - | Epiphany proper + 6 after |
| After Epiphany | 1-6+ | Up to 6 collects |
| Lent | Ash Wed + 1-5 | Ash Wednesday + 5 |
| Easter | 1-6 | 6 collects |
| Pentecost | - | 1 collect |
| Trinity | - | Trinity proper |
| After Trinity | 1-26 | 26 unique collects |

3. **Special Cases:**
   - Saints' days use a general collect for that season
   - Fixed feasts have their own collects
   - Moveable feasts follow season precedence

**Example:**
- Today = Jan 23, 2026 (second Saturday after Epiphany proper, Jan 6)
- Season = "after Epiphany", Sunday number = 2
- Collect = Collects["epiphany"][2] = "O Lord, we beseech thee mercifully to receive the prayers of thy people..."

**Presentation:**
- Labeled "The Collect of the Day"
- Full traditional BCP text
- Followed by "The Second Collect, for Peace"
- Then optional "The Third Collect, for Grace" (in morning prayer)

**Output:** Full text of appropriate collect(s)

**Source Code:** `collects.js` → `getTodaysCollect()` function

---

### 5. Opening Sentences of Scripture

**Input:** Office type (morning or evening)

**Process:**

1. **Maintain separate collections** of 10 traditional sentences each
2. **On each load**, randomly select one using `Math.random()`
3. **Display with Biblical citation**

**Morning Prayer Sentences (10):**
- Hebrews 12:1-2 (looking to Jesus, author of faith)
- Ephesians 5:14 (Awake and arise from dead)
- Isaiah 55:6 (Seek the Lord while near)
- Habakkuk 2:20 (Lord in holy temple, silence)
- Psalm 43:3 (Send out thy light and truth)
- John 4:24 (Worship in spirit and truth)
- Psalm 122:1 (Glad when going to house of Lord)
- 1 Corinthians 1:3 (Grace and peace)
- Psalm 84:4 (Blessed who dwell in thy house)
- John 10:1-2 (Shepherd of sheep enters by door)

**Evening Prayer Sentences (10):**
- Phos Hilaron (ancient hymn to light)
- Mark 16:15 (Go and preach gospel)
- Matthew 22:37-39 (Love God and neighbor)
- John 13:35 (Love one another - identifying mark)
- Psalm 95:6 (Come adore him)
- Psalm 19:1 (Heavens declare glory)
- Psalm 141:2 (Prayer like incense)
- Liturgical blessing (Evening blessing formula)
- Collect for Peace formula
- 2 Corinthians 6:2 (Now is day of salvation)

**Output:** Random sentence + citation displayed each time office loads

**Purpose:** Liturgical variety while maintaining appropriate tone for each service

**Source Code:** `sentences.js` → `getRandomSentence()` function

---

## 📊 Data Sources & Licensing

| Component | Source | License | Status |
|-----------|--------|---------|--------|
| **Lectionary Data** | 1662 BCP (GitHub: spagosx/1662-BCP-Lectionary) | Public Domain | ✅ Active |
| **30-Day Psalm Cycle** | Traditional Anglican practice | Public Domain | ✅ Verified |
| **BCP Collects** | 1662/1928 BCP texts | Public Domain | ✅ Complete |
| **KJV Bible Text** | bible-api.com (1611 KJV) | Public Domain | ✅ Cached |
| **Sentences of Scripture** | 1662/1962 BCP tradition | Public Domain | ✅ Complete |

**All content is in the public domain** → No copyright restrictions

---

## ✅ Verification Checklist for Rector

Please verify the algorithms against your theological knowledge:

### Liturgical Calendar
- [ ] Easter calculation correct for your region?
- [ ] Advent Sunday calculation (4 Sundays before Christmas) correct?
- [ ] All major moveable dates (Pentecost, Trinity) computed correctly?
- [ ] Season boundaries transition at correct times?
- [ ] Sunday numbering within seasons accurate?

### Psalms
- [ ] 30-day cycle is theologically appropriate?
- [ ] All 150 psalms included across month?
- [ ] Morning/evening psalm selections suitable?
- [ ] Latin titles match traditional psalm names?

### Lectionary
- [ ] 1662 BCP two-year cycle correct for your tradition?
- [ ] First lessons (OT) and Second lessons (NT) properly paired?
- [ ] Reading selections appropriate for each Sunday?
- [ ] Any corrections needed for your local practice?

### Collects
- [ ] Each Sunday has appropriate collect?
- [ ] Collect text matches official BCP version?
- [ ] Season-based collect selection logical?
- [ ] Saints' days handled appropriately?

### General
- [ ] Service structure matches BCP rubrics?
- [ ] Opening sentences suitable and varied?
- [ ] Lesson formula wording correct ("Here endeth the First Lesson")?
- [ ] Overall flow and presentation reverent?

---

## 🛠️ Technical Stack

- **Frontend:** Vanilla JavaScript (no frameworks, ES6+)
- **Styling:** Pure CSS3 with CSS Grid and Flexbox
- **Data Structures:** JSON objects for all liturgical data
- **Caching:** localStorage for readings, psalms, collects (7-day TTL)
- **API:** bible-api.com for KJV Bible text
- **PWA:** Service worker for offline functionality
- **Fonts:** EB Garamond (serif), Roboto (sans-serif)

---

## 📁 File Structure

```
PrexCommunis/
├── index.html          # Main HTML structure and layout
├── styles.css          # All styling (responsive, dark mode)
├── app.js              # Core application logic
│                       #  - Liturgical calendar (getLiturgicalInfo)
│                       #  - Rendering (renderPrayer, injectPsalms, etc.)
│                       #  - Dark mode, PWA, notifications
├── sentences.js        # Sentences of Scripture for openings
├── psalms.js           # 30-day psalm cycle data and functions
├── lectionary.js       # 1662 BCP lectionary data and parsing
├── collects.js         # Seasonal collects and selection logic
├── manifest.json       # PWA manifest for installation
└── README.md          # This file
```

---

## 🚀 Installation & Usage

### Local Use
1. Clone: `git clone https://github.com/euxaristia/PrexCommunis.git`
2. Open `index.html` in any modern browser
3. No build step or dependencies required

### Deployment
- Push to GitHub Pages for live hosting
- Works offline after first load (PWA)
- Install as app on iOS/Android

---

## 📝 Development Notes

**Extending the Lectionary:**
- Edit `lectionary.js` to modify readings for any day
- Format: `lectionary[month][day] = { morning: { first: "...", second: "..." }, evening: { ... } }`

**Adjusting Psalm Cycle:**
- Edit `psalms.js` `psalmCycle` object
- Map day-of-month to morning/evening psalm arrays

**Modifying Collects:**
- Edit `collects.js` organized by season
- Add new Sunday numbers as needed

**Adding Sentences:**
- Edit `sentences.js` - add to `sentencesOfScripture.morning` or `.evening` arrays

---

## Questions for Rector Review

1. Does the Easter calculation produce correct results for past and future years?
2. Is the 30-day psalm cycle aligned with current Anglican practice in your tradition?
3. Should any readings be adjusted for your local observance?
4. Are there additional saints' days or local feasts to include?
5. Is the overall service structure and presentation appropriate?

---

## ⚖️ License

- **Liturgical Content:** Public domain (BCP 1662, KJV, traditional texts)
- **Custom Code:** BSD 3-Clause License
- **No copyright restrictions on any content**

---

**App Designed by [@euxaristia](https://github.com/euxaristia)**
