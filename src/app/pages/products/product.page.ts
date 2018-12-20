import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Product} from '../../models/product.model';
import {ProductsService} from '../../services/products/products.service';
import {SolutionType} from '../../models/suitable-type.model';
import {SolutionBefenitType} from '../../models/solution-benfit-type';
import {FormBuilder} from '@angular/forms';
import {ResponsiveService} from '../../services/responsive/responsive.service';

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
    filtersOpen: boolean = false;

    filterName: string;

    private filters = [];

    constructor(private responseService: ResponsiveService, private productsService: ProductsService) {

        this.responseService.checkWidth();

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
        this.benefits = Object.keys(SolutionBefenitType).map((key) => {
            return {name: SolutionBefenitType[key], checked: false};
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
