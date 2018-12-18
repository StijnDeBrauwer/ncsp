import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-detail-mobile',
  templateUrl: './product-detail-mobile.component.html',
  styleUrls: ['./product-detail-mobile.component.scss']
})
export class ProductDetailMobileComponent implements OnInit {

  @Input() product: Product;
  @Output() close: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  closeModal(): void {
    this.close.emit(true);
  }
}
