import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/providers/common.service';

@Component({
  selector: 'app-auctioner-front',
  templateUrl: './auctioner-front.component.html',
  styleUrls: ['./auctioner-front.component.css']
})
export class AuctionerFrontComponent {
  fgAddProduct: FormGroup; showForm: boolean = false;
  constructor(private fb: FormBuilder, private cs: CommonService) {
    this.fgAddProduct = this.fb.group({
      productname: ['', Validators.required],
      productimage: ['', Validators.required],
      producttype: ['', Validators.required],
      productdiscription: ['', Validators.required],
      productprice: ['', Validators.required],
    });
  }

  // ngOnInit(): void {
  // }
  addProduct() {
    this.showForm = true;
  }
  showProducts() {
    this.showForm = false;
  }
  onSubmit() {
    this.cs.addProduct(this.fgAddProduct.value).subscribe((res: any) => {
      console.log(res);
    })
  }
}
