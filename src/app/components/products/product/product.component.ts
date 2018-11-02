import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

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
