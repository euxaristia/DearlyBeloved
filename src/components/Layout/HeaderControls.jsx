import React, { useState, useEffect } from 'react';
import { Menu, Clock } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';
import { getOfficeForTime } from '../../utils/liturgicalCalendar';
import './HeaderControls.css';

const officeIcons = {
    morning: '🌅',
    midday: '☀️',
    evening: '🕯️',
    compline: '🌙'
};

const officeLabels = {
    morning: 'Morning Prayer',
    midday: 'Midday Prayer',
    evening: 'Evening Prayer',
    compline: 'Compline'
};

export default function HeaderControls() {
    const { isSidebarOpen, toggleSidebar, currentOffice, setCurrentOffice } = useApp();
    const [timelyOffice, setTimelyOffice] = useState(getOfficeForTime());

    useEffect(() => {
        // Update timely office every minute
        const interval = setInterval(() => {
            setTimelyOffice(getOfficeForTime());
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    const handleJumpToNow = () => {
        setCurrentOffice(timelyOffice);
    };

    const isCurrentTimely = currentOffice === timelyOffice;

    return (
        <div className={`header-controls-wrapper ${isSidebarOpen ? 'shifted' : ''}`}>
            <button
                className="control-btn sidebar-toggle"
                onClick={toggleSidebar}
                aria-label="Toggle Navigation"
            >
                <Menu size={20} />
            </button>

            {/* If currently viewing the timely office, show it as active. 
                If viewing a different office, show the "Now" button to jump back. */}

            {!isCurrentTimely ? (
                <button
                    className="control-btn office-switch-btn jump-to-now"
                    onClick={handleJumpToNow}
                    aria-label={`Jump to ${officeLabels[timelyOffice]}`}
                    title={`Jump to ${officeLabels[timelyOffice]} (Now)`}
                >
                    <Clock size={16} style={{ marginRight: '6px' }} />
                    <span className="office-switch-text">Pray Now ({officeLabels[timelyOffice]})</span>
                </button>
            ) : (
                <button
                    className="control-btn office-switch-btn active-office"
                    onClick={toggleSidebar}
                    aria-label="Current Office"
                    title="Change Office"
                >
                    <span className="office-switch-icon">{officeIcons[currentOffice]}</span>
                    <span className="office-switch-text">{officeLabels[currentOffice]}</span>
                </button>
            )}
        </div>
    );
}
