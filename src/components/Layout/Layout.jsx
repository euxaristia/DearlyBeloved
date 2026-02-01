import React from 'react';
import { useApp } from '../../contexts/AppContext';
import Sidebar from './Sidebar';
import HeaderControls from './HeaderControls';
import ThemeToggle from '../Controls/ThemeToggle';
import './Layout.css';

export default function Layout({ children }) {
    const { isSidebarOpen } = useApp();

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
                    </header>

                    <main>
                        {children}
                    </main>

                    <footer>
                        <p>
                            Based on the Book of Common Prayer | App designed by{' '}
                            <a href="https://github.com/euxaristia" target="_blank" rel="noopener noreferrer">@euxaristia</a>
                        </p>
                    </footer>
                </div>
            </div>
        </>
    );
}
