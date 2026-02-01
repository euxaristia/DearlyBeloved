import React from 'react';

export default function MiddayPrayer() {
    return (
        <div className="midday-prayer">
            <div className="section">
                <p className="rubric">At Midday the following devotion may be used.</p>

                <p className="prayer-text">O God, make speed to save us;</p>
                <p className="prayer-text response">O Lord, make haste to help us.</p>

                <p className="prayer-text">Glory be to the Father, and to the Son, and to the Holy Ghost;</p>
                <p className="prayer-text response">
                    As it was in the beginning, is now, and ever shall be, world without end. Amen.
                </p>
            </div>

            <div className="section">
                <p className="rubric">Then shall be said one of the following Psalms.</p>
                <div className="psalm">
                    <h3 className="psalm-title">Psalm 121</h3>
                    <p className="rubric"><em>Levavi oculos.</em></p>
                    <p className="prayer-text">
                        I will lift up mine eyes unto the hills: / from whence cometh my help.<br />
                        My help cometh even from the Lord, / who hath made heaven and earth.<br />
                        He will not suffer thy foot to be moved; / and he that keepeth thee will not sleep.<br />
                        Behold, he that keepeth Israel / shall neither slumber nor sleep.<br />
                        The Lord himself is thy keeper; / the Lord is thy defence upon thy right hand;<br />
                        So that the sun shall not burn thee by day, / neither the moon by night.<br />
                        The Lord shall preserve thee from all evil; / yea, it is even he that shall keep thy soul.<br />
                        The Lord shall preserve thy going out, and thy coming in, / from this time forth for evermore.
                    </p>
                </div>
                <div className="gloria">
                    <p className="prayer-text">
                        Glory be to the Father, and to the Son, and to the Holy Ghost;<br />
                        as it was in the beginning, is now, and ever shall be, world without end. Amen.
                    </p>
                </div>
            </div>

            <div className="section">
                <p className="rubric">Then may be read a sentence of Scripture.</p>
                <p className="prayer-text">
                    Jesus said, And I, if I be lifted up from the earth, will draw all men unto me.{' '}
                    <span className="rubric">St John 12. 32.</span>
                </p>
            </div>

            <div className="section">
                <p className="rubric">Then shall be said the following prayers.</p>

                <p className="prayer-text response">
                    Lord, have mercy upon us.<br />
                    Christ, have mercy upon us.<br />
                    Lord, have mercy upon us.
                </p>

                <p className="prayer-text response">
                    Our Father who art in heaven, Hallowed be thy Name, Thy kingdom come, Thy will be done, on
                    earth as it is in heaven. Give us this day our daily bread; And forgive us our trespasses, As
                    we forgive them that trespass against us; And lead us not into temptation, But deliver us from
                    evil. Amen.
                </p>

                <h3 className="collect-title">The Collect</h3>
                <p className="prayer-text">
                    Blessed Saviour, at this hour thou didst hang upon the Cross, stretching out thy loving arms:
                    Grant that all mankind may look unto thee and be saved; for thy tender mercies' sake. Amen.
                </p>

                <p className="prayer-text">
                    The grace of our Lord Jesus Christ, and the love of God, and the fellowship of the Holy Ghost,
                    be with us all evermore. Amen.
                </p>
            </div>
        </div>
    );
}
