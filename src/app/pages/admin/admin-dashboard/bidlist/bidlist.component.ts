import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/providers/common.service';

@Component({
  selector: 'app-bidlist',
  templateUrl: './bidlist.component.html',
  styleUrls: ['./bidlist.component.css']
})
export class BidlistComponent implements OnInit {
  bidData: any;
  constructor(private cs: CommonService) { }

  ngOnInit(): void {
    this.cs.getBidList().subscribe((res:any)=>{
      if(res.length != 0){
        this.bidData = res;
        console.log(this.bidData);
      }
    })
  }

}
