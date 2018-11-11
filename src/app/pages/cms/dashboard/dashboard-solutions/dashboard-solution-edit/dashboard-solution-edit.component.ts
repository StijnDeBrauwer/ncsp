import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-solution-edit',
  templateUrl: './dashboard-solution-edit.component.html',
  styleUrls: ['./dashboard-solution-edit.component.scss']
})
export class DashboardSolutionEditComponent implements OnInit {

  isEditMode: boolean;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.isEditMode = this.route.snapshot.params["id"] != null;
  }

}
