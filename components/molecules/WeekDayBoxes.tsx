import { Box, WeekDayTemperatureItem, Heading } from 'components';
import { HTMLAttributes } from 'react';
import { ListEntity } from 'types/open_weather';
import dayjs from 'dayjs';
interface IWeekDayBoxes extends HTMLAttributes<HTMLDivElement> {
    indexedDayObjectDay: ListEntity[];
    weekDayTemperatureWrapperClasses?: string;
    weekDayTemperatureItemWrapperClasses?: string;
}

export default function WeekDayBoxes({
    indexedDayObjectDay,
    weekDayTemperatureWrapperClasses,
    weekDayTemperatureItemWrapperClasses,
    ...rest
}: IWeekDayBoxes) {
    return (
        <Box {...rest}>
            <Heading htmlTag="h3">{dayjs(indexedDayObjectDay[0].dt_txt).format('ddd, MMM DD')}</Heading>
            <Box className={weekDayTemperatureWrapperClasses}>
                {indexedDayObjectDay &&
                    indexedDayObjectDay.map((el, i) => (
                        <WeekDayTemperatureItem
                            className={weekDayTemperatureItemWrapperClasses}
                            dayObject={el}
                            key={i + el.dt}
                        />
                    ))}
            </Box>
        </Box>
    );
}
