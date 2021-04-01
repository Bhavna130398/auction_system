import { Component, OnInit } from '@angular/core';
import { Subscription, from } from 'rxjs';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  fgpending: FormGroup;
  opened = true;
  over = 'side';
  expandHeight = '42px';
  collapseHeight = '42px';
  displayMode = 'flat';
  // overlap = false;
  state: string = 'default';
  watcher: Subscription;


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
    // this.fgpending= this.fb.group({
    //   days: ['']
    // })
  }

  ngOnInit() {
    // this.user = JSON.parse(sessionStorage.getItem('user'));
  }
  logout() {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }

  submit(id: number) {
    // console.log(id)
    this.router.navigate(['/dashboard/pending' + '/' + id]);
    //   this.cs.get_pending_report(id).subscribe((resp:any)=>{
    //   console.log(resp);  
    // })
  }



}
