import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: ProductModel;
  isModalVisible: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  getShortDescription(): string {
    if(this.product) {
      return this.product.purpose.substring(0, 150) + "...";
    }
  }

  showModal(): void {
    this.isModalVisible = true;
  }

  close(): void {
    this.isModalVisible = false;
  }
}
