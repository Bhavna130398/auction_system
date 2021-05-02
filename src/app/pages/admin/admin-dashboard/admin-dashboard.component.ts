import { Component, OnInit } from '@angular/core';
import { Subscription, from } from 'rxjs';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Chart } from 'angular-highcharts';
//import { ChartOptions, ChartType, ChartDatasetProperties } from 'chart.js';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  fgpending!: FormGroup;
  chart: Chart;
  opened = true; over = 'side'; expandHeight = '42px'; collapseHeight = '42px';
  displayMode = 'flat'; state: string = 'default'; watcher: Subscription;
  showadmin: boolean = false; userData: any = [];
  constructor(media: MediaObserver, private router: Router, private fb: FormBuilder) {
    this.watcher = media.media$.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        this.opened = false;
        this.over = 'over';
      } else {
        this.opened = true;
        this.over = 'side';
      }
    });
  }


  ngOnInit() {
    this.setChart();
  }
  setChart() {
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
  logout() {
    sessionStorage.clear();
    localStorage.removeItem('role');
    localStorage.removeItem('key');
    localStorage.removeItem('userData');
    this.router.navigateByUrl('/');
  }

  showAdmin() {
    this.showadmin = true;
    this.userData.push(localStorage.getItem('userData'));
    this.userData = JSON.parse(this.userData);
  }
  hideForm() { this.showadmin = false; }

  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }
}
