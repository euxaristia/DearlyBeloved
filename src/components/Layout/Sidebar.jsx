import React from 'react';
import { useApp } from '../../contexts/AppContext';
import './Sidebar.css';

const offices = [
    { id: 'morning', label: 'Morning Prayer', icon: '🌅' },
    { id: 'midday', label: 'Midday Prayer', icon: '☀️' },
    { id: 'evening', label: 'Evening Prayer', icon: '🕯️' },
    { id: 'compline', label: 'Compline', icon: '🌙' },
];

export default function Sidebar() {
    const { isSidebarOpen, closeSidebar, currentOffice, setCurrentOffice } = useApp();

    // Helper to handle navigation
    const handleOfficeSelect = (officeId) => {
        setCurrentOffice(officeId);
        closeSidebar();
    };

    return (
        <>
            <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`} id="sidebar">
                <div className="sidebar-content">
                    <div className="sidebar-section">
                        <h3 className="sidebar-section-title">Daily Offices</h3>
                        <nav className="sidebar-nav">
                            {offices.map((office) => (
                                <button
                                    key={office.id}
                                    className={`sidebar-nav-item ${currentOffice === office.id ? 'active' : ''}`}
                                    onClick={() => handleOfficeSelect(office.id)}
                                    aria-label={`Switch to ${office.label}`}
                                >
                                    <span className="sidebar-nav-icon">{office.icon}</span>
                                    <span className="sidebar-nav-label">{office.label}</span>
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>
            </aside>

            {/* Backdrop for mobile */}
            <div
                className={`sidebar-backdrop ${isSidebarOpen ? 'active' : ''}`}
                onClick={closeSidebar}
                aria-hidden="true"
            />
        </>
    );
}
