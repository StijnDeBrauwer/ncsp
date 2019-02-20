import {Component, OnInit, OnDestroy} from '@angular/core';
import {LinkModel} from '../../../models/link.model';
import {routes} from 'src/app/modules/router-paths';
import {TranslateService} from '@ngx-translate/core';
import {Language} from '../../../models/language.model';


@Component({
    selector: 'app-mobile-navigation',
    templateUrl: './mobile-navigation.component.html',
    styleUrls: ['./mobile-navigation.component.scss'],
})
export class MobileNavigationComponent implements OnInit, OnDestroy {
    navOpen = false;
    subMenuOpen = false;
    links: Array<LinkModel> = [];
    logoPath: string;
    chosenLink: LinkModel;
    currentLanguage;

    constructor(private translateService: TranslateService) {
        this.initRoutes();
        this.logoPath = '../../../../assets/images/logo.png';
        this.currentLanguage = this.translateService.getDefaultLang();
    }

    ngOnInit() {
    }

    changeTranslation(key: string) {
        this.translateService.use(key);
        this.translateService.setDefaultLang(key);
        this.currentLanguage = key;
    }

    ngOnDestroy() {

    }

    initRoutes() {
        this.links = routes;
    }

    navigate() {
        this.navOpen = false;
        this.subMenuOpen = false;
    }

    toggle() {
        this.navOpen = !this.navOpen;
        this.subMenuOpen = false;
    }

    toggleSubMenu(link: LinkModel) {
        this.chosenLink = link;
        this.subMenuOpen = !this.subMenuOpen;
    }
}
