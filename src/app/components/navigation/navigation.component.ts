import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ContactPage} from '../../pages/contact/contact.page';
import {EventsPage} from '../../pages/events/events.page';
import {AboutUsPage} from '../../pages/about-us/about-us.page';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

    navOpen = true;

    links: Array<{ text: string, path: string }> = [];

    constructor(private router: Router) {

        this.router.config.unshift(
            {
                path: 'contact',
                component: ContactPage
            },
            {
                path: 'events',
                component: EventsPage
            },
            {
                path: 'about',
                component: AboutUsPage
            }
        );

        this.links.push(
            {text: 'Events', path: 'events'},
            {text: 'About Us', path: 'about'},
            {text: 'Contact', path: 'contact'}
        );
    }

    ngOnInit() {
    }

    toggle() {
        console.log('toggled');
        this.navOpen = !this.navOpen;
        console.log(`${this.navOpen}`);
    }

}
