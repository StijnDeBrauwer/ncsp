import {Component, OnInit} from '@angular/core';
import {Product} from '../../../models/product.model';
import {ProductsService} from '../../../services/products/products.service';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss']
})
export class ServicesPage implements OnInit {

    services: Array<Product>;

    constructor(private productsService: ProductsService) {

    }

    ngOnInit() {
        this.services = this.productsService.getServices();
    }

}
