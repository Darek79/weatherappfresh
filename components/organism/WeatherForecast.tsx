import { Box, DayCard, LineChart, WeekDayContainer, Heading } from 'components';
import type { IGetWeatherIndexes } from 'utils/getWeatherIndexes';

interface IMainApp {
    weatherObjects: IGetWeatherIndexes | null;
}
export default function MainApp({ weatherObjects }: IMainApp) {
    return (
        <>
            <DayCard
                time={weatherObjects!.time}
                city={weatherObjects!.city}
                actualDayObject={weatherObjects!.closestCardToShow}
            />
            <Box className="block lg:flex w-full relative">
                <Box className="w-full">
                    <Heading styles="heading" htmlTag="h3">
                        {'Hourly Temperature'}
                    </Heading>
                    <LineChart
                        height={500}
                        headingText="Days Forecast"
                        className="rounded-xl w-full"
                        actualDayData={weatherObjects!.closestCardToShow}
                        data={weatherObjects!.lineChartsDataArray}
                    />
                </Box>
                <Box className="w-full">
                    <Heading styles="heading" htmlTag="h3">
                        {'Days Forcast'}
                    </Heading>
                    <WeekDayContainer
                        className="w-full h-fit px-4 text-white"
                        boxClasses="h-fit text-inherit px-4 py-2"
                        headingText="Days Forecast"
                        indexedDayObjectForecast={weatherObjects!.indexedDayObjects}
                    />
                </Box>
            </Box>
        </>
    );
}
