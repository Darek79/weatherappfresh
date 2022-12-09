// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchHandler } from 'utils/fetchHandler';
import { getWeatherIndexes } from 'utils/getWeatherIndexes';
import { getMinMaxTemperature } from 'utils/getMinMaxTemperature';
import { getMean } from 'utils/getMean';
import { getMode } from 'utils/getMode';
import type { OPEN_WEATHER, ListEntity } from 'types/open_weather';
interface Data {
    daysObject: Array<ListEntity[]>;
    mean: number;
    mode: number;
    max: number;
    min: number;
}

var testArr1 = {
    cod: '200',
    message: 0,
    cnt: 40,
    list: [
        {
            dt: 1670522400,
            main: {
                temp: 275.35,
                feels_like: 275.35,
                temp_min: 274.46,
                temp_max: 275.35,
                pressure: 1009,
                sea_level: 1009,
                grnd_level: 985,
                humidity: 88,
                temp_kf: 0.89,
            },
            weather: [{ id: 803, main: 'Clouds', description: 'broken clouds', icon: '04n' }],
            clouds: { all: 75 },
            wind: { speed: 1.1, deg: 290, gust: 1.19 },
            visibility: 10000,
            pop: 0,
            sys: { pod: 'n' },
            dt_txt: '2022-12-08 18:00:00',
        },
        {
            dt: 1670533200,
            main: {
                temp: 274.83,
                feels_like: 274.83,
                temp_min: 273.78,
                temp_max: 274.83,
                pressure: 1010,
                sea_level: 1010,
                grnd_level: 985,
                humidity: 90,
                temp_kf: 1.05,
            },
            weather: [{ id: 803, main: 'Clouds', description: 'broken clouds', icon: '04n' }],
            clouds: { all: 83 },
            wind: { speed: 0.91, deg: 305, gust: 1.02 },
            visibility: 10000,
            pop: 0,
            sys: { pod: 'n' },
            dt_txt: '2022-12-08 21:00:00',
        },
        {
            dt: 1670544000,
            main: {
                temp: 274.61,
                feels_like: 274.61,
                temp_min: 274.24,
                temp_max: 274.61,
                pressure: 1011,
                sea_level: 1011,
                grnd_level: 985,
                humidity: 95,
                temp_kf: 0.37,
            },
            weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
            clouds: { all: 92 },
            wind: { speed: 0.13, deg: 162, gust: 0.57 },
            visibility: 132,
            pop: 0.24,
            snow: { '3h': 0.17 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-09 00:00:00',
        },
        {
            dt: 1670554800,
            main: {
                temp: 273.95,
                feels_like: 273.95,
                temp_min: 273.95,
                temp_max: 273.95,
                pressure: 1011,
                sea_level: 1011,
                grnd_level: 984,
                humidity: 96,
                temp_kf: 0,
            },
            weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n' }],
            clouds: { all: 99 },
            wind: { speed: 0.78, deg: 120, gust: 1.17 },
            visibility: 10000,
            pop: 0.19,
            sys: { pod: 'n' },
            dt_txt: '2022-12-09 03:00:00',
        },
        {
            dt: 1670565600,
            main: {
                temp: 273.13,
                feels_like: 273.13,
                temp_min: 273.13,
                temp_max: 273.13,
                pressure: 1011,
                sea_level: 1011,
                grnd_level: 984,
                humidity: 91,
                temp_kf: 0,
            },
            weather: [{ id: 803, main: 'Clouds', description: 'broken clouds', icon: '04n' }],
            clouds: { all: 78 },
            wind: { speed: 1.2, deg: 108, gust: 1.67 },
            visibility: 10000,
            pop: 0,
            sys: { pod: 'n' },
            dt_txt: '2022-12-09 06:00:00',
        },
        {
            dt: 1670576400,
            main: {
                temp: 274.34,
                feels_like: 272.74,
                temp_min: 274.34,
                temp_max: 274.34,
                pressure: 1010,
                sea_level: 1010,
                grnd_level: 984,
                humidity: 82,
                temp_kf: 0,
            },
            weather: [{ id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d' }],
            clouds: { all: 79 },
            wind: { speed: 1.51, deg: 71, gust: 1.87 },
            visibility: 10000,
            pop: 0,
            sys: { pod: 'd' },
            dt_txt: '2022-12-09 09:00:00',
        },
        {
            dt: 1670587200,
            main: {
                temp: 275.37,
                feels_like: 271.79,
                temp_min: 275.37,
                temp_max: 275.37,
                pressure: 1008,
                sea_level: 1008,
                grnd_level: 981,
                humidity: 77,
                temp_kf: 0,
            },
            weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d' }],
            clouds: { all: 89 },
            wind: { speed: 3.71, deg: 67, gust: 4.99 },
            visibility: 10000,
            pop: 0.04,
            sys: { pod: 'd' },
            dt_txt: '2022-12-09 12:00:00',
        },
        {
            dt: 1670598000,
            main: {
                temp: 273.53,
                feels_like: 268.98,
                temp_min: 273.53,
                temp_max: 273.53,
                pressure: 1006,
                sea_level: 1006,
                grnd_level: 979,
                humidity: 98,
                temp_kf: 0,
            },
            weather: [{ id: 601, main: 'Snow', description: 'snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 4.55, deg: 75, gust: 8.58 },
            visibility: 258,
            pop: 0.73,
            snow: { '3h': 2.33 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-09 15:00:00',
        },
        {
            dt: 1670608800,
            main: {
                temp: 273.46,
                feels_like: 270,
                temp_min: 273.46,
                temp_max: 273.46,
                pressure: 1005,
                sea_level: 1005,
                grnd_level: 978,
                humidity: 99,
                temp_kf: 0,
            },
            weather: [{ id: 601, main: 'Snow', description: 'snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 3.03, deg: 66, gust: 6.53 },
            visibility: 113,
            pop: 0.93,
            snow: { '3h': 4.04 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-09 18:00:00',
        },
        {
            dt: 1670619600,
            main: {
                temp: 273.65,
                feels_like: 271.61,
                temp_min: 273.65,
                temp_max: 273.65,
                pressure: 1003,
                sea_level: 1003,
                grnd_level: 977,
                humidity: 100,
                temp_kf: 0,
            },
            weather: [{ id: 601, main: 'Snow', description: 'snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 1.74, deg: 46, gust: 3.56 },
            visibility: 58,
            pop: 1,
            snow: { '3h': 3.17 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-09 21:00:00',
        },
        {
            dt: 1670630400,
            main: {
                temp: 273.75,
                feels_like: 271.84,
                temp_min: 273.75,
                temp_max: 273.75,
                pressure: 1003,
                sea_level: 1003,
                grnd_level: 976,
                humidity: 100,
                temp_kf: 0,
            },
            weather: [{ id: 601, main: 'Snow', description: 'snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 1.66, deg: 19, gust: 3.97 },
            visibility: 36,
            pop: 1,
            snow: { '3h': 2.75 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-10 00:00:00',
        },
        {
            dt: 1670641200,
            main: {
                temp: 273.7,
                feels_like: 271.81,
                temp_min: 273.7,
                temp_max: 273.7,
                pressure: 1003,
                sea_level: 1003,
                grnd_level: 976,
                humidity: 100,
                temp_kf: 0,
            },
            weather: [{ id: 601, main: 'Snow', description: 'snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 1.64, deg: 319, gust: 3.77 },
            visibility: 25,
            pop: 0.93,
            snow: { '3h': 3.22 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-10 03:00:00',
        },
        {
            dt: 1670652000,
            main: {
                temp: 273.77,
                feels_like: 271.58,
                temp_min: 273.77,
                temp_max: 273.77,
                pressure: 1005,
                sea_level: 1005,
                grnd_level: 978,
                humidity: 99,
                temp_kf: 0,
            },
            weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 1.87, deg: 302, gust: 4.72 },
            visibility: 38,
            pop: 0.92,
            snow: { '3h': 0.72 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-10 06:00:00',
        },
        {
            dt: 1670662800,
            main: {
                temp: 273.79,
                feels_like: 271.96,
                temp_min: 273.79,
                temp_max: 273.79,
                pressure: 1007,
                sea_level: 1007,
                grnd_level: 980,
                humidity: 100,
                temp_kf: 0,
            },
            weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13d' }],
            clouds: { all: 100 },
            wind: { speed: 1.61, deg: 284, gust: 3.45 },
            visibility: 93,
            pop: 0.22,
            snow: { '3h': 0.19 },
            sys: { pod: 'd' },
            dt_txt: '2022-12-10 09:00:00',
        },
        {
            dt: 1670673600,
            main: {
                temp: 273.9,
                feels_like: 272.34,
                temp_min: 273.9,
                temp_max: 273.9,
                pressure: 1007,
                sea_level: 1007,
                grnd_level: 981,
                humidity: 100,
                temp_kf: 0,
            },
            weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13d' }],
            clouds: { all: 100 },
            wind: { speed: 1.44, deg: 288, gust: 2.96 },
            visibility: 1265,
            pop: 0.2,
            snow: { '3h': 0.11 },
            sys: { pod: 'd' },
            dt_txt: '2022-12-10 12:00:00',
        },
        {
            dt: 1670684400,
            main: {
                temp: 273.71,
                feels_like: 273.71,
                temp_min: 273.71,
                temp_max: 273.71,
                pressure: 1008,
                sea_level: 1008,
                grnd_level: 982,
                humidity: 99,
                temp_kf: 0,
            },
            weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 0.61, deg: 2, gust: 2.29 },
            visibility: 463,
            pop: 0.2,
            snow: { '3h': 0.11 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-10 15:00:00',
        },
        {
            dt: 1670695200,
            main: {
                temp: 273.54,
                feels_like: 271.1,
                temp_min: 273.54,
                temp_max: 273.54,
                pressure: 1008,
                sea_level: 1008,
                grnd_level: 982,
                humidity: 99,
                temp_kf: 0,
            },
            weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 2.04, deg: 39, gust: 5 },
            visibility: 276,
            pop: 0.2,
            snow: { '3h': 0.18 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-10 18:00:00',
        },
        {
            dt: 1670706000,
            main: {
                temp: 273.36,
                feels_like: 269.78,
                temp_min: 273.36,
                temp_max: 273.36,
                pressure: 1009,
                sea_level: 1009,
                grnd_level: 982,
                humidity: 99,
                temp_kf: 0,
            },
            weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 3.14, deg: 50, gust: 6.69 },
            visibility: 220,
            pop: 0.47,
            snow: { '3h': 0.34 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-10 21:00:00',
        },
        {
            dt: 1670716800,
            main: {
                temp: 272.95,
                feels_like: 268.89,
                temp_min: 272.95,
                temp_max: 272.95,
                pressure: 1007,
                sea_level: 1007,
                grnd_level: 980,
                humidity: 98,
                temp_kf: 0,
            },
            weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 3.63, deg: 55, gust: 8.62 },
            visibility: 165,
            pop: 0.6,
            snow: { '3h': 0.53 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-11 00:00:00',
        },
        {
            dt: 1670727600,
            main: {
                temp: 272.7,
                feels_like: 268.09,
                temp_min: 272.7,
                temp_max: 272.7,
                pressure: 1006,
                sea_level: 1006,
                grnd_level: 979,
                humidity: 98,
                temp_kf: 0,
            },
            weather: [{ id: 601, main: 'Snow', description: 'snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 4.32, deg: 42, gust: 9.62 },
            visibility: 126,
            pop: 0.93,
            snow: { '3h': 1.85 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-11 03:00:00',
        },
        {
            dt: 1670738400,
            main: {
                temp: 272.29,
                feels_like: 266.96,
                temp_min: 272.29,
                temp_max: 272.29,
                pressure: 1004,
                sea_level: 1004,
                grnd_level: 977,
                humidity: 98,
                temp_kf: 0,
            },
            weather: [{ id: 601, main: 'Snow', description: 'snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 5.34, deg: 27, gust: 11.4 },
            visibility: 126,
            pop: 1,
            snow: { '3h': 4.29 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-11 06:00:00',
        },
        {
            dt: 1670749200,
            main: {
                temp: 272.2,
                feels_like: 266.72,
                temp_min: 272.2,
                temp_max: 272.2,
                pressure: 1004,
                sea_level: 1004,
                grnd_level: 977,
                humidity: 97,
                temp_kf: 0,
            },
            weather: [{ id: 601, main: 'Snow', description: 'snow', icon: '13d' }],
            clouds: { all: 100 },
            wind: { speed: 5.58, deg: 17, gust: 11.47 },
            visibility: 139,
            pop: 1,
            snow: { '3h': 5.4 },
            sys: { pod: 'd' },
            dt_txt: '2022-12-11 09:00:00',
        },
        {
            dt: 1670760000,
            main: {
                temp: 272.27,
                feels_like: 267.28,
                temp_min: 272.27,
                temp_max: 272.27,
                pressure: 1002,
                sea_level: 1002,
                grnd_level: 975,
                humidity: 97,
                temp_kf: 0,
            },
            weather: [{ id: 601, main: 'Snow', description: 'snow', icon: '13d' }],
            clouds: { all: 100 },
            wind: { speed: 4.76, deg: 4, gust: 10.08 },
            visibility: 139,
            pop: 1,
            snow: { '3h': 3.67 },
            sys: { pod: 'd' },
            dt_txt: '2022-12-11 12:00:00',
        },
        {
            dt: 1670770800,
            main: {
                temp: 271.64,
                feels_like: 266.63,
                temp_min: 271.64,
                temp_max: 271.64,
                pressure: 1003,
                sea_level: 1003,
                grnd_level: 976,
                humidity: 97,
                temp_kf: 0,
            },
            weather: [{ id: 601, main: 'Snow', description: 'snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 4.55, deg: 349, gust: 9.75 },
            visibility: 152,
            pop: 1,
            snow: { '3h': 1.92 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-11 15:00:00',
        },
        {
            dt: 1670781600,
            main: {
                temp: 271.16,
                feels_like: 266.58,
                temp_min: 271.16,
                temp_max: 271.16,
                pressure: 1003,
                sea_level: 1003,
                grnd_level: 976,
                humidity: 97,
                temp_kf: 0,
            },
            weather: [{ id: 601, main: 'Snow', description: 'snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 3.79, deg: 331, gust: 8.55 },
            visibility: 148,
            pop: 1,
            snow: { '3h': 1.56 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-11 18:00:00',
        },
        {
            dt: 1670792400,
            main: {
                temp: 270.69,
                feels_like: 266.76,
                temp_min: 270.69,
                temp_max: 270.69,
                pressure: 1004,
                sea_level: 1004,
                grnd_level: 977,
                humidity: 97,
                temp_kf: 0,
            },
            weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 2.93, deg: 311, gust: 6.97 },
            visibility: 140,
            pop: 0.97,
            snow: { '3h': 1.26 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-11 21:00:00',
        },
        {
            dt: 1670803200,
            main: {
                temp: 270.46,
                feels_like: 266.35,
                temp_min: 270.46,
                temp_max: 270.46,
                pressure: 1003,
                sea_level: 1003,
                grnd_level: 976,
                humidity: 97,
                temp_kf: 0,
            },
            weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 3.07, deg: 302, gust: 6.97 },
            visibility: 155,
            pop: 0.98,
            snow: { '3h': 1.26 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-12 00:00:00',
        },
        {
            dt: 1670814000,
            main: {
                temp: 270.31,
                feels_like: 265.49,
                temp_min: 270.31,
                temp_max: 270.31,
                pressure: 1004,
                sea_level: 1004,
                grnd_level: 977,
                humidity: 97,
                temp_kf: 0,
            },
            weather: [{ id: 601, main: 'Snow', description: 'snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 3.86, deg: 280, gust: 7.34 },
            visibility: 141,
            pop: 1,
            snow: { '3h': 1.93 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-12 03:00:00',
        },
        {
            dt: 1670824800,
            main: {
                temp: 270.17,
                feels_like: 264.82,
                temp_min: 270.17,
                temp_max: 270.17,
                pressure: 1005,
                sea_level: 1005,
                grnd_level: 977,
                humidity: 96,
                temp_kf: 0,
            },
            weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 4.53, deg: 269, gust: 8.46 },
            visibility: 181,
            pop: 1,
            snow: { '3h': 1.31 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-12 06:00:00',
        },
        {
            dt: 1670835600,
            main: {
                temp: 270.88,
                feels_like: 265.15,
                temp_min: 270.88,
                temp_max: 270.88,
                pressure: 1006,
                sea_level: 1006,
                grnd_level: 979,
                humidity: 95,
                temp_kf: 0,
            },
            weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13d' }],
            clouds: { all: 99 },
            wind: { speed: 5.4, deg: 261, gust: 8.76 },
            visibility: 764,
            pop: 0.68,
            snow: { '3h': 0.42 },
            sys: { pod: 'd' },
            dt_txt: '2022-12-12 09:00:00',
        },
        {
            dt: 1670846400,
            main: {
                temp: 272.01,
                feels_like: 266.31,
                temp_min: 272.01,
                temp_max: 272.01,
                pressure: 1005,
                sea_level: 1005,
                grnd_level: 978,
                humidity: 93,
                temp_kf: 0,
            },
            weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13d' }],
            clouds: { all: 96 },
            wind: { speed: 5.89, deg: 264, gust: 9.37 },
            visibility: 3218,
            pop: 0.48,
            snow: { '3h': 0.14 },
            sys: { pod: 'd' },
            dt_txt: '2022-12-12 12:00:00',
        },
        {
            dt: 1670857200,
            main: {
                temp: 270.97,
                feels_like: 265.41,
                temp_min: 270.97,
                temp_max: 270.97,
                pressure: 1006,
                sea_level: 1006,
                grnd_level: 979,
                humidity: 94,
                temp_kf: 0,
            },
            weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 5.16, deg: 257, gust: 10.54 },
            visibility: 1344,
            pop: 0.36,
            snow: { '3h': 0.13 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-12 15:00:00',
        },
        {
            dt: 1670868000,
            main: {
                temp: 269.08,
                feels_like: 263.85,
                temp_min: 269.08,
                temp_max: 269.08,
                pressure: 1007,
                sea_level: 1007,
                grnd_level: 980,
                humidity: 95,
                temp_kf: 0,
            },
            weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n' }],
            clouds: { all: 95 },
            wind: { speed: 4.02, deg: 250, gust: 9.21 },
            visibility: 8505,
            pop: 0.09,
            sys: { pod: 'n' },
            dt_txt: '2022-12-12 18:00:00',
        },
        {
            dt: 1670878800,
            main: {
                temp: 267.72,
                feels_like: 262.92,
                temp_min: 267.72,
                temp_max: 267.72,
                pressure: 1008,
                sea_level: 1008,
                grnd_level: 981,
                humidity: 95,
                temp_kf: 0,
            },
            weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n' }],
            clouds: { all: 87 },
            wind: { speed: 3.2, deg: 241, gust: 8.06 },
            visibility: 3839,
            pop: 0.05,
            sys: { pod: 'n' },
            dt_txt: '2022-12-12 21:00:00',
        },
        {
            dt: 1670889600,
            main: {
                temp: 268.13,
                feels_like: 263.63,
                temp_min: 268.13,
                temp_max: 268.13,
                pressure: 1008,
                sea_level: 1008,
                grnd_level: 980,
                humidity: 95,
                temp_kf: 0,
            },
            weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n' }],
            clouds: { all: 93 },
            wind: { speed: 2.99, deg: 254, gust: 7.82 },
            visibility: 10000,
            pop: 0.05,
            sys: { pod: 'n' },
            dt_txt: '2022-12-13 00:00:00',
        },
        {
            dt: 1670900400,
            main: {
                temp: 267.49,
                feels_like: 262.74,
                temp_min: 267.49,
                temp_max: 267.49,
                pressure: 1008,
                sea_level: 1008,
                grnd_level: 981,
                humidity: 96,
                temp_kf: 0,
            },
            weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n' }],
            clouds: { all: 97 },
            wind: { speed: 3.11, deg: 245, gust: 6.46 },
            visibility: 4506,
            pop: 0.05,
            sys: { pod: 'n' },
            dt_txt: '2022-12-13 03:00:00',
        },
        {
            dt: 1670911200,
            main: {
                temp: 268.84,
                feels_like: 263.9,
                temp_min: 268.84,
                temp_max: 268.84,
                pressure: 1008,
                sea_level: 1008,
                grnd_level: 980,
                humidity: 94,
                temp_kf: 0,
            },
            weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n' }],
            clouds: { all: 98 },
            wind: { speed: 3.61, deg: 241, gust: 8.94 },
            visibility: 10000,
            pop: 0,
            sys: { pod: 'n' },
            dt_txt: '2022-12-13 06:00:00',
        },
        {
            dt: 1670922000,
            main: {
                temp: 269.53,
                feels_like: 265.08,
                temp_min: 269.53,
                temp_max: 269.53,
                pressure: 1008,
                sea_level: 1008,
                grnd_level: 981,
                humidity: 92,
                temp_kf: 0,
            },
            weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d' }],
            clouds: { all: 96 },
            wind: { speed: 3.23, deg: 253, gust: 8.14 },
            visibility: 10000,
            pop: 0.11,
            sys: { pod: 'd' },
            dt_txt: '2022-12-13 09:00:00',
        },
        {
            dt: 1670932800,
            main: {
                temp: 271.18,
                feels_like: 265.93,
                temp_min: 271.18,
                temp_max: 271.18,
                pressure: 1008,
                sea_level: 1008,
                grnd_level: 981,
                humidity: 92,
                temp_kf: 0,
            },
            weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d' }],
            clouds: { all: 98 },
            wind: { speed: 4.74, deg: 266, gust: 8.47 },
            visibility: 10000,
            pop: 0.12,
            sys: { pod: 'd' },
            dt_txt: '2022-12-13 12:00:00',
        },
        {
            dt: 1670943600,
            main: {
                temp: 270.71,
                feels_like: 265.66,
                temp_min: 270.71,
                temp_max: 270.71,
                pressure: 1008,
                sea_level: 1008,
                grnd_level: 981,
                humidity: 94,
                temp_kf: 0,
            },
            weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 4.29, deg: 284, gust: 8.82 },
            visibility: 10000,
            pop: 0.49,
            snow: { '3h': 0.15 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-13 15:00:00',
        },
    ],
    city: {
        id: 3094802,
        name: 'Krakow',
        coord: { lat: 50.0833, lon: 19.9167 },
        country: 'PL',
        population: 755050,
        timezone: 3600,
        sunrise: 1670480753,
        sunset: 1670510322,
    },
};

// 1. The page should show 5-day weather forecast for given city including:
// a. Morning temperature
// b. Day temperature
// c. Night temperature
// d. Humidity
// 2. The page should also show following stats relevant to weather forecast:
// a. Minimum value
// b. Maximum value
// c. Mean value
// d. Mode value

//https://api.openweathermap.org/data/2.5/forecast?q=Krak%C3%B3w,pl&APPID=7ad4da9ee7c5e2e647a95309d5dbaeec

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const data = await fetchHandler(`${process.env.WHOIS}`);

    const indexesObj = getWeatherIndexes(testArr1);
    const [max, min] = getMinMaxTemperature(indexesObj.findMaxMinTemperatureArr);
    const mean = getMean(indexesObj.findMeanModeValueArr);
    const mode = getMode(indexesObj.findMeanModeValueArr);

    console.log(data);
    res.status(200).json({ daysObject: indexesObj.indexedDayObjects, mean: mean, mode: mode, max: max, min: min });
}
