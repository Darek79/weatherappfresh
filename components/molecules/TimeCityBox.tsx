import { HTMLAttributes } from 'react';
import { Box, Text, Heading } from 'components';

interface ITimeCityBox extends HTMLAttributes<HTMLDivElement> {
    time: string;
    city: string;
    timeStyle: string;
    cityStyle: string;
}

export default function TimeCityBox({ time, city, timeStyle, cityStyle, children, ...rest }: ITimeCityBox) {
    return (
        <Box {...rest}>
            <Text className={timeStyle}>{time}</Text>
            <Heading styles={cityStyle} htmlTag="h2">
                {city}
            </Heading>
            {children}
        </Box>
    );
}
