import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SupplierType } from 'src/app/models/supplier-type.model';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit {

  type: SupplierType;
  products: ProductModel[];
  selectedProduct: ProductModel;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.type = data.type;
      this.getProducts();
    });
  }

  isCrownBaelePage(): boolean {
    return this.type === SupplierType.CROWN_BAELE;
  }

  getProducts(): void {
    if(this.isCrownBaelePage()) {
      this.products = [new ProductModel("Test Product CB", "Test Product CB", "Test Product CB", "Test Product CB", "Test Product CB", "Test Product CB", "Test Product CB")]
    } else {
      this.products = [
        new ProductModel("Test Product 3rd", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim tincidunt turpis nec consequat. Vestibulum commodo scelerisque metus ut accumsan. Fusce eleifend erat at purus facilisis, congue semper nisl iaculis. Mauris vel congue quam. Curabitur lacus nisl, ullamcorper et dolor vel, hendrerit tincidunt nisi. Vestibulum tempor fringilla nisl nec lacinia. Nullam ut efficitur enim, quis ornare orci. Integer ornare odio vel metus lobortis varius. Etiam sit amet nisi tincidunt, viverra diam et, ultrices sapien. Donec laoreet felis a diam volutpat tempor. Integer ornare auctor ipsum, vitae finibus nibh", "Test Product 3rd", "Test Product 3rd", "Test Product 3rd", "Test Product 3rd", "Test Product 3rd"),
        new ProductModel("Test Product 3rd", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim tincidunt turpis nec consequat. Vestibulum commodo scelerisque metus ut accumsan. Fusce eleifend erat at purus facilisis, congue semper nisl iaculis. Mauris vel congue quam. Curabitur lacus nisl, ullamcorper et dolor vel, hendrerit tincidunt nisi. Vestibulum tempor fringilla nisl nec lacinia. Nullam ut efficitur enim, quis ornare orci. Integer ornare odio vel metus lobortis varius. Etiam sit amet nisi tincidunt, viverra diam et, ultrices sapien. Donec laoreet felis a diam volutpat tempor. Integer ornare auctor ipsum, vitae finibus nibh", "Test Product 3rd", "Test Product 3rd", "Test Product 3rd", "Test Product 3rd", "Test Product 3rd"),
        new ProductModel("Test Product 3rd", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim tincidunt turpis nec consequat. Vestibulum commodo scelerisque metus ut accumsan. Fusce eleifend erat at purus facilisis, congue semper nisl iaculis. Mauris vel congue quam. Curabitur lacus nisl, ullamcorper et dolor vel, hendrerit tincidunt nisi. Vestibulum tempor fringilla nisl nec lacinia. Nullam ut efficitur enim, quis ornare orci. Integer ornare odio vel metus lobortis varius. Etiam sit amet nisi tincidunt, viverra diam et, ultrices sapien. Donec laoreet felis a diam volutpat tempor. Integer ornare auctor ipsum, vitae finibus nibh", "Test Product 3rd", "Test Product 3rd", "Test Product 3rd", "Test Product 3rd", "Test Product 3rd"),
        new ProductModel("Test Product 3rd", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim tincidunt turpis nec consequat. Vestibulum commodo scelerisque metus ut accumsan. Fusce eleifend erat at purus facilisis, congue semper nisl iaculis. Mauris vel congue quam. Curabitur lacus nisl, ullamcorper et dolor vel, hendrerit tincidunt nisi. Vestibulum tempor fringilla nisl nec lacinia. Nullam ut efficitur enim, quis ornare orci. Integer ornare odio vel metus lobortis varius. Etiam sit amet nisi tincidunt, viverra diam et, ultrices sapien. Donec laoreet felis a diam volutpat tempor. Integer ornare auctor ipsum, vitae finibus nibh", "Test Product 3rd", "Test Product 3rd", "Test Product 3rd", "Test Product 3rd", "Test Product 3rd")
      ];
    }
  }

  selectProduct(product): void {
    this.selectedProduct = product;
  }

  removeSelectedProduct(): void {
    this.selectedProduct = null;
  }
}
