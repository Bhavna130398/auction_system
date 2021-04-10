import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/providers/common.service';

@Component({
  selector: 'app-biddar',
  templateUrl: './biddar.component.html',
  styleUrls: ['./biddar.component.css']
})
export class BiddarComponent implements OnInit {

  constructor(private cs: CommonService) { }

  ngOnInit(): void {
    this.getBidderList();
  }
  getBidderList() {
    this.cs.getBidderList().subscribe((res: any) => {
      console.log(res);
    })
  }
}
