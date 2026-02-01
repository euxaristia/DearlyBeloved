import React from 'react';
import { officeContent } from '../../data/officeContent';

export default function Compline() {
    return (
        <div className="compline">
            <div className="section">
                <p className="rubric">
                    The Office of Compline may be used after Evening Prayer, or as a separate late evening devotion.
                </p>

                <p className="rubric">The Minister beginneth:</p>

                <p className="prayer-text">
                    The Lord Almighty grant us a quiet night and a perfect end. <span className="response">Amen.</span>
                </p>

                <p className="rubric">Then shall be read this Sentence:</p>
                <p className="prayer-text">
                    Brethren, be sober, be vigilant; because your adversary the devil, as a roaring lion, walketh
                    about, seeking whom he may devour: whom resist, stedfast in the faith.{' '}
                    <span className="rubric">1{'\u00A0'}St{'\u00A0'}Peter 5. 8, 9.</span>
                </p>

                <p className="prayer-text">O God, make speed to save us;</p>
                <p className="prayer-text response">O Lord, make haste to help us.</p>

                <p className="prayer-text">Glory be to the Father, and to the Son, and to the Holy Ghost;</p>
                <p className="prayer-text response">
                    As it was in the beginning, is now, and ever shall be, world without end. Amen.
                </p>

                <p className="prayer-text">Praise ye the Lord;</p>
                <p className="prayer-text response">The Lord's name be praised.</p>

                <p className="rubric">
                    Then shall be said or sung one or more of the following Psalms: Psalm 4; Psalm 31: 1-6; Psalm 91;
                    Psalm 134; or any other Psalm or Psalms.
                </p>
            </div>

            <div className="section">
                <div className="psalm">
                    <h3 className="psalm-title">Psalm 4</h3>
                    <p className="rubric"><em>Cum invocarem.</em></p>
                    <p className="prayer-text">
                        Hear me when I call, O God of my righteousness: / thou hast set me at liberty when I was in
                        trouble; have mercy upon me, and hearken unto my prayer.<br />
                        O ye sons of men, how long will ye blaspheme mine honour, / and have such pleasure in vanity,
                        and seek after falsehood?<br />
                        Know this also, that the Lord hath chosen to himself the man that is godly; / when I call upon
                        the Lord, he will hear me.<br />
                        Stand in awe, and sin not; / commune with your own heart, and in your chamber, and be still.<br />
                        Offer the sacrifice of righteousness, / and put your trust in the Lord.<br />
                        There be many that say, / Who will shew us any good?<br />
                        Lord, lift thou up / the light of thy countenance upon us.<br />
                        Thou hast put gladness in my heart; / yea, more than when their grain and wine and oil increase.<br />
                        I will lay me down in peace, and take my rest; / for it is thou, Lord, only, that makest me dwell
                        in safety.
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
                <p className="rubric">Then a Lesson. At the end, the Reader may say</p>
                <p className="prayer-text">Thanks be to God.</p>
            </div>

            <div className="section">
                <p className="rubric">The following may be sung or said:</p>
                <div className="canticle">
                    <h3 className="canticle-title">Nunc Dimittis</h3>
                    <p className="prayer-text">
                        {officeContent.canticles.nuncDimittis.text.split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                                {line}
                                {i < officeContent.canticles.nuncDimittis.text.split('\n').length - 1 && <br />}
                            </React.Fragment>
                        ))}
                    </p>
                </div>
            </div>

            <div className="section">
                <p className="rubric">All say the Apostles' Creed.</p>
                <p className="prayer-text response">
                    {officeContent.creed.apostles}
                </p>
            </div>

            <div className="section">
                <p className="rubric">Then shall be said the following prayers.</p>

                <p className="prayer-text">The Lord be with you;</p>
                <p className="prayer-text response">And with thy spirit.</p>

                <p className="rubric">Let us pray.</p>

                <p className="prayer-text response">
                    Lord, have mercy upon us.<br />
                    Christ, have mercy upon us.<br />
                    Lord, have mercy upon us.
                </p>

                <p className="prayer-text response">
                    {officeContent.prayers.lordsPrayer}
                </p>

                <h3 className="collect-title">The Collect</h3>
                <p className="prayer-text">
                    Lighten our darkness, we beseech thee, O Lord; and by thy great mercy defend us from all perils
                    and dangers of this night; for the love of thy only Son, our Saviour, Jesus Christ. Amen.
                </p>

                <p className="prayer-text">
                    Keep us, O Lord, as the apple of an eye; hide us under the shadow of thy wings.
                </p>

                <p className="rubric">The service may end with the following or another blessing:</p>

                <p className="prayer-text">
                    The almighty and merciful Lord, the Father, the Son, and the Holy Ghost, bless us and keep us.
                    Amen.
                </p>
            </div>
        </div>
    );
}
