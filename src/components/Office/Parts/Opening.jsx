import React from 'react';
import { officeContent } from '../../../data/officeContent';

export default function Opening({ sentence }) {
    return (
        <div className="section">
            <p className="rubric">
                At the beginning of Morning Prayer the Minister shall read with a loud voice some one or more of these Sentences of the Scriptures that follow.
            </p>

            {sentence && (
                <p className="prayer-text">
                    {sentence.text} <span className="rubric">{sentence.reference}</span>
                </p>
            )}

            <p className="prayer-text">
                {officeContent.confession.exhortation}
            </p>

            <p className="rubric">
                A general Confession to be said of the whole Congregation after the Minister, all kneeling.
            </p>

            <p className="prayer-text response">
                {officeContent.confession.generalConfession}
            </p>

            <p className="rubric">
                The Absolution, or Remission of sins, to be pronounced by the Priest alone, standing; the people still kneeling.
            </p>

            <p className="prayer-text">
                {officeContent.confession.absolution}
            </p>

            <p className="rubric">
                Then the Minister shall kneel, and say the Lord's Prayer with an audible voice; the people also kneeling, and repeating it with him.
            </p>

            <p className="prayer-text response">
                {officeContent.prayers.lordsPrayer}
            </p>
        </div>
    );
}
