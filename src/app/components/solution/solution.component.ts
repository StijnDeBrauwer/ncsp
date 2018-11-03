import { Component, OnInit, Input } from '@angular/core';
import { SolutionModel } from 'src/app/models/solution.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.scss']
})
export class SolutionComponent implements OnInit {

  @Input() solution: SolutionModel;
  constructor() { }

  ngOnInit() {
  }
}
