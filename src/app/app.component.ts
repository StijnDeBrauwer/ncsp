import { Component, OnInit, HostListener, AfterViewInit, OnDestroy } from '@angular/core';
import { ResponsiveService } from './services/responsive/responsive.service';

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

  constructor(private responsiveService: ResponsiveService) {

    this._responsiveSubscription = this.responsiveService.getMobileStatus().subscribe(isMobile => {
      this.isMobile = isMobile;
    });
    this.onResize();
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
