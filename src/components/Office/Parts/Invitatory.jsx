import React from 'react';
import { officeContent } from '../../../data/officeContent';

export default function Invitatory() {
    const { preces, venite } = officeContent.invitatory;

    return (
        <>
            <div className="section">
                {preces.map((prece, index) => (
                    <div key={index} className="versicle">
                        <span className={prece.speaker === 'Minister' ? 'minister-label' : (prece.speaker === 'People' ? 'people-label' : 'priest-label')}>
                            {prece.speaker}.
                        </span>
                        <span className={prece.speaker === 'People' ? 'response' : ''}>
                            {prece.text}
                        </span>
                    </div>
                ))}
            </div>

            <div className="section">
                <p className="rubric">
                    Then shall be said or sung this Psalm following; except on days for which Proper Anthems are provided. On the nineteenth day of the month, this Psalm shall be omitted in the ordinary course of the Psalms.
                </p>
                <p className="rubric">
                    At the discretion of the Minister the last four verses may be omitted.
                </p>

                <div className="canticle">
                    <h3 className="canticle-title">
                        {venite.title} {venite.citation}
                    </h3>

                    <p className="prayer-text antiphon">
                        {venite.antiphon}
                    </p>

                    <p className="prayer-text">
                        {venite.text.split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                                {line}
                                {i < venite.text.split('\n').length - 1 && <br />}
                            </React.Fragment>
                        ))}
                    </p>

                    <p className="prayer-text antiphon">
                        {venite.antiphon}
                    </p>
                </div>
            </div>
        </>
    );
}
