import { Box, Text, IconText, WeekDayTemperatureItem } from 'components';
import Heading from 'components/atoms/Heading';
import { ListEntity } from 'types/open_weather';
interface IWeekDayBoxes {
    indexedDayObjectDay: ListEntity[];
}

export default function WeekDayBoxes() {
    return (
        <Box>
            <Text>DATE</Text>
            <WeekDayTemperatureItem />
        </Box>
    );
}
