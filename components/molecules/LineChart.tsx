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
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const data = [
    { temp: 2, date: '00:00:00' },
    { temp: 1, date: '03:00:00' },
    { temp: 0, date: '06:00:00' },
    { temp: -0, date: '09:00:00' },
    { temp: -1, date: '12:00:00' },
    { temp: -3, date: '15:00:00' },
    { temp: -3, date: '18:00:00' },
    { temp: -2, date: '21:00:00' },
];

export default function LineChart({ ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (
        <Box {...rest}>
            <Heading styles="heading" htmlTag="h3">
                Hourly forecast
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
