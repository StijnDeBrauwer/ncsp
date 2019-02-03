import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Product} from '../../models/product.model';
import {ProductsService} from '../../services/products/products.service';
import {SolutionType} from '../../models/suitable-type.model';
import {SolutionBenefitType} from '../../models/solution-benefit-type';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ResponsiveService} from '../../services/responsive/responsive.service';
import {ActivatedRoute} from '@angular/router';
import {ProductType} from '../../models/product-type.model';
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

    form: FormGroup;


    productTypes: Array<any>;

    solutionTypes: Array<any>;

    benefitTypes: Array<any>;


    constructor(private responseService: ResponsiveService,
                private productsService: ProductsService,
                private formBuilder: FormBuilder,
                private route: ActivatedRoute) {
        this.responseService.checkWidth();
        this._initFilters();
        this._checkRouteParameters();
    }

    private _initFilters() {
        this.productTypes = Object.keys(ProductType)
            .filter(k => typeof ProductType[k as any] === 'number')
            .map(k => {
                return {id: k, value: ProductType[k as any], checked: false};
            });

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

    private _checkRouteParameters() {
        this.route.data.subscribe((data: any) => {

            if (data.type === ProductType.PARTS.valueOf()) {
                this.currentProducts = this.productsService.getParts();
                this.productTypes[0].checked = true;
                return;
            }

            if (data.type === ProductType.UPGRADES.valueOf()) {
                this.currentProducts = this.productsService.getUpgrades();
                this.productTypes[1].checked = true;
                return;
            }

            this.products = this.productsService.getProducts();
        });
    }

    updateProductTypes(index: number) {
        const { checked } = this.productTypes[index];
        this.productTypes[index].checked = !checked;
        const filteredProductTypes = this.productTypes.filter(item => item.checked);
        this.currentProducts = this.products.filter(product => filteredProductTypes.includes(product.productType));
    }

    updateSolutionTypes(index: number) {
        this.solutionTypes[index].checked = !this.solutionTypes[index].checked;
        console.log(this.solutionTypes[index]);
    }

    updateBenefitTypes(index: number) {
        this.benefitTypes[index].checked = !this.benefitTypes[index].checked;
    }


    ngOnInit() {
        this.products = this.productsService.getProducts();

        this.suitableFor = Object.keys(SolutionType).map((key) => {
            return {name: SolutionType[key], checked: false};
        });
        this.benefits = Object.keys(SolutionBenefitType).map((key) => {
            return {name: SolutionBenefitType[key], checked: false};
        });
    }


    public scrollToProducts(): void {
        this.productsView.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'center'});
    }

    onProductClick() {
        this.filtersOpen = false;
    }

    filterByName(name: string) {
        // this.productsService.filterProductByName(this.filterName);
    }

}
