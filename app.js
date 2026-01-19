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
                    <p class="rubric">The Minister shall read aloud one or more of these Sentences of the Scriptures that follow, or at special seasons the appropriate Sentences in Morning Prayer.</p>

                    <p class="prayer-text"><em>Of Missions.</em> Go ye into all the world, and preach the Gospel to every creature.</p>
                    <p class="rubric">St. Mark 16. 15.</p>

                    <p class="rubric">The Minister, turning to the people, shall say the Exhortation in the form following. Occasionally the second paragraph may be omitted.</p>

                    <p class="prayer-text">Dearly beloved brethren, the Scripture moveth us in sundry places to acknowledge and confess our manifold sins and wickedness; and that we should not dissemble nor cloke them before the face of Almighty God our heavenly Father; but confess them with an humble, lowly, penitent, and obedient heart; to the end that we may obtain forgiveness of the same, by his infinite goodness and mercy.</p>

                    <p class="prayer-text">And although we ought at all times humbly to acknowledge our sins before God; yet ought we most chiefly so to do, when we assemble and meet together to render thanks for the great benefits that we have received at his hands, to set forth his most worthy praise, to hear his most holy Word, and to ask those things which are requisite and necessary, as well for the body as the soul.</p>

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
    title: "Prayers at Mid-Day",
    sections: [
      {
        type: "opening",
        content: `<div class="section">
                    <h3 class="section-subtitle">For Missions</h3>

                    <p class="prayer-text response">
                        Our Father, who art in heaven,<br>
                        Hallowed be thy Name,<br>
                        Thy kingdom come,<br>
                        Thy will be done, on earth as it is in heaven.<br>
                        Give us this day our daily bread;<br>
                        And forgive us our trespasses,<br>
                        As we forgive those that trespass against us;<br>
                        And lead us not into temptation,<br>
                        But deliver us from evil.<br>
                        For thine is the kingdom, the power, and the glory,<br>
                        For ever and ever. <span class="response">Amen.</span>
                    </p>

                    <p class="prayer-text"><em>And I, if I be lifted up, will draw all men unto me.</em></p>

                    <p class="prayer-text">Blessed Saviour, who at this hour didst hang upon the cross stretching out thy loving arms: Grant that all the peoples of the earth may look unto thee and be saved; who livest and reignest with the Father and the Holy Ghost, ever one God, world without end. <span class="response">Amen.</span></p>

                    <p class="rubric">At mid-day. <em>O king, I saw a light above the brightness of the sun.</em></p>

                    <p class="prayer-text">Almighty Saviour, who at mid-day didst call thy servant Saint Paul to be an Apostle to the Gentiles: We beseech thee to illumine the world with the radiance of thy glory, that all nations may come and worship thee; who livest and reignest with the Father and the Holy Spirit, one God, world without end. <span class="response">Amen.</span></p>
                </div>`,
      },
    ],
  },
  compline: {
    title: "An Order for Compline",
    sections: [
      {
        type: "opening",
        content: `<div class="section">
                    <p class="rubric">This Service may be used when Evening Prayer has been previously said.</p>

                    <p class="rubric">All standing up, the Minister shall say:</p>

                    <p class="prayer-text">The Lord Almighty grant us a quiet night and a perfect end. <span class="response">Amen.</span></p>

                    <p class="prayer-text">O God, make speed to save us;</p>
                    <p class="prayer-text indent"><em>Answer</em> <span class="response">O Lord, make haste to help us.</span></p>

                    <p class="prayer-text indent"><em>Minister</em> Glory be to the Father, and to the Son, and to the Holy Ghost;</p>
                    <p class="prayer-text indent"><em>Answer</em> <span class="response">As it was in the beginning, is now, and ever shall be, world without end. Amen.</span></p>

                    <p class="prayer-text indent"><em>Minister</em> Praise ye the Lord;</p>
                    <p class="prayer-text indent"><em>Answer</em> <span class="response">The Lord's name be praised.</span></p>

                    <p class="rubric">Then shall be said or sung one or more of the following Psalms: Psalm 4; Psalm 31: 1-6; Psalm 91; Psalm 134; or any other Psalm or Psalms.</p>
                </div>`,
      },
      {
        type: "psalm",
        content: `<div class="section">
                    <div class="psalm">
                        <h3 class="psalm-title">Psalm 4</h3>
                        <p class="rubric"><em>Cum invocarem.</em></p>
                        <p class="psalm-verse">Hear me when I call, O God of my righteousness: / thou hast set me at liberty when I was in trouble; have mercy upon me, and hearken unto my prayer.</p>
                        <p class="psalm-verse">O ye sons of men, how long will ye blaspheme mine honour, / and have such pleasure in vanity, and seek after falsehood?</p>
                        <p class="psalm-verse">Know this also, that the Lord hath chosen to himself the man that is godly; / when I call upon the Lord, he will hear me.</p>
                        <p class="psalm-verse">Stand in awe, and sin not; / commune with your own heart, and in your chamber, and be still.</p>
                        <p class="psalm-verse">Offer the sacrifice of righteousness, / and put your trust in the Lord.</p>
                        <p class="psalm-verse">There be many that say, / Who will shew us any good?</p>
                        <p class="psalm-verse">Lord, lift thou up / the light of thy countenance upon us.</p>
                        <p class="psalm-verse">Thou hast put gladness in my heart; / yea, more than when their grain and wine and oil increase.</p>
                        <p class="psalm-verse">I will lay me down in peace, and take my rest; / for it is thou, Lord, only, that makest me dwell in safety.</p>
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
                    <p class="rubric">Then a Lesson. At the end, the Reader may say</p>
                    <p class="prayer-text">Thanks be to God.</p>
                </div>`,
      },
      {
        type: "nunc-dimittis",
        content: `<div class="section">
                    <p class="rubric">The following may be sung or said:</p>
                    <div class="canticle">
                        <h3 class="canticle-title">Nunc Dimittis</h3>
                        <p class="prayer-text">
                            Lord, now lettest thou thy servant depart in peace, / according to thy word;<br>
                            For mine eyes have seen thy salvation, / which thou hast prepared before the face of all people,<br>
                            To be a light to lighten the Gentiles, / and to be the glory of thy people Israel.
                        </p>
                        <div class="gloria">
                            <p>Glory be to the Father, and to the Son, and to the Holy Ghost;</p>
                            <p>as it was in the beginning, is now, and ever shall be, world without end. Amen.</p>
                        </div>
                    </div>
                </div>`,
      },
      {
        type: "apostles-creed",
        content: `<div class="section">
                    <p class="rubric">All say the Apostles' Creed.</p>
                    <p class="prayer-text response">
                        I believe in God the Father Almighty, Maker of heaven and earth:<br><br>
                        And in Jesus Christ his only Son our Lord, Who was conceived by the Holy Ghost, Born of the Virgin Mary, Suffered under Pontius Pilate, Was crucified, dead, and buried: He descended into hell; The third day he rose again from the dead; He ascended into heaven, And sitteth on the right hand of God the Father Almighty; From thence he shall come to judge the quick and the dead.<br><br>
                        I believe in the Holy Ghost; The holy Catholic Church; The Communion of Saints; The Forgiveness of sins; The Resurrection of the body, And the Life everlasting. Amen.
                    </p>
                </div>`,
      },
      {
        type: "kyrie",
        content: `<div class="section">
                    <p class="prayer-text">Lord, have mercy upon us.</p>
                    <p class="prayer-text response">Christ, have mercy upon us.</p>
                    <p class="prayer-text">Lord, have mercy upon us.</p>
                </div>`,
      },
      {
        type: "prayers",
        content: `<div class="section">
                    <p class="rubric">All kneeling, the Minister and People say the Lord's Prayer.</p>

                    <p class="prayer-text response">
                        Our Father, who art in heaven,<br>
                        Hallowed be thy Name,<br>
                        Thy kingdom come,<br>
                        Thy will be done, on earth as it is in heaven.<br>
                        Give us this day our daily bread;<br>
                        And forgive us our trespasses,<br>
                        As we forgive those that trespass against us;<br>
                        And lead us not into temptation,<br>
                        But deliver us from evil. <span class="response">Amen.</span>
                    </p>

                    <p class="prayer-text"><em>Minister</em> O Lord, show thy mercy upon us;</p>
                    <p class="prayer-text indent"><em>Answer</em> <span class="response">And grant us thy salvation.</span></p>

                    <p class="prayer-text"><em>Minister</em> O Lord, save the Queen;</p>
                    <p class="prayer-text indent"><em>Answer</em> <span class="response">And mercifully hear us when we call upon thee.</span></p>

                    <p class="prayer-text"><em>Minister</em> Endue thy Ministers with righteousness;</p>
                    <p class="prayer-text indent"><em>Answer</em> <span class="response">And make thy chosen people joyful.</span></p>

                    <p class="prayer-text"><em>Minister</em> O Lord, save thy people;</p>
                    <p class="prayer-text indent"><em>Answer</em> <span class="response">And bless thine inheritance.</span></p>

                    <p class="prayer-text"><em>Minister</em> Give peace in our time, O Lord;</p>
                    <p class="prayer-text indent"><em>Answer</em> <span class="response">And evermore mightily defend us.</span></p>

                    <p class="prayer-text"><em>Minister</em> O God, make clean our hearts within us;</p>
                    <p class="prayer-text indent"><em>Answer</em> <span class="response">And take not thy Holy Spirit from us.</span></p>
                </div>`,
      },
      {
        type: "collects",
        content: `<div class="section">
                    <p class="rubric">Then these three Collects.</p>

                    <p class="prayer-text">
                        Lighten our darkness, we beseech thee, O Lord; and by thy great mercy defend us from all perils and dangers of this night; for the love of thy only Son, our Saviour Jesus Christ. <span class="response">Amen.</span>
                    </p>

                    <p class="prayer-text">
                        Be our light in the darkness, O Lord, and in thy great mercy defend us from all perils and dangers of this night; for the love of thy only Son, our Saviour Jesus Christ. <span class="response">Amen.</span>
                    </p>

                    <p class="prayer-text">
                        Visit, we beseech thee, O Lord, this place, and drive far from it all the snares of the enemy; let thy holy angels dwell herein to preserve us in peace; and may thy blessing be upon us evermore; through Jesus Christ our Lord. <span class="response">Amen.</span>
                    </p>

                    <p class="rubric">The Minister may here end with the Blessing, or he may add other Prayers.</p>
                </div>`,
      },
      {
        type: "closing",
        content: `<div class="section">
                    <p class="rubric">The Minister says or sings</p>
                    <p class="prayer-text">
                        The almighty and merciful Lord, the Father, the Son, and the Holy Ghost, bless us and keep us. <span class="response">Amen.</span>
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

// Liturgical Calendar Database
const saintsCalendar = {
  "1-1": "The Circumcision of Christ",
  "1-6": "The Epiphany of our Lord Jesus Christ",
  "1-18": "The Confession of Saint Peter the Apostle",
  "1-19": "Henry, Missionary, Bishop in Finland, 1150",
  "1-25": "The Conversion of Saint Paul the Apostle",
  "2-2": "The Presentation of Christ in the Temple",
  "2-14": "Saint Valentine, Martyr at Rome, c. 269",
  "2-24": "Saint Matthias the Apostle",
  "3-19": "Saint Joseph, Spouse of the Blessed Virgin Mary",
  "3-25": "The Annunciation of the Blessed Virgin Mary",
  "4-25": "Saint Mark the Evangelist",
  "5-1": "Saint Philip and Saint James, Apostles",
  "5-31": "The Visitation of the Blessed Virgin Mary",
  "6-11": "Saint Barnabas the Apostle",
  "6-24": "The Nativity of Saint John the Baptist",
  "6-29": "Saint Peter and Saint Paul, Apostles",
  "7-22": "Saint Mary Magdalene",
  "7-25": "Saint James the Apostle",
  "8-6": "The Transfiguration of Our Lord Jesus Christ",
  "8-15": "Saint Mary the Virgin, Mother of Our Lord Jesus Christ",
  "8-24": "Saint Bartholomew the Apostle",
  "9-14": "Holy Cross Day",
  "9-21": "Saint Matthew, Apostle and Evangelist",
  "9-29": "Saint Michael and All Angels",
  "10-18": "Saint Luke the Evangelist",
  "10-28": "Saint Simon and Saint Jude, Apostles",
  "11-1": "All Saints' Day",
  "11-2": "All Souls' Day",
  "11-30": "Saint Andrew the Apostle",
  "12-21": "Saint Thomas the Apostle",
  "12-25": "The Nativity of Our Lord Jesus Christ",
  "12-26": "Saint Stephen, Deacon and Martyr",
  "12-27": "Saint John, Apostle and Evangelist",
  "12-28": "The Holy Innocents"
};

// Calculate Easter Sunday using Computus algorithm
function calculateEaster(year) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

// Get days between two dates
function daysBetween(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000;
  return Math.round((date2 - date1) / oneDay);
}

// Get liturgical season information
function getLiturgicalInfo(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // Check for fixed feast days first
  const dateKey = `${month}-${day}`;
  const saintDay = saintsCalendar[dateKey];

  // Calculate Easter and related dates
  const easter = calculateEaster(year);
  const ashWednesday = new Date(easter);
  ashWednesday.setDate(easter.getDate() - 46);
  const pentecost = new Date(easter);
  pentecost.setDate(easter.getDate() + 49);
  const adventStart = getAdventStart(year);
  const christmasDay = new Date(year, 11, 25);
  const epiphany = new Date(year, 0, 6);
  const baptismOfLord = getBaptismOfLord(year);
  const trinitySunday = new Date(pentecost);
  trinitySunday.setDate(pentecost.getDate() + 7);

  let season = "";
  let weekInfo = "";

  // Determine liturgical season
  if (date >= adventStart && date < christmasDay) {
    season = "Advent";
    const sundaysBefore = Math.floor(daysBetween(adventStart, date) / 7);
    const adventWeek = Math.min(sundaysBefore + 1, 4);
    weekInfo = getSundayReference(date, adventStart, `the ${getOrdinal(adventWeek)} Sunday of Advent`);
  } else if (date >= christmasDay && date < epiphany) {
    season = "Christmastide";
    if (month === 12 && day === 25) {
      weekInfo = "Christmas Day";
    } else {
      weekInfo = getSundayReference(date, christmasDay, "Christmas Day");
    }
  } else if (date >= epiphany && date < baptismOfLord) {
    season = "Epiphany";
    weekInfo = getSundayReference(date, epiphany, "the Epiphany");
  } else if (date >= baptismOfLord && date < ashWednesday) {
    season = "after Epiphany";
    const epiphanySundays = getSundaysBetween(baptismOfLord, ashWednesday);
    const currentSunday = getSundayNumber(baptismOfLord, date, ashWednesday);
    if (currentSunday > 0) {
      weekInfo = getSundayReference(date, null, `the ${getOrdinal(currentSunday)} Sunday after Epiphany`);
    } else {
      weekInfo = getSundayReference(date, baptismOfLord, "the Baptism of Our Lord");
    }
  } else if (date >= ashWednesday && date < easter) {
    season = "Lent";
    if (daysBetween(ashWednesday, date) === 0) {
      weekInfo = "Ash Wednesday";
    } else {
      const sundaysBefore = getSundayNumber(ashWednesday, date, easter);
      weekInfo = getSundayReference(date, ashWednesday, `the ${getOrdinal(sundaysBefore)} Sunday in Lent`);
    }
  } else if (date >= easter && date < pentecost) {
    season = "Eastertide";
    if (daysBetween(easter, date) === 0) {
      weekInfo = "Easter Day";
    } else {
      const sundaysBefore = Math.floor(daysBetween(easter, date) / 7);
      weekInfo = getSundayReference(date, easter, `the ${getOrdinal(sundaysBefore + 1)} Sunday of Easter`);
    }
  } else if (date >= pentecost && date < trinitySunday) {
    season = "Pentecost";
    weekInfo = "Pentecost";
  } else if (date >= trinitySunday) {
    season = "after Trinity";
    const nextAdvent = getAdventStart(year + 1);
    // Check if we're past this year's Advent
    if (date < getAdventStart(year)) {
      const sundayNumber = getSundayNumber(trinitySunday, date, getAdventStart(year));
      weekInfo = getSundayReference(date, trinitySunday, `the ${getOrdinal(sundayNumber)} Sunday after Trinity`);
    } else {
      // We're in next year's Advent season
      const adventStart = getAdventStart(year);
      const sundaysBefore = Math.floor(daysBetween(adventStart, date) / 7);
      const adventWeek = Math.min(sundaysBefore + 1, 4);
      weekInfo = getSundayReference(date, adventStart, `the ${getOrdinal(adventWeek)} Sunday of Advent`);
    }
  }

  return { season, weekInfo, saintDay };
}

// Get the Sunday reference based on current day
function getSundayReference(date, referenceDate, sundayName) {
  const dayOfWeek = date.getDay();
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  if (dayOfWeek === 0) {
    return sundayName;
  } else {
    return `${daysOfWeek[dayOfWeek]} after ${sundayName}`;
  }
}

// Get Sunday number in a season
function getSundayNumber(seasonStart, currentDate, seasonEnd) {
  let sundayCount = 0;
  let checkDate = new Date(seasonStart);

  // Find first Sunday
  while (checkDate.getDay() !== 0) {
    checkDate.setDate(checkDate.getDate() + 1);
  }

  // Count Sundays until current date
  while (checkDate <= currentDate && checkDate < seasonEnd) {
    if (checkDate <= currentDate) {
      sundayCount++;
    }
    checkDate.setDate(checkDate.getDate() + 7);
  }

  return sundayCount;
}

// Get number of Sundays between two dates
function getSundaysBetween(startDate, endDate) {
  let count = 0;
  let checkDate = new Date(startDate);

  while (checkDate < endDate) {
    if (checkDate.getDay() === 0) {
      count++;
    }
    checkDate.setDate(checkDate.getDate() + 1);
  }

  return count;
}

// Get first Sunday of Advent
function getAdventStart(year) {
  const christmas = new Date(year, 11, 25);
  const daysUntilSunday = christmas.getDay() === 0 ? 7 : christmas.getDay();
  const advent4 = new Date(christmas);
  advent4.setDate(christmas.getDate() - daysUntilSunday);
  const advent1 = new Date(advent4);
  advent1.setDate(advent4.getDate() - 21);
  return advent1;
}

// Get Baptism of the Lord (first Sunday after January 6)
function getBaptismOfLord(year) {
  const epiphany = new Date(year, 0, 6);
  const baptism = new Date(epiphany);

  // Find next Sunday after Epiphany
  const daysUntilSunday = epiphany.getDay() === 0 ? 7 : (7 - epiphany.getDay());
  baptism.setDate(epiphany.getDate() + daysUntilSunday);

  return baptism;
}

// Get ordinal number string
function getOrdinal(num) {
  const ordinals = ["", "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth",
                   "Eleventh", "Twelfth", "Thirteenth", "Fourteenth", "Fifteenth", "Sixteenth", "Seventeenth",
                   "Eighteenth", "Nineteenth", "Twentieth", "Twenty-first", "Twenty-second", "Twenty-third", "Twenty-fourth"];
  return ordinals[num] || `${num}th`;
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

  // Get liturgical information
  const liturgicalInfo = getLiturgicalInfo(now);

  let liturgicalText = dateString;

  if (liturgicalInfo.weekInfo) {
    liturgicalText += `<br><span class="liturgical-season">${liturgicalInfo.weekInfo}</span>`;
  }

  if (liturgicalInfo.saintDay) {
    liturgicalText += `<br><span class="saint-day">${liturgicalInfo.saintDay}</span>`;
  }

  document.getElementById("liturgical-date").innerHTML = liturgicalText;
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

// PWA Installation
let deferredPrompt;

function initPWA() {
  // Check if app is already installed
  const isInstalled = window.matchMedia("(display-mode: standalone)").matches;

  // Listen for the install prompt event
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;

    // Don't show install prompt if already installed or user dismissed recently
    const installDismissed = localStorage.getItem("installDismissed");
    const dismissTime = installDismissed ? parseInt(installDismissed) : 0;
    const daysSinceDismiss = (Date.now() - dismissTime) / (1000 * 60 * 60 * 24);

    if (!isInstalled && daysSinceDismiss > 7) {
      // Show install prompt after a short delay
      setTimeout(() => {
        document.getElementById("install-prompt").style.display = "block";
      }, 3000);
    }
  });

  // Handle install button click
  document.getElementById("install-button").addEventListener("click", async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;

      if (outcome === "accepted") {
        console.log("PWA installed");
      }

      deferredPrompt = null;
      document.getElementById("install-prompt").style.display = "none";
    }
  });

  // Handle dismiss button
  document.getElementById("install-dismiss").addEventListener("click", () => {
    document.getElementById("install-prompt").style.display = "none";
    localStorage.setItem("installDismissed", Date.now().toString());
  });

  // Show notification prompt if installed but notifications not enabled
  if (isInstalled && "Notification" in window && Notification.permission === "default") {
    const notificationDismissed = localStorage.getItem("notificationDismissed");
    const dismissTime = notificationDismissed ? parseInt(notificationDismissed) : 0;
    const daysSinceDismiss = (Date.now() - dismissTime) / (1000 * 60 * 60 * 24);

    if (daysSinceDismiss > 3) {
      setTimeout(() => {
        document.getElementById("notification-prompt").style.display = "block";
      }, 2000);
    }
  }
}

// Notification functionality
function initNotifications() {
  const enableButton = document.getElementById("enable-notifications");
  const dismissButton = document.getElementById("notification-dismiss");

  enableButton.addEventListener("click", async () => {
    if ("Notification" in window && "serviceWorker" in navigator) {
      const permission = await Notification.requestPermission();

      if (permission === "granted") {
        document.getElementById("notification-prompt").style.display = "none";
        scheduleNotifications();
      }
    }
  });

  dismissButton.addEventListener("click", () => {
    document.getElementById("notification-prompt").style.display = "none";
    localStorage.setItem("notificationDismissed", Date.now().toString());
  });

  // If notifications already granted, schedule them
  if ("Notification" in window && Notification.permission === "granted") {
    scheduleNotifications();
  }
}

function scheduleNotifications() {
  // Check for next prayer time and schedule notification
  const now = new Date();
  const prayerTimes = [
    { hour: 5, minute: 0, office: "morning", title: "Morning Prayer" },
    { hour: 11, minute: 0, office: "midday", title: "Midday Prayer" },
    { hour: 14, minute: 0, office: "evening", title: "Evening Prayer" },
    { hour: 20, minute: 0, office: "compline", title: "Compline" },
  ];

  prayerTimes.forEach((prayer) => {
    const prayerTime = new Date();
    prayerTime.setHours(prayer.hour, prayer.minute, 0, 0);

    // If prayer time has passed today, schedule for tomorrow
    if (prayerTime <= now) {
      prayerTime.setDate(prayerTime.getDate() + 1);
    }

    const timeUntilPrayer = prayerTime - now;

    setTimeout(() => {
      showNotification(prayer.title, prayer.office);
      // Reschedule for next day
      setInterval(() => {
        showNotification(prayer.title, prayer.office);
      }, 24 * 60 * 60 * 1000);
    }, timeUntilPrayer);
  });
}

function showNotification(title, office) {
  if ("serviceWorker" in navigator && Notification.permission === "granted") {
    navigator.serviceWorker.ready.then((registration) => {
      registration.showNotification(`Time for ${title}`, {
        body: "Open Common Prayer to pray the Daily Office.",
        icon: "/PrexCommunis/icon.svg",
        badge: "/PrexCommunis/icon.svg",
        tag: office,
        requireInteraction: false,
        vibrate: [200, 100, 200],
      });
    });
  }
}

// Register service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/PrexCommunis/service-worker.js")
    .then((registration) => {
      console.log("Service Worker registered:", registration);
    })
    .catch((error) => {
      console.log("Service Worker registration failed:", error);
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
  initPWA();
  initNotifications();

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
