import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';
import './ThemeToggle.css';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useApp();

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
    );
}
