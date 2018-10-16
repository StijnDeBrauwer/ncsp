import { Component, OnInit, OnDestroy } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { LinkModel } from '../../../models/link.model';
import { ScrollDataService } from '../../../services/scroll/scroll-data.service';
import { ScrollModel } from '../../../models/scroll.model';
import { ResponsiveService } from '../../../services/responsive/responsive.service';
import { Router, NavigationEnd } from '@angular/router';


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

  constructor() {
    this.initRoutes();
    this.logoPath = '../../../../assets/images/logo.png';
  }

  ngOnInit() {
  }

  ngOnDestroy() {

  }
  initRoutes() {
    this.links.push(
      new LinkModel('Our Company', undefined, [
        { text: 'About Us', path: 'company/about' },
        { text: 'Contact Us', path: 'company/our-contact-page' },], "business_center"
      ),
      new LinkModel('Our Approach', undefined, [
        { text: 'Our Mission', path: 'our-approach-section/mission' },
        { text: 'How do we proceed?', path: 'our-approach-section/proceeds' },],
          "visibility"
      )
    );
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
