import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { CommonService } from 'src/app/providers/common.service';


@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  showChart: any = 'chart';
  count: any;
  chart: Chart;
  showadmin: boolean = false;
  userData: any = [];

  constructor(private cs: CommonService) { }

  ngOnInit(): void {
    this.setChart();
    this.cs.getBidList().subscribe((res: any) => {
      if (res.length != 0) {
        console.log(res);
        this.count = res.length;
      }
    })

  }
  setChart() {
    this.showChart = 'chart';
    this.chart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Linechart'
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: 'Line 1',
          type: 'line',
          data: [1, 2, 3]
        }
      ]
    });
  }
  ShowAdmin() {
    this.showadmin = true;
    this.showChart = 'form';
    // this.userData.push(localStorage.getItem('userData'));
    this.userData = JSON.parse(localStorage.getItem('userData'));
  }
  hideForm() {
    this.showChart = 'chart';
    this.showadmin = false;
  }

  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }
}
