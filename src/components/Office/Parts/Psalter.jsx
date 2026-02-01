import React, { useState, useEffect } from 'react';
import { fetchBibleText, formatVerseText } from '../../../utils/api';
import { getPsalmLatinTitle } from '../../../utils/psalms';

function PsalmDisplay({ psalm }) {
    const [verses, setVerses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Determines the display title (e.g., "Psalm 121" or "Psalm 119:105-112")
    const displayTitle = typeof psalm === 'object' ? `Psalm ${psalm.number}` : `Psalm ${psalm}`;
    const reference = typeof psalm === 'object' ? psalm.reference : `Psalm ${psalm}`;
    const psalmNumber = typeof psalm === 'object' ? psalm.number : psalm;

    // Latin title is only for the whole Psalm usually, but let's show it if available.
    // If it's a section of 119, we might handle it differently, but getPsalmLatinTitle(119) works.
    const latinTitle = getPsalmLatinTitle(psalmNumber);

    useEffect(() => {
        async function loadPsalm() {
            setLoading(true);
            try {
                // Use the API reference (e.g. "Psalm 121" or "Psalm 119:1-32")
                // If it's an object from getPsalmReferences, it has an .apiRef property which is perfect.
                const apiRef = typeof psalm === 'object' && psalm.apiRef ? psalm.apiRef : reference;

                const data = await fetchBibleText(apiRef);
                if (data) {
                    setVerses(formatVerseText(data));
                } else {
                    setError('Could not load psalm.');
                }
            } catch (err) {
                console.error(err);
                setError('Error loading psalm.');
            } finally {
                setLoading(false);
            }
        }

        loadPsalm();
    }, [reference, psalm]);

    if (loading) return <div className="psalm"><p className="prayer-text">Loading {displayTitle}...</p></div>;
    if (error) return <div className="psalm"><p className="prayer-text error">{error}</p></div>;

    return (
        <div className="psalm">
            <h3 className="psalm-title">{displayTitle}</h3>
            {latinTitle && <p className="rubric"><em>{latinTitle}.</em></p>}

            <div className="prayer-text">
                {verses.map((v, i) => (
                    <span key={i}>
                        {v.text} <br />
                    </span>
                ))}
            </div>

            <div className="gloria">
                <p className="prayer-text">
                    Glory be to the Father, and to the Son, and to the Holy Ghost;<br />
                    As it was in the beginning, is now, and ever shall be, world without end. Amen.
                </p>
            </div>
        </div>
    );
}

export default function Psalter({ psalms }) {
    if (!psalms || psalms.length === 0) {
        return (
            <div className="psalter">
                <p className="rubric">No psalms appointed for today.</p>
            </div>
        );
    }

    return (
        <div className="psalter">
            <h3 className="section-title">Psalms for the Day</h3>
            <p className="rubric">
                Then shall be said or sung the Psalms following.
            </p>

            {psalms.map((psalm, index) => (
                <PsalmDisplay key={index} psalm={psalm} />
            ))}
        </div>
    );
}
