import { Component, OnInit, OnDestroy } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { LinkModel } from '../../../models/link.model';
import { ScrollDataService } from '../../../services/scroll/scroll-data.service';
import { ScrollModel } from '../../../models/scroll.model';
import { ResponsiveService } from '../../../services/responsive/responsive.service';
import { Router, NavigationEnd } from '@angular/router';
import { routes } from 'src/app/modules/router-paths';

@Component({
  selector: 'app-desktop-navbar',
  templateUrl: './desktop-navbar.component.html',
  styleUrls: ['./desktop-navbar.component.scss'],
  animations: [
    trigger('scroll', [
      state('hide', style({ backgroundColor: 'transparent', color: '#FFFFFF', boxShadow: 'none' })),
      state('show', style({ backgroundColor: '#FFFFFF', color: '#000000', fontWeight: 'bolder' })),
      transition('hide => show', animate('100ms')),
      transition('show => hide', animate('100ms'))
    ])
  ]
})

export class DesktopNavbarComponent implements OnInit, OnDestroy {
  subMenuOpen = false;
  prevLink: LinkModel;
  chosenLink: LinkModel;
  links: Array<LinkModel> = [];

  logoPath: string;
  navbarState: string;
  navBarStateSubject: any;
  logoPathStateSubject: any;
  navStateTemp: string;

  constructor(private router: Router, private scrollService: ScrollDataService) {
    this.navbarState = 'show';
    this.logoPath = this.scrollService.logoShowPath;

  }

  ngOnInit() {
    this.initRoutes();
    this.checkRoute();
  }


  ngOnDestroy() {
    this.destorySubscribers();
  }

  checkRoute() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/home') {
          this.initSubscribers();
        } else {
          this.destorySubscribers();
        }
      }
    });
  }

  initSubscribers() {
    this.navBarStateSubject = this.scrollService.navBarStateSubject.subscribe(navState => {
      if (navState) {
        setTimeout(() => this.navbarState = navState, 0);
      }
    });

    this.logoPathStateSubject = this.scrollService.logoPathSubject.subscribe(logoPath => {
      if (logoPath) {
        setTimeout(() => this.logoPath = logoPath, 0);
      }
    });
  }

  destorySubscribers() {
    if (this.navBarStateSubject) {
      this.navBarStateSubject.unsubscribe();
    }

    if (this.logoPathStateSubject) {
      this.logoPathStateSubject.unsubscribe();
    }
  }

  initRoutes() {
    this.links = routes;
  }

  changeSelectDataModel() {
    this.scrollService.scrollData = new ScrollModel(this.subMenuOpen);
  }

  navigate() {
    this.subMenuOpen = false;
    this.changeSelectDataModel();
  }

  toggleSubMenu(link) {
    if (!this.prevLink || this.prevLink === link && !link.path && link.children) {
      this.subMenuOpen = !this.subMenuOpen;
    }
    this.navbarState = 'show';
    this.logoPath = this.scrollService.logoShowPath;
    this.prevLink = link;
    this.chosenLink = link;
    this.changeSelectDataModel();
  }

}
