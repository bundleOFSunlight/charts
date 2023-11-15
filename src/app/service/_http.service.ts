import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { weather_dates } from "./entities";

@Injectable({ providedIn: "root" })

export class _httpSerice {
    constructor(private http: HttpClient) { }

    _url = 'https://api.open-meteo.com/v1/forecast?latitude=1.29&longitude=103.85&hourly=relativehumidity_2m,direct_radiation&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FSingapore&start_date=2023-10-01&end_date=2023-10-10'

    fetchData() {
        return this.http.get<weather_dates>(this._url).pipe(map(res => res))
    }

}