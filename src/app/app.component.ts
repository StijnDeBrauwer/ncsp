import { Component, OnInit, HostListener, AfterViewInit, OnDestroy } from '@angular/core';
import { ResponsiveService } from './services/responsive/responsive.service';
import {TranslateService} from '@ngx-translate/core';
import { Router, RoutesRecognized } from '@angular/router';

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

  constructor(private responsiveService: ResponsiveService,
    translate: TranslateService,
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

  ngOnInit() {

  }

  ngOnDestroy() {
    if (this._responsiveSubscription) {
      this._responsiveSubscription.unsubscribe();
    }
  }



  onResize() {
    this.responsiveService.checkWidth();
  }


}
