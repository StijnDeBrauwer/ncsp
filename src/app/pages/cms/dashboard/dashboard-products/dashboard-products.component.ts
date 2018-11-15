import { Component, OnInit } from '@angular/core';
import { PdfService } from 'src/app/services/pdf/pdf.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-dashboard-products',
  templateUrl: './dashboard-products.component.html',
  styleUrls: ['./dashboard-products.component.scss']
})
export class DashboardProductsComponent implements OnInit {

  isModalShown: boolean = false;

  constructor(private pdfService: PdfService,
    private productService: ProductsService) { }

  ngOnInit() {

  }

  showModal(): void {
    this.isModalShown = true;
  }

  private hideModal(): void {
    this.isModalShown = false;
  }

  delete(): void {
    this.hideModal();
  }

  cancel(): void {
    this.hideModal();
  }

  captureScreen(): void {
    var data = document.getElementById('content');
    this.pdfService.captureScreen(data, 'products');
  }
}
