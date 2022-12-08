import { HTMLAttributes } from 'react';
import { useSetCorrectValue } from 'hooks/setCorrectWeatherValue';

interface IWeatherSpanValue extends HTMLAttributes<HTMLSpanElement> {
    value: number;
}

export default function WeatherSpanValue({ value, ...rest }: IWeatherSpanValue) {
    const state = useSetCorrectValue(value);
    return <span {...rest}>{state}</span>;
}
