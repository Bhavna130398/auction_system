import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/providers/common.service';

@Component({
  selector: 'app-auctioner-front',
  templateUrl: './auctioner-front.component.html',
  styleUrls: ['./auctioner-front.component.css']
})
export class AuctionerFrontComponent {
  fgAddProduct: FormGroup; showForm: boolean = false;
  constructor(private fb: FormBuilder, private cs: CommonService, private router: Router) {
    this.fgAddProduct = this.fb.group({
      productname: ['', Validators.required],
      productimage: ['', Validators.required],
      producttype: [''],
      productdiscription: ['', Validators.required],
      productprice: [''],
    });
  }

  // ngOnInit(): void {
  // }
  getBase64(event) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
  addProduct() {
    this.showForm = true;
  }
  showProducts() {
    this.showForm = false;
  }
  onSubmit() {
    this.getBase64(this.fgAddProduct.value.productimage);
    // this.cs.addProduct(this.fgAddProduct.value).subscribe((res: any) => {
    //   console.log(res);
    // })
  }
  logout() {
    this.cs.logout();
  }
}
