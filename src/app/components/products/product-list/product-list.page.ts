import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from 'src/app/models/product.model';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.page.html',
    styleUrls: ['./product-list.page.scss']
})
export class ProductListComponent implements OnInit {
    @Input() products: Array<Product>;
    @Output() onProductSelected = new EventEmitter();
    filteredProductList: Array<Product>;
    filterName: string;
    selectedProduct: Product;

    constructor(private route: ActivatedRoute) { }

    filterByName(event: any) {
        const { value } = event.target;
        const name = value.toLowerCase();
        if (name) {
          this.filteredProductList = this.products;
          this.filteredProductList = this.products.filter((product: Product) => {
          const { name: productName } = product;
          return productName.toLowerCase().includes(name);
        });
        } else {
          this.filteredProductList = null;
        }
    }

    clickOnProduct() {
        this.onProductSelected.emit();
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
