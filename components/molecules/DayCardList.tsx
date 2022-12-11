import { HTMLAttributes } from 'react';
import Image from 'next/image';
import { Box, Text } from 'components';
import arrow from 'public/compass.png';
import { ListEntity } from 'types/open_weather';

interface IDayCardList extends HTMLAttributes<HTMLDivElement> {
    weatherObj: ListEntity;
}
export default function DayCardList({ weatherObj, children, ...rest }: IDayCardList) {
    return (
        <Box {...rest}>
            <ul className="mt-2 w-fit">
                <li className="flex gap-2 w-fit">
                    <Text>Wind :</Text>
                    <Image
                        className="w-4 h-4"
                        style={{ transform: `rotate(${weatherObj.wind.deg}deg)` }}
                        src={arrow}
                        alt="compass_icon"
                    />
                    <Text>{`${weatherObj.wind.speed}m/s`}</Text>
                </li>
                <li className="flex gap-2">
                    <Text>Pressure :</Text>
                    <Text>{`${weatherObj.main.pressure}hpa`}</Text>
                </li>
                <li className="flex gap-2">
                    <Text>Humidity :</Text>
                    <Text>{`${weatherObj.main.humidity}%`}</Text>
                </li>
                {children}
            </ul>
        </Box>
    );
}
