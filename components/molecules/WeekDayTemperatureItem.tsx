import { Box, Text, IconText } from 'components';
import { HTMLAttributes } from 'react';
import { ListEntity } from 'types/open_weather';

interface IWeekDayTemperatureItem extends HTMLAttributes<HTMLDivElement> {
    dayObject: ListEntity;
}

export default function WeekDayTemperatureItem({ dayObject, ...rest }: IWeekDayTemperatureItem) {
    return (
        <Box {...rest}>
            <IconText
                className="flex items-center gap-3"
                src={`/icons/${dayObject.weather[0].icon}.png`}
                imageProps={{ width: 40, height: 40 }}
                alt="weather_icon"
            >
                <Box className="flex gap-1">
                    <Text>{dayObject.main.feels_like}°C</Text>
                </Box>
            </IconText>
        </Box>
    );
}
