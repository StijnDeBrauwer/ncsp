import { Component, OnInit } from '@angular/core';
import {Product} from '../../../models/product.model';
import {ProductsService} from '../../../services/products/products.service';

@Component({
  selector: 'app-upgrades',
  templateUrl: './upgrades.component.html',
  styleUrls: ['./upgrades.component.scss']
})
export class UpgradesPage implements OnInit {
    upgrades: Array<Product>;

    constructor(private productsService : ProductsService) {

    }

  ngOnInit() {
      this.upgrades = this.productsService.getUpgrades();
  }

}
