import {Component, OnInit, Input} from '@angular/core';
import {Product} from 'src/app/models/product.model';
import {SolutionBefenitType} from '../../../models/solution-benfit-type';
import {SolutionType} from '../../../models/suitable-type.model';

@Component({
    selector: 'app-product',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

    @Input() product: Product;
    isModalVisible: boolean = false;
    types: Array<{ key: string, value: string }>;

    constructor() {
    }

    ngOnInit() {

        this.types = this.product.solution && this.product.solution.types ? this._convertToDictionary() : [];

    }

    private _convertToDictionary() {
        return this.product.solution.types.map((type: SolutionType) => {
            const keyEnum = Object.keys(SolutionType).find(key => SolutionType[key] === type);
            return {key: keyEnum, value: type};
        });
    }


    showModal(): void {
        this.isModalVisible = true;
    }

    get benifts() {
        let benefitString = '';

        if (this.product.solution && this.product.solution.benefits) {
            this.product.solution.benefits.forEach((benefit, i) => {
                if( i< this.product.solution.benefits.length -1) {
                    benefitString += '' + benefit + ' - ';
                    return
                }

                benefitString += '' + benefit;
            });
        }
        return benefitString;
    }

    close(): void {
        this.isModalVisible = false;
    }
}
