import type { OPEN_WEATHER, ListEntity } from 'types/open_weather';
import type { ILineChartsData } from 'types/linecharts';
import { getMinMaxTemperature } from 'utils/getMinMaxTemperature';
// indexedDayObjects: Array<ListEntity[]>;

// const testArr = {
//     cod: '200',
//     message: 0,
//     cnt: 40,
//     list: [
//         {
//             dt: 1670770800,
//             main: {
//                 temp: 272.28,
//                 feels_like: 267.34,
//                 temp_min: 271.14,
//                 temp_max: 272.28,
//                 pressure: 1002,
//                 sea_level: 1002,
//                 grnd_level: 978,
//                 humidity: 89,
//                 temp_kf: 1.14,
//             },
//             weather: [{ id: 601, main: 'Snow', description: 'snow', icon: '13n' }],
//             clouds: { all: 83 },
//             wind: { speed: 4.69, deg: 292, gust: 9.1 },
//             visibility: 150,
//             pop: 1,
//             snow: { '3h': 1.6 },
//             sys: { pod: 'n' },
//             dt_txt: '2022-12-11 15:00:00',
//         },
//         {
//             dt: 1670781600,
//             main: {
//                 temp: 271.3,
//                 feels_like: 265.91,
//                 temp_min: 270.53,
//                 temp_max: 271.3,
//                 pressure: 1004,
//                 sea_level: 1004,
//                 grnd_level: 979,
//                 humidity: 92,
//                 temp_kf: 0.77,
//             },
//             weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
//             clouds: { all: 92 },
//             wind: { speed: 5.01, deg: 281, gust: 9.63 },
//             visibility: 324,
//             pop: 1,
//             snow: { '3h': 1.03 },
//             sys: { pod: 'n' },
//             dt_txt: '2022-12-11 18:00:00',
//         },
//         {
//             dt: 1670792400,
//             main: {
//                 temp: 270.04,
//                 feels_like: 264.6,
//                 temp_min: 270.04,
//                 temp_max: 270.04,
//                 pressure: 1006,
//                 sea_level: 1006,
//                 grnd_level: 979,
//                 humidity: 95,
//                 temp_kf: 0,
//             },
//             weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
//             clouds: { all: 100 },
//             wind: { speed: 4.62, deg: 271, gust: 9.22 },
//             visibility: 763,
//             pop: 0.79,
//             snow: { '3h': 0.44 },
//             sys: { pod: 'n' },
//             dt_txt: '2022-12-11 21:00:00',
//         },
//         {
//             dt: 1670803200,
//             main: {
//                 temp: 269.77,
//                 feels_like: 264.03,
//                 temp_min: 269.77,
//                 temp_max: 269.77,
//                 pressure: 1007,
//                 sea_level: 1007,
//                 grnd_level: 980,
//                 humidity: 94,
//                 temp_kf: 0,
//             },
//             weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
//             clouds: { all: 100 },
//             wind: { speed: 4.96, deg: 265, gust: 9.58 },
//             visibility: 1152,
//             pop: 0.6,
//             snow: { '3h': 0.23 },
//             sys: { pod: 'n' },
//             dt_txt: '2022-12-12 00:00:00',
//         },
//         {
//             dt: 1670814000,
//             main: {
//                 temp: 269.6,
//                 feels_like: 264.06,
//                 temp_min: 269.6,
//                 temp_max: 269.6,
//                 pressure: 1007,
//                 sea_level: 1007,
//                 grnd_level: 980,
//                 humidity: 95,
//                 temp_kf: 0,
//             },
//             weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
//             clouds: { all: 100 },
//             wind: { speed: 4.61, deg: 260, gust: 8.88 },
//             visibility: 587,
//             pop: 0.84,
//             snow: { '3h': 0.35 },
//             sys: { pod: 'n' },
//             dt_txt: '2022-12-12 03:00:00',
//         },
//         {
//             dt: 1670824800,
//             main: {
//                 temp: 269.61,
//                 feels_like: 264.15,
//                 temp_min: 269.61,
//                 temp_max: 269.61,
//                 pressure: 1007,
//                 sea_level: 1007,
//                 grnd_level: 980,
//                 humidity: 95,
//                 temp_kf: 0,
//             },
//             weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
//             clouds: { all: 100 },
//             wind: { speed: 4.5, deg: 256, gust: 8.82 },
//             visibility: 484,
//             pop: 0.9,
//             snow: { '3h': 0.4 },
//             sys: { pod: 'n' },
//             dt_txt: '2022-12-12 06:00:00',
//         },
//         {
//             dt: 1670835600,
//             main: {
//                 temp: 270.39,
//                 feels_like: 264.9,
//                 temp_min: 270.39,
//                 temp_max: 270.39,
//                 pressure: 1008,
//                 sea_level: 1008,
//                 grnd_level: 981,
//                 humidity: 94,
//                 temp_kf: 0,
//             },
//             weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13d' }],
//             clouds: { all: 100 },
//             wind: { speed: 4.82, deg: 254, gust: 8.13 },
//             visibility: 535,
//             pop: 0.7,
//             snow: { '3h': 0.33 },
//             sys: { pod: 'd' },
//             dt_txt: '2022-12-12 09:00:00',
//         },
//         {
//             dt: 1670846400,
//             main: {
//                 temp: 271.15,
//                 feels_like: 265.75,
//                 temp_min: 271.15,
//                 temp_max: 271.15,
//                 pressure: 1008,
//                 sea_level: 1008,
//                 grnd_level: 981,
//                 humidity: 93,
//                 temp_kf: 0,
//             },
//             weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13d' }],
//             clouds: { all: 100 },
//             wind: { speed: 4.97, deg: 262, gust: 7.7 },
//             visibility: 1481,
//             pop: 0.57,
//             snow: { '3h': 0.25 },
//             sys: { pod: 'd' },
//             dt_txt: '2022-12-12 12:00:00',
//         },
//         {
//             dt: 1670857200,
//             main: {
//                 temp: 269.89,
//                 feels_like: 264.42,
//                 temp_min: 269.89,
//                 temp_max: 269.89,
//                 pressure: 1009,
//                 sea_level: 1009,
//                 grnd_level: 981,
//                 humidity: 92,
//                 temp_kf: 0,
//             },
//             weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
//             clouds: { all: 100 },
//             wind: { speed: 4.61, deg: 258, gust: 9.83 },
//             visibility: 8508,
//             pop: 0.49,
//             snow: { '3h': 0.2 },
//             sys: { pod: 'n' },
//             dt_txt: '2022-12-12 15:00:00',
//         },
//         {
//             dt: 1670868000,
//             main: {
//                 temp: 269.84,
//                 feels_like: 264.23,
//                 temp_min: 269.84,
//                 temp_max: 269.84,
//                 pressure: 1009,
//                 sea_level: 1009,
//                 grnd_level: 982,
//                 humidity: 95,
//                 temp_kf: 0,
//             },
//             weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
//             clouds: { all: 100 },
//             wind: { speed: 4.79, deg: 245, gust: 10.46 },
//             visibility: 420,
//             pop: 0.52,
//             snow: { '3h': 0.41 },
//             sys: { pod: 'n' },
//             dt_txt: '2022-12-12 18:00:00',
//         },
//         {
//             dt: 1670878800,
//             main: {
//                 temp: 269.71,
//                 feels_like: 264.56,
//                 temp_min: 269.71,
//                 temp_max: 269.71,
//                 pressure: 1010,
//                 sea_level: 1010,
//                 grnd_level: 983,
//                 humidity: 95,
//                 temp_kf: 0,
//             },
//             weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
//             clouds: { all: 100 },
//             wind: { speed: 4.11, deg: 244, gust: 10.19 },
//             visibility: 762,
//             pop: 0.85,
//             snow: { '3h': 0.72 },
//             sys: { pod: 'n' },
//             dt_txt: '2022-12-12 21:00:00',
//         },
//         {
//             dt: 1670889600,
//             main: {
//                 temp: 270.21,
//                 feels_like: 264.92,
//                 temp_min: 270.21,
//                 temp_max: 270.21,
//                 pressure: 1011,
//                 sea_level: 1011,
//                 grnd_level: 984,
//                 humidity: 95,
//                 temp_kf: 0,
//             },
//             weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
//             clouds: { all: 100 },
//             wind: { speed: 4.45, deg: 253, gust: 10.24 },
//             visibility: 631,
//             pop: 0.98,
//             snow: { '3h': 0.39 },
//             sys: { pod: 'n' },
//             dt_txt: '2022-12-13 00:00:00',
//         },
//         {
//             dt: 1670900400,
//             main: {
//                 temp: 270.59,
//                 feels_like: 265.23,
//                 temp_min: 270.59,
//                 temp_max: 270.59,
//                 pressure: 1012,
//                 sea_level: 1012,
//                 grnd_level: 985,
//                 humidity: 96,
//                 temp_kf: 0,
//             },
//             weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
//             clouds: { all: 100 },
//             wind: { speed: 4.69, deg: 264, gust: 9.7 },
//             visibility: 797,
//             pop: 0.92,
//             snow: { '3h': 0.43 },
//             sys: { pod: 'n' },
//             dt_txt: '2022-12-13 03:00:00',
//         },
//         {
//             dt: 1670911200,
//             main: {
//                 temp: 270.22,
//                 feels_like: 264.87,
//                 temp_min: 270.22,
//                 temp_max: 270.22,
//                 pressure: 1013,
//                 sea_level: 1013,
//                 grnd_level: 986,
//                 humidity: 94,
//                 temp_kf: 0,
//             },
//             weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
//             clouds: { all: 100 },
//             wind: { speed: 4.54, deg: 268, gust: 9.08 },
//             visibility: 3029,
//             pop: 0.91,
//             snow: { '3h': 0.66 },
//             sys: { pod: 'n' },
//             dt_txt: '2022-12-13 06:00:00',
//         },
//         {
//             dt: 1670922000,
//             main: {
//                 temp: 270.76,
//                 feels_like: 265.38,
//                 temp_min: 270.76,
//                 temp_max: 270.76,
//                 pressure: 1015,
//                 sea_level: 1015,
//                 grnd_level: 988,
//                 humidity: 95,
//                 temp_kf: 0,
//             },
//             weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13d' }],
//             clouds: { all: 100 },
//             wind: { speed: 4.78, deg: 263, gust: 7.44 },
//             visibility: 399,
//             pop: 0.43,
//             snow: { '3h': 0.29 },
//             sys: { pod: 'd' },
//             dt_txt: '2022-12-13 09:00:00',
//         },
//         {
//             dt: 1670932800,
//             main: {
//                 temp: 271.45,
//                 feels_like: 266.51,
//                 temp_min: 271.45,
//                 temp_max: 271.45,
//                 pressure: 1016,
//                 sea_level: 1016,
//                 grnd_level: 988,
//                 humidity: 90,
//                 temp_kf: 0,
//             },
//             weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13d' }],
//             clouds: { all: 99 },
//             wind: { speed: 4.38, deg: 273, gust: 6.4 },
//             visibility: 5252,
//             pop: 0.36,
//             snow: { '3h': 0.17 },
//             sys: { pod: 'd' },
//             dt_txt: '2022-12-13 12:00:00',
//         },
//         {
//             dt: 1670943600,
//             main: {
//                 temp: 270.31,
//                 feels_like: 265.74,
//                 temp_min: 270.31,
//                 temp_max: 270.31,
//                 pressure: 1017,
//                 sea_level: 1017,
//                 grnd_level: 989,
//                 humidity: 86,
//                 temp_kf: 0,
//             },
//             weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n' }],
//             clouds: { all: 99 },
//             wind: { speed: 3.55, deg: 273, gust: 5.69 },
//             visibility: 10000,
//             pop: 0,
//             sys: { pod: 'n' },
//             dt_txt: '2022-12-13 15:00:00',
//         },
//         {
//             dt: 1670954400,
//             main: {
//                 temp: 266.6,
//                 feels_like: 263.32,
//                 temp_min: 266.6,
//                 temp_max: 266.6,
//                 pressure: 1018,
//                 sea_level: 1018,
//                 grnd_level: 990,
//                 humidity: 94,
//                 temp_kf: 0,
//             },
//             weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n' }],
//             clouds: { all: 99 },
//             wind: { speed: 1.84, deg: 246, gust: 1.94 },
//             visibility: 10000,
//             pop: 0,
//             sys: { pod: 'n' },
//             dt_txt: '2022-12-13 18:00:00',
//         },
//         {
//             dt: 1670965200,
//             main: {
//                 temp: 265.52,
//                 feels_like: 262.35,
//                 temp_min: 265.52,
//                 temp_max: 265.52,
//                 pressure: 1019,
//                 sea_level: 1019,
//                 grnd_level: 991,
//                 humidity: 97,
//                 temp_kf: 0,
//             },
//             weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
//             clouds: { all: 99 },
//             wind: { speed: 1.68, deg: 245, gust: 2.49 },
//             visibility: 3075,
//             pop: 0.35,
//             snow: { '3h': 0.14 },
//             sys: { pod: 'n' },
//             dt_txt: '2022-12-13 21:00:00',
//         },
//         {
//             dt: 1670976000,
//             main: {
//                 temp: 264.1,
//                 feels_like: 260.68,
//                 temp_min: 264.1,
//                 temp_max: 264.1,
//                 pressure: 1019,
//                 sea_level: 1019,
//                 grnd_level: 991,
//                 humidity: 97,
//                 temp_kf: 0,
//             },
//             weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n' }],
//             clouds: { all: 99 },
//             wind: { speed: 1.7, deg: 246, gust: 1.99 },
//             visibility: 5726,
//             pop: 0.11,
//             sys: { pod: 'n' },
//             dt_txt: '2022-12-14 00:00:00',
//         },
//         {
//             dt: 1670986800,
//             main: {
//                 temp: 261.3,
//                 feels_like: 261.3,
//                 temp_min: 261.3,
//                 temp_max: 261.3,
//                 pressure: 1019,
//                 sea_level: 1019,
//                 grnd_level: 991,
//                 humidity: 99,
//                 temp_kf: 0,
//             },
//             weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n' }],
//             clouds: { all: 86 },
//             wind: { speed: 1.28, deg: 240, gust: 1.38 },
//             visibility: 5556,
//             pop: 0,
//             sys: { pod: 'n' },
//             dt_txt: '2022-12-14 03:00:00',
//         },
//         {
//             dt: 1670997600,
//             main: {
//                 temp: 259.54,
//                 feels_like: 259.54,
//                 temp_min: 259.54,
//                 temp_max: 259.54,
//                 pressure: 1019,
//                 sea_level: 1019,
//                 grnd_level: 990,
//                 humidity: 99,
//                 temp_kf: 0,
//             },
//             weather: [{ id: 803, main: 'Clouds', description: 'broken clouds', icon: '04n' }],
//             clouds: { all: 81 },
//             wind: { speed: 0.88, deg: 184, gust: 0.95 },
//             visibility: 9814,
//             pop: 0,
//             sys: { pod: 'n' },
//             dt_txt: '2022-12-14 06:00:00',
//         },
//         {
//             dt: 1671008400,
//             main: {
//                 temp: 265.53,
//                 feels_like: 262.53,
//                 temp_min: 265.53,
//                 temp_max: 265.53,
//                 pressure: 1018,
//                 sea_level: 1018,
//                 grnd_level: 990,
//                 humidity: 92,
//                 temp_kf: 0,
//             },
//             weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d' }],
//             clouds: { all: 91 },
//             wind: { speed: 1.59, deg: 112, gust: 2.45 },
//             visibility: 10000,
//             pop: 0,
//             sys: { pod: 'd' },
//             dt_txt: '2022-12-14 09:00:00',
//         },
//         {
//             dt: 1671019200,
//             main: {
//                 temp: 268.85,
//                 feels_like: 265.08,
//                 temp_min: 268.85,
//                 temp_max: 268.85,
//                 pressure: 1016,
//                 sea_level: 1016,
//                 grnd_level: 988,
//                 humidity: 89,
//                 temp_kf: 0,
//             },
//             weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d' }],
//             clouds: { all: 93 },
//             wind: { speed: 2.46, deg: 99, gust: 3.81 },
//             visibility: 10000,
//             pop: 0,
//             sys: { pod: 'd' },
//             dt_txt: '2022-12-14 12:00:00',
//         },
//         {
//             dt: 1671030000,
//             main: {
//                 temp: 267.45,
//                 feels_like: 263.11,
//                 temp_min: 267.45,
//                 temp_max: 267.45,
//                 pressure: 1014,
//                 sea_level: 1014,
//                 grnd_level: 987,
//                 humidity: 96,
//                 temp_kf: 0,
//             },
//             weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n' }],
//             clouds: { all: 99 },
//             wind: { speed: 2.72, deg: 82, gust: 5.28 },
//             visibility: 10000,
//             pop: 0,
//             sys: { pod: 'n' },
//             dt_txt: '2022-12-14 15:00:00',
//         },
//         {
//             dt: 1671040800,
//             main: {
//                 temp: 268.07,
//                 feels_like: 264.32,
//                 temp_min: 268.07,
//                 temp_max: 268.07,
//                 pressure: 1012,
//                 sea_level: 1012,
//                 grnd_level: 985,
//                 humidity: 94,
//                 temp_kf: 0,
//             },
//             weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n' }],
//             clouds: { all: 100 },
//             wind: { speed: 2.33, deg: 96, gust: 3.99 },
//             visibility: 10000,
//             pop: 0,
//             sys: { pod: 'n' },
//             dt_txt: '2022-12-14 18:00:00',
//         },
//         {
//             dt: 1671051600,
//             main: {
//                 temp: 268.15,
//                 feels_like: 265.71,
//                 temp_min: 268.15,
//                 temp_max: 268.15,
//                 pressure: 1010,
//                 sea_level: 1010,
//                 grnd_level: 983,
//                 humidity: 96,
//                 temp_kf: 0,
//             },
//             weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
//             clouds: { all: 100 },
//             wind: { speed: 1.49, deg: 103, gust: 2.31 },
//             visibility: 5656,
//             pop: 0.21,
//             snow: { '3h': 0.12 },
//             sys: { pod: 'n' },
//             dt_txt: '2022-12-14 21:00:00',
//         },
//         {
//             dt: 1671062400,
//             main: {
//                 temp: 269.69,
//                 feels_like: 267.71,
//                 temp_min: 269.69,
//                 temp_max: 269.69,
//                 pressure: 1008,
//                 sea_level: 1008,
//                 grnd_level: 981,
//                 humidity: 94,
//                 temp_kf: 0,
//             },
//             weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
//             clouds: { all: 100 },
//             wind: { speed: 1.36, deg: 121, gust: 2.21 },
//             visibility: 10000,
//             pop: 0.21,
//             snow: { '3h': 0.29 },
//             sys: { pod: 'n' },
//             dt_txt: '2022-12-15 00:00:00',
//         },
//         {
//             dt: 1671073200,
//             main: {
//                 temp: 270.45,
//                 feels_like: 270.45,
//                 temp_min: 270.45,
//                 temp_max: 270.45,
//                 pressure: 1006,
//                 sea_level: 1006,
//                 grnd_level: 979,
//                 humidity: 87,
//                 temp_kf: 0,
//             },
//             weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n' }],
//             clouds: { all: 100 },
//             wind: { speed: 1.31, deg: 166, gust: 2.73 },
//             visibility: 10000,
//             pop: 0,
//             sys: { pod: 'n' },
//             dt_txt: '2022-12-15 03:00:00',
//         },
//         {
//             dt: 1671084000,
//             main: {
//                 temp: 268.59,
//                 feels_like: 265.76,
//                 temp_min: 268.59,
//                 temp_max: 268.59,
//                 pressure: 1005,
//                 sea_level: 1005,
//                 grnd_level: 978,
//                 humidity: 89,
//                 temp_kf: 0,
//             },
//             weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n' }],
//             clouds: { all: 93 },
//             wind: { speed: 1.75, deg: 181, gust: 2.7 },
//             visibility: 10000,
//             pop: 0,
//             sys: { pod: 'n' },
//             dt_txt: '2022-12-15 06:00:00',
//         },
//         {
//             dt: 1671094800,
//             main: {
//                 temp: 271.95,
//                 feels_like: 270.21,
//                 temp_min: 271.95,
//                 temp_max: 271.95,
//                 pressure: 1006,
//                 sea_level: 1006,
//                 grnd_level: 979,
//                 humidity: 84,
//                 temp_kf: 0,
//             },
//             weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d' }],
//             clouds: { all: 100 },
//             wind: { speed: 1.39, deg: 256, gust: 3.05 },
//             visibility: 10000,
//             pop: 0,
//             sys: { pod: 'd' },
//             dt_txt: '2022-12-15 09:00:00',
//         },
//         {
//             dt: 1671105600,
//             main: {
//                 temp: 273.6,
//                 feels_like: 273.6,
//                 temp_min: 273.6,
//                 temp_max: 273.6,
//                 pressure: 1006,
//                 sea_level: 1006,
//                 grnd_level: 979,
//                 humidity: 95,
//                 temp_kf: 0,
//             },
//             weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d' }],
//             clouds: { all: 100 },
//             wind: { speed: 0.75, deg: 262, gust: 2.7 },
//             visibility: 10000,
//             pop: 0,
//             sys: { pod: 'd' },
//             dt_txt: '2022-12-15 12:00:00',
//         },
//         {
//             dt: 1671116400,
//             main: {
//                 temp: 273.88,
//                 feels_like: 273.88,
//                 temp_min: 273.88,
//                 temp_max: 273.88,
//                 pressure: 1007,
//                 sea_level: 1007,
//                 grnd_level: 981,
//                 humidity: 97,
//                 temp_kf: 0,
//             },
//             weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n' }],
//             clouds: { all: 100 },
//             wind: { speed: 1.32, deg: 282, gust: 3 },
//             visibility: 10000,
//             pop: 0.27,
//             sys: { pod: 'n' },
//             dt_txt: '2022-12-15 15:00:00',
//         },
//         {
//             dt: 1671127200,
//             main: {
//                 temp: 273.72,
//                 feels_like: 270.86,
//                 temp_min: 273.72,
//                 temp_max: 273.72,
//                 pressure: 1010,
//                 sea_level: 1010,
//                 grnd_level: 983,
//                 humidity: 99,
//                 temp_kf: 0,
//             },
//             weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
//             clouds: { all: 100 },
//             wind: { speed: 2.44, deg: 280, gust: 7.63 },
//             visibility: 126,
//             pop: 0.34,
//             snow: { '3h': 0.21 },
//             sys: { pod: 'n' },
//             dt_txt: '2022-12-15 18:00:00',
//         },
//         {
//             dt: 1671138000,
//             main: {
//                 temp: 273.43,
//                 feels_like: 273.43,
//                 temp_min: 273.43,
//                 temp_max: 273.43,
//                 pressure: 1011,
//                 sea_level: 1011,
//                 grnd_level: 984,
//                 humidity: 99,
//                 temp_kf: 0,
//             },
//             weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
//             clouds: { all: 100 },
//             wind: { speed: 0.54, deg: 274, gust: 1.58 },
//             visibility: 280,
//             pop: 0.41,
//             snow: { '3h': 0.4 },
//             sys: { pod: 'n' },
//             dt_txt: '2022-12-15 21:00:00',
//         },
//         {
//             dt: 1671148800,
//             main: {
//                 temp: 273.19,
//                 feels_like: 270.74,
//                 temp_min: 273.19,
//                 temp_max: 273.19,
//                 pressure: 1012,
//                 sea_level: 1012,
//                 grnd_level: 985,
//                 humidity: 99,
//                 temp_kf: 0,
//             },
//             weather: [
//                 { id: 600, main: 'Snow', description: 'light snow', icon: '13n' },
//                 { id: 511, main: 'Rain', description: 'freezing rain', icon: '13n' },
//             ],
//             clouds: { all: 100 },
//             wind: { speed: 2, deg: 56, gust: 3.69 },
//             visibility: 627,
//             pop: 0.33,
//             snow: { '3h': 0.16 },
//             sys: { pod: 'n' },
//             dt_txt: '2022-12-16 00:00:00',
//         },
//         {
//             dt: 1671159600,
//             main: {
//                 temp: 272.76,
//                 feels_like: 268.26,
//                 temp_min: 272.76,
//                 temp_max: 272.76,
//                 pressure: 1011,
//                 sea_level: 1011,
//                 grnd_level: 984,
//                 humidity: 98,
//                 temp_kf: 0,
//             },
//             weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n' }],
//             clouds: { all: 100 },
//             wind: { speed: 4.18, deg: 64, gust: 7.88 },
//             visibility: 814,
//             pop: 0,
//             sys: { pod: 'n' },
//             dt_txt: '2022-12-16 03:00:00',
//         },
//         {
//             dt: 1671170400,
//             main: {
//                 temp: 272.2,
//                 feels_like: 266.85,
//                 temp_min: 272.2,
//                 temp_max: 272.2,
//                 pressure: 1010,
//                 sea_level: 1010,
//                 grnd_level: 983,
//                 humidity: 98,
//                 temp_kf: 0,
//             },
//             weather: [{ id: 600, main: 'Snow', description: 'light snow', icon: '13n' }],
//             clouds: { all: 100 },
//             wind: { speed: 5.34, deg: 70, gust: 10.17 },
//             visibility: 87,
//             pop: 0.51,
//             snow: { '3h': 0.66 },
//             sys: { pod: 'n' },
//             dt_txt: '2022-12-16 06:00:00',
//         },
//         {
//             dt: 1671181200,
//             main: {
//                 temp: 271.97,
//                 feels_like: 266.7,
//                 temp_min: 271.97,
//                 temp_max: 271.97,
//                 pressure: 1011,
//                 sea_level: 1011,
//                 grnd_level: 984,
//                 humidity: 98,
//                 temp_kf: 0,
//             },
//             weather: [{ id: 601, main: 'Snow', description: 'snow', icon: '13d' }],
//             clouds: { all: 100 },
//             wind: { speed: 5.09, deg: 65, gust: 10.73 },
//             visibility: 123,
//             pop: 0.95,
//             snow: { '3h': 3.78 },
//             sys: { pod: 'd' },
//             dt_txt: '2022-12-16 09:00:00',
//         },
//         {
//             dt: 1671192000,
//             main: {
//                 temp: 272.63,
//                 feels_like: 268.39,
//                 temp_min: 272.63,
//                 temp_max: 272.63,
//                 pressure: 1011,
//                 sea_level: 1011,
//                 grnd_level: 984,
//                 humidity: 98,
//                 temp_kf: 0,
//             },
//             weather: [{ id: 601, main: 'Snow', description: 'snow', icon: '13d' }],
//             clouds: { all: 100 },
//             wind: { speed: 3.77, deg: 58, gust: 8.27 },
//             visibility: 137,
//             pop: 0.98,
//             snow: { '3h': 4.05 },
//             sys: { pod: 'd' },
//             dt_txt: '2022-12-16 12:00:00',
//         },
//     ],
//     city: {
//         id: 3094802,
//         name: 'Krakow',
//         coord: { lat: 50.0833, lon: 19.9167 },
//         country: 'PL',
//         population: 755050,
//         timezone: 3600,
//         sunrise: 1670740141,
//         sunset: 1670769492,
//     },
// };

export interface IGetWeatherIndexes {
    closestCardToShow: ListEntity;
    indexedDayObjects: Array<ListEntity[]>;
    findMaxMinTemperatureArr: number[];
    findMeanModeValueArr: number[];
    lineChartsDataArray: ILineChartsData;
    city?: string;
    time?: string;
}

export function getWeatherIndexes(obj: OPEN_WEATHER): IGetWeatherIndexes {
    const findMaxMinTemperatureArr: number[] = [];
    const findMeanModeValueArr: number[] = [];
    const beforeDeduped: number[] = [];
    const lineChartsDataArray: ILineChartsData = [];

    const daysArr: number[] = obj.list.map((el, i) => {
        findMaxMinTemperatureArr.push(el.main.temp);
        findMeanModeValueArr.push(parseInt(String(el.main.temp)));
        const getDateString = el.dt_txt.split(' ')[1];
        el.dt_time = getDateString.substring(0, getDateString.length - 3);
        let index = 0;
        for (let key in el.main) {
            if (index <= 3) {
                el.main[key as keyof typeof el.main] = parseInt(String(el.main[key as keyof typeof el.main] - 273.15));
            }
            index++;
        }
        const day: number = new Date(`${el.dt_txt}`).getDay();
        return day;
    });

    daysArr.forEach((el, i) => {
        beforeDeduped.push(daysArr.indexOf(el));
        beforeDeduped.push(daysArr.lastIndexOf(el));
    });

    const deduped: number[] = [...new Set(beforeDeduped)];
    const allDaysSorted: Array<ListEntity[]> = [];
    const closestTimeArry: number[] = [];
    const actualTime = parseInt(String(Date.now() / 1000));
    deduped.forEach((el, i) => {
        if ((1 + i) % 2 === 0) {
            let slice: ListEntity[] = obj.list.slice(deduped[i - 1], deduped[i + 1]);
            if (slice.length > 3) {
                const sliceMinMaxTemperature: number[] = slice.map(el => el.main.feels_like);
                const [_, minIndex] = getMinMaxTemperature(sliceMinMaxTemperature);
                allDaysSorted.push([slice[2], slice[Math.floor(sliceMinMaxTemperature.length / 2)], slice[minIndex]]);
                return;
            }
            if (slice.length <= 2) {
                allDaysSorted.push(slice);
            }
        }
    });
    allDaysSorted[0].forEach(el => {
        closestTimeArry.push(el.dt - actualTime);

        lineChartsDataArray.push({
            temp: el.main.temp,
            date: el.dt_time!,
        });
    });
    const closestTimeToFind = Math.min(...closestTimeArry);
    const getIndexToItem = closestTimeArry.indexOf(closestTimeToFind);
    return {
        closestCardToShow: allDaysSorted[0][getIndexToItem],
        indexedDayObjects: allDaysSorted,
        findMaxMinTemperatureArr,
        findMeanModeValueArr,
        lineChartsDataArray,
    };
}

// const data = getWeatherIndexes(testArr);
// console.log(data.closestCardToShow);
