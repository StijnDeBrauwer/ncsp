import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ContactPage} from '../../pages/company/contact/contact.page';
import {EventsPage} from '../../pages/company/events/events.page';
import {AboutUsPage} from '../../pages/company/about-us/about-us.page';
import {OurCompanyComponent} from '../../pages/company/our-company/our-company.component';
import {ResponsiveService} from '../../services/responsive/responsive.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

    navOpen = false;
    subMenuOpen = false;
    chosenLink: { text: string, path: string, children: any[] };
    links: Array<{ text: string, path: string, children: any[] }> = [];
    isMobile: boolean;

    constructor(private router: Router, public el: ElementRef, private responsiveService: ResponsiveService) {

        this.responsiveService.getMobileStatus().subscribe(isMobile => {
            console.log(isMobile);
            this.isMobile = isMobile;

        });

        this.router.config.push(
            {
                path: 'company',
                component: OurCompanyComponent,
                children: [
                    {path: '', redirectTo: 'company', pathMatch: 'full'},
                    {path: 'about', component: AboutUsPage},
                    {path: 'contact', component: ContactPage}
                ]
            },
        );

        this.links.push(
            {
                text: 'OUR COMPANY', path: undefined, children: [
                    {text: 'ABOUT US', path: 'about'},
                    {text: 'CONTACT US', path: 'contact'},
                ]
            }
        );
    }

    ngOnInit() {
        this.responsiveService.checkWidth();
    }

    onResize() {
        this.responsiveService.checkWidth();
    }

    navigate() {
        this.navOpen = false;
        this.subMenuOpen = false;
    }

    toggle() {
        this.navOpen = !this.navOpen;
        this.subMenuOpen = false;
    }

    toggleSubMenu(link) {
        this.chosenLink = link;
        this.subMenuOpen = !this.subMenuOpen;
        console.log(this.subMenuOpen);
    }

    chosenLinkExists() {
        return this.links.includes(this.chosenLink);
    }

}


/**
 navbarState = 'hide';
 logoState = 'big';
 host HostListener:
 @HostListener('window:scroll', ['$event'])
 checkScroll() {
      const scrollPosition = window.pageYOffset;

      if (!this.navOpen) {
          if (50 > scrollPosition) {
              this.logoState = 'big';
              this.navbarState = 'hide';

          } else {
              this.navbarState = 'show';
              this.logoState = 'small';
              // console.log('show');
          }
      }

  }

 //animations
 animations: [
 trigger('scroll', [
 state('hide', style({backgroundColor: 'transparent', height: '100px'})),
 state('show', style({backgroundColor: '#ffffff', height: '75px'})),
 transition('hide <=> show', animate('50ms')),
 ]),
 trigger('logoScroll', [
 state('small', style({height: '100px', width: '100px'})),
 state('big', style({height: '125px', width: '125px'})),
 transition('small <=> big', animate('50ms')),
 ])
 ]

 */
