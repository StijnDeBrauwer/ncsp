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
    suitableFor: Array<string>;
    benefits: Array<string>;
    @ViewChild('productsView', {read: ElementRef}) public productsView: ElementRef;
    filtersOpen: boolean = false;

    filterName: string;

    // private filters: [
    //     { parts: true,
    //         upgrades: true,
    //         services: true;
    //         benefitCheckBoxes
    //     }
    //     ];
    checkboxGroup: any;

    constructor(private responseService: ResponsiveService, private productsService: ProductsService, private _fb: FormBuilder) {
        this.checkboxGroup = _fb.group({

            myValues: _fb.array([false])
        });

        this.responseService.checkWidth();
    }

    ngOnInit() {
        this.products = this.productsService.getProducts();
        this.suitableFor = Object.keys(SolutionType).map((key) => SolutionType[key]);
        this.benefits = Object.keys(SolutionBefenitType).map((key) => SolutionBefenitType[key]);
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
