import { useMemo } from 'react';
import { useApp } from '../contexts/AppContext';
import { getLiturgicalInfo } from '../utils/liturgicalCalendar';
import { getTodaysReadings } from '../utils/lectionary';
import { getPsalmReferences } from '../utils/psalms';
import { getTodaysCollect } from '../utils/collects';
import { getRandomSentence } from '../utils/sentences';

export function useLiturgicalData() {
    const { currentOffice } = useApp();

    const data = useMemo(() => {
        const now = new Date();
        // Since we are not doing async calls, we can return data directly.
        // If date boundaries matter (crossing midnight while app is open), 
        // we might need a timer, but for now this eliminates the flash.

        return {
            liturgicalInfo: getLiturgicalInfo(now),
            readings: getTodaysReadings(),
            psalms: getPsalmReferences(currentOffice),
            collect: getTodaysCollect(),
            sentence: getRandomSentence(currentOffice),
            loading: false
        };
    }, [currentOffice]);

    return data;
}

