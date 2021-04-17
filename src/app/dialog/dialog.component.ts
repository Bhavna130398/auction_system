import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CommonService } from '../providers/common.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  rowdata: any = []; isApproved: any;
  constructor(private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any, private cs: CommonService) {
  }

  ngOnInit(): void {
    console.log(this.data.row.name);
    // console.log(this.data);
  }
  onNoClick(): void {
    this.dialog.closeAll();
  }
  verifyUser() {
    let data = {
      _id: this.data.row._id,
      isVerified: true
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
