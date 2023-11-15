import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { _httpSerice } from './service/_http.service';
import colorLib from '@kurkle/color';

Chart.register(
  ...registerables
)
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  chart: any;

  constructor(private HttpService: _httpSerice) { }

  ngOnInit() {

    this.HttpService.fetchData().subscribe(
      char_data => {

        // draw line chart
        const temp_max = char_data.daily.temperature_2m_max
        const temp_min = char_data.daily.temperature_2m_min
        const allocate = char_data.daily.time

        const line_data = {
          labels: allocate,
          datasets: [{
            label: 'Max temperature',
            data: temp_max,
            borderColor: "#3cba9f",
          },
          {
            label: 'Min temperature',
            data: temp_min,
            borderColor: "#ffcc00",
          }]
        };

        this.chart = new Chart('line_chart', {
          type: 'line',
          data: line_data,
        });

        // draw column chart
        const relativehumidity = char_data.hourly.relativehumidity_2m
        const hum_allocate = char_data.hourly.time
        const bar_data = {
          labels: hum_allocate,
          datasets: [{
            label: 'Relativehumidity_2m',
            data: relativehumidity,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: this.transparentize('rgb(255, 99, 132)', 0.5),
            borderWidth: 2,
            borderRadius: Number.MAX_VALUE,
            borderSkipped: false,
          },]
        };
        this.chart = new Chart('column_chart', {
          type: 'bar',
          data: bar_data,
        });

        // draw area chart
        const direct_radiation = char_data.hourly.direct_radiation
        const rad_allocate = char_data.hourly.time
        const area_data = {
          labels: rad_allocate,
          datasets: [{
            label: 'direct_radiation',
            data: direct_radiation,
            borderColor: 'rgb(255, 205, 86)',
            backgroundColor: 'rgb(54, 162, 235)',
            fill: true
          },]
        };
        this.chart = new Chart('area_chart', {
          type: 'line',
          data: area_data,
        });
      }
    )
  }

  // radius bar
  transparentize(value: string, opacity: number) {
    var alpha = opacity === undefined ? 0.5 : 1 - opacity;
    return colorLib(value).alpha(alpha).rgbString();
  }
}
