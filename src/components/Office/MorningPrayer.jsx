import React from 'react';
import Opening from './Parts/Opening';
import Invitatory from './Parts/Invitatory';
import Psalter from './Parts/Psalter';
import LessonDisplay from './Parts/LessonDisplay';
import Canticle from './Parts/Canticle';
import Creed from './Parts/Creed';
import Prayers from './Parts/Prayers';
import { officeContent } from '../../data/officeContent';

export default function MorningPrayer({ data }) {
    const { readings, psalms, collect, sentence } = data;

    return (
        <div className="morning-prayer">
            <Opening sentence={sentence} />
            <Invitatory />

            <div className="section">
                <p className="rubric">Then shall follow the Psalms in order as they be appointed.</p>
                <Psalter psalms={psalms} />
            </div>

            <div className="section">
                <p className="rubric">Then shall be read distinctly with an audible voice the First Lesson, taken out of the Old Testament.</p>
                {readings && <LessonDisplay reference={readings.morning.first} lesson="first" />}
            </div>

            <Canticle name="Te Deum" content={officeContent.canticles.teDeum} />

            <div className="section">
                <p className="rubric">Then shall be read in like manner the Second Lesson, taken out of the New Testament.</p>
                {readings && <LessonDisplay reference={readings.morning.second} lesson="second" />}
            </div>

            <Canticle name="Benedictus" content={officeContent.canticles.benedictus} />

            <Creed />

            <Prayers collect={collect} office="morning" />
        </div>
    );
}
