import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-product-edit',
  templateUrl: './dashboard-product-edit.component.html',
  styleUrls: ['./dashboard-product-edit.component.scss']
})
export class DashboardProductEditComponent implements OnInit {

  isEditMode: boolean;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.isEditMode = this.route.snapshot.params["id"] != null;
  }
}
