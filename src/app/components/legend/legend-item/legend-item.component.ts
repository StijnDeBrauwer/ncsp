import { Component, OnInit, Input } from '@angular/core';
import { SolutionBenefitType } from '../../../models/solution-benefit-type';

@Component({
  selector: 'app-legend-item',
  templateUrl: './legend-item.component.html',
  styleUrls: ['./legend-item.component.scss']
})
export class LegendItemComponent implements OnInit {
  @Input() solutionBenefit: string;
  @Input() benefits: Array<SolutionBenefitType>;
  color: string;
  text: string;
  constructor() { }

  ngOnInit() {
    this.text = this.getTextByBenefit();
    if (!this.benefits) {
      this.color = this.getColorByBenefit();
    } else {
      const foundItem = this.benefits.find(
        item => item === this.solutionBenefit
      );
      if (!foundItem) {
        this.color = this.getDefaultColor();
      } else {
        this.color = this.getColorByBenefit();
      }
    }
  }

  getDefaultColor() {
    return 'lightgrey';
  }

  getColorByBenefit() {
    switch (this.solutionBenefit) {
      case SolutionBenefitType.EFFICIENCY:
        return 'orange';
      case SolutionBenefitType.SAFETY:
        return 'red';
      case SolutionBenefitType.COST_SAVING:
        return 'black';
      case SolutionBenefitType.ENERGY_SAVING:
        return 'green';
      case SolutionBenefitType.WATER_SAVING:
        return 'blue';
      case SolutionBenefitType.QUALITY_HYGIENE:
        return 'brown';
      default:
        return null;
    }
  }

  getTextByBenefit() {
    switch (this.solutionBenefit) {
      case SolutionBenefitType.EFFICIENCY:
        return 'EF';
      case SolutionBenefitType.SAFETY:
        return 'SA';
      case SolutionBenefitType.COST_SAVING:
        return 'CS';
      case SolutionBenefitType.ENERGY_SAVING:
        return 'ES';
      case SolutionBenefitType.WATER_SAVING:
        return 'WS';
      case SolutionBenefitType.QUALITY_HYGIENE:
        return 'QH';
      default:
        return null;
    }
  }
}
