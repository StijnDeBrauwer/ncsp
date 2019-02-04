import { Component, OnInit, HostListener, AfterViewInit, OnDestroy } from '@angular/core';
import { ResponsiveService } from './services/responsive/responsive.service';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

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

  constructor(private responsiveService: ResponsiveService,
    private router: Router, private route: ActivatedRoute , private  translate: TranslateService) {
    this._responsiveSubscription = this.responsiveService.getMobileStatus().subscribe(isMobile => {
      this.isMobile = isMobile;
    });
    this.onResize();
    translate.setDefaultLang('en');
    translate.use('en');
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
