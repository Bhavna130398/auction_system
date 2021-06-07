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
  chart1: Chart;
  showadmin: boolean = false;
  userData: any = [];
  aCount: any;
  bCount: any;
  data: any[];
  chartDataObj
  dateArray = []
  constructor(private cs: CommonService) { }

  ngOnInit(): void {

    this.cs.getBidList().subscribe((res: any) => {
      if (res.length != 0) {
        var data = []
        for (let index in res) {
          this.dateArray.push(index);
          var point = [index, res[index].length]
          data.push(point);
        }
        this.chartDataObj = data
        this.setChart();
        this.count = res.length;

      }
    })

    if ((localStorage.getItem('auctionCount') && localStorage.getItem('bidderCount')) !== null) {
      this.aCount = localStorage.getItem('auctionCount');
      this.bCount = localStorage.getItem('bidderCount')
    }
    this.showChart1();
  }

  showChart1() {
    this.showChart = 'chart';
    this.chart1 = new Chart({
      chart: {
        type: 'bar'
      },
      title: {
        text: 'bar'
      },
      credits: {
        enabled: false
      },
      xAxis: {
        title: {
          text: 'Week days'
        },
        categories: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        title: {
          text: 'Number Of Bids'
        }
      },
      series: [{
        type: 'bar',
        data: [10, 15, 12, 8, 7, 5, 7]
      }],
    });
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
      xAxis: {
        title: {
          text: 'Week days'
        },
        categories: this.dateArray,
      },
      yAxis: {
        title: {
          text: 'No Of Bids'
        }
      },
      series: [
        {
          name: 'Bid',
          type: 'line',
          data: this.chartDataObj
        }
      ]

    })
  }
  ShowAdmin() {
    this.showadmin = true;
    this.showChart = 'form';
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
