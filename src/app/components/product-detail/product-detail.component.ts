import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  constructor(private responsiveService: ResponsiveService) { 
    
  }

  ngOnInit() {
    this.responsiveService.getMobileStatus().subscribe(isMobile => {
      this.isMobile = isMobile;
    });
  }

  closeModal(): void {
    this.close.emit(true);
  }
}
