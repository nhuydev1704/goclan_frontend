// angular import
import { Component, effect } from '@angular/core';

// project import
import { SharedModule } from 'src/app/demo/shared/shared.module';
import { ThemeLayoutService } from 'src/app/@theme/services/theme-layout.service';

// const
import { DARK, LIGHT } from 'src/app/@theme/const';

// third party
import {
  NgApexchartsModule,
  ChartComponent,
  ApexDataLabels,
  ApexChart,
  ApexPlotOptions,
  ApexGrid,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexTheme,
  ApexYAxis
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  color: [];
  plotOptions: ApexPlotOptions;
  grid: ApexGrid;
  xaxis: ApexXAxis;
  theme: ApexTheme;
};

@Component({
  selector: 'app-visitors-chart',
  standalone: true,
  imports: [SharedModule, NgApexchartsModule],
  templateUrl: './visitors-chart.component.html',
  styleUrl: './visitors-chart.component.scss'
})
export class VisitorsChartComponent {
  chartOptions: Partial<ChartComponent>;

  constructor(public themeService: ThemeLayoutService) {
    this.chartOptions = {
      chart: {
        type: 'rangeBar',
        height: 80,
        sparkline: { enabled: true },
        toolbar: {
          show: false
        },
        background: 'transparent'
      },
      series: [
        {
          data: [
            {
              x: 'Rejected',
              y: [1, 6]
            },
            {
              x: 'Pending',
              y: [3, 7]
            },
            {
              x: 'New',
              y: [4, 8]
            },
            {
              x: 'Verified',
              y: [5, 9]
            },
            {
              x: 'Store',
              y: [4, 8]
            },
            {
              x: 'Deleted',
              y: [4, 7]
            },
            {
              x: 'Block',
              y: [2, 5]
            }
          ]
        }
      ],
      colors: ['#E58A00'],
      plotOptions: {
        bar: {
          columnWidth: '30%',
          borderRadius: 5,
          horizontal: false
        }
      },
      yaxis: {
        show: false
      },
      grid: {
        show: false,
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      },
      dataLabels: {
        enabled: false
      },
      theme: {
        mode: LIGHT
      }
    };
    effect(() => {
      this.isDarkTheme(this.themeService.isDarkMode());
    });
  }

  private isDarkTheme(isDark: string) {
    const theme = { ...this.chartOptions.theme };
    theme.mode = isDark === DARK ? DARK : LIGHT;
    this.chartOptions = { ...this.chartOptions, theme };
  }
}
