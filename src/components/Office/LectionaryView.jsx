import React, { useState, useEffect } from 'react';
import { getLiturgicalInfo } from '../../utils/liturgicalCalendar';
import { getReadingsForDate } from '../../utils/lectionary';
import LessonDisplay from './Parts/LessonDisplay';
import './LectionaryView.css';

export default function LectionaryView() {
    // Initialize with today's date
    const [selectedDate, setSelectedDate] = useState(() => {
        const now = new Date();
        return now.toISOString().split('T')[0]; // Format: YYYY-MM-DD
    });

    const [info, setInfo] = useState(null);
    const [readings, setReadings] = useState(null);

    useEffect(() => {
        // Create date object explicitly from YYYY-MM-DD string to avoid timezone issues
        const [year, month, day] = selectedDate.split('-').map(Number);
        const dateObj = new Date(year, month - 1, day);

        const liturgicalInfo = getLiturgicalInfo(dateObj);
        const dailyReadings = getReadingsForDate(dateObj);

        setInfo(liturgicalInfo);
        setReadings(dailyReadings);
    }, [selectedDate]);

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    if (!info || !readings) {
        return (
            <div className="section lectionary-view">
                <div className="lectionary-header">
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={handleDateChange}
                        className="date-picker"
                    />
                </div>
                <p className="rubric">No readings found for this date.</p>
            </div>
        );
    }

    return (
        <div className="lectionary-view">
            <div className="section lectionary-header-section">
                <input
                    type="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    className="date-picker"
                />

                <h2 className="liturgical-day">{info.weekInfo}</h2>
                {info.season && <p className="season">{info.season}</p>}
                {info.saintDay && <p className="saint-day">{info.saintDay}</p>}
            </div>

            <div className="section">
                <h3 className="office-title">Morning Prayer</h3>
                <div className="lessons-container">
                    <div className="lesson-block">
                        <LessonDisplay
                            reference={readings.morning.first}
                            lessonNumber="first"
                        />
                    </div>
                    <div className="lesson-block">
                        <LessonDisplay
                            reference={readings.morning.second}
                            lessonNumber="second"
                        />
                    </div>
                </div>
            </div>

            <div className="section">
                <h3 className="office-title">Evening Prayer</h3>
                <div className="lessons-container">
                    <div className="lesson-block">
                        <LessonDisplay
                            reference={readings.evening.first}
                            lessonNumber="first"
                        />
                    </div>
                    <div className="lesson-block">
                        <LessonDisplay
                            reference={readings.evening.second}
                            lessonNumber="second"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
