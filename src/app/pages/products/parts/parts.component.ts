import { Component, OnInit } from '@angular/core';
import {Product} from '../../../models/product.model';
import {ProductsService} from '../../../services/products/products.service';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss']
})
export class PartsPage implements OnInit {

  parts: Array<Product>;

  constructor(private productsService : ProductsService) {

  }

  ngOnInit() {
    this.parts = this.productsService.getParts();
  }

}
