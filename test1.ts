import { getWeatherIndexes } from 'utils/getWeatherIndexes';
import { getMinMaxTemperature } from 'utils/getMinMaxTemperature';
import { getMean } from 'utils/getMean';
import { getMode } from 'utils/getMode';

var testArr1 = {
    cod: '200',
    message: 0,
    cnt: 40,
    list: [
        {
            dt: 1670544000,
            main: {
                temp: 275.35,
                feels_like: 275.35,
                temp_min: 274.47,
                temp_max: 275.35,
                pressure: 1008,
                sea_level: 1008,
                grnd_level: 985,
                humidity: 85,
                temp_kf: 0.88,
            },
            weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 0.37, deg: 240, gust: 0.86 },
            visibility: 32,
            pop: 0.2,
            snow: { '3h': 0.16 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-09 00:00:00',
        },
        {
            dt: 1670554800,
            main: {
                temp: 274.89,
                feels_like: 274.89,
                temp_min: 273.96,
                temp_max: 274.89,
                pressure: 1009,
                sea_level: 1009,
                grnd_level: 984,
                humidity: 89,
                temp_kf: 0.93,
            },
            weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
            clouds: { all: 99 },
            wind: { speed: 0.54, deg: 169, gust: 1.06 },
            visibility: 10000,
            pop: 0.23,
            snow: { '3h': 0.12 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-09 03:00:00',
        },
        {
            dt: 1670565600,
            main: {
                temp: 273.95,
                feels_like: 273.95,
                temp_min: 273.25,
                temp_max: 273.95,
                pressure: 1010,
                sea_level: 1010,
                grnd_level: 984,
                humidity: 90,
                temp_kf: 0.7,
            },
            weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n' }],
            clouds: { all: 93 },
            wind: { speed: 0.69, deg: 144, gust: 1.18 },
            visibility: 10000,
            pop: 0,
            sys: { pod: 'n' },
            dt_txt: '2022-12-09 06:00:00',
        },
        {
            dt: 1670576400,
            main: {
                temp: 274.49,
                feels_like: 272.45,
                temp_min: 274.49,
                temp_max: 274.49,
                pressure: 1011,
                sea_level: 1011,
                grnd_level: 984,
                humidity: 84,
                temp_kf: 0,
            },
            weather: [{ id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d' }],
            clouds: { all: 78 },
            wind: { speed: 1.84, deg: 96, gust: 2.5 },
            visibility: 10000,
            pop: 0,
            sys: { pod: 'd' },
            dt_txt: '2022-12-09 09:00:00',
        },
        {
            dt: 1670587200,
            main: {
                temp: 275.21,
                feels_like: 271.79,
                temp_min: 275.21,
                temp_max: 275.21,
                pressure: 1008,
                sea_level: 1008,
                grnd_level: 981,
                humidity: 79,
                temp_kf: 0,
            },
            weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d' }],
            clouds: { all: 89 },
            wind: { speed: 3.43, deg: 77, gust: 4.72 },
            visibility: 10000,
            pop: 0.04,
            sys: { pod: 'd' },
            dt_txt: '2022-12-09 12:00:00',
        },
        {
            dt: 1670598000,
            main: {
                temp: 273.62,
                feels_like: 269.43,
                temp_min: 273.62,
                temp_max: 273.62,
                pressure: 1007,
                sea_level: 1007,
                grnd_level: 980,
                humidity: 97,
                temp_kf: 0,
            },
            weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 4.02, deg: 77, gust: 7.87 },
            visibility: 464,
            pop: 0.73,
            snow: { '3h': 1.49 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-09 15:00:00',
        },
        {
            dt: 1670608800,
            main: {
                temp: 273.54,
                feels_like: 270.07,
                temp_min: 273.54,
                temp_max: 273.54,
                pressure: 1005,
                sea_level: 1005,
                grnd_level: 978,
                humidity: 99,
                temp_kf: 0,
            },
            weather: [{ id: 601, main: 'Snow', description: 'snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 3.05, deg: 69, gust: 6.59 },
            visibility: 58,
            pop: 0.93,
            snow: { '3h': 4.5 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-09 18:00:00',
        },
        {
            dt: 1670619600,
            main: {
                temp: 273.55,
                feels_like: 270.47,
                temp_min: 273.55,
                temp_max: 273.55,
                pressure: 1003,
                sea_level: 1003,
                grnd_level: 976,
                humidity: 99,
                temp_kf: 0,
            },
            weather: [{ id: 601, main: 'Snow', description: 'snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 2.63, deg: 60, gust: 5.31 },
            visibility: 42,
            pop: 1,
            snow: { '3h': 3.81 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-09 21:00:00',
        },
        {
            dt: 1670630400,
            main: {
                temp: 273.63,
                feels_like: 271.35,
                temp_min: 273.63,
                temp_max: 273.63,
                pressure: 1003,
                sea_level: 1003,
                grnd_level: 976,
                humidity: 100,
                temp_kf: 0,
            },
            weather: [{ id: 601, main: 'Snow', description: 'snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 1.92, deg: 3, gust: 4.11 },
            visibility: 28,
            pop: 1,
            snow: { '3h': 3.4 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-10 00:00:00',
        },
        {
            dt: 1670641200,
            main: {
                temp: 273.73,
                feels_like: 271.38,
                temp_min: 273.73,
                temp_max: 273.73,
                pressure: 1004,
                sea_level: 1004,
                grnd_level: 978,
                humidity: 99,
                temp_kf: 0,
            },
            weather: [{ id: 601, main: 'Snow', description: 'snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 1.99, deg: 303, gust: 4.37 },
            visibility: 29,
            pop: 1,
            snow: { '3h': 1.82 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-10 03:00:00',
        },
        {
            dt: 1670652000,
            main: {
                temp: 273.66,
                feels_like: 271.65,
                temp_min: 273.66,
                temp_max: 273.66,
                pressure: 1006,
                sea_level: 1006,
                grnd_level: 979,
                humidity: 99,
                temp_kf: 0,
            },
            weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 1.72, deg: 315, gust: 4.23 },
            visibility: 123,
            pop: 1,
            snow: { '3h': 0.23 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-10 06:00:00',
        },
        {
            dt: 1670662800,
            main: {
                temp: 273.72,
                feels_like: 271.89,
                temp_min: 273.72,
                temp_max: 273.72,
                pressure: 1008,
                sea_level: 1008,
                grnd_level: 982,
                humidity: 99,
                temp_kf: 0,
            },
            weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13d' }],
            clouds: { all: 100 },
            wind: { speed: 1.6, deg: 329, gust: 2.91 },
            visibility: 617,
            pop: 0.2,
            snow: { '3h': 0.17 },
            sys: { pod: 'd' },
            dt_txt: '2022-12-10 09:00:00',
        },
        {
            dt: 1670673600,
            main: {
                temp: 273.91,
                feels_like: 273.91,
                temp_min: 273.91,
                temp_max: 273.91,
                pressure: 1008,
                sea_level: 1008,
                grnd_level: 981,
                humidity: 100,
                temp_kf: 0,
            },
            weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13d' }],
            clouds: { all: 100 },
            wind: { speed: 1.24, deg: 22, gust: 2.48 },
            visibility: 400,
            pop: 0.2,
            snow: { '3h': 0.1 },
            sys: { pod: 'd' },
            dt_txt: '2022-12-10 12:00:00',
        },
        {
            dt: 1670684400,
            main: {
                temp: 273.59,
                feels_like: 271.54,
                temp_min: 273.59,
                temp_max: 273.59,
                pressure: 1009,
                sea_level: 1009,
                grnd_level: 982,
                humidity: 99,
                temp_kf: 0,
            },
            weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 1.74, deg: 54, gust: 3.59 },
            visibility: 417,
            pop: 0.2,
            snow: { '3h': 0.13 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-10 15:00:00',
        },
        {
            dt: 1670695200,
            main: {
                temp: 273.53,
                feels_like: 270.55,
                temp_min: 273.53,
                temp_max: 273.53,
                pressure: 1009,
                sea_level: 1009,
                grnd_level: 982,
                humidity: 99,
                temp_kf: 0,
            },
            weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 2.53, deg: 64, gust: 5.77 },
            visibility: 135,
            pop: 0.2,
            snow: { '3h': 0.15 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-10 18:00:00',
        },
        {
            dt: 1670706000,
            main: {
                temp: 273.04,
                feels_like: 268.69,
                temp_min: 273.04,
                temp_max: 273.04,
                pressure: 1009,
                sea_level: 1009,
                grnd_level: 982,
                humidity: 98,
                temp_kf: 0,
            },
            weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 4.06, deg: 61, gust: 7.81 },
            visibility: 301,
            pop: 0.35,
            snow: { '3h': 0.31 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-10 21:00:00',
        },
        {
            dt: 1670716800,
            main: {
                temp: 272.6,
                feels_like: 268.08,
                temp_min: 272.6,
                temp_max: 272.6,
                pressure: 1007,
                sea_level: 1007,
                grnd_level: 980,
                humidity: 98,
                temp_kf: 0,
            },
            weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 4.16, deg: 50, gust: 9.09 },
            visibility: 129,
            pop: 0.94,
            snow: { '3h': 0.97 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-11 00:00:00',
        },
        {
            dt: 1670727600,
            main: {
                temp: 272.25,
                feels_like: 267.28,
                temp_min: 272.25,
                temp_max: 272.25,
                pressure: 1005,
                sea_level: 1005,
                grnd_level: 979,
                humidity: 98,
                temp_kf: 0,
            },
            weather: [{ id: 601, main: 'Snow', description: 'snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 4.72, deg: 40, gust: 10.01 },
            visibility: 134,
            pop: 1,
            snow: { '3h': 2.78 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-11 03:00:00',
        },
        {
            dt: 1670738400,
            main: {
                temp: 271.89,
                feels_like: 266.56,
                temp_min: 271.89,
                temp_max: 271.89,
                pressure: 1004,
                sea_level: 1004,
                grnd_level: 977,
                humidity: 97,
                temp_kf: 0,
            },
            weather: [{ id: 601, main: 'Snow', description: 'snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 5.17, deg: 20, gust: 10.77 },
            visibility: 135,
            pop: 1,
            snow: { '3h': 4.11 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-11 06:00:00',
        },
        {
            dt: 1670749200,
            main: {
                temp: 271.91,
                feels_like: 266.38,
                temp_min: 271.91,
                temp_max: 271.91,
                pressure: 1004,
                sea_level: 1004,
                grnd_level: 977,
                humidity: 97,
                temp_kf: 0,
            },
            weather: [{ id: 601, main: 'Snow', description: 'snow', icon: '13d' }],
            clouds: { all: 100 },
            wind: { speed: 5.52, deg: 9, gust: 10.86 },
            visibility: 145,
            pop: 1,
            snow: { '3h': 4.53 },
            sys: { pod: 'd' },
            dt_txt: '2022-12-11 09:00:00',
        },
        {
            dt: 1670760000,
            main: {
                temp: 271.86,
                feels_like: 266.76,
                temp_min: 271.86,
                temp_max: 271.86,
                pressure: 1003,
                sea_level: 1003,
                grnd_level: 976,
                humidity: 97,
                temp_kf: 0,
            },
            weather: [{ id: 601, main: 'Snow', description: 'snow', icon: '13d' }],
            clouds: { all: 100 },
            wind: { speed: 4.78, deg: 354, gust: 9.59 },
            visibility: 151,
            pop: 1,
            snow: { '3h': 2.86 },
            sys: { pod: 'd' },
            dt_txt: '2022-12-11 12:00:00',
        },
        {
            dt: 1670770800,
            main: {
                temp: 271.22,
                feels_like: 266.21,
                temp_min: 271.22,
                temp_max: 271.22,
                pressure: 1003,
                sea_level: 1003,
                grnd_level: 977,
                humidity: 97,
                temp_kf: 0,
            },
            weather: [{ id: 601, main: 'Snow', description: 'snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 4.4, deg: 347, gust: 9.6 },
            visibility: 160,
            pop: 1,
            snow: { '3h': 1.81 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-11 15:00:00',
        },
        {
            dt: 1670781600,
            main: {
                temp: 270.65,
                feels_like: 266.24,
                temp_min: 270.65,
                temp_max: 270.65,
                pressure: 1005,
                sea_level: 1005,
                grnd_level: 978,
                humidity: 97,
                temp_kf: 0,
            },
            weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 3.45, deg: 321, gust: 7.8 },
            visibility: 142,
            pop: 1,
            snow: { '3h': 1.38 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-11 18:00:00',
        },
        {
            dt: 1670792400,
            main: {
                temp: 270.25,
                feels_like: 266.14,
                temp_min: 270.25,
                temp_max: 270.25,
                pressure: 1005,
                sea_level: 1005,
                grnd_level: 978,
                humidity: 97,
                temp_kf: 0,
            },
            weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 3.03, deg: 305, gust: 6.85 },
            visibility: 152,
            pop: 0.96,
            snow: { '3h': 1.28 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-11 21:00:00',
        },
        {
            dt: 1670803200,
            main: {
                temp: 270.07,
                feels_like: 265.97,
                temp_min: 270.07,
                temp_max: 270.07,
                pressure: 1005,
                sea_level: 1005,
                grnd_level: 978,
                humidity: 97,
                temp_kf: 0,
            },
            weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 2.98, deg: 290, gust: 6.35 },
            visibility: 145,
            pop: 0.98,
            snow: { '3h': 1.38 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-12 00:00:00',
        },
        {
            dt: 1670814000,
            main: {
                temp: 269.96,
                feels_like: 265.25,
                temp_min: 269.96,
                temp_max: 269.96,
                pressure: 1006,
                sea_level: 1006,
                grnd_level: 979,
                humidity: 97,
                temp_kf: 0,
            },
            weather: [{ id: 601, main: 'Snow', description: 'snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 3.63, deg: 280, gust: 7.04 },
            visibility: 142,
            pop: 1,
            snow: { '3h': 1.64 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-12 03:00:00',
        },
        {
            dt: 1670824800,
            main: {
                temp: 269.67,
                feels_like: 264.73,
                temp_min: 269.67,
                temp_max: 269.67,
                pressure: 1006,
                sea_level: 1006,
                grnd_level: 979,
                humidity: 96,
                temp_kf: 0,
            },
            weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 3.83, deg: 267, gust: 7.63 },
            visibility: 197,
            pop: 1,
            snow: { '3h': 0.9 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-12 06:00:00',
        },
        {
            dt: 1670835600,
            main: {
                temp: 270.12,
                feels_like: 264.43,
                temp_min: 270.12,
                temp_max: 270.12,
                pressure: 1008,
                sea_level: 1008,
                grnd_level: 981,
                humidity: 93,
                temp_kf: 0,
            },
            weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13d' }],
            clouds: { all: 99 },
            wind: { speed: 5.02, deg: 266, gust: 8.16 },
            visibility: 5011,
            pop: 0.67,
            snow: { '3h': 0.37 },
            sys: { pod: 'd' },
            dt_txt: '2022-12-12 09:00:00',
        },
        {
            dt: 1670846400,
            main: {
                temp: 270.96,
                feels_like: 265.48,
                temp_min: 270.96,
                temp_max: 270.96,
                pressure: 1008,
                sea_level: 1008,
                grnd_level: 980,
                humidity: 90,
                temp_kf: 0,
            },
            weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d' }],
            clouds: { all: 96 },
            wind: { speed: 5.03, deg: 269, gust: 7.82 },
            visibility: 8736,
            pop: 0.41,
            sys: { pod: 'd' },
            dt_txt: '2022-12-12 12:00:00',
        },
        {
            dt: 1670857200,
            main: {
                temp: 269.59,
                feels_like: 264.38,
                temp_min: 269.59,
                temp_max: 269.59,
                pressure: 1009,
                sea_level: 1009,
                grnd_level: 981,
                humidity: 93,
                temp_kf: 0,
            },
            weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n' }],
            clouds: { all: 99 },
            wind: { speed: 4.14, deg: 255, gust: 8.9 },
            visibility: 10000,
            pop: 0.05,
            sys: { pod: 'n' },
            dt_txt: '2022-12-12 15:00:00',
        },
        {
            dt: 1670868000,
            main: {
                temp: 265.46,
                feels_like: 260.36,
                temp_min: 265.46,
                temp_max: 265.46,
                pressure: 1010,
                sea_level: 1010,
                grnd_level: 983,
                humidity: 95,
                temp_kf: 0,
            },
            weather: [{ id: 803, main: 'Clouds', description: 'broken clouds', icon: '04n' }],
            clouds: { all: 84 },
            wind: { speed: 3.05, deg: 240, gust: 6.2 },
            visibility: 10000,
            pop: 0,
            sys: { pod: 'n' },
            dt_txt: '2022-12-12 18:00:00',
        },
        {
            dt: 1670878800,
            main: {
                temp: 266.16,
                feels_like: 262.03,
                temp_min: 266.16,
                temp_max: 266.16,
                pressure: 1011,
                sea_level: 1011,
                grnd_level: 983,
                humidity: 94,
                temp_kf: 0,
            },
            weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n' }],
            clouds: { all: 100 },
            wind: { speed: 2.36, deg: 237, gust: 4.66 },
            visibility: 9555,
            pop: 0,
            sys: { pod: 'n' },
            dt_txt: '2022-12-12 21:00:00',
        },
        {
            dt: 1670889600,
            main: {
                temp: 266.82,
                feels_like: 262.9,
                temp_min: 266.82,
                temp_max: 266.82,
                pressure: 1011,
                sea_level: 1011,
                grnd_level: 983,
                humidity: 96,
                temp_kf: 0,
            },
            weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n' }],
            clouds: { all: 100 },
            wind: { speed: 2.29, deg: 238, gust: 4.5 },
            visibility: 760,
            pop: 0.05,
            sys: { pod: 'n' },
            dt_txt: '2022-12-13 00:00:00',
        },
        {
            dt: 1670900400,
            main: {
                temp: 263.89,
                feels_like: 259.71,
                temp_min: 263.89,
                temp_max: 263.89,
                pressure: 1011,
                sea_level: 1011,
                grnd_level: 983,
                humidity: 97,
                temp_kf: 0,
            },
            weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n' }],
            clouds: { all: 89 },
            wind: { speed: 2.12, deg: 234, gust: 3.19 },
            visibility: 6434,
            pop: 0.13,
            sys: { pod: 'n' },
            dt_txt: '2022-12-13 03:00:00',
        },
        {
            dt: 1670911200,
            main: {
                temp: 265.73,
                feels_like: 261.87,
                temp_min: 265.73,
                temp_max: 265.73,
                pressure: 1011,
                sea_level: 1011,
                grnd_level: 984,
                humidity: 96,
                temp_kf: 0,
            },
            weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
            clouds: { all: 93 },
            wind: { speed: 2.12, deg: 240, gust: 3.59 },
            visibility: 3450,
            pop: 0.35,
            snow: { '3h': 0.12 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-13 06:00:00',
        },
        {
            dt: 1670922000,
            main: {
                temp: 268.72,
                feels_like: 264.75,
                temp_min: 268.72,
                temp_max: 268.72,
                pressure: 1012,
                sea_level: 1012,
                grnd_level: 984,
                humidity: 95,
                temp_kf: 0,
            },
            weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d' }],
            clouds: { all: 100 },
            wind: { speed: 2.61, deg: 260, gust: 5.16 },
            visibility: 1607,
            pop: 0,
            sys: { pod: 'd' },
            dt_txt: '2022-12-13 09:00:00',
        },
        {
            dt: 1670932800,
            main: {
                temp: 270.83,
                feels_like: 267.24,
                temp_min: 270.83,
                temp_max: 270.83,
                pressure: 1011,
                sea_level: 1011,
                grnd_level: 983,
                humidity: 94,
                temp_kf: 0,
            },
            weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13d' }],
            clouds: { all: 100 },
            wind: { speed: 2.63, deg: 292, gust: 4.28 },
            visibility: 436,
            pop: 0.56,
            snow: { '3h': 0.7 },
            sys: { pod: 'd' },
            dt_txt: '2022-12-13 12:00:00',
        },
        {
            dt: 1670943600,
            main: {
                temp: 270.66,
                feels_like: 268.59,
                temp_min: 270.66,
                temp_max: 270.66,
                pressure: 1011,
                sea_level: 1011,
                grnd_level: 984,
                humidity: 98,
                temp_kf: 0,
            },
            weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 1.48, deg: 301, gust: 4.46 },
            visibility: 122,
            pop: 1,
            snow: { '3h': 1.06 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-13 15:00:00',
        },
        {
            dt: 1670954400,
            main: {
                temp: 270.78,
                feels_like: 270.78,
                temp_min: 270.78,
                temp_max: 270.78,
                pressure: 1011,
                sea_level: 1011,
                grnd_level: 984,
                humidity: 98,
                temp_kf: 0,
            },
            weather: [{ id: 601, main: 'Snow', description: 'snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 1.27, deg: 318, gust: 3.75 },
            visibility: 121,
            pop: 1,
            snow: { '3h': 1.81 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-13 18:00:00',
        },
        {
            dt: 1670965200,
            main: {
                temp: 271.01,
                feels_like: 266.99,
                temp_min: 271.01,
                temp_max: 271.01,
                pressure: 1012,
                sea_level: 1012,
                grnd_level: 985,
                humidity: 97,
                temp_kf: 0,
            },
            weather: [{ id: 601, main: 'Snow', description: 'snow', icon: '13n' }],
            clouds: { all: 100 },
            wind: { speed: 3.09, deg: 326, gust: 7.87 },
            visibility: 152,
            pop: 1,
            snow: { '3h': 1.87 },
            sys: { pod: 'n' },
            dt_txt: '2022-12-13 21:00:00',
        },
    ],
    city: {
        id: 3094802,
        name: 'Krakow',
        coord: { lat: 50.0833, lon: 19.9167 },
        country: 'PL',
        population: 755050,
        timezone: 3600,
        sunrise: 1670567218,
        sunset: 1670596709,
    },
};

testArr1.list[0].main;
const indexesObj = getWeatherIndexes(testArr1);
const [max, min] = getMinMaxTemperature(indexesObj.findMaxMinTemperatureArr);
const mean = getMean(indexesObj.findMeanModeValueArr);
const mode = getMode(indexesObj.findMeanModeValueArr);

export {};
