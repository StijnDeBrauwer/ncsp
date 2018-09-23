import {Component, OnInit, OnChanges, SimpleChanges, ElementRef, ViewChild} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {AboutUsPage} from './about-us/about-us.page';
import {ContactPage} from './contact/contact.page';

@Component({
    selector: 'app-our-company',
    templateUrl: './our-company.component.html',
    styleUrls: ['./our-company.component.scss']
})
export class OurCompanyComponent implements OnInit {

    @ViewChild(AboutUsPage) aboutUsPage;
    @ViewChild(ContactPage) contactPage;

    constructor(private router: Router) {
        // this.router.events.subscribe((event) => {
        //        if(event instanceof NavigationEnd){
        //            this.scroll(event.url)
        //        }
        //     });
    }

    ngOnInit() {
    }

    scroll(el) {

    }


}
