import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Chart } from 'angular-highcharts';
import { CommonService } from 'src/app/providers/common.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  fgpending!: FormGroup; chart: Chart; opened = true; over = 'side'; expandHeight = '42px'; collapseHeight = '42px'; displayMode = 'flat'; state: string = 'default'; watcher: Subscription;
  showChart: any = 'chart'; showadmin: boolean = false; userData: any = []; flag: any; count: any;

  constructor(media: MediaObserver, private router: Router, private fb: FormBuilder, private cs: CommonService) {
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
    this.cs.getBidList().subscribe((res: any) => {
      if (res.length != 0) {
        console.log(res);
        console.log(res.undefined.length);
        this.count = res.undefined.length;
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
  logout() {
    sessionStorage.clear();
    localStorage.removeItem('role');
    localStorage.removeItem('key');
    localStorage.removeItem('userData');
    this.router.navigateByUrl('/');
  }

  showAdmin() {
    this.showadmin = true;
    this.showChart = 'form';
    this.userData.push(localStorage.getItem('userData'));
    this.userData = JSON.parse(this.userData);
  }
  hideForm() {
    this.showChart = 'chart';
    this.showadmin = false;
  }

  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }
}
