import {Component, HostListener, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import {ScrollDataService} from '../../services/scroll/scroll-data.service';
import {ScrollModel} from '../../models/scroll.model';
import {ResponsiveService} from '../../services/responsive/responsive.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.page.html',
    styleUrls: ['./landing.page.scss']
})
export class LandingPage implements OnInit, AfterViewInit,OnDestroy {
    isMobile: boolean;


    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        const scrollPosition = window.pageYOffset;
        if (this.isMobile) {
            return;
        }

        this.scrollDataService.isTransparent = 100 > scrollPosition;

    }

    constructor(private scrollDataService: ScrollDataService, private responsiveService: ResponsiveService) {
        this.responsiveService.getMobileStatus().subscribe(isMobile => {
            this.isMobile = isMobile;
        });
    }

    ngOnInit() {
        this.scrollDataService.isHomepage = true;

    }
    ngAfterViewInit(){
        this.checkScroll();
    }


    ngOnDestroy() {
        this.scrollDataService.isHomepage = false;
    }


}
