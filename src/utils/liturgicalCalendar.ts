import { LiturgicalInfo } from '../types';

// Liturgical Calendar Logic
// Ported from legacy app.js

const saintsCalendar: Record<string, string> = {
    "1-1": "The Circumcision of Christ",
    "1-6": "The Epiphany of our Lord Jesus Christ",
    "1-18": "The Confession of Saint Peter the Apostle",
    "1-19": "Henry, Missionary, Bishop in Finland, 1150",
    "1-25": "The Conversion of Saint Paul the Apostle",
    "2-2": "The Presentation of Christ in the Temple",
    "2-14": "Saint Valentine, Martyr at Rome, c. 269",
    "2-24": "Saint Matthias the Apostle",
    "3-19": "Saint Joseph, Spouse of the Blessed Virgin Mary",
    "3-25": "The Annunciation of the Blessed Virgin Mary",
    "4-25": "Saint Mark the Evangelist",
    "5-1": "Saint Philip and Saint James, Apostles",
    "5-31": "The Visitation of the Blessed Virgin Mary",
    "6-11": "Saint Barnabas the Apostle",
    "6-24": "The Nativity of Saint John the Baptist",
    "6-29": "Saint Peter and Saint Paul, Apostles",
    "7-22": "Saint Mary Magdalene",
    "7-25": "Saint James the Apostle",
    "8-6": "The Transfiguration of Our Lord Jesus Christ",
    "8-15": "Saint Mary the Virgin, Mother of Our Lord Jesus Christ",
    "8-24": "Saint Bartholomew the Apostle",
    "9-14": "Holy Cross Day",
    "9-21": "Saint Matthew, Apostle and Evangelist",
    "9-29": "Saint Michael and All Angels",
    "10-18": "Saint Luke the Evangelist",
    "10-28": "Saint Simon and Saint Jude, Apostles",
    "11-1": "All Saints' Day",
    "11-2": "All Souls' Day",
    "11-30": "Saint Andrew the Apostle",
    "12-21": "Saint Thomas the Apostle",
    "12-25": "The Nativity of Our Lord Jesus Christ",
    "12-26": "Saint Stephen, Deacon and Martyr",
    "12-27": "Saint John, Apostle and Evangelist",
    "12-28": "The Holy Innocents"
};

// Calculate Easter Sunday using Computus algorithm
function calculateEaster(year: number): Date {
    const a = year % 19;
    const b = Math.floor(year / 100);
    const c = year % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const month = Math.floor((h + l - 7 * m + 114) / 31);
    const day = ((h + l - 7 * m + 114) % 31) + 1;
    return new Date(year, month - 1, day);
}

// Get days between two dates
function daysBetween(date1: Date, date2: Date): number {
    const oneDay = 24 * 60 * 60 * 1000;
    return Math.floor((date2.getTime() - date1.getTime()) / oneDay);
}

// Get the Sunday reference based on current day
function getSundayReference(date: Date, sundayName: string): string {
    const dayOfWeek = date.getDay();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    if (dayOfWeek === 0) {
        return sundayName;
    } else {
        // Logic: "Monday after The First Sunday..."
        return `${daysOfWeek[dayOfWeek]} after ${sundayName}`;
    }
}

// Get Sunday number in a season
function getSundayNumber(seasonStart: Date, currentDate: Date, seasonEnd: Date): number {
    let sundayCount = 0;
    let checkDate = new Date(seasonStart);

    // Find first Sunday
    while (checkDate.getDay() !== 0) {
        checkDate.setDate(checkDate.getDate() + 1);
    }

    // Count Sundays until current date
    while (checkDate <= currentDate && checkDate < seasonEnd) {
        if (checkDate <= currentDate) {
            sundayCount++;
        }
        checkDate.setDate(checkDate.getDate() + 7);
    }

    return sundayCount;
}



// Get first Sunday of Advent
function getAdventStart(year: number): Date {
    const christmas = new Date(year, 11, 25);
    const daysUntilSunday = christmas.getDay() === 0 ? 7 : christmas.getDay();
    const advent4 = new Date(christmas);
    advent4.setDate(christmas.getDate() - daysUntilSunday);
    const advent1 = new Date(advent4);
    advent1.setDate(advent4.getDate() - 21);
    return advent1;
}

// Get Baptism of the Lord (first Sunday after January 6)
function getBaptismOfLord(year: number): Date {
    const epiphany = new Date(year, 0, 6);
    const baptism = new Date(epiphany);

    // Find next Sunday after Epiphany
    const daysUntilSunday = epiphany.getDay() === 0 ? 7 : (7 - epiphany.getDay());
    baptism.setDate(epiphany.getDate() + daysUntilSunday);

    return baptism;
}

// Get ordinal number string
function getOrdinal(num: number): string {
    const ordinals = ["", "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth",
        "Eleventh", "Twelfth", "Thirteenth", "Fourteenth", "Fifteenth", "Sixteenth", "Seventeenth",
        "Eighteenth", "Nineteenth", "Twentieth", "Twenty-first", "Twenty-second", "Twenty-third", "Twenty-fourth"];
    return ordinals[num] || `${num}th`;
}

// Get liturgical season information
export function getLiturgicalInfo(date: Date): LiturgicalInfo {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    // Check for fixed feast days first
    const dateKey = `${month}-${day}`;
    const saintDay = saintsCalendar[dateKey];

    // Calculate Easter and related dates
    const easter = calculateEaster(year);
    const ashWednesday = new Date(easter);
    ashWednesday.setDate(easter.getDate() - 46);
    const pentecost = new Date(easter);
    pentecost.setDate(easter.getDate() + 49);
    const adventStart = getAdventStart(year);
    const christmasDay = new Date(year, 11, 25);
    const epiphany = new Date(year, 0, 6);
    const baptismOfLord = getBaptismOfLord(year);
    const trinitySunday = new Date(pentecost);
    trinitySunday.setDate(pentecost.getDate() + 7);

    const septuagesima = new Date(easter);
    septuagesima.setDate(easter.getDate() - 63);

    let season = "";
    let weekInfo = "";

    // Determine liturgical season
    if (date >= adventStart && date < christmasDay) {
        season = "Advent";
        const sundaysBefore = Math.floor(daysBetween(adventStart, date) / 7);
        const adventWeek = Math.min(sundaysBefore + 1, 4);
        weekInfo = getSundayReference(date, `the ${getOrdinal(adventWeek)} Sunday of Advent`);
    } else if (date >= christmasDay && date < epiphany) {
        season = "Christmastide";
        if (month === 12 && day === 25) {
            weekInfo = "Christmas Day";
        } else {
            weekInfo = getSundayReference(date, "Christmas Day");
        }
    } else if (date >= epiphany && date < septuagesima) {
        season = "Epiphany";
        if (date >= baptismOfLord) {
            season = "after Epiphany";
            const currentSunday = getSundayNumber(baptismOfLord, date, septuagesima);
            if (currentSunday > 0) {
                weekInfo = getSundayReference(date, `the ${getOrdinal(currentSunday)} Sunday after Epiphany`);
            } else {
                weekInfo = getSundayReference(date, "the Baptism of Our Lord");
            }
        } else {
            weekInfo = getSundayReference(date, "the Epiphany");
        }
    } else if (date >= septuagesima && date < ashWednesday) {
        season = "Pre-Lent";
        const daysFromSept = daysBetween(septuagesima, date);
        const weeksFromSept = Math.floor(daysFromSept / 7);

        if (weeksFromSept === 0) {
            weekInfo = getSundayReference(date, "Septuagesima Sunday");
        } else if (weeksFromSept === 1) {
            weekInfo = getSundayReference(date, "Sexagesima Sunday");
        } else {
            weekInfo = getSundayReference(date, "Quinquagesima Sunday");
        }
    } else if (date >= ashWednesday && date < easter) {
        season = "Lent";
        if (daysBetween(ashWednesday, date) === 0) {
            weekInfo = "Ash Wednesday";
        } else {
            const sundaysBefore = getSundayNumber(ashWednesday, date, easter);
            if (sundaysBefore === 0) {
                weekInfo = getSundayReference(date, "Ash Wednesday");
            } else {
                weekInfo = getSundayReference(date, `the ${getOrdinal(sundaysBefore)} Sunday in Lent`);
            }
        }
    } else if (date >= easter && date < pentecost) {
        season = "Eastertide";
        if (daysBetween(easter, date) === 0) {
            weekInfo = "Easter Day";
        } else {
            const sundaysBefore = Math.floor(daysBetween(easter, date) / 7);
            weekInfo = getSundayReference(date, `the ${getOrdinal(sundaysBefore + 1)} Sunday of Easter`);
        }
    } else if (date >= pentecost && date < trinitySunday) {
        season = "Pentecost";
        weekInfo = "Pentecost";
    } else if (date >= trinitySunday) {
        season = "after Trinity";
        // Check if we're past this year's Advent
        if (date < getAdventStart(year)) {
            const sundayNumber = getSundayNumber(trinitySunday, date, getAdventStart(year));
            weekInfo = getSundayReference(date, `the ${getOrdinal(sundayNumber)} Sunday after Trinity`);
        } else {
            // We're in next year's Advent season (unlikely in this block logic order unless adventStart logic loop)
            // Actually the first IF block handles ADVENT of CURRENT YEAR.
            // But if date >= AdventStart, it was caught by first block?
            // Wait. date (timestamp) increases.
            // If date is Dec 1st, 2024. AdventStart is Dec 1st, 2024.
            // First IF: `date >= adventStart` (True).
            // So this ELSE IF (date >= trinitySunday) will handle dates between Trinity and AdventStart.
            // The inner logic `if (date < getAdventStart(year))` is redundant but safe.
            // But what if we are in next calendar year before Epiphany? (Jan 1-5).
            // Date: Jan 2, 2025.
            // AdventStart(2025) is late 2025.
            // ChristmasDay(2025) is Dec 25.
            // Jan 2 is NOT >= AdventStart(2025).
            // It falls through.
            // Jan 2 is >= ChristmasDay(2025)? No.
            // ...
            // Wait. `adventStart` is `getAdventStart(year)`.
            // If today is Jan 2, 2025. `year` is 2025.
            // `adventStart` is Nov/Dec 2025.
            // `date >= adventStart` is False.
            // `christmasDay` is Dec 25, 2025. False.
            // `epiphany` is Jan 6, 2025.
            // `date < epiphany` (Jan 2 < Jan 6). True.
            // But the logic for Christmastide (Lines 1166-1172 in app.js): `date >= christmasDay && date < epiphany`.
            // `christmasDay` is Dec 25, 2025. Jan 2 is NOT >= Dec 25, 2025.
            // The logic in `getLiturgicalInfo` uses `const christmasDay = new Date(year, 11, 25)`.
            // If we are in Jan 2025, we need `christmasDay` of **2024** to correspond to the season.

            // FIXING THE LOGIC:
            // The legacy code might have had a bug or assumed `year` context.
            // Let's look at `getLiturgicalInfo` in legacy `app.js`.
            // It sets `year = date.getFullYear()`.
            // If I am in Jan, I need to check previous year's Christmas?
            // Or maybe the logic was simple:
            // If date is Jan 1...5:
            // None of the IFs match?
            // `trinitySunday` is ~May/June. `date >= trinitySunday` (Jan >= May) False.
            // So Jan 1-5 returns empty season?

            // Let's re-read the legacy code carefully.
            // `const christmasDay = new Date(year, 11, 25);`
            // `const epiphany = new Date(year, 0, 6);`
            // `date >= christmasDay` (Jan >= Dec) -> False.
            // `date < epiphany` (Jan < Jan 6) -> True.
            // But it's `&&`. So False.

            // This means Jan 1-5 was broken in legacy code? Or I copied it wrong?
            // Let's check `app.js` again.
            // Line 1166: `date >= christmasDay && date < epiphany`.
            // Yes. It seems Jan 1-5 would fall through everything.
            // UNLESS `calculateEaster` or something affects it?

            // Maybe I should add a check:
            // If month is Jan and day < 6: we are in Christmastide (of previous year).
            // `season = "Christmastide"`.

            // I will add this fix to my port.
        }
    }

    // FIX for Jan 1-5 (Christmastide continues until Epiphany)
    if (month === 1 && day < 6) {
        season = "Christmastide";
        weekInfo = getSundayReference(date, "Christmas Day"); // Reference to last year's Christmas
    }

    return { season, weekInfo, saintDay };
}

// Get the appropriate office for the current time
export function getOfficeForTime(date: Date = new Date()): 'morning' | 'midday' | 'evening' | 'compline' {
    const hour = date.getHours();

    // Mapping based on typical monastic/Anglican schedule:
    // Morning Prayer (Matins/Lauds): 4am - 10am
    // Midday Prayer (Sext/None): 10am - 4pm
    // Evening Prayer (Vespers): 4pm - 8pm
    // Compline: 8pm - 4am

    if (hour >= 4 && hour < 11) {
        return 'morning';
    } else if (hour >= 11 && hour < 16) {
        return 'midday';
    } else if (hour >= 16 && hour < 20) {
        return 'evening';
    } else {
        return 'compline';
    }
}
