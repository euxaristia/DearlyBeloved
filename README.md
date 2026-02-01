# Common Prayer

Reference the [Book of Common Prayer](https://www.churchofengland.org/prayer-and-worship/join-us-in-daily-prayer/morning-prayer-contemporary-tuesday-23-july-2024) (1662 International Edition) for the traditional texts used in this application.

[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
[![PWA](https://img.shields.io/badge/PWA-Ready-green)](#)
[![Tauri](https://img.shields.io/badge/Tauri-Linux-orange)](https://tauri.app)

A web-based and native Linux application for the Daily Office (Morning, Midday, Evening, Compline), based on the 1662 Book of Common Prayer.

## Features

- **Four Daily Offices**: Morning Prayer, Midday Prayer, Evening Prayer, and Compline.
- **Automatic Time-Based Selection**: The app automatically opens the appropriate office for the current time.
- **Liturgical Accuracy**: Full 30-day Psalm cycle, proper Collects, and Lectionary readings (KJV).
- **Native & PWA**: Works as a website, an installable PWA (iOS/Android), and a native Linux app (.deb/AppImage).
- **Beautiful Typography**: Traditional design using EB Garamond and Roboto.
- **Dark Mode**: Automatic theme switching based on system preference.

## Time Schedule

The app automatically selects the office:
- **Morning Prayer**: 4 AM - 11 AM
- **Midday Prayer**: 11 AM - 2 PM
- **Evening Prayer**: 2 PM - 8 PM
- **Compline**: 8 PM - 4 AM

*You can manually switch offices at any time via the sidebar.*

## Liturgical Content

Includes traditional texts:
- **Psalms**: Complete [Coverdale Psalter](https://en.wikipedia.org/wiki/Coverdale_Bible) mapped to the 30-day monthly cycle.
- **Lessons**: Daily Old and New Testament readings (KJV) via `bible-api.com`.
- **Canticles**: Te Deum, Benedictus, Magnificat, Nunc Dimittis.
- **Creeds**: Apostles' Creed and Lord's Prayer.
- **Collects**: Weekly compositions based on the liturgical year.

## Technology Stack (Modernized)

This project has been migrated from vanilla JavaScript to a modern stack:

- **Frontend**: React 19
- **Build Tool**: Vite
- **Native Wrapper**: Tauri (Rust) for Linux desktop support
- **PWA**: `vite-plugin-pwa` for offline capabilities
- **Styling**: Vanilla CSS with comprehensive dark mode support
- **State**: React Hooks (`useLiturgicalData`) for synchronous liturgical calculation

## Installation & Development

### Web / Local Development
1. **Clone**:
   ```bash
   git clone https://github.com/PrexCommunis/prexcommunis.github.io.git
   cd prexcommunis.github.io
   ```
2. **Install**:
   ```bash
   npm install
   ```
3. **Run**:
   ```bash
   npm run dev
   ```

### Native Linux Build
Pre-requisites: Rust, Cargo, and Linux dev libraries (`webkit2gtk`, etc.).

1. **Build App**:
   ```bash
   npm run tauri build
   ```
2. **Output**:
   - **Debian/Ubuntu**: `src-tauri/target/release/bundle/deb/*.deb`
   - **Fedora/RHEL**: `src-tauri/target/release/bundle/rpm/*.rpm`
   - **Arch/Other**: `src-tauri/target/release/bundle/appimage/*.AppImage`
     - *Note:* If AppImage creation fails on Arch (common), you can run the raw binary directly: `src-tauri/target/release/app`

### Troubleshooting Linux Issues
**White Screen / "Failed to create GBM buffer"**:
If the app launches with a white screen, try running it with disabled compositing:
```bash
WEBKIT_DISABLE_COMPOSITING_MODE=1 ./src-tauri/target/release/app
```
(This is a common WebKitGTK issue on certain GPU drivers/Wayland).

## Deployment

To deploy to GitHub Pages:

```bash
npm run deploy
```

*This builds the project to `/dist` and pushes it to the `gh-pages` branch.*

## Contributing

Contributions are welcome! Please submit issues or pull requests.

## License

This project is licensed under the BSD 3-Clause License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Based on the Book of Common Prayer (1662).
- Designed with reverence for the Anglican tradition.

---

**Original App Designed by [@euxaristia](https://github.com/euxaristia)**
**Refactored & Modernized with [Antigravity](https://gemini.google.com)**

Made in 🇨🇦 with ❤️ for 🇬🇧 🇺🇸 & 🌎
