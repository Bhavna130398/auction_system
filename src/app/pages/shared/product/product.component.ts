import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shaerd-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ShaerdProductComponent implements OnInit {
  @Input() product: any
  constructor() { }

  ngOnInit(): void {
    console.log(this.product);

  }

}
