import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from '../../../providers/common.service';

@Component({
  selector: 'app-bidder-dialog',
  templateUrl: './bidder-dialog.component.html',
  styleUrls: ['./bidder-dialog.component.css']
})
export class BidderDialogComponent implements OnInit {
  fgBid: FormGroup; errMsg: any;
  constructor(private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any, private cs: CommonService, public dialogRef: MatDialogRef<BidderDialogComponent>, private fb: FormBuilder) {
    this.fgBid = this.fb.group({
      p_id: [this.data._id],
      u_id: [localStorage.getItem('key')],
      name: ['', Validators.required],
      bidAmount: ['', Validators.required],
      comment: [''],
      bidTime: [new Date()]
    });
  }

  ngOnInit(): void { }

  submit() {
    if (this.fgBid.value.bidAmount > this.data.productprice) {
      this.errMsg = '';
      this.cs.addBid(this.fgBid.value).subscribe((res: any) => {
        if (res) {
          localStorage.setItem('bidData', JSON.stringify(res.data));
          this.cs.alert('Error', 'Your bid is added succesfully!');
          this.dialog.closeAll();
        } else {
          this.cs.alert('Error', 'Bid is not added!');
        }
      })
    } else {
      this.cs.alert('Error', 'Your bid value should br greater than product amount!');
      this.errMsg = 'Your bid value should br greater than product amount!';
    }
  }
}
