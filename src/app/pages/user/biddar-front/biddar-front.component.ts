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
      _id:[localStorage.getItem('key')],
      name: [''],
      email: [''],
      gender: [''],
      DOB: [''],
      mobileNumber: [''],
      address: [''],
      isVerified: ['false'],
      role: [''],
      username: [''],
      // password: ['123456']
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
  onUpdate() {
      this.cs.updateUser(this.editBidder.value).subscribe((res:any)=>{
        if(res){
          console.log(res);
          this.cs.alert('Success', 'User update succesfully!');
          this.showForm = false;
          this.userData = res.data;
          localStorage.setItem('userData', JSON.stringify(res.data));
        }else{
          this.cs.alert('Error', 'Something went wrong!');
        }
      })
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
        _id:[localStorage.getItem('key')],
        name: [this.userData.name],
        email: [this.userData.email],
        gender: [this.userData.gender],
        DOB: [this.userData.DOB],
        mobileNumber: [this.userData.mobileNumber],
        address: [this.userData.address],
        isVerified: ['false'],
        role: [this.userData.role],
        username: [this.userData.username],
        // password: ['123456']
      });
    }
  }
}
