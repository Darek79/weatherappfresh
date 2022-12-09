import { HTMLAttributes } from 'react';
import { Box, Heading, WeekDayBoxes } from 'components';
import { IndexedDayObjectsContext } from 'context/indexedDayObjectsContext';
import { ListEntity } from 'types/open_weather';
interface IWeekDayContainer extends HTMLAttributes<HTMLDivElement> {
    headingText?: string;
    indexedDayObjectForecast: Array<ListEntity[]>;
}

export default function WeekDayContainer({
    indexedDayObjectForecast,
    headingText,
    children,
    ...rest
}: IWeekDayContainer) {
    return (
        <Box {...rest}>
            <Heading styles="heading" htmlTag="h3">
                {headingText}
            </Heading>
            <Box className="h-fit w-full rounded-lg bg-pageDark overflow-hidden">
                {indexedDayObjectForecast &&
                    indexedDayObjectForecast.map((el, i) => (
                        <WeekDayBoxes
                            className="h-[calc(380px/5)] text-inherit p-2"
                            key={el[0].dt}
                            indexedDayObjectDay={el}
                        />
                    ))}
            </Box>
        </Box>
    );
}
