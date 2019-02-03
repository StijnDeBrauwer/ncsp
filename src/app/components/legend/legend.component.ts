import { Component, OnInit, Input } from '@angular/core';
import { SolutionBenefitType } from 'src/app/models/solution-benefit-type';

@Component({
  selector: 'app-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.scss']
})
export class LegendComponent implements OnInit {

  @Input() productBenefits: Array<SolutionBenefitType>;
  benefits: Array<SolutionBenefitType> = [
    SolutionBenefitType.SAFETY,
    SolutionBenefitType.WATER_SAVING,
    SolutionBenefitType.QUALITY_HYGIENE,
    SolutionBenefitType.ENERGY_SAVING,
    SolutionBenefitType.EFFICIENCY,
    SolutionBenefitType.COST_SAVING,
  ];

  constructor() { }

  ngOnInit() {
  }

}
