import React from 'react';
import { useApp } from '../../contexts/AppContext';
import Sidebar from './Sidebar';
import HeaderControls from './HeaderControls';
import ThemeToggle from '../Controls/ThemeToggle';
import './Layout.css';

export default function Layout({ children }) {
    const { isSidebarOpen, currentOffice } = useApp();

    const titles = {
        morning: 'Morning Prayer',
        midday: 'Midday Prayer',
        evening: 'Evening Prayer',
        compline: 'Compline',
        lectionary: 'Lectionary'
    };

    React.useEffect(() => {
        document.title = titles[currentOffice] || 'Common Prayer';
    }, [currentOffice]);

    return (
        <>
            <Sidebar />
            <HeaderControls />
            <ThemeToggle />

            <div className={`layout-wrapper ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                <div className="app-container">
                    <header>
                        <h1>Common Prayer</h1>
                        <p className="subtitle">The Daily Office</p>
                        <h2 className="office-title-display">{titles[currentOffice]}</h2>
                    </header>

                    <main>
                        {children}
                    </main>

                    <footer>
                        <p>
                            Based on the Book of Common Prayer | App designed by{' '}
                            <a href="https://github.com/euxaristia" target="_blank" rel="noopener noreferrer">@euxaristia</a>
                            <br />
                            Made in 🇨🇦 with ❤️ for 🇬🇧 🇺🇸 & 🌎
                        </p>
                    </footer>
                </div>
            </div>
        </>
    );
}
