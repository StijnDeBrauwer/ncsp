import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: "app-mobile-filter-modal",
  templateUrl: "./mobile-filter-modal.component.html",
  styleUrls: ["./mobile-filter-modal.component.scss"]
})
export class MobileFilterModalComponent implements OnInit {
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
