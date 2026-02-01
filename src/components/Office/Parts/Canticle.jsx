import React from 'react';

export default function Canticle({ name, content }) {
    if (!content) {
        return (
            <div className="section">
                <p className="rubric">Canticle not found.</p>
            </div>
        );
    }

    return (
        <div className="section">
            <p className="rubric">
                Then shall be sung or said the following Canticle.
            </p>

            <div className="canticle">
                <h3 className="canticle-title">
                    {content.title}
                    {content.citation && <> {content.citation}</>}
                </h3>

                <p className="prayer-text">
                    {content.text.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                            {line}
                            {i < content.text.split('\n').length - 1 && <br />}
                        </React.Fragment>
                    ))}
                </p>
            </div>
        </div>
    );
}
