import { HTMLAttributes } from 'react';
import { Box, WeekDayBoxes } from 'components';
import { ListEntity } from 'types/open_weather';

interface IWeekDayContainer extends HTMLAttributes<HTMLDivElement> {
    headingText?: string;
    indexedDayObjectForecast: Array<ListEntity[]>;
    boxClasses?: string;
}

export default function WeekDayContainer({
    indexedDayObjectForecast,
    headingText,
    children,
    boxClasses,
    ...rest
}: IWeekDayContainer) {
    return (
        <Box {...rest}>
            <Box className="h-fit w-full rounded-lg bg-pageDark overflow-hidden">
                {indexedDayObjectForecast &&
                    indexedDayObjectForecast.map((el, i) => (
                        <WeekDayBoxes
                            weekDayTemperatureWrapperClasses="grid grid-cols-3 gap-x-2"
                            weekDayTemperatureItemWrapperClasses="m-auto"
                            className={boxClasses}
                            key={indexedDayObjectForecast[i][0].dt_txt}
                            indexedDayObjectDay={el}
                        />
                    ))}
            </Box>
        </Box>
    );
}
