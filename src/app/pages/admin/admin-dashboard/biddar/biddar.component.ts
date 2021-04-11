import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { User } from 'src/app/models/user';
import { CommonService } from 'src/app/providers/common.service';

@Component({
  selector: 'app-biddar',
  templateUrl: './biddar.component.html',
  styleUrls: ['./biddar.component.css']
})
export class BiddarComponent implements OnInit {
  userData: User[];
  displayedColumns: string[] = ['id', 'name', 'email', 'gender', 'mobileNumber', 'DOB', 'address'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private cs: CommonService) { }

  ngOnInit(): void {
    this.getBidderList();
  }
  getBidderList() {
    var role = "bidder";
    this.cs.getList(role).subscribe((res: any) => {
      this.userData = res;
      this.dataSource = new MatTableDataSource(this.userData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
