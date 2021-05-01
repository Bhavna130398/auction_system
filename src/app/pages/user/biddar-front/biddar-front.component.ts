import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/providers/common.service';

@Component({
  selector: 'app-biddar-front',
  templateUrl: './biddar-front.component.html',
  styleUrls: ['./biddar-front.component.css']
})
export class BiddarFrontComponent implements OnInit {
  role: any; key: any; product: any = []; userData: any = [];
  editBidder: FormGroup; hide = true; showForm: boolean = false;
  constructor(private cs: CommonService, private fb: FormBuilder) {
    this.editBidder = this.fb.group({
      name: [''],
      email: [''],
      gender: [''],
      DOB: [''],
      mobileNumber: [''],
      address: [''],
      isVerified: [''],
      role: [''],
      username: [''],
      password: ['']
    });
    this.role = localStorage.getItem('role');
    this.key = localStorage.getItem('key');
  }

  ngOnInit(): void {
    var postdata = { role: this.role, _id: this.key }
    this.cs.getProduct(postdata).subscribe((res: any) => {
      if (res) {
        this.product = res;
        if (localStorage.getItem('role') == 'auctioner') {
          localStorage.setItem('comeFrom', 'auctioner');
        }
      } else {
        this.cs.alert('Error', 'No data found!');
      }
    })
  }
  onSubmit() {

  }

  logout() {
    this.cs.logout();
  }

  editUser() {
    this.showForm = true;
    if (localStorage.getItem('userData') !== null) {
      this.userData.push(localStorage.getItem('userData'));
      this.userData = JSON.parse(this.userData);
      this.editBidder = this.fb.group({
        name: [this.userData.name],
        email: [this.userData.email],
        gender: [this.userData.gender],
        DOB: [this.userData.DOB],
        mobileNumber: [this.userData.mobileNumber],
        address: [this.userData.address],
        isVerified: [this.userData.isVerified],
        role: [this.userData.role],
        username: [this.userData.username],
        password: [this.userData.password]
      });
    }
  }
}
