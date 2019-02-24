import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Product} from '../../models/product.model';
import {ProductsService} from '../../services/products/products.service';
import {SolutionType} from '../../models/suitable-type.model';
import {SolutionBenefitType} from '../../models/solution-benefit-type';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ResponsiveService} from '../../services/responsive/responsive.service';
import {ActivatedRoute} from '@angular/router';

import {log} from 'util';

@Component({
    selector: 'app-our-product-page',
    templateUrl: './product.page.html',
    styleUrls: ['./product.page.scss']
})
export class OurProductPage implements OnInit {
    products: Array<Product>;
    currentProducts: Array<Product>;
    suitableFor: Array<{ name: string, checked: boolean }>;
    benefits: Array<{ name: string, checked: boolean }>;
    @ViewChild('productsView', {read: ElementRef}) public productsView: ElementRef;
    filtersOpen = false;
    solutionTypes: Array<any>;
    benefitTypes: Array<any>;

    constructor(private responseService: ResponsiveService,
                private productsService: ProductsService,
                private route: ActivatedRoute) {
        this.responseService.checkWidth();
    }

    ngOnInit() {
        this.products = this.productsService.getProducts();
        this.currentProducts = this.products;
      this.suitableFor = Object.keys(SolutionType).map((key) => {
          return {name: SolutionType[key], checked: false};
      });
      this.benefits = Object.keys(SolutionBenefitType).map((key) => {
          return {name: SolutionBenefitType[key], checked: false};
      });
      this._initFilters();
    }

    private _initFilters() {
        this.solutionTypes = Object.keys(SolutionType)
            .filter(k => typeof SolutionType[k as any] === 'string')
            .map(k => {
                return {id: k, value: SolutionType[k as any], checked: false};
            });

        this.benefitTypes = Object.keys(SolutionBenefitType)
            .filter(k => typeof SolutionBenefitType[k as any] === 'string')
            .map(k => {
                return {id: k, value: SolutionBenefitType[k as any], checked: false};
            });
    }

    updateSolutionTypes(index: number) {
        this.solutionTypes[index].checked = !this.solutionTypes[index].checked;
        this.filter();
    }

    updateBenefitTypes(index: number) {
        this.benefitTypes[index].checked = !this.benefitTypes[index].checked;
        this.filter();
    }

    filter() {
      // FILTER OF SOLUTION TYPES
      const filteredSolutionTypes = this.solutionTypes.filter(item => item.checked);
      const filteredSolutionTypeValues = filteredSolutionTypes.map(item => item.value);
      if (filteredSolutionTypes.length) {
        this.currentProducts = this.products.filter(product => {
          const { solution: { types } } = product;
          return filteredSolutionTypeValues.every(item => {
            return types.includes(item);
          });
        });
      } else {
        this.currentProducts = this.products;
      }

      // FILTER OF BENEFIT TYPES
      const filteredBenefitTypes = this.benefitTypes.filter(item => item.checked);
      const filteredBenefitTypeValues = filteredBenefitTypes.map(item => item.value);
      if (filteredBenefitTypes.length) {
        this.currentProducts = this.currentProducts.filter(product => {
          const { solution: { benefits } } = product;
          if (benefits) {
            return filteredBenefitTypeValues.every(val => benefits.includes(val));
          }
          return false;
        });
      }
    }

    public scrollToProducts(): void {
        this.productsView.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'center'});
    }

    onProductClick() {
        this.filtersOpen = false;
    }
}
