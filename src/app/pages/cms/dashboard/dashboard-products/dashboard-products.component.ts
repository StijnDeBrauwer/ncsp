import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-products',
  templateUrl: './dashboard-products.component.html',
  styleUrls: ['./dashboard-products.component.scss']
})
export class DashboardProductsComponent implements OnInit {

  isModalShown: boolean = false;

  constructor() { }

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
}
