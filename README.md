# PrexCommunis

A web app for praying the Daily Office from the Book of Common Prayer (1662/1962 Canadian).

## What it does

- Morning and Evening Prayer with the full traditional structure
- Psalms from the 30-day psalter cycle
- Scripture readings from the 1662 two-year lectionary (KJV text via bible-api.com)
- Collects selected by liturgical season
- Works offline, installable as a PWA

## Running it

Just open `index.html` in a browser. No build step, no dependencies.

For live hosting, push to GitHub Pages.

## Structure

```
js/
  app.js        - main logic, liturgical calendar, rendering
  psalms.js     - 30-day psalm cycle data
  lectionary.js - 1662 BCP lectionary
  collects.js   - seasonal collects
  sentences.js  - opening sentences
index.html
styles.css
service-worker.js
```

## Tech

Vanilla JS, plain CSS. No frameworks. Readings are cached in localStorage for 7 days.

## License

Liturgical content is public domain (BCP 1662, KJV). Code is BSD 3-Clause.
