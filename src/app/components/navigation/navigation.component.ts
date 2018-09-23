import {Component, OnInit, OnDestroy} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {LinkModel} from '../../models/link.model';
import {ScrollDataService} from '../../services/scroll/scroll-data.service';
import {ScrollModel} from '../../models/scroll.model';
import {ResponsiveService} from '../../services/responsive/responsive.service';
import {Router, NavigationEnd} from '@angular/router';


@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    animations: [
        trigger('ulScroll', [
            state('hide', style({color: '#FFFFFF'})),
            state('show', style({color: '#000000', fontWeight: 'bolder'})),
            transition('hide => show', animate('100ms')),
            transition('show => hide', animate('100ms')),
        ]),
        trigger('scroll', [
            state('hide', style({backgroundColor: 'transparent', boxShadow: 'none'})),
            state('show', style({backgroundColor: '#FFFFFF'})),
            transition('hide => show', animate('100ms')),
            transition('show => hide', animate('100ms')),

        ]),

    ]
})
export class NavigationComponent implements OnInit, OnDestroy {
    navOpen = false;
    subMenuOpen = false;
    prevLink: LinkModel;
    chosenLink: LinkModel;
    links: Array<LinkModel> = [];
    isMobile: boolean;

    logoPath: string;
    navbarState: string;
    navBarStateSubject: any;
    logoPathStateSubject: any;

    constructor(private router: Router, private scrollService: ScrollDataService, private responsiveService: ResponsiveService) {

        this.responsiveService.getMobileStatus().subscribe(isMobile => {
            this.isMobile = isMobile;
        });

        this.router.events.subscribe(event => {
           if(event instanceof NavigationEnd){
               if(event.url === '/home'){
                   this.initSubscribers();
               }else{
                   this.destorySubscribers();
                   this.navbarState = 'show';
                   this.logoPath = '../../../assets/images/logo.png';
               }
           }
        });

        this.initRoutes();
    }

    ngOnInit() {
    }

    ngOnDestroy(){
        this.destorySubscribers();
    }

    initSubscribers(){
        this.navBarStateSubject = this.scrollService.navBarStateSubject.subscribe(navState => {
            if(navState){
                this.navbarState = navState;
            }
            else{
                this.navbarState = 'show';
                this.logoPath = this.scrollService.logoShowPath;
            }
        });

        this.logoPathStateSubject = this.scrollService.logoPathSubject.subscribe(logoPath => {
            if(logoPath){
                this.logoPath = logoPath;
            }
        });
    }

    destorySubscribers(){
        if(this.navBarStateSubject){
            this.navBarStateSubject.unsubscribe();
        }

        if(this.logoPathStateSubject){
            this.logoPathStateSubject.unsubscribe();
        }
    }

    initRoutes() {
        this.links.push(

            new LinkModel('Our Company', undefined, [
                {text: 'About Us', path: 'company/about'},
                {text: 'Contact Us', path: 'company/contact'},]
            ),
            new LinkModel('Our Approach', undefined, [
                {text: 'Our Mission', path: 'approach/mission'},
                {text: 'How do we proceed?', path: 'approach/proceeds'},]
            )
        );
    }

    changeSelectDataModel() {
        console.log(this.subMenuOpen);
        this.scrollService.scrollData = new ScrollModel(this.subMenuOpen, this.navOpen);
    }

    navigate() {
        this.navOpen = false;
        this.subMenuOpen = false;
        this.changeSelectDataModel();
    }

    toggle() {
        this.navOpen = !this.navOpen;
        this.subMenuOpen = false;
        this.changeSelectDataModel();
    }

    toggleSubMenu(link) {
        if (this.prevLink === link || !this.prevLink) {
            this.subMenuOpen = !this.subMenuOpen;
        }
        this.navbarState = 'show';
        this.logoPath = '../../../assets/images/logo.png';
        this.prevLink = link;
        this.chosenLink = link;
        this.changeSelectDataModel();
    }

}

