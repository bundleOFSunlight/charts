import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AxiosHelperService } from "../helpers/axios-helper.service";
import { fetchData } from "./entities";

@Injectable({ providedIn: "root" })

export class _httpSerice {

    constructor(private http: HttpClient, public axios_helper: AxiosHelperService,) { }

    // _url = 'https://api.open-meteo.com/v1/forecast?latitude=1.29&longitude=103.85&hourly=relativehumidity_2m,direct_radiation&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FSingapore&start_date=2023-10-01&end_date=2023-10-10'
    _url = 'http://127.0.0.1:9512/common/chart'

    async fetchData() {
        // return this.http.get<weather_dates>(this._url).pipe(map(res => res))

        /* Reason why not using httpClient: 
        it can only do with observables and is difficult when we need for multiple api request */
        const data: fetchData = await this.axios_helper.get(this._url);
        return data.data
    }

}