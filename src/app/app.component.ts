import { Component, OnInit, HostListener, Inject, OnDestroy } from '@angular/core';
import { ResponsiveService } from './services/responsive/responsive.service';
import { Router, RoutesRecognized } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PLATFORM_ID, APP_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {

  @HostListener('window:resize', ['$event'])
  checkSize(event) {
    this.onResize();
  }

  private _responsiveSubscription: any;
  isMobile: boolean;
  isAdminMode: boolean;

  constructor(
    private responsiveService: ResponsiveService,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string,
    private translate: TranslateService,
    private router: Router) {

    this._responsiveSubscription = this.responsiveService.getMobileStatus().subscribe(isMobile => {
      this.isMobile = isMobile;
    });

    this.onResize();

    translate.setDefaultLang('en');
    translate.use('en');

    // Check if user is in admin mode
    this.router.events.subscribe((event: any) => {
      if (event instanceof RoutesRecognized) {
        if(event.url.toString().includes("/admin")) {
          return this.isAdminMode = true;
        }
      }
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    if (this._responsiveSubscription) {
      this._responsiveSubscription.unsubscribe();
    }
  }

  onActivate(event: any) {
    if (isPlatformBrowser(this.platformId)) {
      let scrollToTop = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
          window.scrollTo(0, pos - 50); // how far to scroll on each step
        } else {
          window.clearInterval(scrollToTop);
        }
      }, 16);
    }
  }

  onResize() {
    this.responsiveService.checkWidth();
  }


}
