// import { useEffect, useState } from 'react';
import Image from 'next/image';
import { TimeCityBox, Box, Text, DayCardList } from 'components';

import dayjs from 'dayjs';
import { ListEntity } from 'types/open_weather';

interface IDayCard {
    actualDayObject: ListEntity;
    city?: string;
    time?: string;
}

export default function DayCard({ actualDayObject, city }: IDayCard) {
    // const [date, setDate] = useState<string>('');
    // const [timeLocal, setTime] = useState<string>('');
    // useEffect(() => {
    //     if (time) {
    //         const splitted = time.split('T');
    //         const actualTime = splitted[1].substring(0, 5);
    //         setTime(actualTime);
    //         setDate(splitted[0]);
    //     }
    // }, [time]);

    return (
        <Box className="relative m-auto bg-pageDark min-w-[250px] p-3 rounded-lg text-white text-center">
            <TimeCityBox timeStyle="" cityStyle="font-semibold" time="" city={city!} />

            <Image
                alt="weather_icon"
                priority
                src={`/icons/${actualDayObject.weather[0].icon}.png`}
                style={{ margin: 'auto' }}
                width={100}
                height={100}
            />
            <Text className="font-bold">{`Temperature: ${actualDayObject.main.temp}°C`}</Text>
            <Text className="font-bold first-letter:uppercase">{`${actualDayObject.weather[0].description}`}</Text>
            <DayCardList className="flex flex-col items-center justify-center" weatherObj={actualDayObject} />
        </Box>
    );
}
