import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BidderDialogComponent } from '../bidder-dialog/bidder-dialog.component';
import { ProdDetailDialogComponent } from '../prod-detail-dialog/prod-detail-dialog.component';

@Component({
  selector: 'app-shared-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class SharedProductComponent implements OnInit {
  @Input() product: any; showChip: string = ''; @Input() role: any;
  visible = true;
  selectable = true;
  removable = true; bidData: any;
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  constructor(private dialog: MatDialog, private router: Router) {
    this.bidData = JSON.parse(localStorage.getItem('bidData'));
  }

  ngOnInit(): void {
    if (localStorage.getItem('comeFrom') == 'admin') {
      this.showChip = 'admin';
    } else if (localStorage.getItem('comeFrom') == 'auctioner') {
      this.showChip = 'auctioner';
    } else {
      this.showChip = 'bidder';
    }
  }
  opendialog(data: any): void {
    const DialogConfig = new MatDialogConfig();
    DialogConfig.disableClose = false;
    DialogConfig.autoFocus = true;
    var dialogref = this.dialog.open(BidderDialogComponent, {
      data: (data),
      height: '40%',
      width: '60%'
    })
    // dialogref.afterClosed().subscribe((result: any) => {
    //     this.isApproved = result;
    //     this.getAuctionerList();
    //   })
  }


  onLogin() {
    this.router.navigateByUrl('/login');
  }

  showdetail(data: any) {
    if (this.bidData !== null) {
      data.bid = this.bidData.bidAmount;
    }
    const DialogConfig = new MatDialogConfig();
    DialogConfig.disableClose = false;
    DialogConfig.autoFocus = true;
    var dialogref = this.dialog.open(ProdDetailDialogComponent, {
      data: (data),
      height: '35%',
      width: '55%'
    })
  }
  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }


}
