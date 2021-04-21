import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class SharedProductComponent implements OnInit {
  @Input() product: any
  constructor() { }

  ngOnInit(): void {
    console.log(this.product);

  }

}
