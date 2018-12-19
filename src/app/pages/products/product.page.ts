import {Component, OnInit} from '@angular/core';
import {Product} from '../../models/product.model';
import {ProductsService} from '../../services/products/products.service';
import {SolutionType} from '../../models/suitable-type.model';
import {SolutionBefenitType} from '../../models/solution-benfit-type';

@Component({
    selector: 'app-our-product-page',
    templateUrl: './product.page.html',
    styleUrls: ['./product.page.scss']
})
export class OurProductPage implements OnInit {
    products: Array<Product>;
    suitableFor: Array<string>;
    benefits: Array<string>;

    filterName: string;

    constructor(private productsService: ProductsService) {
    }

    ngOnInit() {
        this.products = this.productsService.getProducts();
        this.suitableFor = Object.keys(SolutionType).map((key) => SolutionType[key]);
        this.benefits =  Object.keys(SolutionBefenitType).map((key) => SolutionBefenitType[key]);
    }

    filterByName(name: string){
        this.productsService.filterProductByName(this.filterName);
    }

}
