import type { OPEN_WEATHER, ListEntity } from 'types/open_weather';
import type { ILineChartsData } from 'types/linecharts';
import { getMinMaxTemperature } from 'utils/getMinMaxTemperature';
// indexedDayObjects: Array<ListEntity[]>;

export interface IGetWeatherIndexes {
    closestCardToShow: ListEntity;
    indexedDayObjects: Array<ListEntity[]>;
    findMaxMinTemperatureArr: number[];
    findMeanModeValueArr: number[];
    lineChartsDataArray: ILineChartsData;
    city?: string;
    time?: string;
}

export function getWeatherIndexes(obj: OPEN_WEATHER): IGetWeatherIndexes {
    const findMaxMinTemperatureArr: number[] = [];
    const findMeanModeValueArr: number[] = [];
    const beforeDeduped: number[] = [];
    const lineChartsDataArray: ILineChartsData = [];

    const daysArr: number[] = obj.list.map((el, i) => {
        findMaxMinTemperatureArr.push(el.main.temp);
        findMeanModeValueArr.push(parseInt(String(el.main.temp)));
        const getDateString = el.dt_txt.split(' ')[1];
        el.dt_time = getDateString.substring(0, getDateString.length - 3);
        let index = 0;
        for (let key in el.main) {
            if (index <= 3) {
                el.main[key as keyof typeof el.main] = parseInt(String(el.main[key as keyof typeof el.main] - 273.15));
            }
            index++;
        }
        const day: number = new Date(`${el.dt_txt}`).getDay();
        return day;
    });

    daysArr.forEach((el, i) => {
        beforeDeduped.push(daysArr.indexOf(el));
        beforeDeduped.push(daysArr.lastIndexOf(el));
    });

    const deduped: number[] = [...new Set(beforeDeduped)];
    const allDaysSorted: Array<ListEntity[]> = [];
    const closestTimeArry: number[] = [];
    const actualTime = parseInt(String(Date.now() / 1000));
    deduped.forEach((el, i) => {
        if ((1 + i) % 2 === 0) {
            let slice: ListEntity[] = obj.list.slice(deduped[i - 1], deduped[i + 1]);
            if (slice.length > 3) {
                const sliceMinMaxTemperature: number[] = slice.map(el => el.main.feels_like);
                const [_, minIndex] = getMinMaxTemperature(sliceMinMaxTemperature);
                allDaysSorted.push([slice[2], slice[Math.floor(sliceMinMaxTemperature.length / 2)], slice[minIndex]]);
                return;
            }
            if (slice.length <= 2) {
                allDaysSorted.push(slice);
            }
        }
    });
    allDaysSorted[0].forEach(el => {
        closestTimeArry.push(el.dt - actualTime);

        lineChartsDataArray.push({
            temp: el.main.feels_like,
            date: el.dt_time!,
        });
    });
    const closestTimeToFind = Math.min(...closestTimeArry);
    const getIndexToItem = closestTimeArry.indexOf(closestTimeToFind);
    return {
        closestCardToShow: allDaysSorted[0][getIndexToItem],
        indexedDayObjects: allDaysSorted,
        findMaxMinTemperatureArr,
        findMeanModeValueArr,
        lineChartsDataArray,
    };
}
