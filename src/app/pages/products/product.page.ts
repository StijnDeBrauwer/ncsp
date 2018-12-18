import {Component, OnInit} from '@angular/core';
import {Product} from '../../models/product.model';
import {ProductsService} from '../../services/products/products.service';

@Component({
    selector: 'app-our-product-page',
    templateUrl: './product.page.html',
    styleUrls: ['./product.page.scss']
})
export class OurProductPage implements OnInit {
    products: Array<Product>;

    constructor(private productsService: ProductsService) {
    }

    ngOnInit() {

        this.products = this.productsService.getProducts();
    }

}
