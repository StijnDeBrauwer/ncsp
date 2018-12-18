import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from 'src/app/models/product.model';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.page.html',
    styleUrls: ['./product-list.page.scss']
})
export class ProductListComponent implements OnInit {
    @Input() products: Product[];
    selectedProduct: Product;

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
    }


    selectProduct(product): void {
        this.selectedProduct = product;
    }

    removeSelectedProduct(): void {
        this.selectedProduct = null;
    }


}
