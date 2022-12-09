import { Box, Text, IconText, WeekDayTemperatureItem } from 'components';
import Heading from 'components/atoms/Heading';
import { HTMLAttributes } from 'react';
import { ListEntity } from 'types/open_weather';
import dayjs from 'dayjs';
interface IWeekDayBoxes extends HTMLAttributes<HTMLDivElement> {
    indexedDayObjectDay: ListEntity[];
}

export default function WeekDayBoxes({ indexedDayObjectDay, ...rest }: IWeekDayBoxes) {
    return (
        <Box {...rest}>
            <Text>{dayjs(indexedDayObjectDay[0].dt_txt).format('ddd, MMM DD')}</Text>
            <WeekDayTemperatureItem />
        </Box>
    );
}
