import { getWeatherIndexes, IGetWeatherIndexes } from 'utils/getWeatherIndexes';
import type { OPEN_WEATHER } from 'types/open_weather';
import type { WHOIS } from 'types/whois';
interface Data {
    indexesObj: IGetWeatherIndexes | null;
    error: string | null;
}

export default async function handler(): Promise<Data | undefined> {
    try {
        const fetchedIPJson = await fetch(`${process.env.WHOIS}`);
        if (fetchedIPJson.status >= 400) {
            throw new Error('No places were found');
        }

        const ipData: WHOIS = await fetchedIPJson.json();
        const weatherObjectsJson = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${ipData.city},${ipData.country_code}&APPID=${process.env.OPEN_WEATHER_API}`
        );
        if (weatherObjectsJson.status >= 400) {
            throw new Error('No forecast was found');
        }
        console.log(weatherObjectsJson, '123');
        const weatherObjects: OPEN_WEATHER = await weatherObjectsJson.json();
        const indexesObj: IGetWeatherIndexes = getWeatherIndexes(weatherObjects);
        indexesObj.city = ipData.city;
        indexesObj.time = ipData.timezone.current_time;

        return { indexesObj, error: null };
    } catch (error) {
        if (error) {
            return { indexesObj: null, error: 'Something went wrong' };
        }
    }
}
