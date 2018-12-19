import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from 'src/app/models/product.model';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.page.html',
    styleUrls: ['./product-list.page.scss']
})
export class ProductListComponent implements OnInit {
    @Input() products: Array<Product>;


    productList: Array<Product>;
    filterName: string;
    selectedProduct: Product;

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.productList = this.products;
    }

    filterByName(event: any) {
        const name = event.target.value;
        console.log(this.products);
        this.productList = this.products;
        this.productList = this.productList.filter((product: Product) => {
            return product.name.toLowerCase().startsWith(name);
        });
    }


    selectProduct(product): void {
        this.selectedProduct = product;
    }

    removeSelectedProduct(): void {
        this.selectedProduct = null;
    }


}
