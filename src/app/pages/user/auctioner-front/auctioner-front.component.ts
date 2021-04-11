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
  private base64textString: String = "";
  constructor(private fb: FormBuilder, private cs: CommonService, private router: Router) {
    this.fgAddProduct = this.fb.group({
      productname: ['', Validators.required],
      image: ['', Validators.required],
      producttype: ['', Validators.required],
      productdiscription: ['', Validators.required],
      productprice: ['', Validators.required],
    });
  }

  // ngOnInit(): void {
  // }
  getBase64(event) {
    console.log(event);
    // let me = this;
    // let file = event.target.files[0];
    // let reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onload = function () {
    //   console.log(reader.result);
    // };
    // reader.onerror = function (error) {
    //   console.log('Error: ', error);
    // };
  }
  handleFileSelect(evt) {
    var files = evt.target.files;
    var file = files[0];
    if (files && file) {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }
  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    this.fgAddProduct.controls['image'].setValue(this.base64textString);
  }

  addProduct() { this.showForm = true; }
  showProducts() { this.showForm = false; }

  onSubmit() {
    this.cs.addProduct(this.fgAddProduct.value).subscribe((res: any) => {
      console.log(res);
    })
  }
  logout() {
    this.cs.logout();
  }
}
