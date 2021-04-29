import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/providers/common.service';

@Component({
  selector: 'product-front',
  templateUrl: './product-front.component.html',
  styleUrls: ['./product-front.component.css']
})
export class ProductFrontComponent implements OnInit {
  role: any;
  key: any
  product: any = [];
  constructor(private cs: CommonService) {
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
}