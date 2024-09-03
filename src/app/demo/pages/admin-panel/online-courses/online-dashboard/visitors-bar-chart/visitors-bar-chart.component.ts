// angular project
import { Component, OnInit, effect } from '@angular/core';

// project import
import { SharedModule } from 'src/app/demo/shared/shared.module';
import { ThemeLayoutService } from 'src/app/@theme/services/theme-layout.service';

// third party
import {
  NgApexchartsModule,
  ApexDataLabels,
  ApexAxisChartSeries,
  ApexYAxis,
  ApexChart,
  ApexTooltip,
  ApexGrid,
  ApexStates,
  ApexPlotOptions
} from 'ng-apexcharts';

// const
import { DARK, LIGHT } from 'src/app/@theme/const';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  colors: string[];
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  yaxis: ApexYAxis;
  tooltip: ApexTooltip;
  states: ApexStates;
  plotOptions: ApexPlotOptions;
  labels: string[];
};

@Component({
  selector: 'app-visitors-bar-chart',
  standalone: true,
  imports: [SharedModule, NgApexchartsModule],
  templateUrl: './visitors-bar-chart.component.html',
  styleUrl: './visitors-bar-chart.component.scss'
})
export class VisitorsBarChartComponent implements OnInit {
  // public props
  chartOptions!: Partial<ChartOptions>;

  // constructor
  constructor(private themeService: ThemeLayoutService) {
    effect(() => {
      this.isDarkTheme(this.themeService.isDarkMode());
    });
  }

  // life cycle
  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'bar',
        height: 220,
        toolbar: {
          show: false
        }
      },
      colors: ['#52c41a'],
      dataLabels: {
        enabled: false
      },
      grid: {
        strokeDashArray: 4
      },
      yaxis: {
        tickAmount: 3
      },
      states: {
        normal: {
          filter: {
            type: 'lighten',
            value: 0.5
          }
        },
        hover: {
          filter: {
            type: 'lighten',
            value: 0
          }
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 2,
          columnWidth: '50%'
        }
      },
      labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
      series: [
        {
          data: [20, 15, 22, 25, 32, 50]
        }
      ]
    };
  }

  private isDarkTheme(isDark: string) {
    const tooltipTheme = isDark === DARK ? DARK : LIGHT;
    const tooltip = { theme: tooltipTheme };
    const grid = { ...this.chartOptions.grid };
    grid.borderColor = isDark === DARK ? '#fafafa0d' : '#f5f5f5';
    this.chartOptions = { ...this.chartOptions, tooltip, grid };
  }
}
