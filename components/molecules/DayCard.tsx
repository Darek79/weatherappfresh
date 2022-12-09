import { useEffect, useState } from 'react';
import Image from 'next/image';
import { TimeCityBox, Box, IconText, Text, WeatherSpanValue, DayCardList } from 'components';
import arrow from 'public/compass.png';
import image from 'public/icons/01d.png';

import dayjs from 'dayjs';
import { ListEntity } from 'types/open_weather';

interface IDayCard {
    actualDayObject: ListEntity;
}

export default function DayCard({ actualDayObject }: IDayCard) {
    const [date, setDate] = useState<string>('');

    useEffect(() => {
        setDate(dayjs().format('MMM DD, HH:mm'));
    }, []);

    return (
        <Box className="relative m-auto bg-pageDark w-[250px] p-3 rounded-lg text-white text-center">
            <TimeCityBox timeStyle="" cityStyle="font-semibold" time={date} city="Krakow" />
            <Image
                alt="weather_icon"
                src={`/icons/${actualDayObject.weather[0].icon}.png`}
                style={{ margin: 'auto' }}
                width={100}
                height={100}
            />
            <Text className="font-bold">{`Feels like ${actualDayObject.main.feels_like}°C`}</Text>
            <Text className="font-bold first-letter:uppercase">{`${actualDayObject.weather[0].description}`}</Text>
            <DayCardList className="flex flex-col items-center justify-center" weatherObj={actualDayObject} />
        </Box>
    );
}
