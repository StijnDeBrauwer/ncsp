import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { ResponsiveService } from 'src/app/services/responsive/responsive.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  @Input() product: ProductModel;
  isMobile: false;
  selectedTab: string = "tab1";

  constructor(private responsiveService: ResponsiveService) { 
    this.product = new ProductModel("Test Product A", "Test Product A", "Test Product A", "Test Product A", "Test Product A", "Test Product A", "Test Product A");
  }

  ngOnInit() {
    this.responsiveService.getMobileStatus().subscribe(isMobile => {
      this.isMobile = isMobile;
    });
  }

}
