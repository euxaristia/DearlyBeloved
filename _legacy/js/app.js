// Prayer content data
const prayerData = {
  morning: {
    title: "Morning Prayer",
    sections: [
      {
        type: "opening",
        content: `<div class="section">
                    <p class="rubric">At the beginning of Morning Prayer the Minister shall read with a loud voice some one or more of these Sentences of the Scriptures that follow.</p>
                    <p class="prayer-text">Wherefore seeing we also are compassed about with so great a cloud of witnesses, let us lay aside every weight, and the sin which doth so easily beset us, and let us run with patience the race which is set before us, looking unto Jesus the author and finisher of our faith. <span class="rubric">Hebrews 12. 1, 2.</span></p>

                    <p class="prayer-text">Dearly beloved brethren, the Scripture moveth us in sundry places to acknowledge and confess our manifold sins and wickedness; and that we should not dissemble nor cloke them before the face of Almighty God our heavenly Father; but confess them with an humble, lowly, penitent, and obedient heart; to the end that we may obtain forgiveness of the same, by his infinite goodness and mercy.</p>

                    <p class="prayer-text">And although we ought at all times humbly to acknowledge our sins before God; yet ought we most chiefly so to do, when we assemble and meet together to render thanks for the great benefits that we have received at his hands, to set forth his most worthy praise, to hear his most holy Word, and to ask those things which are requisite and necessary, as well for the body as the soul.</p>

                    <p class="prayer-text">Wherefore I pray and beseech you, as many as are here present, to accompany me with a pure heart and humble voice unto the throne of the heavenly grace.</p>

                    <p class="rubric">A general Confession to be said of the whole Congregation after the Minister, all kneeling.</p>
                    <p class="prayer-text response">Almighty and most merciful Father, We have erred and strayed from thy ways like lost sheep, We have followed too much the devices and desires of our own hearts, We have offended against thy holy laws, We have left undone those things which we ought to have done, And we have done those things which we ought not to have done; And there is no health in us. But thou, O Lord, have mercy upon us, miserable offenders. Spare thou them, O God, which confess their faults. Restore thou them that are penitent; According to thy promises declared unto mankind in Christ Jesu our Lord. And grant, O most merciful Father, for his sake, That we may hereafter live a godly, righteous, and sober life, To the glory of thy holy Name. Amen.</p>

                    <p class="rubric">The Absolution, or Remission of sins, to be pronounced by the Priest alone, standing; the people still kneeling.</p>
                    <p class="prayer-text">Almighty God, the Father of our Lord Jesus Christ, who desireth not the death of a sinner, but rather that he may turn from his wickedness, and live; and hath given power, and commandment, to his Ministers, to declare and pronounce to his people, being penitent, the Absolution and Remission of their sins: He pardoneth and absolveth all them that truly repent, and unfeignedly believe his holy Gospel. Wherefore let us beseech him to grant us true repentance, and his Holy Spirit, that those things may please him, which we do at this present; and that the rest of our life hereafter may be pure, and holy; so that at the last we may come to his eternal joy; through Jesus Christ our Lord. <span class="response">Amen.</span></p>

                    <p class="rubric">Then the Minister shall kneel, and say the Lord's Prayer with an audible voice; the people also kneeling, and repeating it with him.</p>
                    <p class="prayer-text response">Our Father who art in heaven, Hallowed be thy Name, Thy kingdom come, Thy will be done, on earth as it is in heaven. Give us this day our daily bread; And forgive us our trespasses, As we forgive them that trespass against us; And lead us not into temptation, But deliver us from evil. For thine is the kingdom, the power, and the glory, For ever and ever. Amen.</p>
                </div>`,
      },
      {
        type: "invitatory",
        content: `<div class="section">
                    <div class="versicle">
                        <span class="minister-label">Minister.</span>
                        <span>O Lord, open thou our lips;</span>
                    </div>
                    <div class="versicle">
                        <span class="people-label">People.</span>
                        <span class="response">And our mouth shall show forth thy praise.</span>
                    </div>

                    <div class="versicle">
                        <span class="minister-label">Minister.</span>
                        <span>O God, make speed to save us;</span>
                    </div>
                    <div class="versicle">
                        <span class="people-label">People.</span>
                        <span class="response">O Lord, make haste to help us.</span>
                    </div>

                    <p class="rubric">Here all standing up, the Priest shall say,</p>
                    <p class="prayer-text">Glory be to the Father, and to the Son, and to the Holy Ghost;</p>
                    <div class="versicle">
                        <span class="people-label">People.</span>
                        <span class="response">As it was in the beginning, is now, and ever shall be, world without end. Amen.</span>
                    </div>
                    <div class="versicle">
                        <span class="minister-label">Minister.</span>
                        <span>Praise ye the Lord.</span>
                    </div>
                    <div class="versicle">
                        <span class="people-label">People.</span>
                        <span class="response">The Lord's Name be praised.</span>
                    </div>
                </div>`,
      },
      {
        type: "venite",
        content: `<div class="section">
                    <p class="rubric">Then shall be said or sung this Psalm following; except on days for which Proper Anthems are provided. On the nineteenth day of the month, this Psalm shall be omitted in the ordinary course of the Psalms.</p>
                    <p class="rubric">At the discretion of the Minister the last four verses may be omitted.</p>
                    <div class="canticle">
                        <h3 class="canticle-title">Venite, Exultemus Domino. Psalm 95.</h3>
                        <p class="prayer-text antiphon">The Lord is glorious in his Saints: / O come, let us worship.</p>
                        <p class="prayer-text">
                            O Come, let us sing unto the Lord: / let us heartily rejoice in the strength of our salvation.<br>
                            Let us come before his presence with thanksgiving, / and show ourselves glad in him with psalms.<br>
                            For the Lord is a great God, / and a great King above all gods.<br>
                            In his hand are all the corners of the earth: / and the strength of the hills is his also.<br>
                            The sea is his, and he made it: / and his hands prepared the dry land.<br>
                            O Come, let us worship, and fall down, / and kneel before the Lord our Maker.<br>
                            For he is the Lord our God; / and we are the people of his pasture, and the sheep of his hand.<br>
                            To-Day, O that ye would hear his voice: / 'Harden not your hearts as in the Provocation, and as in the day of Temptation in the wilderness;<br>
                            When your fathers tempted me, / proved me, and saw my works.<br>
                            Forty years long was I grieved with that generation, and said, / "It is a people that do err in their hearts, for they have not known my ways";<br>
                            Unto whom I sware in my wrath, / that they should not enter into my rest.'<br>
                            GLORY be to the Father, and to the Son, / and to the Holy Ghost;<br>
                            As it was in the beginning, is now, and ever shall be, / world without end. Amen.
                        </p>
                        <p class="prayer-text antiphon">The Lord is glorious in his Saints: / O come, let us worship.</p>
                    </div>
                </div>`,
      },
      {
        type: "psalm",
        content: `<div class="section">
                    <p class="rubric">Then shall follow the Psalms in order as they be appointed.</p>
                    <!-- Psalms dynamically injected here -->
                </div>`,
      },
      {
        type: "first-lesson",
        content: `<div class="section">
                    <p class="rubric">Then shall be read distinctly with an audible voice the First Lesson, taken out of the Old Testament, as is appointed in the Kalendar, except there be proper Lessons assigned for that day.</p>
                    <!-- First lesson dynamically injected here -->
                </div>`,
      },
      {
        type: "te-deum",
        content: `<div class="section">
                    <p class="rubric">After the First Lesson shall be sung or said the Hymn Te Deum Laudamus. But the Canticle Benedicite, Omnia Opera, page 26, is suitable of use in Advent, in Lent, on Ember Days (except those in Whitsun Week), on Rogation Days, and when the third chapter of Daniel is read as the First Lesson.</p>
                    <p class="rubric">At the discretion of the Minister, the third section of Te Deum may be omitted.</p>
                    <div class="canticle">
                        <h3 class="canticle-title">Te Deum Laudamus.</h3>
                        <p class="prayer-text">
                            We praise thee, O God; we acknowledge thee to be the Lord.<br>
                            All the earth doth worship thee, the Father everlasting.<br>
                            To thee all Angels cry aloud, the Heavens and all the Powers therein.<br>
                            To thee Cherubim and Seraphim continually do cry,<br>
                            <span class="indent">Holy, Holy, Holy, Lord God of hosts;</span><br>
                            <span class="indent">Heaven and earth are full of the Majesty of thy glory.</span><br>
                            The glorious company of the Apostles praise thee;<br>
                            The goodly fellowship of the Prophets praise thee;<br>
                            The noble army of Martyrs praise thee;<br>
                            The holy Church throughout all the world doth acknowledge thee,<br>
                            <span class="indent">The Father, of an infinite Majesty;</span><br>
                            <span class="indent">Thine honourable, true, and only Son;</span><br>
                            <span class="indent">Also the Holy Ghost, the Comforter.</span><br><br>

                            Thou art the King of Glory, O Christ.<br>
                            Thou art the everlasting Son of the Father.<br>
                            When thou tookest upon thee to deliver man, thou didst not abhor the Virgin's womb.<br>
                            When thou hadst overcome the sharpness of death, thou didst open the kingdom of heaven to all believers.<br>
                            Thou sittest at the right hand of God, in the glory of the Father.<br>
                            We believe that thou shalt come to be our Judge.<br>
                            We therefore pray thee, help thy servants, whom thou hast redeemed with thy precious blood.<br>
                            Make them to be numbered with thy Saints, in glory everlasting.<br><br>

                            O Lord, save thy people, and bless thine heritage;<br>
                            Govern them, and lift them up for ever.<br>
                            Day by day we magnify thee;<br>
                            And we worship thy Name, ever world without end.<br>
                            Vouchsafe, O Lord, to keep us this day without sin.<br>
                            O Lord, have mercy upon us, have mercy upon us.<br>
                            O Lord, let thy mercy lighten upon us, as our trust is in thee.<br>
                            O Lord, in thee have I trusted: let me never be confounded.
                        </p>
                    </div>
                </div>`,
      },
      {
        type: "second-lesson",
        content: `<div class="section">
                    <p class="rubric">Then shall be read in like manner the Second Lesson, taken out of the New Testament.</p>
                    <!-- Second lesson dynamically injected here -->
                </div>`,
      },
      {
        type: "benedictus",
        content: `<div class="section">
                    <div class="canticle">
                        <h3 class="canticle-title">Benedictus. St Luke 1:68</h3>
                        <p class="prayer-text">
                            Blessed be the Lord God of Israel; / for he hath visited and redeemed his people;<br>
                            And hath raised up a mighty salvation for us, / in the house of his servant David;<br>
                            As he spake by the mouth of his holy Prophets, / which have been since the world began;<br>
                            That we should be saved from our enemies, / and from the hands of all that hate us;<br>
                            To perform the mercy promised to our forefathers, / and to remember his holy covenant;<br>
                            To perform the oath which he sware to our forefather Abraham, / that he would grant us<br>
                            That we being delivered out of the hands of our enemies / might serve him without fear,<br>
                            In holiness and righteousness before him, / all the days of our life.<br>
                            And thou, child, shalt be called the Prophet of the Highest: / for thou shalt go before the face of the Lord to prepare his ways;<br>
                            To give knowledge of salvation unto his people / for the remission of their sins;<br>
                            Through the tender mercy of our God; / whereby the day-spring from on high hath visited us;<br>
                            To give light to them that sit in darkness, and in the shadow of death, / and to guide our feet into the way of peace.<br>
                            GLORY be to the Father, and to the Son, / and to the Holy Ghost;<br>
                            As it was in the beginning, is now, and ever shall be, / world without end. Amen.
                        </p>
                    </div>
                </div>`,
      },
      {
        type: "creed",
        content: `<div class="section">
                    <p class="rubric">Then shall be sung or said the Apostles' Creed by the Minister and the people standing.</p>
                    <p class="prayer-text response">
                        I Believe in God the Father Almighty, Maker of heaven and earth:<br>
                        And in Jesus Christ his only Son our Lord, Who was conceived by the Holy Ghost, Born of the Virgin Mary, Suffered under Pontius Pilate, Was crucified, dead, and buried: He descended into hell; The third day he rose again from the dead; He ascended into heaven, And sitteth on the right hand of God the Father Almighty; From thence he shall come to judge the quick and the dead.<br>
                        I believe in the Holy Ghost; The holy Catholic Church; The Communion of Saints; The Forgiveness of sins; The Resurrection of the body, And the Life everlasting. Amen.
                    </p>
                </div>`,
      },
      {
        type: "prayers",
        content: `<div class="section">
                    <p class="rubric">And after that these Prayers following, all devoutly kneeling; the Minister first pronouncing with a loud voice,</p>

                    <div class="versicle">
                        <span>The Lord be with you;</span>
                    </div>
                    <div class="versicle">
                        <span class="people-label">People.</span>
                        <span class="response">And with thy spirit.</span>
                    </div>
                    <div class="versicle">
                        <span class="minister-label">Minister.</span>
                        <span>Let us pray.</span>
                    </div>

                    <p class="prayer-text response">
                        Lord, have mercy upon us.<br>
                        Christ, have mercy upon us.<br>
                        Lord, have mercy upon us.
                    </p>

                    <p class="prayer-text response">
                        Our Father who art in heaven, Hallowed be thy Name, Thy kingdom come, Thy will be done, on earth as it is in heaven. Give us this day our daily bread; And forgive us our trespasses, As we forgive them that trespass against us; And lead us not into temptation, But deliver us from evil. Amen.
                    </p>

                    <p class="rubric">Then the Priest standing up shall say:</p>

                    <div class="versicle">
                        <span>O Lord, show thy mercy upon us;</span>
                    </div>
                    <div class="versicle">
                        <span class="people-label">People.</span>
                        <span class="response">And grant us thy salvation.</span>
                    </div>

                    <div class="versicle">
                        <span class="minister-label">Priest.</span>
                        <span>O Lord, save the King;</span>
                    </div>
                    <div class="versicle">
                        <span class="people-label">People.</span>
                        <span class="response">And mercifully hear us when we call upon thee.</span>
                    </div>

                    <div class="versicle">
                        <span class="minister-label">Priest.</span>
                        <span>Endue thy Ministers with righteousness;</span>
                    </div>
                    <div class="versicle">
                        <span class="people-label">People.</span>
                        <span class="response">And make thy chosen people joyful.</span>
                    </div>

                    <div class="versicle">
                        <span class="minister-label">Priest.</span>
                        <span>O Lord, save thy people;</span>
                    </div>
                    <div class="versicle">
                        <span class="people-label">People.</span>
                        <span class="response">And bless thine inheritance.</span>
                    </div>

                    <div class="versicle">
                        <span class="minister-label">Priest.</span>
                        <span>Give peace in our time, O Lord;</span>
                    </div>
                    <div class="versicle">
                        <span class="people-label">People.</span>
                        <span class="response">And evermore mightily defend us.</span>
                    </div>

                    <div class="versicle">
                        <span class="minister-label">Priest.</span>
                        <span>O God, make clean our hearts within us;</span>
                    </div>
                    <div class="versicle">
                        <span class="people-label">People.</span>
                        <span class="response">And take not thy Holy Spirit from us.</span>
                    </div>
                </div>`,
      },
      {
        type: "collects",
        content: `<div class="section">
                    <p class="rubric">Then shall follow three Collects; the first of the Day; the second for Peace; the third for Grace.</p>
                    <div class="collect">
                        <p class="collect-title">The Collect of the Day</p>
                        <p class="prayer-text">
                            Almighty and everlasting God, who dost govern all things in heaven and earth: Mercifully hear the supplications of thy people, and grant us thy peace all the days of our life; through Jesus Christ our Lord. <span class="response">Amen.</span>
                        </p>
                    </div>

                    <div class="collect">
                        <p class="collect-title">The Second Collect, for Peace.</p>
                        <p class="prayer-text">
                            O God, who art the author of peace and lover of concord, in knowledge of whom standeth our eternal life, whose service is perfect freedom: Defend us thy humble servants in all assaults of our enemies; that we, surely trusting in thy defence, may not fear the power of any adversaries; through the might of Jesus Christ our Lord. <span class="response">Amen.</span>
                        </p>
                    </div>

                    <div class="collect">
                        <p class="collect-title">The Third Collect, for Grace.</p>
                        <p class="prayer-text">
                            O Lord our heavenly Father, Almighty and everlasting God, who hast safely brought us to the beginning of this day: Defend us in the same with thy mighty power; and grant that this day we fall into no sin, neither run into any kind of danger; but that all our doings may be ordered by thy governance, to do always that is righteous in thy sight; through Jesus Christ our Lord. <span class="response">Amen.</span>
                        </p>
                    </div>

                    <p class="rubric">In Quires and Places where they sing, here followeth the Anthem.</p>
                </div>`,
      },
      {
        type: "state-prayers",
        content: `<div class="section">
                    <p class="rubric">Then shall be read one of the Prayers for the King, and the Prayer for the Clergy and People.</p>

                    <div class="collect">
                        <p class="collect-title">A Prayer for the King's Majesty.</p>
                        <p class="prayer-text">
                            O Lord our heavenly Father, high and mighty, King of kings, Lord of lords, the only Ruler of princes, who dost from thy throne behold all the dwellers upon earth: Most heartily we beseech thee with thy favour to behold our most gracious Sovereign Lord, King Charles; and so replenish him with the grace of thy Holy Spirit, that he may alway incline to thy will, and walk in thy way: Endue him plenteously with heavenly gifts; grant him in health and wealth long to live; strengthen him that he may vanquish and overcome all his enemies, and finally after this life he may attain everlasting joy and felicity; through Jesus Christ our Lord. <span class="response">Amen.</span>
                        </p>
                    </div>

                    <p class="rubric">Or this:</p>

                    <div class="collect">
                        <p class="collect-title">A Prayer for Those in Authority.</p>
                        <p class="prayer-text">
                            Almighty Father, whose kingdom is everlasting: We beseech thee of thy mercy to direct and prosper the counsels of all those who bear authority in this land, that in humility and honesty they may faithfully serve the people committed to their charge. And grant, we pray thee, that religion and piety, peace and unity, truth and justice, may be established among us for all generations, through Jesus Christ our Lord. <span class="response">Amen.</span>
                        </p>
                        <p class="copyright-notice" style="font-size: 0.7em; font-style: italic; color: #888; margin-top: -12px; margin-bottom: 0;">
                            Taken from The 1662 Book of Common Prayer: International Edition (IVP Academic 2021). All rights to new material and updated language reserved.
                        </p>
                    </div>

                    <div class="collect">
                        <p class="collect-title">A Prayer for the Clergy and People.</p>
                        <p class="prayer-text">
                            Almighty and everlasting God, from whom cometh every good and perfect gift: Send down upon our Bishops and Clergy, and all Congregations committed to their charge, the healthful Spirit of thy grace; and that they may truly please thee, pour upon them the continual dew of thy blessing. Grant this, O Lord, for the honour of our Advocate and Mediator, Jesus Christ. <span class="response">Amen.</span>
                        </p>
                    </div>
                </div>`,
      },
      {
        type: "occasional-prayers",
        content: `<div class="section">
                    <p class="rubric">Then may be read any of the Occasional Prayers or Thanksgivings, or any prayers sanctioned by the Ordinary, always ending with the Prayer of St Chrysostom and the Grace; and before any of the prayers may be said Let us pray for —, and before any of the thanksgivings, Let us give thanks for —.</p>

                    <div class="collect">
                        <p class="collect-title">A Prayer for all Conditions of men.</p>
                        <p class="prayer-text">
                            O God, the Creator and Preserver of all mankind, we humbly beseech thee for all sorts and conditions of men; that thou wouldest be pleased to make thy ways known unto them, thy saving health unto all nations. More especially we pray for the good estate of the Catholic Church; that it may be so guided and governed by thy good Spirit, that all who profess and call themselves Christians may be led into the way of truth, and hold the faith in unity of spirit, in the bond of peace, and in righteousness of life. Finally we commend to thy fatherly goodness all those, who are any ways afflicted or distressed in mind, body, or estate; that it may please thee to comfort and relieve them, according to their several necessities, giving them patience under their sufferings, and a happy issue out of all their afflictions. And this we beg for Jesus Christ his sake. <span class="response">Amen.</span>
                        </p>
                    </div>

                    <div class="collect">
                        <p class="collect-title">A General Thanksgiving</p>
                        <p class="prayer-text">
                            Almighty God, Father of all mercies, We thine unworthy servants do give thee most humble and hearty thanks For all thy goodness and loving-kindness To us and to all men; We bless thee for our creation, preservation, and all the blessings of this life; But above all for thine inestimable love In the redemption of the world by our Lord Jesus Christ; For the means of grace, And for the hope of glory. And we beseech thee, give us that due sense of all thy mercies, That our hearts may be unfeignedly thankful, And that we show forth thy praise, Not only with our lips, but in our lives; By giving up ourselves to thy service, And by walking before thee in holiness and righteousness all our days; Through Jesus Christ our Lord, To whom, with thee and the Holy Ghost, be all honour and glory, world without end. <span class="response">Amen.</span>
                        </p>
                    </div>
                </div>`,
      },
      {
        type: "closing",
        content: `<div class="section">
                    <div class="collect">
                        <p class="collect-title">A Prayer of Saint Chrysostom.</p>
                        <p class="prayer-text">
                            Almighty God, who hast given us grace at this time with one accord to make our common supplications unto thee; and dost promise that when two or three are gathered together in thy Name thou wilt grant their requests: Fulfil now, O Lord, the desires and petitions of thy servants, as may be most expedient for them; granting us in this world knowledge of thy truth, and in the world to come life everlasting. <span class="response">Amen.</span>
                        </p>
                    </div>

                    <p class="prayer-text">
                        The grace of our Lord Jesus Christ, and the love of God, and the fellowship of the Holy Ghost, be with us all evermore. <span class="response">Amen.</span>
                    </p>
                    <p class="rubric">2 Corinthians 13:14</p>

                    <p class="rubric">A Sermon may be preached here and the offerings of the people received and presented at the Lord's Table. Or the Sermon may be preached immediately after the Hymn or Anthem following the Third Collect. The Minister shall then proceed to the intercessions and thanksgivings, ending with the Prayer of St Chrysostom and the Grace.</p>
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
                    <p class="rubric">At the beginning of Evening Prayer the Minister shall read with a loud voice some one or more of these Sentences of the Scriptures that follow.</p>

                    <p class="prayer-text">Go ye into all the world, and preach the Gospel to every creature. <span class="rubric">St. Mark 16. 15.</span></p>

                    <p class="prayer-text">Dearly beloved brethren, the Scripture moveth us in sundry places to acknowledge and confess our manifold sins and wickedness; and that we should not dissemble nor cloke them before the face of Almighty God our heavenly Father; but confess them with an humble, lowly, penitent, and obedient heart; to the end that we may obtain forgiveness of the same, by his infinite goodness and mercy.</p>

                    <p class="prayer-text">And although we ought at all times humbly to acknowledge our sins before God; yet ought we most chiefly so to do, when we assemble and meet together to render thanks for the great benefits that we have received at his hands, to set forth his most worthy praise, to hear his most holy Word, and to ask those things which are requisite and necessary, as well for the body as the soul.</p>

                    <p class="prayer-text">Wherefore I pray and beseech you, as many as are here present, to accompany me with a pure heart and humble voice unto the throne of the heavenly grace.</p>

                    <p class="rubric">A general Confession to be said of the whole Congregation after the Minister, all kneeling.</p>
                    <p class="prayer-text response">Almighty and most merciful Father, We have erred and strayed from thy ways like lost sheep, We have followed too much the devices and desires of our own hearts, We have offended against thy holy laws, We have left undone those things which we ought to have done, And we have done those things which we ought not to have done; And there is no health in us. But thou, O Lord, have mercy upon us, miserable offenders. Spare thou them, O God, which confess their faults. Restore thou them that are penitent; According to thy promises declared unto mankind in Christ Jesu our Lord. And grant, O most merciful Father, for his sake, That we may hereafter live a godly, righteous, and sober life, To the glory of thy holy Name. Amen.</p>

                    <p class="rubric">The Absolution, or Remission of sins, to be pronounced by the Priest alone, standing; the people still kneeling.</p>
                    <p class="prayer-text">Almighty God, the Father of our Lord Jesus Christ, who desireth not the death of a sinner, but rather that he may turn from his wickedness, and live; and hath given power, and commandment, to his Ministers, to declare and pronounce to his people, being penitent, the Absolution and Remission of their sins: He pardoneth and absolveth all them that truly repent, and unfeignedly believe his holy Gospel. Wherefore let us beseech him to grant us true repentance, and his Holy Spirit, that those things may please him, which we do at this present; and that the rest of our life hereafter may be pure, and holy; so that at the last we may come to his eternal joy; through Jesus Christ our Lord. <span class="response">Amen.</span></p>

                    <p class="rubric">Then the Minister shall kneel, and say the Lord's Prayer; the people also kneeling, and repeating it with him.</p>
                    <p class="prayer-text response">Our Father who art in heaven, Hallowed be thy Name, Thy kingdom come, Thy will be done, on earth as it is in heaven. Give us this day our daily bread; And forgive us our trespasses, As we forgive them that trespass against us; And lead us not into temptation, But deliver us from evil. For thine is the kingdom, the power, and the glory, For ever and ever. Amen.</p>
                </div>`,
      },
      {
        type: "invitatory",
        content: `<div class="section">
                    <div class="versicle">
                        <span class="minister-label">Minister.</span>
                        <span>O God, make speed to save us;</span>
                    </div>
                    <div class="versicle">
                        <span class="people-label">People.</span>
                        <span class="response">O Lord, make haste to help us.</span>
                    </div>

                    <p class="rubric">Here all standing up, the Priest shall say,</p>
                    <p class="prayer-text">Glory be to the Father, and to the Son, and to the Holy Ghost;</p>
                    <div class="versicle">
                        <span class="people-label">People.</span>
                        <span class="response">As it was in the beginning, is now, and ever shall be, world without end. Amen.</span>
                    </div>
                    <div class="versicle">
                        <span class="minister-label">Minister.</span>
                        <span>Praise ye the Lord.</span>
                    </div>
                    <div class="versicle">
                        <span class="people-label">People.</span>
                        <span class="response">The Lord's Name be praised.</span>
                    </div>
                </div>`,
      },
      {
        type: "psalm",
        content: `<div class="section">
                    <p class="rubric">Then shall follow the Psalms in order as they be appointed.</p>
                    <!-- Psalms dynamically injected here -->
                </div>`,
      },
      {
        type: "first-lesson",
        content: `<div class="section">
                    <p class="rubric">Then shall be read distinctly with an audible voice the First Lesson, taken out of the Old Testament, as is appointed in the Kalendar, except there be proper Lessons assigned for that day.</p>
                    <!-- First lesson dynamically injected here -->
                </div>`,
      },
      {
        type: "magnificat",
        content: `<div class="section">
                    <p class="rubric">And after that, Magnificat (or the Song of the blessed Virgin Mary) in English, as followeth.</p>
                    <div class="canticle">
                        <h3 class="canticle-title">Magnificat. St Luke 1:46</h3>
                        <p class="prayer-text">
                            My soul doth magnify the Lord, / and my spirit hath rejoiced in God my Saviour;<br>
                            For he hath regarded / the lowliness of his handmaiden.<br>
                            For behold, from henceforth / all generations shall call me blessed.<br>
                            For he that is mighty hath magnified me; / and holy is his Name.<br>
                            And his mercy is on them that fear him / throughout all generations.<br>
                            He hath shewed strength with his arm; / he hath scattered the proud in the imagination of their hearts.<br>
                            He hath put down the mighty from their seat, / and hath exalted the humble and meek.<br>
                            He hath filled the hungry with good things; / and the rich he hath sent empty away.<br>
                            He remembering his mercy hath holpen his servant Israel, / as he promised to our forefathers, Abraham and his seed, for ever.<br><br>
                            GLORY be to the Father, and to the Son, / and to the Holy Ghost;<br>
                            As it was in the beginning, is now, and ever shall be, / world without end. Amen.
                        </p>
                    </div>
                </div>`,
      },
      {
        type: "second-lesson",
        content: `<div class="section">
                    <p class="rubric">Then shall be read in like manner the Second Lesson, taken out of the New Testament.</p>
                    <!-- Second lesson dynamically injected here -->
                </div>`,
      },
      {
        type: "nunc-dimittis",
        content: `<div class="section">
                    <p class="rubric">And after that, Nunc dimittis (or the Song of Simeon) in English, as followeth.</p>
                    <div class="canticle">
                        <h3 class="canticle-title">Nunc Dimittis. St Luke 2:29</h3>
                        <p class="prayer-text">
                            Lord, now lettest thou thy servant depart in peace, / according to thy word;<br>
                            For mine eyes have seen / thy salvation,<br>
                            Which thou hast prepared / before the face of all people;<br>
                            To be a light to lighten the Gentiles, / and to be the glory of thy people Israel.<br><br>
                            GLORY be to the Father, and to the Son, / and to the Holy Ghost;<br>
                            As it was in the beginning, is now, and ever shall be, / world without end. Amen.
                        </p>
                    </div>
                </div>`,
      },
      {
        type: "creed",
        content: `<div class="section">
                    <p class="rubric">Then shall be sung or said the Apostles' Creed by the Minister and the people standing.</p>
                    <p class="prayer-text response">
                        I Believe in God the Father Almighty, Maker of heaven and earth:<br>
                        And in Jesus Christ his only Son our Lord, Who was conceived by the Holy Ghost, Born of the Virgin Mary, Suffered under Pontius Pilate, Was crucified, dead, and buried: He descended into hell; The third day he rose again from the dead; He ascended into heaven, And sitteth on the right hand of God the Father Almighty; From thence he shall come to judge the quick and the dead.<br>
                        I believe in the Holy Ghost; The holy Catholic Church; The Communion of Saints; The Forgiveness of sins; The Resurrection of the body, And the Life everlasting. Amen.
                    </p>
                </div>`,
      },
      {
        type: "prayers",
        content: `<div class="section">
                    <p class="rubric">And after that these Prayers following, all devoutly kneeling; the Minister first pronouncing with a loud voice,</p>
                    <div class="versicle">
                        <span>The Lord be with you;</span>
                    </div>
                    <div class="versicle">
                        <span class="people-label">People.</span>
                        <span class="response">And with thy spirit.</span>
                    </div>
                    <div class="versicle">
                        <span class="minister-label">Minister.</span>
                        <span>Let us pray.</span>
                    </div>

                    <p class="prayer-text response">
                        Lord, have mercy upon us.<br>
                        Christ, have mercy upon us.<br>
                        Lord, have mercy upon us.
                    </p>

                    <p class="prayer-text response">
                        Our Father who art in heaven, Hallowed be thy Name, Thy kingdom come, Thy will be done, on earth as it is in heaven. Give us this day our daily bread; And forgive us our trespasses, As we forgive them that trespass against us; And lead us not into temptation, But deliver us from evil. Amen.
                    </p>

                    <p class="rubric">Then the Priest standing up shall say:</p>

                    <div class="versicle">
                        <span>O Lord, show thy mercy upon us;</span>
                    </div>
                    <div class="versicle">
                        <span class="people-label">People.</span>
                        <span class="response">And grant us thy salvation.</span>
                    </div>

                    <div class="versicle">
                        <span class="minister-label">Priest.</span>
                        <span>O Lord, save the King;</span>
                    </div>
                    <div class="versicle">
                        <span class="people-label">People.</span>
                        <span class="response">And mercifully hear us when we call upon thee.</span>
                    </div>

                    <div class="versicle">
                        <span class="minister-label">Priest.</span>
                        <span>Endue thy Ministers with righteousness;</span>
                    </div>
                    <div class="versicle">
                        <span class="people-label">People.</span>
                        <span class="response">And make thy chosen people joyful.</span>
                    </div>

                    <div class="versicle">
                        <span class="minister-label">Priest.</span>
                        <span>O Lord, save thy people;</span>
                    </div>
                    <div class="versicle">
                        <span class="people-label">People.</span>
                        <span class="response">And bless thine inheritance.</span>
                    </div>

                    <div class="versicle">
                        <span class="minister-label">Priest.</span>
                        <span>Give peace in our time, O Lord;</span>
                    </div>
                    <div class="versicle">
                        <span class="people-label">People.</span>
                        <span class="response">And evermore mightily defend us.</span>
                    </div>

                    <div class="versicle">
                        <span class="minister-label">Priest.</span>
                        <span>O God, make clean our hearts within us;</span>
                    </div>
                    <div class="versicle">
                        <span class="people-label">People.</span>
                        <span class="response">And take not thy Holy Spirit from us.</span>
                    </div>
                </div>`,
      },
      {
        type: "collects",
        content: `<div class="section">
                    <p class="rubric">Then shall follow three Collects; the first of the Day; the second for Peace; the third for Aid against all Perils.</p>
                    <div class="collect">
                        <p class="collect-title">The Collect of the Day</p>
                        <p class="prayer-text">
                            Almighty and everlasting God, who dost govern all things in heaven and earth: Mercifully hear the supplications of thy people, and grant us thy peace all the days of our life; through Jesus Christ our Lord. <span class="response">Amen.</span>
                        </p>
                    </div>

                    <div class="collect">
                        <p class="collect-title">The Second Collect at Evening Prayer.</p>
                        <p class="prayer-text">
                            O God, from whom all holy desires, all good counsels, and all just works do proceed: Give unto thy servants that peace which the world cannot give; that both our hearts may be set to obey thy commandments, and also that by thee we being defended from the fear of our enemies may pass our time in rest and quietness; through the merits of Jesus Christ our Saviour. <span class="response">Amen.</span>
                        </p>
                    </div>

                    <div class="collect">
                        <p class="collect-title">The Third Collect, for Aid against all Perils.</p>
                        <p class="prayer-text">
                            Lighten our darkness, we beseech thee, O Lord; and by thy great mercy defend us from all perils and dangers of this night; for the love of thy only Son, our Saviour, Jesus Christ. <span class="response">Amen.</span>
                        </p>
                    </div>

                    <p class="rubric">In Quires and Places where they sing, here followeth the Anthem.</p>
                </div>`,
      },
      {
        type: "state-prayers",
        content: `<div class="section">
                    <p class="rubric">Then shall be read one of the Prayers for the King, and the Prayer for the Clergy and People.</p>

                    <div class="collect">
                        <p class="collect-title">A Prayer for the King's Majesty.</p>
                        <p class="prayer-text">
                            O Lord our heavenly Father, high and mighty, King of kings, Lord of lords, the only Ruler of princes, who dost from thy throne behold all the dwellers upon earth: Most heartily we beseech thee with thy favour to behold our most gracious Sovereign Lord, King Charles; and so replenish him with the grace of thy Holy Spirit, that he may alway incline to thy will, and walk in thy way: Endue him plenteously with heavenly gifts; grant him in health and wealth long to live; strengthen him that he may vanquish and overcome all his enemies, and finally after this life he may attain everlasting joy and felicity; through Jesus Christ our Lord. <span class="response">Amen.</span>
                        </p>
                    </div>

                    <p class="rubric">Or this:</p>

                    <div class="collect">
                        <p class="collect-title">A Prayer for Those in Authority.</p>
                        <p class="prayer-text">
                            Almighty Father, whose kingdom is everlasting: We beseech thee of thy mercy to direct and prosper the counsels of all those who bear authority in this land, that in humility and honesty they may faithfully serve the people committed to their charge. And grant, we pray thee, that religion and piety, peace and unity, truth and justice, may be established among us for all generations, through Jesus Christ our Lord. <span class="response">Amen.</span>
                        </p>
                        <p class="copyright-notice" style="font-size: 0.7em; font-style: italic; color: #888; margin-top: -12px; margin-bottom: 0;">
                            Taken from The 1662 Book of Common Prayer: International Edition (IVP Academic 2021). All rights to new material and updated language reserved.
                        </p>
                    </div>

                    <div class="collect">
                        <p class="collect-title">A Prayer for the Clergy and People.</p>
                        <p class="prayer-text">
                            Almighty and everlasting God, from whom cometh every good and perfect gift: Send down upon our Bishops and Clergy, and all Congregations committed to their charge, the healthful Spirit of thy grace; and that they may truly please thee, pour upon them the continual dew of thy blessing. Grant this, O Lord, for the honour of our Advocate and Mediator, Jesus Christ. <span class="response">Amen.</span>
                        </p>
                    </div>
                </div>`,
      },
      {
        type: "optional-prayers",
        content: `<div class="section">
                    <p class="rubric">Then may be read any of the Occasional Prayers or Thanksgivings, or any prayers sanctioned by the Ordinary, always ending with the Prayer of St Chrysostom and the Grace.</p>

                    <div class="collect">
                        <p class="collect-title">A Prayer for all Conditions of men.</p>
                        <p class="prayer-text">
                            O God, the Creator and Preserver of all mankind, we humbly beseech thee for all sorts and conditions of men; that thou wouldest be pleased to make thy ways known unto them, thy saving health unto all nations. More especially we pray for the good estate of the Catholic Church; that it may be so guided and governed by thy good Spirit, that all who profess and call themselves Christians may be led into the way of truth, and hold the faith in unity of spirit, in the bond of peace, and in righteousness of life. Finally we commend to thy fatherly goodness all those, who are any ways afflicted or distressed in mind, body, or estate; that it may please thee to comfort and relieve them, according to their several necessities, giving them patience under their sufferings, and a happy issue out of all their afflictions. And this we beg for Jesus Christ his sake. <span class="response">Amen.</span>
                        </p>
                    </div>

                    <div class="collect">
                        <p class="collect-title">A General Thanksgiving</p>
                        <p class="prayer-text">
                            Almighty God, Father of all mercies, We thine unworthy servants do give thee most humble and hearty thanks For all thy goodness and loving-kindness To us and to all men; We bless thee for our creation, preservation, and all the blessings of this life; But above all for thine inestimable love In the redemption of the world by our Lord Jesus Christ; For the means of grace, And for the hope of glory. And we beseech thee, give us that due sense of all thy mercies, That our hearts may be unfeignedly thankful, And that we show forth thy praise, Not only with our lips, but in our lives; By giving up ourselves to thy service, And by walking before thee in holiness and righteousness all our days; Through Jesus Christ our Lord, To whom, with thee and the Holy Ghost, be all honour and glory, world without end. <span class="response">Amen.</span>
                        </p>
                    </div>
                </div>`,
      },
      {
        type: "closing",
        content: `<div class="section">
                    <div class="collect">
                        <p class="collect-title">A Prayer of Saint Chrysostom.</p>
                        <p class="prayer-text">
                            Almighty God, who hast given us grace at this time with one accord to make our common supplications unto thee; and dost promise that when two or three are gathered together in thy Name thou wilt grant their requests: Fulfil now, O Lord, the desires and petitions of thy servants, as may be most expedient for them; granting us in this world knowledge of thy truth, and in the world to come life everlasting. <span class="response">Amen.</span>
                        </p>
                    </div>

                    <p class="prayer-text">
                        The grace of our Lord Jesus Christ, and the love of God, and the fellowship of the Holy Ghost, be with us all evermore. <span class="response">Amen.</span>
                    </p>
                    <p class="rubric">2 Corinthians 13:14</p>

                    <p class="rubric">A Sermon may be preached here and the offerings of the people received and presented at the Lord's Table. Or the Sermon may be preached immediately after the Hymn or Anthem following the Second Collect. The Minister shall then proceed to the intercessions and thanksgivings, ending with the Prayer of St Chrysostom and the Grace.</p>
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
                    <p class="rubric">At Midday the following devotion may be used.</p>

                    <p class="prayer-text">O God, make speed to save us;</p>
                    <p class="prayer-text response">O Lord, make haste to help us.</p>

                    <p class="prayer-text">Glory be to the Father, and to the Son, and to the Holy Ghost;</p>
                    <p class="prayer-text response">As it was in the beginning, is now, and ever shall be, world without end. Amen.</p>
                </div>`,
      },
      {
        type: "psalm",
        content: `<div class="section">
                    <p class="rubric">Then shall be said one of the following Psalms.</p>
                    <div class="psalm">
                        <h3 class="psalm-title">Psalm 121</h3>
                        <p class="rubric"><em>Levavi oculos.</em></p>
                        <p class="psalm-verse">I will lift up mine eyes unto the hills: / from whence cometh my help.</p>
                        <p class="psalm-verse">My help cometh even from the Lord, / who hath made heaven and earth.</p>
                        <p class="psalm-verse">He will not suffer thy foot to be moved; / and he that keepeth thee will not sleep.</p>
                        <p class="psalm-verse">Behold, he that keepeth Israel / shall neither slumber nor sleep.</p>
                        <p class="psalm-verse">The Lord himself is thy keeper; / the Lord is thy defence upon thy right hand;</p>
                        <p class="psalm-verse">So that the sun shall not burn thee by day, / neither the moon by night.</p>
                        <p class="psalm-verse">The Lord shall preserve thee from all evil; / yea, it is even he that shall keep thy soul.</p>
                        <p class="psalm-verse">The Lord shall preserve thy going out, and thy coming in, / from this time forth for evermore.</p>
                    </div>
                    <div class="gloria">
                        <p>Glory be to the Father, and to the Son, and to the Holy Ghost;</p>
                        <p>as it was in the beginning, is now, and ever shall be, world without end. Amen.</p>
                    </div>
                </div>`,
      },
      {
        type: "reading",
        content: `<div class="section">
                    <p class="rubric">Then may be read a sentence of Scripture.</p>
                    <p class="prayer-text">Jesus said, And I, if I be lifted up from the earth, will draw all men unto me. <span class="rubric">St John 12. 32.</span></p>
                </div>`,
      },
      {
        type: "prayers",
        content: `<div class="section">
                    <p class="rubric">Then shall be said the following prayers.</p>

                    <p class="prayer-text response">
                        Lord, have mercy upon us.<br>
                        Christ, have mercy upon us.<br>
                        Lord, have mercy upon us.
                    </p>

                    <p class="prayer-text response">
                        Our Father, who art in heaven, Hallowed be thy Name, Thy kingdom come, Thy will be done, on earth as it is in heaven. Give us this day our daily bread; And forgive us our trespasses, As we forgive them that trespass against us; And lead us not into temptation, But deliver us from evil. <span class="response">Amen.</span>
                    </p>

                    <p class="prayer-text">O Lord, hear our prayer;</p>
                    <p class="prayer-text response">And let our cry come unto thee.</p>
                </div>`,
      },
      {
        type: "collect",
        content: `<div class="section">
                    <p class="prayer-text">
                        Blessed Saviour, who at this hour didst hang upon the Cross, stretching out thy loving arms: Grant that all mankind may look unto thee and be saved; who livest and reignest with the Father and the Holy Ghost, one God, world without end. <span class="response">Amen.</span>
                    </p>

                    <p class="prayer-text">
                        The grace of our Lord Jesus Christ, and the love of God, and the fellowship of the Holy Ghost, be with us all evermore. <span class="response">Amen.</span>
                    </p>
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
                    <p class="rubric">The Office of Compline may be used after Evening Prayer, or as a separate late evening devotion.</p>

                    <p class="rubric">The Minister beginneth:</p>

                    <p class="prayer-text">The Lord Almighty grant us a quiet night and a perfect end. <span class="response">Amen.</span></p>

                    <p class="rubric">Then shall be read this Sentence:</p>
                    <p class="prayer-text">Brethren, be sober, be vigilant; because your adversary the devil, as a roaring lion, walketh about, seeking whom he may devour: whom resist, stedfast in the faith. <span class="rubric">1 St Peter 5. 8, 9.</span></p>

                    <p class="prayer-text">O God, make speed to save us;</p>
                    <p class="prayer-text answer-line"><em>Answer</em> <span class="response">O Lord, make haste to help us.</span></p>

                    <p class="prayer-text minister-line"><em>Minister</em> Glory be to the Father, and to the Son, and to the Holy Ghost;</p>
                    <p class="prayer-text answer-line"><em>Answer</em> <span class="response">As it was in the beginning, is now, and ever shall be, world without end. Amen.</span></p>

                    <p class="prayer-text minister-line"><em>Minister</em> Praise ye the Lord;</p>
                    <p class="prayer-text answer-line"><em>Answer</em> <span class="response">The Lord's name be praised.</span></p>

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

                    <p class="prayer-text minister-line"><em>Minister</em> O Lord, show thy mercy upon us;</p>
                    <p class="prayer-text answer-line"><em>Answer</em> <span class="response">And grant us thy salvation.</span></p>

                    <p class="prayer-text minister-line"><em>Minister</em> O Lord, save the King;</p>
                    <p class="prayer-text answer-line"><em>Answer</em> <span class="response">And mercifully hear us when we call upon thee.</span></p>

                    <p class="prayer-text minister-line"><em>Minister</em> Endue thy Ministers with righteousness;</p>
                    <p class="prayer-text answer-line"><em>Answer</em> <span class="response">And make thy chosen people joyful.</span></p>

                    <p class="prayer-text minister-line"><em>Minister</em> O Lord, save thy people;</p>
                    <p class="prayer-text answer-line"><em>Answer</em> <span class="response">And bless thine inheritance.</span></p>

                    <p class="prayer-text minister-line"><em>Minister</em> Give peace in our time, O Lord;</p>
                    <p class="prayer-text answer-line"><em>Answer</em> <span class="response">And evermore mightily defend us.</span></p>

                    <p class="prayer-text minister-line"><em>Minister</em> O God, make clean our hearts within us;</p>
                    <p class="prayer-text answer-line"><em>Answer</em> <span class="response">And take not thy Holy Spirit from us.</span></p>
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
                        Visit, we beseech thee, O Lord, this habitation, and drive far from it all the snares of the enemy; let thy holy angels dwell herein to preserve us in peace; and let thy blessing be upon us evermore; through Jesus Christ our Lord. <span class="response">Amen.</span>
                    </p>

                    <p class="prayer-text">
                        Look down, O Lord, from thy heavenly throne, illuminate the darkness of this night with thy celestial brightness, and from the sons of light banish the deeds of darkness; through Jesus Christ our Lord. <span class="response">Amen.</span>
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
  // Fix scroll restoration glitch
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  // Use the office already determined by the inline script (to prevent flash)
  // Fall back to getAppropriateOffice() if not set
  const initialOffice = document.documentElement.getAttribute(
    "data-initial-office",
  );
  currentOffice = initialOffice || getAppropriateOffice();

  updateDate();
  renderPrayer(currentOffice);
  setupEventListeners();
  setupOfficeSwitchButton();

  // Set active button based on current office
  updateActiveButton(currentOffice);
  updateOfficeSwitchButton();

  // Update date and office switch button every minute
  setInterval(() => {
    updateDate();
    updateOfficeSwitchButton();
  }, 60000);
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

// Update office switch button
function updateOfficeSwitchButton() {
  const officeSwitchBtn = document.getElementById("office-switch-btn");
  if (!officeSwitchBtn) return;
  
  const appropriateOffice = getAppropriateOffice();
  const officeNames = {
    "morning": "Morning Prayer",
    "midday": "Midday Prayer", 
    "evening": "Evening Prayer",
    "compline": "Compline"
  };
  
  const officeIcons = {
    "morning": "🌅",
    "midday": "☀️",
    "evening": "🕯️", 
    "compline": "🌙"
  };
  
  const iconElement = officeSwitchBtn.querySelector('.office-switch-icon');
  const textElement = officeSwitchBtn.querySelector('.office-switch-text');
  
  iconElement.textContent = officeIcons[appropriateOffice];
  textElement.textContent = `Switch to ${officeNames[appropriateOffice]}`;

  // Hide button if already on appropriate office
  if (currentOffice === appropriateOffice) {
    officeSwitchBtn.classList.add('hidden');
  } else {
    const wasHidden = officeSwitchBtn.classList.contains('hidden');

    if (wasHidden) {
      // Disable transitions temporarily when showing the button
      const originalTransition = officeSwitchBtn.style.transition;
      officeSwitchBtn.style.setProperty('transition', 'none', 'important');
      officeSwitchBtn.classList.remove('hidden');

      // Force reflow to ensure the button is positioned before re-enabling transitions
      void officeSwitchBtn.offsetHeight;

      // Re-enable transitions immediately
      requestAnimationFrame(() => {
        if (originalTransition) {
          officeSwitchBtn.style.transition = originalTransition;
        } else {
          officeSwitchBtn.style.removeProperty('transition');
        }
      });
    } else {
      officeSwitchBtn.classList.remove('hidden');
    }
  }
}

// Setup office switch button
function setupOfficeSwitchButton() {
  const officeSwitchBtn = document.getElementById("office-switch-btn");
  if (!officeSwitchBtn) return;
  
  officeSwitchBtn.addEventListener('click', () => {
    const appropriateOffice = getAppropriateOffice();
    
    // Store the user's office preference
    localStorage.setItem('selected-office', appropriateOffice);
    
    // Update current office and render
    currentOffice = appropriateOffice;
    renderPrayer(currentOffice);
    
    // Update UI elements
    updateActiveButton(currentOffice);
    setActiveSidebarItem(currentOffice);
    updateOfficeSwitchButton();
    
    // Remove data-initial-office attribute if it exists
    document.documentElement.removeAttribute("data-initial-office");
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  // Inject dynamic content for morning and evening prayer
  if (office === 'morning' || office === 'evening') {
    injectSentences(office);
    injectPsalms(office);
    injectReadings(office);
    injectCollects();
  }
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

      // Store the user's office preference
      localStorage.setItem('selected-office', currentOffice);

      renderPrayer(currentOffice);
      updateOfficeSwitchButton();

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
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/PrexCommunis/service-worker.js")
      .then((registration) => {
        console.log("Service Worker registered:", registration);

        // Check for updates
        registration.addEventListener("updatefound", () => {
          const newWorker = registration.installing;
          newWorker.addEventListener("statechange", () => {
            if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
              // New worker is ready, but waiting to take over
              console.log("New version available! Reloading...");
            }
          });
        });
      })
      .catch((error) => {
        console.log("Service Worker registration failed:", error);
      });
  });

  // Reload the page when a new service worker takes over
  let refreshing = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (!refreshing) {
      window.location.reload();
      refreshing = true;
    }
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

// =====================
// Bible Readings System
// =====================

// Fetch Bible text from bible-api.com (KJV)
async function fetchBibleText(reference) {
  try {
    // bible-api.com expects references like "Genesis+1:1-20" or "John+3:16"
    const encodedRef = encodeURIComponent(reference);
    const response = await fetch(`https://bible-api.com/${encodedRef}?translation=kjv`);

    if (!response.ok) {
      throw new Error(`Failed to fetch ${reference}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching ${reference}:`, error);
    return null;
  }
}

// Format verse text from API response
function formatVerseText(apiResponse) {
  if (!apiResponse || !apiResponse.verses) {
    return null;
  }

  return apiResponse.verses.map(verse => ({
    verse: verse.verse,
    text: verse.text.trim()
  }));
}

// Build clear reading instructions
function buildReadingInstructions(lessonNumber, reference) {
  const ordinal = lessonNumber === 'first' ? 'First' : 'Second';
  const intro = formatLessonIntro(reference, lessonNumber);
  const parsed = parseReference(reference);

  // If reference can't be parsed, show simple fallback
  const bookHtml = parsed ? parsed.book : reference;
  const chapterVerseHtml = parsed ? `${parsed.chapter}:${parsed.verseStart}` : '';

  return `
    <div class="reading-instructions">
      <div class="reading-header">
        <h3 class="reading-title">The ${ordinal} Lesson</h3>
        <div class="reading-reference">${reference}</div>
      </div>

      <div class="instruction-box">
        <p class="instruction-text">📖 <strong>Say this introduction:</strong></p>
        <p class="intro-text">"${intro}"</p>
      </div>

      <div class="instruction-box">
        <p class="instruction-text">📚 <strong>Read from your Bible:</strong></p>
        <div class="bible-reference">
          <span class="book">${bookHtml}</span>
          ${chapterVerseHtml ? `<span class="chapter-verse">${chapterVerseHtml}</span>` : ''}
        </div>
      </div>

      <p class="lesson-ending">Here endeth the ${ordinal} Lesson.</p>
    </div>
  `;
}

// Build HTML for a single lesson (kept for compatibility)
function buildLessonHtml(lessonNumber, reference, verses, isLoading = false) {
  const ordinal = lessonNumber === 'first' ? 'First' : 'Second';
  const intro = formatLessonIntro(reference, lessonNumber);

  let contentHtml;

  if (isLoading) {
    contentHtml = `<p class="loading-text">Loading Scripture...</p>`;
  } else if (verses) {
    const versesHtml = verses.map(v =>
      `<span class="verse"><sup class="verse-num">${v.verse}</sup>${v.text}</span>`
    ).join(' ');
    contentHtml = `<div class="scripture-text">${versesHtml}</div>`;
  } else {
    contentHtml = `<p class="scripture-fallback"><em>${reference}</em></p>`;
  }

  return `
    <div class="lesson">
      <h3 class="lesson-title">The ${ordinal} Lesson</h3>
      <p class="lesson-intro">${intro}</p>
      ${contentHtml}
      <p class="lesson-ending">Here endeth the ${ordinal} Lesson.</p>
    </div>
  `;
}

// Get cache key for today's readings
function getCacheKey() {
  const now = new Date();
  return `readings-${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
}

// Cache readings in localStorage
function cacheReadings(office, readings) {
  const cacheKey = getCacheKey();
  const cached = JSON.parse(localStorage.getItem(cacheKey) || '{}');
  cached[office] = readings;
  localStorage.setItem(cacheKey, JSON.stringify(cached));

  // Clear old cache entries
  clearOldCache();
}

// Get cached readings
function getCachedReadings(office) {
  const cacheKey = getCacheKey();
  const cached = JSON.parse(localStorage.getItem(cacheKey) || '{}');
  return cached[office] || null;
}

// Clear cache entries older than today
function clearOldCache() {
  const todayKey = getCacheKey();
  const keysToRemove = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('readings-') && key !== todayKey) {
      keysToRemove.push(key);
    }
  }

  keysToRemove.forEach(key => localStorage.removeItem(key));
}

// Load readings for an office (morning or evening)
async function loadReadings(office) {
  const todaysReadings = getTodaysReadings();
  if (!todaysReadings) {
    console.log('No readings found for today');
    return null;
  }

  const officeReadings = todaysReadings[office];
  if (!officeReadings) {
    console.log(`No ${office} readings found`);
    return null;
  }

  // Check cache first
  const cached = getCachedReadings(office);
  if (cached) {
    return cached;
  }

  // Fetch both lessons
  const [firstData, secondData] = await Promise.all([
    fetchBibleText(officeReadings.first),
    fetchBibleText(officeReadings.second)
  ]);

  const readings = {
    first: {
      reference: officeReadings.first,
      verses: formatVerseText(firstData)
    },
    second: {
      reference: officeReadings.second,
      verses: formatVerseText(secondData)
    }
  };

  // Cache the readings
  cacheReadings(office, readings);

  return readings;
}

// Inject readings into the prayer content
function injectReadings(office) {
  // Find the sections by looking for the type attributes or finding all sections
  const sections = document.querySelectorAll('.section');
  let firstLessonSection = null;
  let secondLessonSection = null;

  // Find the first-lesson and second-lesson sections
  sections.forEach(section => {
    const rubric = section.querySelector('.rubric');
    if (rubric && rubric.textContent.includes('FIRST LESSON')) {
      firstLessonSection = section;
    } else if (rubric && rubric.textContent.includes('SECOND LESSON')) {
      secondLessonSection = section;
    }
  });

  if (!firstLessonSection || !secondLessonSection) {
    return;
  }

  // Get today's readings directly from lectionary
  const todaysReadings = getTodaysReadings();
  const officeReadings = todaysReadings ? todaysReadings[office] : null;

  if (officeReadings) {
    firstLessonSection.innerHTML = `
      <p class="rubric">Then shall be read distinctly with an audible voice the First Lesson, taken out of the Old Testament, as is appointed in the Kalendar, except there be proper Lessons assigned for that day.</p>
      ${buildReadingInstructions('first', officeReadings.first)}
    `;

    secondLessonSection.innerHTML = `
      <p class="rubric">Then shall be read in like manner the Second Lesson, taken out of the New Testament.</p>
      ${buildReadingInstructions('second', officeReadings.second)}
    `;
  } else {
    // Fallback if no readings found
    firstLessonSection.innerHTML = `
      <p class="rubric">Then shall be read distinctly with an audible voice the First Lesson, taken out of the Old Testament, as is appointed in the Kalendar, except there be proper Lessons assigned for that day.</p>
      <p class="error-message">No readings found for today.</p>
    `;

    secondLessonSection.innerHTML = `
      <p class="rubric">Then shall be read in like manner the Second Lesson, taken out of the New Testament.</p>
      <p class="error-message">No readings found for today.</p>
    `;
  }
}

// =====================
// Psalm System (30-Day Cycle)
// =====================

// Get cache key for today's psalms
function getPsalmCacheKey() {
  const now = new Date();
  const dayOfMonth = now.getDate() > 30 ? 30 : now.getDate();
  return `psalms-day-${dayOfMonth}`;
}

// Cache psalm text in localStorage
function cachePsalms(office, psalmsData) {
  const cacheKey = getPsalmCacheKey();
  const cached = JSON.parse(localStorage.getItem(cacheKey) || '{}');
  cached[office] = psalmsData;
  localStorage.setItem(cacheKey, JSON.stringify(cached));
}

// Get cached psalm text
function getCachedPsalms(office) {
  const cacheKey = getPsalmCacheKey();
  const cached = JSON.parse(localStorage.getItem(cacheKey) || '{}');
  return cached[office] || null;
}

// Build HTML for a single psalm
function buildPsalmHtml(psalmData, latinTitle) {
  const versesHtml = psalmData.verses.map(v =>
    `<p class="psalm-verse"><span class="verse-number">${v.verse}</span> ${v.text}</p>`
  ).join('');

  const latinSubtitle = latinTitle ? `<p class="rubric"><em>${latinTitle}</em></p>` : '';

  return `
    <div class="psalm">
      <h3 class="psalm-title">${psalmData.title}</h3>
      ${latinSubtitle}
      ${versesHtml}
    </div>
  `;
}

// Load psalms for an office
async function loadPsalms(office) {
  const psalmRefs = getPsalmReferences(office);
  if (!psalmRefs || psalmRefs.length === 0) {
    console.log('No psalms found for today');
    return null;
  }

  // Check cache first
  const cached = getCachedPsalms(office);
  if (cached) {
    return cached;
  }

  // Fetch all psalms in parallel
  const fetchPromises = psalmRefs.map(ref => fetchBibleText(ref.apiRef));
  const results = await Promise.all(fetchPromises);

  const psalmsData = psalmRefs.map((ref, index) => {
    const apiResponse = results[index];
    return {
      title: ref.title,
      number: ref.number,
      latinTitle: getPsalmLatinTitle(ref.number),
      verses: formatVerseText(apiResponse) || []
    };
  });

  // Cache the psalms
  cachePsalms(office, psalmsData);

  return psalmsData;
}

// Inject psalms into the prayer content
async function injectPsalms(office) {
  // Find the psalm section by looking for the rubric
  const sections = document.querySelectorAll('.section');
  let psalmSection = null;

  sections.forEach(section => {
    const rubric = section.querySelector('.rubric');
    if (rubric && rubric.textContent.includes('THE PSALMS')) {
      psalmSection = section;
    }
  });

  if (!psalmSection) {
    return;
  }

  // Show loading state
  psalmSection.innerHTML = `
    <p class="rubric">Then shall follow the Psalms in order as they be appointed.</p>
    <p class="loading-text">Loading Psalms...</p>
  `;

  // Load the psalms
  const psalmsData = await loadPsalms(office);

  if (psalmsData && psalmsData.length > 0) {
    const psalmsHtml = psalmsData.map(psalm =>
      buildPsalmHtml(psalm, psalm.latinTitle)
    ).join('');

    psalmSection.innerHTML = `
      <p class="rubric">Then shall follow the Psalms in order as they be appointed.</p>
      ${psalmsHtml}
      <div class="gloria">
        <p>Glory be to the Father, and to the Son, and to the Holy Ghost;</p>
        <p>as it was in the beginning, is now, and ever shall be, world without end. Amen.</p>
      </div>
    `;
  } else {
    // Fallback: show psalm references without full text
    const psalmRefs = getPsalmReferences(office);
    const refList = psalmRefs.map(ref => ref.title).join(', ');
    psalmSection.innerHTML = `
      <p class="rubric">Then shall follow the Psalms in order as they be appointed.</p>
      <div class="psalm">
        <p class="psalm-title">${refList}</p>
        <p class="scripture-fallback"><em>Psalm text could not be loaded.</em></p>
      </div>
      <div class="gloria">
        <p>Glory be to the Father, and to the Son, and to the Holy Ghost;</p>
        <p>as it was in the beginning, is now, and ever shall be, world without end. Amen.</p>
      </div>
    `;
  }
}

// Inject sentences of scripture into opening
// @ts-ignore - getRandomSentence is defined in sentences.js (loaded before this)
function injectSentences(office) {
  const sections = document.querySelectorAll('.section');
  let openingSection = null;

  // Find the opening section
  sections.forEach(section => {
    const rubric = section.querySelector('.rubric');
    if (rubric && rubric.textContent.includes('The Minister shall read aloud')) {
      openingSection = section;
    }
  });

  if (!openingSection) {
    return;
  }

  // Get a random sentence for this office
  if (typeof getRandomSentence !== 'function') {
    return;
  }

  const sentence = getRandomSentence(office);

  if (!sentence) {
    return;
  }

  // Find and replace the sentence in the opening section
  const sentenceElement = openingSection.querySelector('.prayer-text');
  if (sentenceElement && !sentenceElement.classList.contains('indent')) {
    // Replace the hardcoded sentence with the random one
    sentenceElement.innerHTML = `${sentence.text}<br><span class="rubric">${sentence.citation}</span>`;
  }
}

// Inject collects into prayer content
// @ts-ignore - getTodaysCollect is defined in collects.js (loaded before this)
function injectCollects() {
  const sections = document.querySelectorAll('.section');
  let collectsSection = null;

  // Find the collects section
  sections.forEach(section => {
    const rubric = section.querySelector('.rubric');
    if (rubric && rubric.textContent.includes('COLLECT OF THE DAY')) {
      collectsSection = section;
    }
  });

  if (!collectsSection) {
    return;
  }

  // Get today's collect (function is defined in collects.js)
  if (typeof getTodaysCollect !== 'function') {
    return;
  }

  const todaysCollect = getTodaysCollect();

  if (!todaysCollect) {
    return;
  }

  // Create the collect HTML
  const collectHtml = `
    <p class="rubric">Then shall follow three Collects; the first of the Day; the second for Peace; the third for Grace.</p>
    <div class="collect">
      <p class="collect-title">The Collect of the Day</p>
      <p class="prayer-text">
        ${todaysCollect}
      </p>
    </div>

    <div class="collect">
      <p class="collect-title">The Second Collect, for Peace.</p>
      <p class="prayer-text">
        O God, who art the author of peace and lover of concord, in knowledge of whom standeth our eternal life, whose service is perfect freedom: Defend us thy humble servants in all assaults of our enemies; that we, surely trusting in thy defence, may not fear the power of any adversaries; through the might of Jesus Christ our Lord. <span class="response">Amen.</span>
      </p>
    </div>

    <p class="rubric">In Quires and Places where they sing, here followeth the Anthem.</p>
  `;

  collectsSection.innerHTML = collectHtml;
}

// Start the app when DOM is loaded
// Setup Sidebar Navigation
function setupSidebar() {
  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sidebarBackdrop = document.getElementById('sidebar-backdrop');
  const appContainer = document.getElementById('app-container');
  const sidebarNavItems = document.querySelectorAll('.sidebar-nav-item');

  if (!sidebar || !sidebarToggle || !appContainer) {
    console.error('Sidebar elements not found:', { sidebar: !!sidebar, sidebarToggle: !!sidebarToggle, appContainer: !!appContainer });
    return;
  }

  // Load saved sidebar state from localStorage
  const sidebarCollapsed = localStorage.getItem('sidebar-collapsed') === 'true';
  const isMobile = window.innerWidth < 768;

  // Initialize sidebar state based on device
  if (!isMobile && sidebarCollapsed) {
    // Desktop with sidebar collapsed (user preference from localStorage)
    sidebar.classList.add('collapsed');
    appContainer.classList.add('sidebar-collapsed');
    sidebarToggle.classList.remove('sidebar-open');
  } else if (!isMobile && !sidebarCollapsed) {
    // Desktop with sidebar visible (default state)
    sidebar.classList.remove('collapsed');
    appContainer.classList.remove('sidebar-collapsed');
    sidebarToggle.classList.add('sidebar-open');
  } else if (isMobile) {
    // Mobile: sidebar hidden by default
    sidebar.classList.remove('open', 'collapsed');
    appContainer.classList.remove('sidebar-collapsed');
  }

  // Update data attribute to match initial state
  if (!isMobile && sidebarCollapsed) {
    document.documentElement.setAttribute('data-sidebar-collapsed', 'true');
  } else {
    document.documentElement.removeAttribute('data-sidebar-collapsed');
  }

  // Toggle sidebar
  sidebarToggle.addEventListener('click', () => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // Mobile: toggle overlay mode
      const wasOpen = sidebar.classList.contains('open');
      const officeSwitchBtn = document.getElementById('office-switch-btn');

      sidebar.classList.remove('collapsed');
      sidebar.classList.toggle('open');
      sidebarBackdrop.classList.toggle('active');
      sidebarToggle.classList.toggle('sidebar-open');

      // Toggle office switch button class at the same time for synchronized movement
      if (officeSwitchBtn) {
        if (wasOpen) {
          officeSwitchBtn.classList.remove('sidebar-open');
        } else {
          officeSwitchBtn.classList.add('sidebar-open');
        }
      }

      // Ensure consistency after toggle
      setTimeout(() => ensureSidebarStateConsistency(), 250);
    } else {
      // Desktop: toggle collapse
      sidebar.classList.toggle('collapsed');
      appContainer.classList.toggle('sidebar-collapsed');

      // Update button position based on sidebar visibility (not collapsed)
      if (sidebar.classList.contains('collapsed')) {
        // Sidebar is now hidden - button stays at left: 20px
        sidebarToggle.classList.remove('sidebar-open');
        document.documentElement.setAttribute('data-sidebar-collapsed', 'true');
        localStorage.setItem('sidebar-collapsed', 'true');
      } else {
        // Sidebar is now visible - move button right
        sidebarToggle.classList.add('sidebar-open');
        document.documentElement.removeAttribute('data-sidebar-collapsed');
        localStorage.setItem('sidebar-collapsed', 'false');
      }

      // Also update office switch button position to match sidebar state
      updateOfficeSwitchButtonPosition(!sidebar.classList.contains('collapsed'));

      // Save state to localStorage
      const isCollapsed = sidebar.classList.contains('collapsed');
      localStorage.setItem('sidebar-collapsed', isCollapsed);
    }
  });

  // Close sidebar when clicking backdrop (mobile)
  sidebarBackdrop.addEventListener('click', () => {
    const officeSwitchBtn = document.getElementById('office-switch-btn');

    sidebar.classList.remove('open');
    sidebarBackdrop.classList.remove('active');
    sidebarToggle.classList.remove('sidebar-open');

    // Remove office switch button class at the same time
    if (officeSwitchBtn) {
      officeSwitchBtn.classList.remove('sidebar-open');
    }
  });

  // Setup navigation items
  sidebarNavItems.forEach(item => {
    item.addEventListener('click', () => {
      // Remove active from all items
      sidebarNavItems.forEach(i => i.classList.remove('active'));

      // Add active to clicked item
      item.classList.add('active');

      // Get office and render
      const office = item.dataset.office;
      currentOffice = office;

      // Store the user's office preference
      localStorage.setItem('selected-office', office);

      renderPrayer(office);
      updateOfficeSwitchButton();

      // Close sidebar on mobile after selection
      if (window.innerWidth < 768) {
        const officeSwitchBtn = document.getElementById('office-switch-btn');

        sidebar.classList.remove('open');
        sidebarBackdrop.classList.remove('active');
        sidebarToggle.classList.remove('sidebar-open');

        // Remove office switch button class at the same time
        if (officeSwitchBtn) {
          officeSwitchBtn.classList.remove('sidebar-open');
        }
      }

      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Handle window resize
  let lastIsMobile = window.innerWidth < 768;
  window.addEventListener('resize', () => {
    const isMobile = window.innerWidth < 768;

    // Ensure sidebar state is consistent
    ensureSidebarStateConsistency();

    // Only update if we've crossed the mobile/desktop breakpoint
    if (isMobile !== lastIsMobile) {
      if (!isMobile) {
        // Desktop: restore saved state
        const sidebarCollapsed = localStorage.getItem('sidebar-collapsed') === 'true';
        if (sidebarCollapsed) {
          sidebar.classList.add('collapsed');
          appContainer.classList.add('sidebar-collapsed');
          sidebarToggle.classList.remove('sidebar-open');
        } else {
          sidebar.classList.remove('collapsed');
          appContainer.classList.remove('sidebar-collapsed');
          sidebarToggle.classList.add('sidebar-open');
        }
        // Remove mobile classes
        sidebar.classList.remove('open');
        sidebarBackdrop.classList.remove('active');
        updateOfficeSwitchButtonPosition(false);
      } else {
        // Mobile: always start closed when transitioning from desktop
        sidebar.classList.remove('open', 'collapsed');
        sidebarBackdrop.classList.remove('active');
        sidebarToggle.classList.remove('sidebar-open');
        updateOfficeSwitchButtonPosition(false);
      }
      lastIsMobile = isMobile;
    }
  });

  // Ensure initial state is consistent
  ensureSidebarStateConsistency();
}

// Set active sidebar item based on current office
function setActiveSidebarItem(office) {
  const sidebarNavItems = document.querySelectorAll('.sidebar-nav-item');
  sidebarNavItems.forEach(item => {
    if (item.dataset.office === office) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// Helper function to ensure sidebar state consistency
function ensureSidebarStateConsistency() {
  const sidebar = document.getElementById('sidebar');
  const sidebarBackdrop = document.getElementById('sidebar-backdrop');
  const sidebarToggle = document.getElementById('sidebar-toggle');

  if (!sidebar || !sidebarBackdrop || !sidebarToggle) return;

  const isMobile = window.innerWidth < 768;
  const sidebarIsOpen = sidebar.classList.contains('open');
  const backdropIsActive = sidebarBackdrop.classList.contains('active');
  const toggleIsOpen = sidebarToggle.classList.contains('sidebar-open');

  // On mobile, all three should be in sync
  if (isMobile) {
    if (sidebarIsOpen !== backdropIsActive || sidebarIsOpen !== toggleIsOpen) {
      // State mismatch detected - close everything to reset
      sidebar.classList.remove('open');
      sidebarBackdrop.classList.remove('active');
      sidebarToggle.classList.remove('sidebar-open');
      updateOfficeSwitchButtonPosition(false);
    }
  }
}

// Update office switch button position based on sidebar state
function updateOfficeSwitchButtonPosition(sidebarOpen) {
  const officeSwitchBtn = document.getElementById("office-switch-btn");
  if (!officeSwitchBtn) return;

  const isMobile = window.innerWidth < 768;

  // On mobile, ensure class matches sidebar state
  // (toggle handler already sets this synchronously, but this ensures consistency)
  if (isMobile) {
    const hasClass = officeSwitchBtn.classList.contains('sidebar-open');
    if (sidebarOpen && !hasClass) {
      officeSwitchBtn.classList.add('sidebar-open');
    } else if (!sidebarOpen && hasClass) {
      officeSwitchBtn.classList.remove('sidebar-open');
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  init();
  initDarkMode();
  setupSidebar();
  setActiveSidebarItem(currentOffice);
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

// Remove initializing class after everything is loaded to re-enable transitions
window.addEventListener('load', () => {
  setTimeout(() => {
    document.documentElement.classList.remove('initializing');
  }, 100);
});
