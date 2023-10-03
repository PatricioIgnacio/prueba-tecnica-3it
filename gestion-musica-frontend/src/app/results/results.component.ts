import { Component, ViewChild } from '@angular/core';
import { DetailMusic } from '../detail-music';
import { StyleMusicService } from '../services/style-music.service';
import { Observable } from 'rxjs';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent {
  details: DetailMusic[];
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(private musicService: StyleMusicService) {
    // En caso de obtener data real del Backend, se reemplaza el objeto.

    this.chartOptions = {
      series: [
        {
          name: 'My-series',
          data: [2, 4, 6, 8],
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
      },
      title: {
        text: 'Gráfico - Datos Música',
      },
      xaxis: {
        categories: ['Rock', 'Pop', 'Clásica', 'Salsa'],
      },
    };
  }

  // Llamado a datos de Backend.

  ngOnInit(): void {
    this.surveyData();
  }

  private surveyData() {
    this.musicService.surveyData().subscribe((dato) => {
      this.details = dato;
    });
  }
}
