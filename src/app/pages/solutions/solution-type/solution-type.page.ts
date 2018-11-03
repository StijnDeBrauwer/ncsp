import { Component, OnInit } from '@angular/core';
import { SolutionBefenitType } from '../../../models/solution-benfit-type';
import { SolutionBenefitService } from '../../../services/solution-benefit.service';

@Component({
  selector: 'app-solution-type',
  templateUrl: './solution-type.page.html',
  styleUrls: ['./solution-type.page.scss']
})
export class SolutionTypePage implements OnInit {
  public SolutionBefenitType = SolutionBefenitType;     
  constructor(private benefitService: SolutionBenefitService) { }

  ngOnInit() {
  }

  changeBenefit(benfit){
    this.benefitService.benefit = benfit;
  }
  
}
