import type { OPEN_WEATHER, ListEntity } from 'types/open_weather';

interface IGetWeatherIndexes {
    indexedDayObjects: Array<ListEntity[]>;
    findMaxMinTemperatureArr: number[];
    findMeanModeValueArr: number[];
}

export function getWeatherIndexes(obj: OPEN_WEATHER): IGetWeatherIndexes {
    const findMaxMinTemperatureArr: number[] = [];
    const findMeanModeValueArr: number[] = [];
    const beforeDeduped: number[] = [];
    const daysArr: number[] = obj.list.map((el, i) => {
        findMaxMinTemperatureArr.push(el.main.temp);
        findMeanModeValueArr.push(parseInt(String(el.main.temp)));
        const day: number = new Date(`${el.dt_txt}`).getDay();
        return day;
    });

    daysArr.forEach((el, i) => {
        beforeDeduped.push(daysArr.indexOf(el));
        beforeDeduped.push(daysArr.lastIndexOf(el));
    });

    const deduped: number[] = [...new Set(beforeDeduped)];
    const finished: Array<ListEntity[]> = [];
    deduped.forEach((el, i) => {
        if ((1 + i) % 2 === 0) {
            let slice: ListEntity[] = obj.list.slice(deduped[i - 1], deduped[i + 1]);
            // console.log(slice.length);
            finished.push(slice);
        }
    });
    return {
        indexedDayObjects: finished,
        findMaxMinTemperatureArr,
        findMeanModeValueArr,
    };
}
