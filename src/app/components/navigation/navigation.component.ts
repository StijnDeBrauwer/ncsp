import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ContactPage} from '../../pages/company/contact/contact.page';
import {EventsPage} from '../../pages/company/events/events.page';
import {AboutUsPage} from '../../pages/company/about-us/about-us.page';
import {OurCompanyComponent} from '../../pages/company/our-company/our-company.component';


@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    animations: [
        trigger('scroll', [
            state('hide', style({backgroundColor: 'transparent', height: '100px'})),
            state('show', style({backgroundColor: '#ffffff', height: '75px'})),
            transition('hide <=> show', animate('50ms')),
        ]),
        trigger('logoScroll', [
            state('small', style({height: '75px', width: '75px'})),
            state('big', style({height: '100px', width: '100px'})),
            transition('small <=> big', animate('50ms')),
        ])
    ]
})
export class NavigationComponent implements OnInit {

    navOpen = false;
    subMenuOpen = false;
    navbarState = 'hide';
    logoState = 'big';

    links: Array<{ text: string, path: string, children: any[] }> = [];


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

    constructor(private router: Router, public el: ElementRef) {

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
        // this.router.config.unshift(
        //     {
        //         path: 'contact',
        //         component: ContactPage
        //     },
        //     {
        //         path: 'events',
        //         component: EventsPage
        //     },
        //     {
        //         path: 'about',
        //         component: AboutUsPage
        //     }
        // );
        //
        //
        // this.links.push(
        //     {text: 'Events', path: 'events'},
        //     {text: 'About Us', path: 'about'},
        //     {text: 'Contact', path: 'contact'}
        // );

    }

    ngOnInit() {

    }

    navigate() {
        this.navOpen = false;
    }

    moreOptions() {

    }

    toggle() {
        this.navOpen = !this.navOpen;
    }

    toggleSubMenu() {
        this.subMenuOpen = !this.subMenuOpen;
    }

}
