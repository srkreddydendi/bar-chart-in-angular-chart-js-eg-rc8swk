import { Component } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public barChartOptions = {
      scaleOverride: true,
      scaleShowVerticalLines: false,
      responsive: true,
      barWidth: 50,
      tooltips: {
        enabled: false
      },
      hover: {
        animationDuration: 0
      },
      plugins: {
        datalabels: {
          display: true,
          backgroundColor: 'white',
          borderColor: 'white',
          borderRadius: 1,
          borderWidth: 0,
          anchor: 'end',
          color: 'black',
          align: 'end',
          offset: -35,
          font: {
            weight: 'normal',
            size: 20
          },
          formatter: Math.round
        }
      },
      pointLabels: {
        display: true
      },
      scales:
      {
        fontColor: '#666',
        xAxes: [{
            display: true,
            barPercentage: 0.90,
            stacked: true,
            color: "transparent",
            ticks: {
              beginAtZero: true,
              fontFamily: "'Roboto', 'Helvetica Neue', sans-serif",
              fontColor: "transparent",
              // stepSize:0.1
              // min: 0,
              // max:0,
              // stepSize:10
            },
            scaleLabel: {
              display: false
            },
            gridLines: {
              display: true,
              offsetGridLines: true,
              color: "white",
            },
          }],
        yAxes: [{
            barPercentage: 0.40,
            display: true,
            stacked: true,
            gridLines: {
              display: false,
              offsetGridLines: false
            },
            ticks: {
              fontFamily: "'Roboto', 'Helvetica Neue', sans-serif",
              fontSize: 14,
            },
          }]
      },
    };

   _lineChartColors:Array<any> = [{
       backgroundColor: 'red',
        borderColor: 'red',
        pointBackgroundColor: 'red',
        pointBorderColor: 'red',
        pointHoverBackgroundColor: 'red',
        pointHoverBorderColor: 'red' 
      }];



  
  public barChartLabels: string[];
  public barChartType: string = 'horizontalBar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [1,2,3,4], label: 'Volume Sales' },
   // { data: [], label: 'Value Sales' }
  ];
  constructor(private _emp: DataService) {
  }
  ngOnInit() {
    this._emp.getSales().subscribe(data => {
      this.barChartLabels = ["a","b","c","d"];
      this.barChartLabels.forEach(label => {
        //this.barChartData[0].data.push(data[label]['volumeSales']);
       // this.barChartData[1].data.push(data[label]['valueSales']);
      });
    });;
  }
}
