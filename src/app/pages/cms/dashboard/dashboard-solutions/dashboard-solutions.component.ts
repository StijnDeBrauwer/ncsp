import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-solutions',
  templateUrl: './dashboard-solutions.component.html',
  styleUrls: ['./dashboard-solutions.component.scss']
})
export class DashboardSolutionsComponent implements OnInit {
  
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
