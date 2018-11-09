import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-navigation',
  templateUrl: './admin-navigation.component.html',
  styleUrls: ['./admin-navigation.component.scss']
})
export class AdminNavigationComponent implements OnInit {

  navOpen: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  toggle(): void {
    this.navOpen = !this.navOpen;
  }

  clickURL(): void {
    this.navOpen = false;
  }
}
