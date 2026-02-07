import React, { useState, useEffect } from 'react';
import { fetchBibleText, formatVerseText } from '../../../utils/api';
import { formatLessonIntro } from '../../../utils/lectionary';

export default function LessonDisplay({ reference, lesson }) {
    const [verses, setVerses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadLesson() {
            if (!reference) {
                setLoading(false);
                return;
            }

            setLoading(true);
            setError(null);

            try {
                const data = await fetchBibleText(reference);
                if (data) {
                    const formattedVerses = formatVerseText(data);
                    setVerses(formattedVerses);
                } else {
                    setError('No data received');
                }
            } catch (err) {
                console.error('Error loading lesson:', err);
                setError(`Could not load lesson: ${err.message}`);
            } finally {
                setLoading(false);
            }
        }

        loadLesson();
    }, [reference]);

    const handleRetry = () => {
        setLoading(true);
        setError(null);

        const load = async () => {
            try {
                const data = await fetchBibleText(reference);
                if (data) {
                    setVerses(formatVerseText(data));
                } else {
                    setError('No data received');
                }
            } catch (err) {
                setError(`Could not load lesson: ${err.message}`);
            } finally {
                setLoading(false);
            }
        };
        load();
    };

    if (!reference) {
        return (
            <div className="lesson">
                <p className="rubric">No lesson appointed.</p>
            </div>
        );
    }

    return (
        <div className="lesson">
            <p className="prayer-text">
                {formatLessonIntro(reference, lesson)}
            </p>

            {loading && <p className="prayer-text">Loading lesson...</p>}

            {error && (
                <div className="error-container">
                    <p className="prayer-text error">{error}</p>
                    <button onClick={handleRetry} className="retry-button">Retry</button>
                    <p className="rubric" style={{ fontSize: '0.9rem', marginTop: '10px' }}>
                        If the lesson fails to load, please read from a Bible: <strong>{reference}</strong>
                    </p>
                </div>
            )}

            {!loading && !error && verses.length > 0 && (
                <div className="lesson-text">
                    {verses.map((verse, index) => (
                        <p key={index} className="prayer-text verse">
                            <sup>{verse.verse}</sup> {verse.text}
                        </p>
                    ))}
                </div>
            )}

            <p className="rubric" style={{ marginTop: '1rem' }}>
                Here endeth the {lesson === 'first' ? 'First' : 'Second'} Lesson.
            </p>
        </div>
    );
}
