import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/providers/common.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  role
  key
  product: any = [];
  constructor(private cs: CommonService) {
    this.role = localStorage.getItem('role')
    this.key = localStorage.getItem('key')
  }

  ngOnInit(): void {
    var postdata = { role: this.role, _id: this.key }
    this.cs.getProduct(postdata).subscribe((res: any) => {
      console.log(res);
      this.product = res;

    })
  }

}
