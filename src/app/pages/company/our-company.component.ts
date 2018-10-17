import {Component, OnInit, AfterViewInit, SimpleChanges, ElementRef, ViewChild} from '@angular/core';
import {Router} from '@angular/router';


@Component({
    selector: 'app-our-company',
    templateUrl: './our-company.component.html',
    styleUrls: ['./our-company.component.scss']
})
export class OurCompanyPage implements OnInit, AfterViewInit {

    @ViewChild('ourVision', {read: ElementRef}) public vision: ElementRef;
    @ViewChild('whoWeAre', {read: ElementRef}) public whoWeAre: ElementRef;
    @ViewChild('ourApproach', {read: ElementRef}) public approach: ElementRef;


    constructor(private route: Router) {

    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
        this.scrollToElement(this.route.url);
    }

    public scrollToVision(): void {
        this.vision.nativeElement.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'start'});
    }

    public scrollToWhoWeAre(): void {
        this.whoWeAre.nativeElement.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'start'});
    }

    public scrollToApproach(): void {
        this.approach.nativeElement.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'start'});
    }

    scrollToElement(child) {
        switch (child) {
            case '/company/vision': {
                try {
                    this.scrollToVision();
                } catch (err) {
                }
                break;
            }
            case '/company/who-we-are': {
                try {
                    this.scrollToWhoWeAre();
                } catch (err) {
                }
                break;
            }
            case '/company/approach': {
                try {
                    this.scrollToApproach();
                } catch (err) {
                }
                break;
            }
        }
    }


}
