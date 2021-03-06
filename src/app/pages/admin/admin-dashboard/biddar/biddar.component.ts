import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { User } from 'src/app/models/user';
import { CommonService } from 'src/app/providers/common.service';

@Component({
  selector: 'app-biddar',
  templateUrl: './biddar.component.html',
  styleUrls: ['./biddar.component.css']
})
export class BiddarComponent implements OnInit {
  userData: User[] = [];
  displayedColumns: string[] = ['id', 'name', 'email', 'gender', 'mobileNumber', 'DOB', 'address'];
  dataSource!: MatTableDataSource<User>;

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort;

  constructor(private cs: CommonService) { }

  ngOnInit(): void {
    this.getBidderList();
  }
  getBidderList() {
    var role = "bidder";
    this.cs.getList(role).subscribe((res: any) => {
      if (res.length !== 0) {
        this.userData = res;
        this.dataSource = new MatTableDataSource(this.userData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      } else {
        this.cs.alert('Error', 'No data found!');
      }
    })
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
