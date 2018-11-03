import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SolutionType } from 'src/app/models/solution-type.model';
import { SolutionModel } from 'src/app/models/solution.model';
import { ProductModel } from 'src/app/models/product.model';
import { SolutionService } from '../../../services/solutions/solution.service';
import { SolutionBefenitType } from '../../../models/solution-benfit-type';
import { SolutionBenefitService } from '../../../services/solution-benefit.service';

@Component({
  selector: 'app-solutions-list-page',
  templateUrl: './solutions-list-page.component.html',
  styleUrls: ['./solutions-list-page.component.scss']
})
export class SolutionsListPageComponent implements OnInit {
  solutionType: SolutionType;
  benefit: SolutionBefenitType;
  solutions: SolutionModel[];
  title: string;


  constructor(private route: ActivatedRoute, private solutionService: SolutionService, private befenitService: SolutionBenefitService) {
   }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.solutionType = data.type;
    });

    this.befenitService.benefitSubject.subscribe(b => {
      this.benefit = b;
      this.getSolutions();
    })
  }

  isBottleWashersPage(): boolean {
    return this.solutionType === SolutionType.BOTTLE_WASHERS;
  }

  isFiltersPage(): boolean {
    return this.solutionType === SolutionType.FILTERS;
  }

  getSolutions(): void {
    this.title = ` ${this.benifitString} for ${this.solutionTypeString}`
    //Get data from server
    this.solutions = this.solutionService.loadSolutions(this.solutionType, this.benefit);
  }

  get benifitString(){
      switch(this.benefit){
        case SolutionBefenitType.PERFORMANCE: return 'Improve performace';
        case SolutionBefenitType.HYGIENE: return 'Improve hygiene';
        case SolutionBefenitType.COSTS: return 'Reduce costs';
        case SolutionBefenitType.WATER_ENERGY: return 'Save water/energy';

      }
  }

  get solutionTypeString(){
    switch(this.solutionType){
      case SolutionType.BOTTLE_WASHERS: return 'Bottle Washers';
      case SolutionType.FILTERS: return 'Fillers';
      case SolutionType.OTHERS: return 'Other machines';
    }
  }
}
