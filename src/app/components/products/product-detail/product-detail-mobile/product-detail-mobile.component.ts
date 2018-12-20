import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { SolutionType } from 'src/app/models/suitable-type.model';

@Component({
  selector: 'app-product-detail-mobile',
  templateUrl: './product-detail-mobile.component.html',
  styleUrls: ['./product-detail-mobile.component.scss']
})
export class ProductDetailMobileComponent implements OnInit {

  @Input() product: Product;
  types: Array<{ key: string, value: string }>;
  @Output() close: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.types = this.product.solution && this.product.solution.types ? this._convertToDictionary() : [];
}

private _convertToDictionary() {
    return this.product.solution.types.map((type: SolutionType) => {
        const keyEnum = Object.keys(SolutionType).find(key => SolutionType[key] === type);
        return {key: keyEnum, value: type};
    });
}
  closeModal(): void {
    this.close.emit(true);
  }
}
