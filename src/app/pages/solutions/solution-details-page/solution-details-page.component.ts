import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SolutionModel } from 'src/app/models/solution.model';
import { ProductModel } from 'src/app/models/product.model';
import { SolutionType } from 'src/app/models/solution-type.model';

@Component({
  selector: 'app-solution-details-page',
  templateUrl: './solution-details-page.component.html',
  styleUrls: ['./solution-details-page.component.scss']
})
export class SolutionDetailsPageComponent implements OnInit {

  solution: SolutionModel;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(items => {
      this.getSolutionById(Number.parseInt(items.get("id")));
    });
  }

  getSolutionById(id: number): void {
    const product = new ProductModel("Test Product 3rd", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim tincidunt turpis nec consequat. Vestibulum commodo scelerisque metus ut accumsan. Fusce eleifend erat at purus facilisis, congue semper nisl iaculis. Mauris vel congue quam. Curabitur lacus nisl, ullamcorper et dolor vel, hendrerit tincidunt nisi. Vestibulum tempor fringilla nisl nec lacinia. Nullam ut efficitur enim, quis ornare orci. Integer ornare odio vel metus lobortis varius. Etiam sit amet nisi tincidunt, viverra diam et, ultrices sapien. Donec laoreet felis a diam volutpat tempor. Integer ornare auctor ipsum, vitae finibus nibh", "Test Product 3rd", "Test Product 3rd", "Test Product 3rd", "Test Product 3rd", "Test Product 3rd");
    this.solution = new SolutionModel("Test solution", SolutionType.BOTTLE_WASHERS, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim tincidunt turpis nec consequat. Vestibulum commodo scelerisque metus ut accumsan. Fusce eleifend erat at purus facilisis, congue semper nisl iaculis. Mauris vel congue quam. Curabitur lacus nisl, ullamcorper et dolor vel, hendrerit tincidunt nisi. Vestibulum tempor fringilla nisl nec lacinia. Nullam ut efficitur enim, quis ornare orci. Integer ornare odio vel metus lobortis varius. Etiam sit amet nisi tincidunt, viverra diam et, ultrices sapien. Donec laoreet felis a diam volutpat tempor. Integer ornare auctor ipsum, vitae finibus nibh", [product, product, product, product], 123);
  }
}
