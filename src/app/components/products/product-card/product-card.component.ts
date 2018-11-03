import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: ProductModel;
  constructor() { }

  ngOnInit() {
  }

  getShortDescription(): string {
    return this.product.purpose.substring(0, 150) + "...";
  }
}
