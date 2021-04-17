import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CommonService } from '../providers/common.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  rowdata: any = []; isApproved: any; message: any;
  constructor(private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any, private cs: CommonService) {
  }

  ngOnInit(): void {
    console.log(this.data.row.name);
    if (this.data.action == 'approve') {
      this.message = 'Do you want to approve';
    } else this.message = 'Do you want to disapprove';
  }

  onNoClick(): void {
    this.dialog.closeAll();
  }
  verifyUser(action: any) {
    let isVerified;
    if (action == 'cancel') {
      isVerified = false;
    } else isVerified = false;
    let data = {
      _id: this.data.row._id,
      isVerified: isVerified
    }
    this.cs.verifyUser(data).subscribe((res: any) => {
      if (res) {
        localStorage.setItem('isApproved', 'true');
      } else {
        localStorage.setItem('isApproved', 'false');
      }
    })
  }
}
