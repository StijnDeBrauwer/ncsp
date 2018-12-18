import {Component, OnInit, Input} from '@angular/core';
import {Product} from 'src/app/models/product.model';
import {SolutionBefenitType} from '../../../models/solution-benfit-type';

@Component({
    selector: 'app-product',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

    @Input() product: Product;
    isModalVisible: boolean = false;

    constructor() {
    }

    ngOnInit() {
    }


    showModal(): void {
        this.isModalVisible = true;
    }

    get benifts() {
        let benefitString = '';

        this.product.solution.benefits.forEach(benefit => {
            benefitString += '' + benefit + ' - ';
        });

        return benefitString;
    }

    close(): void {
        this.isModalVisible = false;
    }
}
