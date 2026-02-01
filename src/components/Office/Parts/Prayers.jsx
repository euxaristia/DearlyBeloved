import React from 'react';
import { officeContent } from '../../../data/officeContent';

export default function Prayers({ collect, office }) {
    const { suffrages, stChrysostom, grace } = officeContent.prayers;

    return (
        <>
            <div className="section">
                <p className="rubric">
                    Then the Minister shall say,
                </p>
                <p className="prayer-text">The Lord be with you;</p>
                <div className="versicle">
                    <span className="people-label">People.</span>
                    <span className="response">And with thy spirit.</span>
                </div>

                <p className="rubric">
                    Here, all kneeling, the Minister shall say the following:
                </p>

                {suffrages.map((suffrage, index) => (
                    <div key={index} className="versicle">
                        <span className={suffrage.speaker === 'Minister' ? 'minister-label' : 'people-label'}>
                            {suffrage.speaker}.
                        </span>
                        <span className={suffrage.speaker === 'People' ? 'response' : ''}>
                            {suffrage.text}
                        </span>
                    </div>
                ))}
            </div>

            <div className="section">
                <p className="rubric">
                    Then shall follow three Collects; the first of the Day, the second for Peace, the third for Grace to live well.
                </p>

                {collect && (
                    <>
                        <h3 className="collect-title">The Collect of the Day</h3>
                        <p className="prayer-text">{collect}</p>
                    </>
                )}

                <h3 className="collect-title">The Second Collect, for Peace</h3>
                <p className="prayer-text">
                    {office === 'morning'
                        ? 'O God, who art the author of peace and lover of concord, in knowledge of whom standeth our eternal life, whose service is perfect freedom: Defend us thy humble servants in all assaults of our enemies; that we, surely trusting in thy defence, may not fear the power of any adversaries; through the might of Jesus Christ our Lord. Amen.'
                        : 'O God, from whom all holy desires, all good counsels, and all just works do proceed: Give unto thy servants that peace which the world cannot give; that both our hearts may be set to obey thy commandments, and also that by thee we being defended from the fear of our enemies may pass our time in rest and quietness; through the merits of Jesus Christ our Saviour. Amen.'}
                </p>

                <h3 className="collect-title">The Third Collect, for Grace</h3>
                <p className="prayer-text">
                    {office === 'morning'
                        ? 'O Lord our heavenly Father, Almighty and everlasting God, who hast safely brought us to the beginning of this day: Defend us in the same with thy mighty power; and grant that this day we fall into no sin, neither run into any kind of danger; but that all our doings may be ordered by thy governance, to do always that is righteous in thy sight; through Jesus Christ our Lord. Amen.'
                        : 'Lighten our darkness, we beseech thee, O Lord; and by thy great mercy defend us from all perils and dangers of this night; for the love of thy only Son, our Saviour, Jesus Christ. Amen.'}
                </p>
            </div>

            <div className="section">
                <p className="rubric">
                    Then these Prayers following are to be said, the people devoutly kneeling.
                </p>

                <h3 className="collect-title">A Prayer of St Chrysostom</h3>
                <p className="prayer-text">{stChrysostom}</p>

                <p className="rubric">
                    Then shall the Priest or Bishop (the people all standing up) say,
                </p>

                <p className="prayer-text">{grace}</p>
            </div>
        </>
    );
}
