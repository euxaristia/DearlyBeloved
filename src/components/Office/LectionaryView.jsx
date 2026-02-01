import React, { useState, useEffect } from 'react';
import { getLiturgicalInfo } from '../../utils/liturgicalCalendar';
import { getReadingsForDate } from '../../utils/lectionary';
import { getPsalmReferences, getPsalmLatinTitle } from '../../utils/psalms';
import { getCollectForDate } from '../../utils/collects';
import LessonDisplay from './Parts/LessonDisplay';
import { Calendar } from 'lucide-react';
import './LectionaryView.css';

export default function LectionaryView() {
    // Initialize with today's date
    const [selectedDate, setSelectedDate] = useState(() => {
        const now = new Date();
        return now.toISOString().split('T')[0]; // Format: YYYY-MM-DD
    });

    const [activeTab, setActiveTab] = useState('morning'); // 'morning' or 'evening'
    const [data, setData] = useState(null);

    useEffect(() => {
        const [year, month, day] = selectedDate.split('-').map(Number);
        const dateObj = new Date(year, month - 1, day);

        const info = getLiturgicalInfo(dateObj);
        const readings = getReadingsForDate(dateObj);
        const psalms = getPsalmReferences(activeTab, dateObj);
        const collect = getCollectForDate(dateObj);

        setData({
            info,
            readings,
            psalms,
            collect,
            dateObj
        });
    }, [selectedDate, activeTab]);

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const changeDate = (days) => {
        const [year, month, day] = selectedDate.split('-').map(Number);
        const dateObj = new Date(year, month - 1, day);
        dateObj.setDate(dateObj.getDate() + days);
        setSelectedDate(dateObj.toISOString().split('T')[0]);
    };

    if (!data || !data.readings) {
        return (
            <div className="lectionary-view">
                <div className="date-nav">
                    <button onClick={() => changeDate(-1)} className="nav-btn">←</button>
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={handleDateChange}
                        className="date-picker-input"
                    />
                    <button onClick={() => changeDate(1)} className="nav-btn">→</button>
                </div>
                <p className="rubric">No readings found for this date.</p>
            </div>
        );
    }

    const { info, readings, psalms, collect, dateObj } = data;
    const currentReadings = activeTab === 'morning' ? readings.morning : readings.evening;

    // Format date for display (e.g., "January 31, 2026")
    const formattedDate = dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    return (
        <div className="lectionary-view">
            {/* Date Navigation Bar */}
            <div className="date-nav-bar">
                <button onClick={() => changeDate(-1)} className="nav-arrow" aria-label="Previous Day">←</button>
                <div className="date-display">
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={handleDateChange}
                        className="hidden-date-input"
                        id="date-input"
                    />
                    <label htmlFor="date-input" className="date-label">
                        {selectedDate} <Calendar className="calendar-icon" size={20} />
                    </label>
                </div>
                <button onClick={() => changeDate(1)} className="nav-arrow" aria-label="Next Day">→</button>
            </div>

            {/* Office Tabs */}
            <div className="office-tabs">
                <button
                    className={`tab-btn ${activeTab === 'morning' ? 'active' : ''}`}
                    onClick={() => setActiveTab('morning')}
                >
                    MORNING PRAYER
                </button>
                <button
                    className={`tab-btn ${activeTab === 'evening' ? 'active' : ''}`}
                    onClick={() => setActiveTab('evening')}
                >
                    EVENING PRAYER
                </button>
            </div>

            {/* Header Content */}
            <div className="lectionary-header">
                <h1 className="office-heading">
                    {activeTab === 'morning' ? 'Morning Prayer' : 'Evening Prayer'}
                </h1>
                <h2 className="date-heading">{formattedDate}</h2>
                <h3 className="liturgical-day">{info.weekInfo}</h3>
                {info.season && <p className="season text-red">{info.season}</p>}
                {info.saintDay && <p className="saint-day text-red">{info.saintDay}</p>}
            </div>

            <div className="lectionary-content">
                {/* Psalms Section */}
                <section className="lectionary-section">
                    <h3 className="section-title">Psalms</h3>
                    <div className="psalms-list">
                        {psalms.length > 0 ? (
                            psalms.map((psalm, idx) => (
                                <div key={idx} className="psalm-item">
                                    <div className="psalm-ref">
                                        <span className="psalm-number">{psalm.reference}</span>
                                        <span className="psalm-latin">{getPsalmLatinTitle(psalm.number)}</span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No psalms assigned.</p>
                        )}
                    </div>
                </section>

                {/* Lessons Section */}
                <section className="lectionary-section">
                    <h3 className="section-title">Lessons</h3>
                    <div className="lessons-list">
                        <div className="lesson-item">
                            <LessonDisplay
                                reference={currentReadings.first}
                                lesson="first"
                            />
                        </div>
                        <div className="lesson-item">
                            <LessonDisplay
                                reference={currentReadings.second}
                                lesson="second"
                            />
                        </div>
                    </div>
                </section>

                {/* Collect Section */}
                <section className="lectionary-section">
                    <h3 className="section-title">Collects</h3>
                    <div className="collect-item">
                        <h4 className="collect-title">The Collect of the Day</h4>
                        <p className="collect-text">{collect}</p>
                    </div>
                </section>
            </div>
        </div>
    );
}
