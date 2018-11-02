import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SolutionType } from 'src/app/models/solution-type.model';
import { SolutionModel } from 'src/app/models/solution.model';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-solutions-list-page',
  templateUrl: './solutions-list-page.component.html',
  styleUrls: ['./solutions-list-page.component.scss']
})
export class SolutionsListPageComponent implements OnInit {
  solutionType: SolutionType;
  solutions: SolutionModel[];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.solutionType = data.type;
      this.getSolutions();
    });
  }

  isBottleWashersPage(): boolean {
    return this.solutionType === SolutionType.BOTTLE_WASHERS;
  }

  isFiltersPage(): boolean {
    return this.solutionType === SolutionType.FILTERS;
  }

  getSolutions(): void {
    //Get data from server
    const product = new ProductModel("Test Product 3rd", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim tincidunt turpis nec consequat. Vestibulum commodo scelerisque metus ut accumsan. Fusce eleifend erat at purus facilisis, congue semper nisl iaculis. Mauris vel congue quam. Curabitur lacus nisl, ullamcorper et dolor vel, hendrerit tincidunt nisi. Vestibulum tempor fringilla nisl nec lacinia. Nullam ut efficitur enim, quis ornare orci. Integer ornare odio vel metus lobortis varius. Etiam sit amet nisi tincidunt, viverra diam et, ultrices sapien. Donec laoreet felis a diam volutpat tempor. Integer ornare auctor ipsum, vitae finibus nibh", "Test Product 3rd", "Test Product 3rd", "Test Product 3rd", "Test Product 3rd", "Test Product 3rd");
    const solution = new SolutionModel("Test solution", SolutionType.BOTTLE_WASHERS, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim tincidunt turpis nec consequat. Vestibulum commodo scelerisque metus ut accumsan. Fusce eleifend erat at purus facilisis, congue semper nisl iaculis. Mauris vel congue quam. Curabitur lacus nisl, ullamcorper et dolor vel, hendrerit tincidunt nisi. Vestibulum tempor fringilla nisl nec lacinia. Nullam ut efficitur enim, quis ornare orci. Integer ornare odio vel metus lobortis varius. Etiam sit amet nisi tincidunt, viverra diam et, ultrices sapien. Donec laoreet felis a diam volutpat tempor. Integer ornare auctor ipsum, vitae finibus nibh", null);
    if(this.isBottleWashersPage()) {
      this.solutions = [solution, solution, solution];
    } else if (this.isFiltersPage()) {
      this.solutions = [solution, solution];
    } else {
      this.solutions = [solution];
    }
  }
}
