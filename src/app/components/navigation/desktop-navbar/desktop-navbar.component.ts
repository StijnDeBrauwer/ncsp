import {Component, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {LinkModel} from '../../../models/link.model';
import {ScrollDataService} from '../../../services/scroll/scroll-data.service';
import {ScrollModel} from '../../../models/scroll.model';
import {Router, NavigationEnd, ActivatedRoute, NavigationStart} from '@angular/router';
import {routes} from 'src/app/modules/router-paths';
import {Language} from '../../../models/language.model';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-desktop-navbar',
    templateUrl: './desktop-navbar.component.html',
    styleUrls: ['./desktop-navbar.component.scss'],
    animations: [
        trigger('scroll', [
            state('hide', style({backgroundColor: 'transparent', color: '#FFFFFF', boxShadow: 'none'})),
            state('show', style({backgroundColor: '#FFFFFF', color: '#000000', fontWeight: 'bolder'})),
            transition('hide => show', animate('100ms')),
            transition('show => hide', animate('100ms'))
        ])
    ]
})

export class DesktopNavbarComponent implements OnInit, AfterViewInit, OnDestroy {
    //whether the submenu has to be open or not
    subMenuOpen = false;
    //is tracked because we have to know which link the user choose to close the submenu
    chosenLink: LinkModel;
    //is an array of linkes defined in /src/app/modules/router-paths
    links: Array<LinkModel> = [];
    //whether the nav should be transparent
    isTransparent: boolean;
    //the path to the logo (we have a white or a colored logo)
    logoPath: string;
    //variable to keep track of the animations
    navbarState: string;


    //language picker sub menu
    languagePickerOpen: boolean = false;

    languages: Array<Language>;

    //current Language
    selectedLanguage: Language;



    readonly logoShowPath = '../../../../assets/images/logo.png';
    readonly logoHidePath = '../../../../assets/images/logo_white.png';

    isTransparentSubject: any;
    isHomepageSubject: any;

    constructor(private scrollService: ScrollDataService, private translateService: TranslateService) {
        this.navbarState = 'show';

        this.languages = [ new Language("en", "English"), new Language("fr", "Français")];
        this.selectedLanguage = this.languages[0];

    }

    ngOnInit() {
        this.initRoutes();
    }

    ngAfterViewInit() {
        //check if the landing page called on init
        this.isHomepageSubject = this.scrollService.homePageSubject.subscribe(isHomepage => {
            if (isHomepage) {
                this.initSubscribers();
            } else {
               setTimeout(() => this.isTransparent = false, 0);
            }
        });

    }

    openLanguagePicker(){
        if(this.subMenuOpen){
            this.subMenuOpen = false;
        }
        this.scrollService.isTransparent = false;

        this.languagePickerOpen = !this.languagePickerOpen;
    }

    destroySubscribers() {
        if (this.isTransparentSubject) this.isTransparentSubject.unsubscribe();
        if (this.isHomepageSubject) this.isHomepageSubject.unsubscribe();
    }

    ngOnDestroy() {
        this.destroySubscribers();
    }

    changeLanguage(language: Language) {
        this.translateService.use(language.key);
        this.translateService.setDefaultLang(language.key);
        this.selectedLanguage = language;
    }


    initSubscribers() {
        this.isTransparentSubject = this.scrollService.transparentSubject.subscribe(isTransparent => {
            //set timeout because of ExpressionChangedAfterItHasBeenCheckedError, see https://github.com/angular/angular/issues/17572
            setTimeout(() => this.isTransparent = isTransparent,0);

            if (this.isTransparent) {
                this.navbarState = 'hide';
                this.logoPath = this.logoHidePath;
            } else {
                this.navbarState = 'show';
                this.logoPath = this.logoShowPath;
            }
        });
    }

    initRoutes() {
        this.links = routes;
    }

    navigate() {
        this.subMenuOpen = false;
        this.chosenLink = null;
    }

    toggleSubMenu(link: LinkModel) {

        this.scrollService.isTransparent = false;
        //if the chosen link is the current link (this means the user has clicked twice on the link) we have to close the submenu
        if (this.chosenLink === link) {
            this.subMenuOpen = false;
            this.chosenLink = null;
        } else {
            this.subMenuOpen = !!link.children;
            this.chosenLink = link;
        }


    }

}
