import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SupplierType} from 'src/app/models/supplier-type.model';
import {Product} from 'src/app/models/product.model';
import {ProductType} from '../../../../models/product-type.model';

@Component({
    selector: 'app-product-list-page',
    templateUrl: './product-list.page.html',
    styleUrls: ['./product-list.page.scss']
})
export class ProductListPage implements OnInit {

    type: SupplierType;
    productType: ProductType;
    products: Product[];
    selectedProduct: Product;

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.data.subscribe(data => {
            this.type = data.type;
            this.productType = data.product;
            this.getProducts();
        });
    }

    isCrownBaelePage(): boolean {
        return this.type === SupplierType.CROWN_BAELE;
    }

    getProducts() {
        // switch (this.productType) {
        //     case ProductType.PARTS: {
        //         this.products = this.type === SupplierType.CROWN_BAELE ? this.crownBaeleProductService.loadParts() : this.thirdPartyProductService.loadParts();
        //         break;
        //     }
        //
        //     case ProductType.UPGRADES: {
        //         this.products = this.type === SupplierType.CROWN_BAELE ? this.crownBaeleProductService.loadUpgrades() : this.thirdPartyProductService.loadUpgrades();
        //         break;
        //     }
        //
        //     case ProductType.ADD_ONS : {
        //         this.products = this.type === SupplierType.CROWN_BAELE ? this.crownBaeleProductService.loadAddOns() : this.thirdPartyProductService.loadAddOns();
        //         break;
        //     }
        //
        //     case ProductType.SERVICES: {
        //         this.products = this.type === SupplierType.CROWN_BAELE ? this.crownBaeleProductService.loadServices() : this.thirdPartyProductService.loadServices();
        //         break;
        //     }
        //
        //     default:  this.products = this.type === SupplierType.CROWN_BAELE ? this.crownBaeleProductService.loadParts() : this.thirdPartyProductService.loadParts();
        // }
    }

    selectProduct(product): void {
        this.selectedProduct = product;
    }

    removeSelectedProduct(): void {
        this.selectedProduct = null;
    }


}
