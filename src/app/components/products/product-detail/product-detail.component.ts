import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Product} from 'src/app/models/product.model';
import {ResponsiveService} from 'src/app/services/responsive/responsive.service';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

    @Input() product: Product;
    isMobile: boolean = true;
    @Output() close: EventEmitter<boolean> = new EventEmitter();

    constructor(private responsiveService: ResponsiveService) {
        this.responsiveService.checkWidth();
        this.responsiveService.getMobileStatus().subscribe(isMobile => {
            this.isMobile = isMobile;
        });
    }

    ngOnInit() {
        this.responsiveService.checkWidth();
    }

    closeModal(): void {
        this.close.emit(true);
    }
}
