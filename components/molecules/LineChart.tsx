import { HTMLAttributes } from 'react';

import {
    AreaChart,
    Area,
    XAxis,
    Label,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    BarChart,
} from 'recharts';
import { Heading, Box } from 'components';
import type { ILineChartsData } from 'types/linecharts';
import type { ListEntity } from 'types/open_weather';
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

interface LineChartsDataArray extends HTMLAttributes<HTMLDivElement> {
    data: ILineChartsData;
    actualDayData: ListEntity;
    headingText: string;
}

export default function LineChart({ data, actualDayData, headingText, ...rest }: LineChartsDataArray) {
    return (
        <Box {...rest}>
            <Heading styles="heading" htmlTag="h3">
                {headingText}
            </Heading>
            <ResponsiveContainer width="100%" height={400} debounce={300}>
                <AreaChart data={data} margin={{ top: 10, right: 40, left: 0, bottom: 0 }}>
                    <XAxis dataKey="date" fontWeight="bold" />
                    <YAxis
                        dataKey="temp"
                        fontWeight="bold"
                        label={{ value: 'Temperature', angle: -90, position: 'insideStart' }}
                    ></YAxis>
                    <Area
                        type="monotone"
                        dataKey="temp"
                        stroke="#b91c1c"
                        fillOpacity={0.5}
                        strokeWidth={2}
                        fill="url(#colorUv)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </Box>
    );
}
{
    /* <Bar type="monotone" dataKey={'uv'} fill="#00A4FF" strokeWidth={3} />; */
}
