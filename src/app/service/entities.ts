export class weather_dates {
    constructor(
        public latitude: number,
        public longitude: number,
        public generationtime_ms: number,
        public elevation: number,
        public timezone: string,
        public timezone_abbreviation: string,
        public hourly_units: hourly_units,
        public hourly: hourly,
        public daily_units: daily_units,
        public daily: daily,
    ) { }
}

interface hourly_units {
    time: string,
    relativehumidity_2m: string,
    direct_radiation: string,
}

interface hourly {
    time: string[],
    relativehumidity_2m: number[],
    direct_radiation: number[],
}

interface daily_units {
    time: string,
    temperature_2m_max: string,
    temperature_2m_min: string
}

interface daily {
    time: string[],
    temperature_2m_max: number[],
    temperature_2m_min: number[]
}
