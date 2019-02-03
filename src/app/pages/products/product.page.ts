import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Product} from '../../models/product.model';
import {ProductsService} from '../../services/products/products.service';
import {SolutionType} from '../../models/suitable-type.model';
import {SolutionBenefitType} from '../../models/solution-benefit-type';
import {FormBuilder} from '@angular/forms';
import {ResponsiveService} from '../../services/responsive/responsive.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-our-product-page',
    templateUrl: './product.page.html',
    styleUrls: ['./product.page.scss']
})
export class OurProductPage implements OnInit {
    products: Array<Product>;
    suitableFor: Array<{ name: string, checked: boolean }>;
    benefits: Array<{ name: string, checked: boolean }>;
    @ViewChild('productsView', {read: ElementRef}) public productsView: ElementRef;
    filtersOpen = false;

    filterName: string;

    private filters = [];

    constructor(private responseService: ResponsiveService, private productsService: ProductsService, private route: ActivatedRoute) {

        this.responseService.checkWidth();

        this.route.data.subscribe((data: any) => {
            if (!data) {
                this.products = this.productsService.getProducts();
                return;
            }

            if (data.parts) {
                this.products = this.productsService.getParts();
                return;
            }

            if (data.upgrades) {
                this.products = this.productsService.getUpgrades();
            }
        });

    }

    updateFilters() {
        const activeFiltersSuitable = this.suitableFor.filter(o => o.checked).map(o => SolutionType[o.name]);
        const activeFiltersBenefits = this.benefits.filter(o => o.checked).map(o => SolutionType[o.name]);

        this.products = this.productsService.multiFilter([...activeFiltersBenefits, ...activeFiltersSuitable]);
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
