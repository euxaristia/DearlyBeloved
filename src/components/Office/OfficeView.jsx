import React from 'react';
import { useApp } from '../../contexts/AppContext';
import { useLiturgicalData } from '../../hooks/useLiturgicalData';
import LiturgicalHeader from './LiturgicalHeader';
import MorningPrayer from './MorningPrayer';
import EveningPrayer from './EveningPrayer';
import MiddayPrayer from './MiddayPrayer';
import Compline from './Compline';

export default function OfficeView() {
    const { currentOffice } = useApp();
    const data = useLiturgicalData();

    if (data.loading) {
        return <div className="section"><p>Loading liturgical data...</p></div>;
    }

    return (
        <div className="office-view">
            <LiturgicalHeader info={data.liturgicalInfo} />

            {currentOffice === 'morning' && <MorningPrayer data={data} />}
            {currentOffice === 'evening' && <EveningPrayer data={data} />}
            {currentOffice === 'midday' && <MiddayPrayer />}
            {currentOffice === 'compline' && <Compline />}
        </div>
    );
}
