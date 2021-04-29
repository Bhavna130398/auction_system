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
  fgBid: FormGroup;
  constructor(private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any, private cs: CommonService, public dialogRef: MatDialogRef<BidderDialogComponent>, private fb: FormBuilder) {
    this.fgBid = this.fb.group({
      name: ['', Validators.required],
      bidAmount: ['', Validators.required],
      comment: [''],
    })
  }

  ngOnInit(): void {
    console.log(JSON.stringify(this.data));
  }
  submit() {
    console.log('1');
  }
}
