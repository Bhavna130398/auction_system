import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource, MAT_DIALOG_DATA } from '@angular/material';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { User } from 'src/app/models/user';
import { CommonService } from 'src/app/providers/common.service';

@Component({
  selector: 'app-auctioner',
  templateUrl: './auctioner.component.html',
  styleUrls: ['./auctioner.component.css']
})
export class AuctionerComponent implements OnInit {
  userData: User[];
  displayedColumns: string[] = ['id', 'name', 'email', 'gender', 'mobileNumber', 'DOB', 'address', 'action'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort; isApproved: any;

  constructor(private cs: CommonService, private dialog: MatDialog,) {
    if (localStorage.getItem('isApproved') == 'true') {
      this.isApproved = true;
    } else { this.isApproved = true; }
  }

  ngOnInit() {
    this.getAuctionerList();
    // this.dropTable();
  }


  getAuctionerList() {
    var role = "auctioner";
    this.cs.getList(role).subscribe((res: any) => {
      this.userData = res;
      this.dataSource = new MatTableDataSource(this.userData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  dropTable() {
    // this.cs.drop('product1').subscribe((res: any) => {
    //   console.log(res);
    // });
  }

  opendialog(row, action): void {
    const DialogConfig = new MatDialogConfig();
    DialogConfig.disableClose = false;
    DialogConfig.autoFocus = true;
    DialogConfig.width = "40%";
    this.dialog.open(DialogComponent, {
      data: ({ row, action })
    })
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
