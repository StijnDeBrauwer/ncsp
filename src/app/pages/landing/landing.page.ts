import { Component, HostListener, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ScrollDataService } from '../../services/scroll/scroll-data.service';
import { ScrollModel } from '../../models/scroll.model';
import { ResponsiveService } from '../../services/responsive/responsive.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss']
})
export class LandingPage implements OnInit, AfterViewInit, OnDestroy {

  private scrollData: ScrollModel;
  scrollDataSubject: any;

  isMobile: boolean;
  navBarState = 'hide';
  logoPath: string;


  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset;
    if (this.isMobile || this.scrollData.subMenuOpen) {
      this.scrollDataService.navBarState = 'show';
      this.scrollDataService.logoPath = this.scrollDataService.logoShowPath;
      return;
    }

    if (100 > scrollPosition) {
      this.scrollDataService.navBarState = 'hide';
      this.scrollDataService.logoPath = this.scrollDataService.logoHidePath;
    } else {
      this.scrollDataService.navBarState = 'show';
      this.scrollDataService.logoPath = this.scrollDataService.logoShowPath;
    }

  }

  constructor(private scrollDataService: ScrollDataService, private responsiveService: ResponsiveService) {
  }

  ngOnInit() {
    this.responsiveService.getMobileStatus().subscribe(isMobile => {
      this.isMobile = isMobile;
    });

  }

  ngAfterViewInit(){
      this.scrollDataSubject = this.scrollDataService.scrollDataSubject.subscribe(scrollData => {
          if (scrollData) {
              this.scrollData = scrollData;
          }
      });
      this.checkScroll();
  }

  

  ngOnDestroy() {
  }


}
