// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getWeatherIndexes } from 'utils/getWeatherIndexes';
import type { OPEN_WEATHER } from 'types/open_weather';
import { IGetWeatherIndexes } from './../../utils/getWeatherIndexes';
interface Data {
    indexesObj: IGetWeatherIndexes | null;
    error: string | null;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { city } = req.query;

    console.log(city);
    try {
        const weatherObjectsJson = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${process.env.OPEN_WEATHER_API}`
        );
        if (weatherObjectsJson.status >= 400) {
            throw new Error('No forecast was found');
        }
        // console.log(weatherObjectsJson, '123');
        const weatherObjects: OPEN_WEATHER = await weatherObjectsJson.json();
        const indexesObj: IGetWeatherIndexes = getWeatherIndexes(weatherObjects);
        indexesObj.city = weatherObjects.city.name;
        indexesObj.time = '';

        res.status(200).json({ indexesObj, error: null });
    } catch (error) {
        if (error) {
            res.status(400).json({ indexesObj: null, error: 'Something went wrong' });
        }
    }
}
