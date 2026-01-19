// Prayer content data
const prayerData = {
  morning: {
    title: "Morning Prayer",
    sections: [
      {
        type: "opening",
        content: `<div class="section">
                    <p class="rubric">The Officiant begins with one or more of the following sentences of Scripture.</p>
                    <p class="prayer-text">"The Lord is in his holy temple; let all the earth keep silence before him." <span class="rubric">Habakkuk 2:20</span></p>

                    <p class="rubric">The following Confession of Sin may then be said; or the Office may continue at once with "Lord, open our lips."</p>

                    <p class="rubric">Confession of Sin</p>
                    <p class="prayer-text indent">Almighty and most merciful Father,<br>
                    we have erred and strayed from thy ways like lost sheep,<br>
                    we have followed too much the devices and desires of our own hearts,<br>
                    we have offended against thy holy laws,<br>
                    we have left undone those things which we ought to have done,<br>
                    and we have done those things which we ought not to have done.<br>
                    And there is no health in us.<br>
                    But thou, O Lord, have mercy upon us,<br>
                    spare thou those who confess their faults,<br>
                    restore thou those who are penitent,<br>
                    according to thy promises declared unto mankind<br>
                    in Christ Jesus our Lord;<br>
                    and grant, O most merciful Father, for his sake,<br>
                    that we may hereafter live a godly, righteous, and sober life,<br>
                    to the glory of thy holy Name. Amen.</p>

                    <p class="rubric">The Priest alone stands and says</p>
                    <p class="prayer-text">The Almighty and merciful Lord grant you absolution and remission of all your sins, true repentance, amendment of life, and the grace and consolation of his Holy Spirit. <span class="response">Amen.</span></p>
                </div>`,
      },
      {
        type: "invitatory",
        content: `<div class="section">
                    <p class="rubric">All stand, the Officiant and People say together</p>
                    <div class="versicle">
                        <span class="versicle-label">V.</span>
                        <span>O Lord, open thou our lips.</span>
                    </div>
                    <div class="versicle">
                        <span class="versicle-label">R.</span>
                        <span class="response">And our mouth shall show forth thy praise.</span>
                    </div>

                    <div class="versicle">
                        <span class="versicle-label">V.</span>
                        <span>O God, make speed to save us.</span>
                    </div>
                    <div class="versicle">
                        <span class="versicle-label">R.</span>
                        <span class="response">O Lord, make haste to help us.</span>
                    </div>

                    <div class="gloria">
                        <p>Glory be to the Father, and to the Son, and to the Holy Ghost;</p>
                        <p>as it was in the beginning, is now, and ever shall be, world without end. Amen.</p>
                        <p class="rubric">Alleluia.</p>
                    </div>
                </div>`,
      },
      {
        type: "venite",
        content: `<div class="section">
                    <div class="canticle">
                        <h3 class="canticle-title">Venite, exultemus Domino</h3>
                        <p class="rubric">Psalm 95:1-7</p>
                        <p class="prayer-text">
                            O come, let us sing unto the Lord;<br>
                            let us heartily rejoice in the strength of our salvation.<br>
                            Let us come before his presence with thanksgiving<br>
                            and show ourselves glad in him with psalms.<br><br>

                            For the Lord is a great God<br>
                            and a great King above all gods.<br>
                            In his hand are all the corners of the earth,<br>
                            and the strength of the hills is his also.<br>
                            The sea is his and he made it,<br>
                            and his hands prepared the dry land.<br><br>

                            O come, let us worship and fall down<br>
                            and kneel before the Lord our Maker.<br>
                            For he is the Lord our God,<br>
                            and we are the people of his pasture and the sheep of his hand.
                        </p>
                        <div class="gloria">
                            <p>Glory be to the Father, and to the Son, and to the Holy Ghost;</p>
                            <p>as it was in the beginning, is now, and ever shall be, world without end. Amen.</p>
                        </div>
                    </div>
                </div>`,
      },
      {
        type: "psalm",
        content: `<div class="section">
                    <p class="rubric">Then follows the Psalm or Psalms appointed.</p>
                    <div class="psalm">
                        <h3 class="psalm-title">Psalm 1</h3>
                        <p class="psalm-verse"><span class="verse-number">1</span> Blessed is the man that hath not walked in the counsel of the ungodly, nor stood in the way of sinners, and hath not sat in the seat of the scornful.</p>
                        <p class="psalm-verse"><span class="verse-number">2</span> But his delight is in the law of the Lord; and in his law will he exercise himself day and night.</p>
                        <p class="psalm-verse"><span class="verse-number">3</span> And he shall be like a tree planted by the waterside, that will bring forth his fruit in due season.</p>
                        <p class="psalm-verse"><span class="verse-number">4</span> His leaf also shall not wither; and look, whatsoever he doeth, it shall prosper.</p>
                        <p class="psalm-verse"><span class="verse-number">5</span> As for the ungodly, it is not so with them; but they are like the chaff, which the wind scattereth away from the face of the earth.</p>
                        <p class="psalm-verse"><span class="verse-number">6</span> Therefore the ungodly shall not be able to stand in the judgment, neither the sinners in the congregation of the righteous.</p>
                        <p class="psalm-verse"><span class="verse-number">7</span> But the Lord knoweth the way of the righteous; and the way of the ungodly shall perish.</p>
                    </div>
                    <div class="gloria">
                        <p>Glory be to the Father, and to the Son, and to the Holy Ghost;</p>
                        <p>as it was in the beginning, is now, and ever shall be, world without end. Amen.</p>
                    </div>
                </div>`,
      },
      {
        type: "readings",
        content: `<div class="section">
                    <p class="rubric">The Lessons are read, the Reader first saying</p>
                    <div class="reading">
                        <p class="reading-citation">The First Lesson is written in the _____ chapter of _____, beginning at the _____ verse.</p>
                        <p class="rubric">After each Lesson the Reader may say</p>
                        <p class="prayer-text">The Word of the Lord.</p>
                        <p class="prayer-text response">Thanks be to God.</p>
                    </div>
                </div>`,
      },
      {
        type: "te-deum",
        content: `<div class="section">
                    <div class="canticle">
                        <h3 class="canticle-title">Te Deum laudamus</h3>
                        <p class="rubric">We praise thee, O God</p>
                        <p class="prayer-text">
                            We praise thee, O God; we acknowledge thee to be the Lord.<br>
                            All the earth doth worship thee, the Father everlasting.<br>
                            To thee all Angels cry aloud,<br>
                            the Heavens and all the Powers therein.<br>
                            To thee Cherubim and Seraphim continually do cry:<br><br>

                            Holy, holy, holy, Lord God of Sabaoth;<br>
                            Heaven and earth are full of the majesty of thy glory.<br>
                            The glorious company of the apostles praise thee.<br>
                            The goodly fellowship of the prophets praise thee.<br>
                            The noble army of martyrs praise thee.<br>
                            The holy Church throughout all the world doth acknowledge thee,<br>
                            the Father, of an infinite majesty,<br>
                            thine adorable, true, and only Son,<br>
                            also the Holy Ghost the Comforter.<br><br>

                            Thou art the King of glory, O Christ.<br>
                            Thou art the everlasting Son of the Father.<br>
                            When thou tookest upon thee to deliver man,<br>
                            thou didst humble thyself to be born of a Virgin.<br>
                            When thou hadst overcome the sharpness of death,<br>
                            thou didst open the kingdom of heaven to all believers.<br>
                            Thou sittest at the right hand of God, in the glory of the Father.<br>
                            We believe that thou shalt come to be our judge.<br>
                            We therefore pray thee, help thy servants,<br>
                            whom thou hast redeemed with thy precious blood.<br>
                            Make them to be numbered with thy saints,<br>
                            in glory everlasting.
                        </p>
                    </div>
                </div>`,
      },
      {
        type: "creed",
        content: `<div class="section">
                    <p class="rubric">Then shall be said the Apostles' Creed by the Officiant and People, standing.</p>
                    <p class="prayer-text response">
                        I believe in God, the Father almighty,<br>
                        maker of heaven and earth;<br><br>

                        And in Jesus Christ his only Son our Lord;<br>
                        who was conceived by the Holy Ghost,<br>
                        born of the Virgin Mary,<br>
                        suffered under Pontius Pilate,<br>
                        was crucified, dead, and buried.<br>
                        He descended into hell.<br>
                        The third day he rose again from the dead.<br>
                        He ascended into heaven,<br>
                        and sitteth on the right hand of God the Father almighty.<br>
                        From thence he shall come to judge the quick and the dead.<br><br>

                        I believe in the Holy Ghost,<br>
                        the holy catholic Church,<br>
                        the communion of saints,<br>
                        the forgiveness of sins,<br>
                        the resurrection of the body,<br>
                        and the life everlasting. Amen.
                    </p>
                </div>`,
      },
      {
        type: "prayers",
        content: `<div class="section">
                    <p class="rubric">The people kneel. The Officiant says to the people</p>
                    <div class="versicle">
                        <span class="versicle-label">V.</span>
                        <span>The Lord be with you.</span>
                    </div>
                    <div class="versicle">
                        <span class="versicle-label">R.</span>
                        <span class="response">And with thy spirit.</span>
                    </div>

                    <p class="rubric">Officiant: Let us pray.</p>

                    <p class="rubric">Officiant and People</p>
                    <p class="prayer-text response">
                        Our Father, who art in heaven,<br>
                        hallowed be thy Name,<br>
                        thy kingdom come,<br>
                        thy will be done,<br>
                        on earth as it is in heaven.<br>
                        Give us this day our daily bread.<br>
                        And forgive us our trespasses,<br>
                        as we forgive those who trespass against us.<br>
                        And lead us not into temptation,<br>
                        but deliver us from evil.<br>
                        For thine is the kingdom, and the power, and the glory,<br>
                        for ever and ever. Amen.
                    </p>

                    <p class="rubric">Then follow these Suffrages</p>
                    <div class="versicle">
                        <span class="versicle-label">V.</span>
                        <span>O Lord, show thy mercy upon us.</span>
                    </div>
                    <div class="versicle">
                        <span class="versicle-label">R.</span>
                        <span class="response">And grant us thy salvation.</span>
                    </div>

                    <div class="versicle">
                        <span class="versicle-label">V.</span>
                        <span>O Lord, save the State.</span>
                    </div>
                    <div class="versicle">
                        <span class="versicle-label">R.</span>
                        <span class="response">And mercifully hear us when we call upon thee.</span>
                    </div>

                    <div class="versicle">
                        <span class="versicle-label">V.</span>
                        <span>Endue thy ministers with righteousness.</span>
                    </div>
                    <div class="versicle">
                        <span class="versicle-label">R.</span>
                        <span class="response">And make thy chosen people joyful.</span>
                    </div>

                    <div class="versicle">
                        <span class="versicle-label">V.</span>
                        <span>O Lord, save thy people.</span>
                    </div>
                    <div class="versicle">
                        <span class="versicle-label">R.</span>
                        <span class="response">And bless thine inheritance.</span>
                    </div>

                    <div class="versicle">
                        <span class="versicle-label">V.</span>
                        <span>Give peace in our time, O Lord.</span>
                    </div>
                    <div class="versicle">
                        <span class="versicle-label">R.</span>
                        <span class="response">Because there is none other that fighteth for us, but only thou, O God.</span>
                    </div>

                    <div class="versicle">
                        <span class="versicle-label">V.</span>
                        <span>O God, make clean our hearts within us.</span>
                    </div>
                    <div class="versicle">
                        <span class="versicle-label">R.</span>
                        <span class="response">And take not thy Holy Spirit from us.</span>
                    </div>
                </div>`,
      },
      {
        type: "collects",
        content: `<div class="section">
                    <div class="collect">
                        <p class="collect-title">The Collect of the Day</p>
                        <p class="prayer-text">
                            O God, the author of peace and lover of concord, in knowledge of whom standeth our eternal life, whose service is perfect freedom: Defend us, thy humble servants, in all assaults of our enemies; that we, surely trusting in thy defense, may not fear the power of any adversaries; through the might of Jesus Christ our Lord. <span class="response">Amen.</span>
                        </p>
                    </div>

                    <div class="collect">
                        <p class="collect-title">A Collect for Peace</p>
                        <p class="prayer-text">
                            O God, who art the author of peace and lover of concord, in knowledge of whom standeth our eternal life, whose service is perfect freedom: Defend us, thy humble servants, in all assaults of our enemies; that we, surely trusting in thy defense, may not fear the power of any adversaries; through the might of Jesus Christ our Lord. <span class="response">Amen.</span>
                        </p>
                    </div>

                    <div class="collect">
                        <p class="collect-title">A Collect for Grace</p>
                        <p class="prayer-text">
                            O Lord, our heavenly Father, almighty and everlasting God, who hast safely brought us to the beginning of this day: Defend us in the same with thy mighty power; and grant that this day we fall into no sin, neither run into any kind of danger; but that all our doings, being ordered by thy governance, may be righteous in thy sight; through Jesus Christ our Lord. <span class="response">Amen.</span>
                        </p>
                    </div>
                </div>`,
      },
      {
        type: "closing",
        content: `<div class="section">
                    <p class="rubric">The Officiant may end Morning Prayer with the following</p>
                    <p class="prayer-text">
                        The grace of our Lord Jesus Christ, and the love of God, and the fellowship of the Holy Ghost, be with us all evermore. <span class="response">Amen.</span>
                    </p>
                    <p class="rubric">2 Corinthians 13:14</p>
                </div>`,
      },
    ],
  },
  evening: {
    title: "Evening Prayer",
    sections: [
      {
        type: "opening",
        content: `<div class="section">
                    <p class="rubric">The Officiant begins with one or more of the following sentences of Scripture.</p>
                    <p class="prayer-text">"Let my prayer be set forth in thy sight as the incense, and let the lifting up of my hands be an evening sacrifice." <span class="rubric">Psalm 141:2</span></p>

                    <p class="rubric">The following Confession of Sin may then be said; or the Office may continue at once with "O God, make speed to save us."</p>

                    <p class="rubric">Confession of Sin</p>
                    <p class="prayer-text indent">Almighty and most merciful Father,<br>
                    we have erred and strayed from thy ways like lost sheep,<br>
                    we have followed too much the devices and desires of our own hearts,<br>
                    we have offended against thy holy laws,<br>
                    we have left undone those things which we ought to have done,<br>
                    and we have done those things which we ought not to have done.<br>
                    And there is no health in us.<br>
                    But thou, O Lord, have mercy upon us,<br>
                    spare thou those who confess their faults,<br>
                    restore thou those who are penitent,<br>
                    according to thy promises declared unto mankind<br>
                    in Christ Jesus our Lord;<br>
                    and grant, O most merciful Father, for his sake,<br>
                    that we may hereafter live a godly, righteous, and sober life,<br>
                    to the glory of thy holy Name. Amen.</p>

                    <p class="rubric">The Priest alone stands and says</p>
                    <p class="prayer-text">The Almighty and merciful Lord grant you absolution and remission of all your sins, true repentance, amendment of life, and the grace and consolation of his Holy Spirit. <span class="response">Amen.</span></p>
                </div>`,
      },
      {
        type: "invitatory",
        content: `<div class="section">
                    <p class="rubric">All stand, the Officiant and People say together</p>
                    <div class="versicle">
                        <span class="versicle-label">V.</span>
                        <span>O God, make speed to save us.</span>
                    </div>
                    <div class="versicle">
                        <span class="versicle-label">R.</span>
                        <span class="response">O Lord, make haste to help us.</span>
                    </div>

                    <div class="gloria">
                        <p>Glory be to the Father, and to the Son, and to the Holy Ghost;</p>
                        <p>as it was in the beginning, is now, and ever shall be, world without end. Amen.</p>
                        <p class="rubric">Alleluia.</p>
                    </div>
                </div>`,
      },
      {
        type: "psalm",
        content: `<div class="section">
                    <p class="rubric">Then follows the Psalm or Psalms appointed.</p>
                    <div class="psalm">
                        <h3 class="psalm-title">Psalm 4</h3>
                        <p class="psalm-verse"><span class="verse-number">1</span> Hear me when I call, O God of my righteousness; thou hast set me at liberty when I was in trouble; have mercy upon me, and hearken unto my prayer.</p>
                        <p class="psalm-verse"><span class="verse-number">2</span> O ye sons of men, how long will ye blaspheme mine honor, and have such pleasure in vanity, and seek after falsehood?</p>
                        <p class="psalm-verse"><span class="verse-number">3</span> Know this also, that the Lord hath chosen to himself the man that is godly; when I call upon the Lord, he will hear me.</p>
                        <p class="psalm-verse"><span class="verse-number">4</span> Stand in awe, and sin not; commune with your own heart, and in your chamber, and be still.</p>
                        <p class="psalm-verse"><span class="verse-number">5</span> Offer the sacrifice of righteousness, and put your trust in the Lord.</p>
                        <p class="psalm-verse"><span class="verse-number">6</span> There be many that say, Who will show us any good?</p>
                        <p class="psalm-verse"><span class="verse-number">7</span> Lord, lift thou up the light of thy countenance upon us.</p>
                        <p class="psalm-verse"><span class="verse-number">8</span> Thou hast put gladness in my heart; yea, more than when their grain and wine and oil increase.</p>
                        <p class="psalm-verse"><span class="verse-number">9</span> I will lay me down in peace, and take my rest; for it is thou, Lord, only, that makest me dwell in safety.</p>
                    </div>
                    <div class="gloria">
                        <p>Glory be to the Father, and to the Son, and to the Holy Ghost;</p>
                        <p>as it was in the beginning, is now, and ever shall be, world without end. Amen.</p>
                    </div>
                </div>`,
      },
      {
        type: "readings",
        content: `<div class="section">
                    <p class="rubric">The Lessons are read, the Reader first saying</p>
                    <div class="reading">
                        <p class="reading-citation">The First Lesson is written in the _____ chapter of _____, beginning at the _____ verse.</p>
                        <p class="rubric">After each Lesson the Reader may say</p>
                        <p class="prayer-text">The Word of the Lord.</p>
                        <p class="prayer-text response">Thanks be to God.</p>
                    </div>
                </div>`,
      },
      {
        type: "magnificat",
        content: `<div class="section">
                    <div class="canticle">
                        <h3 class="canticle-title">Magnificat</h3>
                        <p class="rubric">The Song of Mary - Luke 1:46-55</p>
                        <p class="prayer-text">
                            My soul doth magnify the Lord,<br>
                            and my spirit hath rejoiced in God my Savior.<br>
                            For he hath regarded the lowliness of his handmaiden.<br>
                            For behold from henceforth all generations shall call me blessed.<br>
                            For he that is mighty hath magnified me,<br>
                            and holy is his Name.<br>
                            And his mercy is on them that fear him throughout all generations.<br>
                            He hath showed strength with his arm;<br>
                            he hath scattered the proud in the imagination of their hearts.<br>
                            He hath put down the mighty from their seat,<br>
                            and hath exalted the humble and meek.<br>
                            He hath filled the hungry with good things,<br>
                            and the rich he hath sent empty away.<br>
                            He remembering his mercy hath holpen his servant Israel,<br>
                            as he promised to our forefathers,<br>
                            Abraham and his seed for ever.
                        </p>
                        <div class="gloria">
                            <p>Glory be to the Father, and to the Son, and to the Holy Ghost;</p>
                            <p>as it was in the beginning, is now, and ever shall be, world without end. Amen.</p>
                        </div>
                    </div>
                </div>`,
      },
      {
        type: "creed",
        content: `<div class="section">
                    <p class="rubric">Then shall be said the Apostles' Creed by the Officiant and People, standing.</p>
                    <p class="prayer-text response">
                        I believe in God, the Father almighty,<br>
                        maker of heaven and earth;<br><br>

                        And in Jesus Christ his only Son our Lord;<br>
                        who was conceived by the Holy Ghost,<br>
                        born of the Virgin Mary,<br>
                        suffered under Pontius Pilate,<br>
                        was crucified, dead, and buried.<br>
                        He descended into hell.<br>
                        The third day he rose again from the dead.<br>
                        He ascended into heaven,<br>
                        and sitteth on the right hand of God the Father almighty.<br>
                        From thence he shall come to judge the quick and the dead.<br><br>

                        I believe in the Holy Ghost,<br>
                        the holy catholic Church,<br>
                        the communion of saints,<br>
                        the forgiveness of sins,<br>
                        the resurrection of the body,<br>
                        and the life everlasting. Amen.
                    </p>
                </div>`,
      },
      {
        type: "prayers",
        content: `<div class="section">
                    <p class="rubric">The people kneel. The Officiant says to the people</p>
                    <div class="versicle">
                        <span class="versicle-label">V.</span>
                        <span>The Lord be with you.</span>
                    </div>
                    <div class="versicle">
                        <span class="versicle-label">R.</span>
                        <span class="response">And with thy spirit.</span>
                    </div>

                    <p class="rubric">Officiant: Let us pray.</p>

                    <p class="rubric">Officiant and People</p>
                    <p class="prayer-text response">
                        Our Father, who art in heaven,<br>
                        hallowed be thy Name,<br>
                        thy kingdom come,<br>
                        thy will be done,<br>
                        on earth as it is in heaven.<br>
                        Give us this day our daily bread.<br>
                        And forgive us our trespasses,<br>
                        as we forgive those who trespass against us.<br>
                        And lead us not into temptation,<br>
                        but deliver us from evil.<br>
                        For thine is the kingdom, and the power, and the glory,<br>
                        for ever and ever. Amen.
                    </p>

                    <p class="rubric">Then follow these Suffrages</p>
                    <div class="versicle">
                        <span class="versicle-label">V.</span>
                        <span>O Lord, show thy mercy upon us.</span>
                    </div>
                    <div class="versicle">
                        <span class="versicle-label">R.</span>
                        <span class="response">And grant us thy salvation.</span>
                    </div>

                    <div class="versicle">
                        <span class="versicle-label">V.</span>
                        <span>O Lord, save the State.</span>
                    </div>
                    <div class="versicle">
                        <span class="versicle-label">R.</span>
                        <span class="response">And mercifully hear us when we call upon thee.</span>
                    </div>

                    <div class="versicle">
                        <span class="versicle-label">V.</span>
                        <span>Endue thy ministers with righteousness.</span>
                    </div>
                    <div class="versicle">
                        <span class="versicle-label">R.</span>
                        <span class="response">And make thy chosen people joyful.</span>
                    </div>

                    <div class="versicle">
                        <span class="versicle-label">V.</span>
                        <span>O Lord, save thy people.</span>
                    </div>
                    <div class="versicle">
                        <span class="versicle-label">R.</span>
                        <span class="response">And bless thine inheritance.</span>
                    </div>

                    <div class="versicle">
                        <span class="versicle-label">V.</span>
                        <span>Give peace in our time, O Lord.</span>
                    </div>
                    <div class="versicle">
                        <span class="versicle-label">R.</span>
                        <span class="response">Because there is none other that fighteth for us, but only thou, O God.</span>
                    </div>

                    <div class="versicle">
                        <span class="versicle-label">V.</span>
                        <span>O God, make clean our hearts within us.</span>
                    </div>
                    <div class="versicle">
                        <span class="versicle-label">R.</span>
                        <span class="response">And take not thy Holy Spirit from us.</span>
                    </div>
                </div>`,
      },
      {
        type: "collects",
        content: `<div class="section">
                    <div class="collect">
                        <p class="collect-title">The Collect of the Day</p>
                        <p class="prayer-text">
                            Lighten our darkness, we beseech thee, O Lord; and by thy great mercy defend us from all perils and dangers of this night; for the love of thy only Son, our Savior Jesus Christ. <span class="response">Amen.</span>
                        </p>
                    </div>

                    <div class="collect">
                        <p class="collect-title">A Collect for Aid Against Perils</p>
                        <p class="prayer-text">
                            Lighten our darkness, we beseech thee, O Lord; and by thy great mercy defend us from all perils and dangers of this night; for the love of thy only Son, our Savior Jesus Christ. <span class="response">Amen.</span>
                        </p>
                    </div>

                    <div class="collect">
                        <p class="collect-title">A Collect for Peace</p>
                        <p class="prayer-text">
                            O God, from whom all holy desires, all good counsels, and all just works do proceed: Give unto thy servants that peace which the world cannot give, that our hearts may be set to obey thy commandments, and also that by thee, we, being defended from the fear of our enemies, may pass our time in rest and quietness; through the merits of Jesus Christ our Savior. <span class="response">Amen.</span>
                        </p>
                    </div>
                </div>`,
      },
      {
        type: "nunc-dimittis",
        content: `<div class="section">
                    <div class="canticle">
                        <h3 class="canticle-title">Nunc Dimittis</h3>
                        <p class="rubric">The Song of Simeon - Luke 2:29-32</p>
                        <p class="prayer-text">
                            Lord, now lettest thou thy servant depart in peace,<br>
                            according to thy word;<br>
                            For mine eyes have seen thy salvation,<br>
                            which thou hast prepared before the face of all people,<br>
                            to be a light to lighten the Gentiles,<br>
                            and to be the glory of thy people Israel.
                        </p>
                        <div class="gloria">
                            <p>Glory be to the Father, and to the Son, and to the Holy Ghost;</p>
                            <p>as it was in the beginning, is now, and ever shall be, world without end. Amen.</p>
                        </div>
                    </div>
                </div>`,
      },
      {
        type: "closing",
        content: `<div class="section">
                    <p class="rubric">The Officiant may end Evening Prayer with the following</p>
                    <p class="prayer-text">
                        The grace of our Lord Jesus Christ, and the love of God, and the fellowship of the Holy Ghost, be with us all evermore. <span class="response">Amen.</span>
                    </p>
                    <p class="rubric">2 Corinthians 13:14</p>
                </div>`,
      },
    ],
  },
  midday: {
    title: "Midday Prayer",
    sections: [
      {
        type: "opening",
        content: `<div class="section">
                    <p class="rubric">The Officiant begins</p>
                    <div class="versicle">
                        <span class="versicle-label">V.</span>
                        <span>O God, make speed to save us.</span>
                    </div>
                    <div class="versicle">
                        <span class="versicle-label">R.</span>
                        <span class="response">O Lord, make haste to help us.</span>
                    </div>

                    <div class="gloria">
                        <p>Glory be to the Father, and to the Son, and to the Holy Ghost;</p>
                        <p>as it was in the beginning, is now, and ever shall be, world without end. Amen.</p>
                        <p class="rubric">Alleluia.</p>
                    </div>
                </div>`,
      },
      {
        type: "psalm",
        content: `<div class="section">
                    <div class="psalm">
                        <h3 class="psalm-title">Psalm 119:105-112</h3>
                        <p class="psalm-verse"><span class="verse-number">105</span> Thy word is a lantern unto my feet, and a light unto my paths.</p>
                        <p class="psalm-verse"><span class="verse-number">106</span> I have sworn and am steadfastly purposed to keep thy righteous judgments.</p>
                        <p class="psalm-verse"><span class="verse-number">107</span> I am troubled above measure; quicken me, O Lord, according to thy word.</p>
                        <p class="psalm-verse"><span class="verse-number">108</span> Let the freewill offerings of my mouth please thee, O Lord, and teach me thy judgments.</p>
                        <p class="psalm-verse"><span class="verse-number">109</span> My soul is alway in my hand, yet do I not forget thy law.</p>
                        <p class="psalm-verse"><span class="verse-number">110</span> The ungodly have laid a snare for me, but yet I swerved not from thy commandments.</p>
                        <p class="psalm-verse"><span class="verse-number">111</span> Thy testimonies have I claimed as mine heritage for ever, and why? they are the very joy of my heart.</p>
                        <p class="psalm-verse"><span class="verse-number">112</span> I have applied my heart to fulfill thy statutes alway, even unto the end.</p>
                    </div>
                    <div class="gloria">
                        <p>Glory be to the Father, and to the Son, and to the Holy Ghost;</p>
                        <p>as it was in the beginning, is now, and ever shall be, world without end. Amen.</p>
                    </div>
                </div>`,
      },
      {
        type: "prayers",
        content: `<div class="section">
                    <p class="rubric">Officiant and People</p>
                    <p class="prayer-text response">
                        Our Father, who art in heaven,<br>
                        hallowed be thy Name,<br>
                        thy kingdom come,<br>
                        thy will be done,<br>
                        on earth as it is in heaven.<br>
                        Give us this day our daily bread.<br>
                        And forgive us our trespasses,<br>
                        as we forgive those who trespass against us.<br>
                        And lead us not into temptation,<br>
                        but deliver us from evil.<br>
                        For thine is the kingdom, and the power, and the glory,<br>
                        for ever and ever. Amen.
                    </p>

                    <div class="collect">
                        <p class="collect-title">Collect</p>
                        <p class="prayer-text">
                            Blessed Savior, at this hour thou didst hang upon the cross, stretching out thy loving arms: Grant that all the peoples of the earth may look unto thee and be saved; for thy tender mercies' sake. <span class="response">Amen.</span>
                        </p>
                    </div>
                </div>`,
      },
      {
        type: "closing",
        content: `<div class="section">
                    <p class="prayer-text">
                        Let us bless the Lord.<br>
                        <span class="response">Thanks be to God.</span>
                    </p>
                </div>`,
      },
    ],
  },
  compline: {
    title: "Compline",
    sections: [
      {
        type: "opening",
        content: `<div class="section">
                    <p class="rubric">The Officiant begins</p>
                    <p class="prayer-text">The Lord Almighty grant us a peaceful night and a perfect end. <span class="response">Amen.</span></p>

                    <p class="rubric">Officiant</p>
                    <p class="prayer-text">Our help is in the Name of the Lord;</p>
                    <p class="prayer-text response">The maker of heaven and earth.</p>

                    <p class="rubric">The Officiant continues</p>
                    <p class="prayer-text">Let us humbly confess our sins unto Almighty God.</p>

                    <p class="rubric">Silence may be kept. The Officiant and People say</p>
                    <p class="prayer-text indent">Almighty God and Father, we confess to thee,<br>
                    and to one another,<br>
                    and to the whole company of heaven,<br>
                    that we have sinned, through our own fault,<br>
                    in thought, and word, and deed,<br>
                    and through what we have left undone.<br>
                    For the sake of thy Son our Lord Jesus Christ,<br>
                    have mercy upon us, forgive us our sins,<br>
                    and by the power of thy Holy Spirit<br>
                    raise us up to serve thee in newness of life,<br>
                    to the glory of thy Name. Amen.</p>

                    <p class="rubric">The Officiant alone says</p>
                    <p class="prayer-text">May Almighty God grant us forgiveness of all our sins, and the grace and comfort of the Holy Spirit. <span class="response">Amen.</span></p>
                </div>`,
      },
      {
        type: "invitatory",
        content: `<div class="section">
                    <div class="versicle">
                        <span class="versicle-label">V.</span>
                        <span>O God, make speed to save us.</span>
                    </div>
                    <div class="versicle">
                        <span class="versicle-label">R.</span>
                        <span class="response">O Lord, make haste to help us.</span>
                    </div>

                    <div class="gloria">
                        <p>Glory be to the Father, and to the Son, and to the Holy Ghost;</p>
                        <p>as it was in the beginning, is now, and ever shall be, world without end. Amen.</p>
                        <p class="rubric">Alleluia.</p>
                    </div>
                </div>`,
      },
      {
        type: "psalm",
        content: `<div class="section">
                    <div class="psalm">
                        <h3 class="psalm-title">Psalm 4</h3>
                        <p class="psalm-verse"><span class="verse-number">1</span> Hear me when I call, O God of my righteousness; thou hast set me at liberty when I was in trouble; have mercy upon me, and hearken unto my prayer.</p>
                        <p class="psalm-verse"><span class="verse-number">8</span> I will lay me down in peace, and take my rest; for it is thou, Lord, only, that makest me dwell in safety.</p>
                    </div>
                    <div class="gloria">
                        <p>Glory be to the Father, and to the Son, and to the Holy Ghost;</p>
                        <p>as it was in the beginning, is now, and ever shall be, world without end. Amen.</p>
                    </div>
                </div>`,
      },
      {
        type: "readings",
        content: `<div class="section">
                    <p class="rubric">One or more of the following, or some other suitable passage of Scripture, is read.</p>
                    <div class="reading">
                        <p class="prayer-text">Thou, O Lord, art in the midst of us, and we are called by thy Name; leave us not, O Lord our God. <span class="rubric">Jeremiah 14:9</span></p>

                        <p class="rubric">At the end of the reading is said</p>
                        <p class="prayer-text">
                            Thanks be to God.<br>
                            <span class="response">And grant us thy salvation.</span>
                        </p>
                    </div>
                </div>`,
      },
      {
        type: "nunc-dimittis",
        content: `<div class="section">
                    <div class="canticle">
                        <h3 class="canticle-title">Nunc Dimittis</h3>
                        <p class="rubric">The Song of Simeon - Luke 2:29-32</p>
                        <p class="prayer-text">
                            Lord, now lettest thou thy servant depart in peace,<br>
                            according to thy word;<br>
                            For mine eyes have seen thy salvation,<br>
                            which thou hast prepared before the face of all people,<br>
                            to be a light to lighten the Gentiles,<br>
                            and to be the glory of thy people Israel.
                        </p>
                        <div class="gloria">
                            <p>Glory be to the Father, and to the Son, and to the Holy Ghost;</p>
                            <p>as it was in the beginning, is now, and ever shall be, world without end. Amen.</p>
                        </div>
                    </div>
                </div>`,
      },
      {
        type: "prayers",
        content: `<div class="section">
                    <p class="rubric">Officiant: Let us pray.</p>

                    <p class="rubric">Officiant and People</p>
                    <p class="prayer-text response">
                        Our Father, who art in heaven,<br>
                        hallowed be thy Name,<br>
                        thy kingdom come,<br>
                        thy will be done,<br>
                        on earth as it is in heaven.<br>
                        Give us this day our daily bread.<br>
                        And forgive us our trespasses,<br>
                        as we forgive those who trespass against us.<br>
                        And lead us not into temptation,<br>
                        but deliver us from evil.
                    </p>

                    <div class="versicle">
                        <span class="versicle-label">V.</span>
                        <span>O Lord, hear our prayer.</span>
                    </div>
                    <div class="versicle">
                        <span class="versicle-label">R.</span>
                        <span class="response">And let our cry come unto thee.</span>
                    </div>
                </div>`,
      },
      {
        type: "collects",
        content: `<div class="section">
                    <div class="collect">
                        <p class="prayer-text">
                            Visit this place, O Lord, and drive far from it all snares of the enemy; let thy holy angels dwell with us to preserve us in peace; and let thy blessing be upon us always; through Jesus Christ our Lord. <span class="response">Amen.</span>
                        </p>
                    </div>
                </div>`,
      },
      {
        type: "closing",
        content: `<div class="section">
                    <p class="rubric">The Officiant concludes</p>
                    <p class="prayer-text">
                        The almighty and merciful Lord, Father, Son, and Holy Spirit, bless us and keep us. <span class="response">Amen.</span>
                    </p>
                </div>`,
      },
    ],
  },
};

// Application state
let currentOffice = "morning";

// Determine which office to pray based on time of day
function getAppropriateOffice() {
  const now = new Date();
  const hour = now.getHours();

  // Morning Prayer: 5 AM - 11 AM
  if (hour >= 5 && hour < 11) {
    return "morning";
  }
  // Midday Prayer: 11 AM - 2 PM
  else if (hour >= 11 && hour < 14) {
    return "midday";
  }
  // Evening Prayer: 2 PM - 8 PM
  else if (hour >= 14 && hour < 20) {
    return "evening";
  }
  // Compline: 8 PM - 5 AM
  else {
    return "compline";
  }
}

// Initialize the app
function init() {
  // Use the office already determined by the inline script (to prevent flash)
  // Fall back to getAppropriateOffice() if not set
  const initialOffice = document.documentElement.getAttribute(
    "data-initial-office",
  );
  currentOffice = initialOffice || getAppropriateOffice();

  updateDate();
  renderPrayer(currentOffice);
  setupEventListeners();

  // Set active button based on current office
  updateActiveButton(currentOffice);

  // Update date every minute
  setInterval(updateDate, 60000);
}

// Update active button state
function updateActiveButton(office) {
  const navButtons = document.querySelectorAll(".nav-btn");
  navButtons.forEach((btn) => {
    if (btn.dataset.office === office) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

// Update liturgical date display
function updateDate() {
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateString = now.toLocaleDateString("en-US", options);
  document.getElementById("liturgical-date").textContent = dateString;
}

// Render prayer content
function renderPrayer(office) {
  const prayer = prayerData[office];
  const contentDiv = document.getElementById("prayer-content");

  let html = `<h2 class="section-title">${prayer.title}</h2>`;

  prayer.sections.forEach((section) => {
    html += section.content;
  });

  contentDiv.innerHTML = html;
}

// Setup event listeners
function setupEventListeners() {
  const navButtons = document.querySelectorAll(".nav-btn");

  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove the data-initial-office attribute to prevent CSS conflict
      document.documentElement.removeAttribute("data-initial-office");

      // Remove active class from all buttons
      navButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      button.classList.add("active");

      // Get office type and render
      currentOffice = button.dataset.office;
      renderPrayer(currentOffice);

      // Scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

// Dark mode functionality
function initDarkMode() {
  const themeToggle = document.getElementById("theme-toggle");

  if (!themeToggle) {
    console.error("Theme toggle button not found");
    return;
  }

  // Toggle theme on button click
  themeToggle.addEventListener("click", () => {
    // Toggle on both html and body for consistency
    document.documentElement.classList.toggle("dark-mode");
    document.body.classList.toggle("dark-mode");

    // Save preference to localStorage
    if (document.documentElement.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

  // Sync body class with html class (set by inline script)
  if (document.documentElement.classList.contains("dark-mode")) {
    document.body.classList.add("dark-mode");
  }
}

// Start the app when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  init();
  initDarkMode();

  // Show content once fonts are loaded (prevents text reflow flash)
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      document.documentElement.classList.remove("fonts-loading");
    });
  } else {
    // Fallback for browsers without Font Loading API
    document.documentElement.classList.remove("fonts-loading");
  }
});
