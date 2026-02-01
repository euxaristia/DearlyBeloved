import React from 'react';

export default function LiturgicalHeader({ info }) {
    if (!info) return null;

    const { weekInfo, saintDay } = info;
    const now = new Date();
    const dateString = now.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="liturgical-header" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1>{dateString}</h1>
            {weekInfo && <div className="liturgical-season" style={{ color: 'var(--accent)', fontWeight: 'bold' }}>{weekInfo}</div>}
            {saintDay && <div className="saint-day" style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>{saintDay}</div>}
        </div>
    );
}
