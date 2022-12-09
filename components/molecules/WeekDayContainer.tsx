import { HTMLAttributes } from 'react';
import { Box, Heading, WeekDayBoxes } from 'components';
import { IndexedDayObjectsContext } from 'context/indexedDayObjectsContext';
import { ListEntity } from 'types/open_weather';
interface IWeekDayContainer extends HTMLAttributes<HTMLDivElement> {
    headingText?: string;
    indexedDayObjectForecast: Array<ListEntity[]>;
}

export default function WeekDayContainer({ indexedDayObjectForecast, headingText, children, ...rest }: IWeekDayContainer) {
    return (
        <IndexedDayObjectsContext.Provider value={indexedDayObjectForecast}>
            <Box {...rest}>
                <Heading styles="heading" htmlTag="h3">
                    {headingText}
                </Heading>
                {children}
            </Box>
        </IndexedDayObjectsContext.Provider>
    );
}
