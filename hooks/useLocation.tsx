import type { IGetWeatherIndexes } from 'utils/getWeatherIndexes';
import { useEffect, useState } from 'react';

interface Data {
    indexesObj: IGetWeatherIndexes | null;
    error: string | null;
}

export function useLocation(city: string): [Data['indexesObj'], Data['error']] {
    const [weatherObjects, setWeatherObject] = useState<IGetWeatherIndexes | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (city) {
            (async () => {
                const response = await fetch(`/api/getWeatherByIP?city=${city}`);
                const { indexesObj, error }: Data = await response.json();
                if (error) {
                    setError(error);
                    return;
                }
                setWeatherObject(indexesObj);
            })();
        }
    }, [city]);

    return [weatherObjects, error];
}
