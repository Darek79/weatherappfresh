export interface OPEN_WEATHER {
    cod: string;
    message: number;
    cnt: number;
    list: ListEntity[];
}

export interface WeatherValues {
    [key: string]: number;
}

export interface ListEntity {
    dt: number;
    main: Main;
    weather: WeatherEntity[];
    clouds: Clouds;
    wind: Wind;
    visibility: number;
    pop: number;
    sys: Sys;
    dt_txt: string;
    dt_time?: string;
    // weatherValues?: WeatherValues[];
}
export interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
}
export interface WeatherEntity {
    id: number;
    main: string;
    description: string;
    icon: string;
}
export interface Clouds {
    all: number;
}
export interface Wind {
    speed: number;
    deg: number;
    gust: number;
}
export interface Sys {
    pod: string;
}
