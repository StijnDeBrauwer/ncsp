import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-detail-desktop',
  templateUrl: './product-detail-desktop.component.html',
  styleUrls: ['./product-detail-desktop.component.scss']
})
export class ProductDetailDesktopComponent implements OnInit {

  @Input() product: ProductModel;
  @Output() close: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  closeModal(): void {
    this.close.emit(true);
  }
}
