export class fetchData {
    constructor(
        public data: dataEntity
    ) { }
}
export interface dataEntity {
    latitude: number,
    longitude: number,
    generationtime_ms: number,
    elevation: number,
    timezone: string,
    timezone_abbreviation: string,
    hourly_units: hourly_units,
    hourly: hourly,
    daily_units: daily_units,
    daily: daily,
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

