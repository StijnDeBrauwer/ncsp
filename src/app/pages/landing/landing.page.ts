import {Component, HostListener, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
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
    scrollDown: boolean = true;

    @ViewChild('ourVision', {read: ElementRef}) public vision: ElementRef;
    @ViewChild('whoWeAre', {read: ElementRef}) public whoWeAre: ElementRef;
    @ViewChild('ourApproach', {read: ElementRef}) public approach: ElementRef
    @ViewChild('banner', {read: ElementRef}) public banner: ElementRef;

    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        const scrollPosition = window.pageYOffset;
        if (this.isMobile) {
            return;
        }

        this.scrollDataService.isTransparent = 100 > scrollPosition;
        this.scrollDown = 100 > scrollPosition;

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

    scroll(){
       this.scrollDown ? this.scrollToVision() : this.scrollToTop();
    }

    scrollToTop(){
        this.banner.nativeElement.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'center'});
    }


    public scrollToVision(): void {
        this.vision.nativeElement.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'center'});
    }

    public scrollToWhoWeAre(): void {
        this.whoWeAre.nativeElement.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'center'});
    }

    public scrollToApproach(): void {
        this.approach.nativeElement.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'center'});
    }


}
