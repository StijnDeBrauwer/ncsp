import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {ScrollModel} from '../../models/scroll.model';

@Injectable({
    providedIn: 'root'
})
export class ScrollDataService {

    private _isTransparent: boolean;
    transparentSubject: BehaviorSubject<boolean>;

    private _isHomepage: boolean;
    homePageSubject: BehaviorSubject<boolean>;

    constructor() {
        this._isTransparent = false;
        this.transparentSubject = new BehaviorSubject<boolean>(this._isTransparent);

        this._isHomepage = false;
        this.homePageSubject = new BehaviorSubject<boolean>(this._isHomepage);
    }

    get isTransparent() {
        return this._isTransparent;
    }

    set isTransparent(transparent: boolean) {
        this._isTransparent = transparent;
        this.transparentSubject.next(this._isTransparent);
    }

    get isHomepage() {
        return this._isHomepage;
    }

    set isHomepage(homepage: boolean) {
        this._isHomepage = homepage;
        this.homePageSubject.next(this._isHomepage);
    }


    // private _scrollData: ScrollModel;
    //
    // private _navBarState: string;
    //
    // readonly  logoShowPath = '../../../../assets/images/logo.png';
    // readonly  logoHidePath = '../../../../assets/images/logo_white.png';
    //
    // private _logoPath: string;
    //
    //
    // scrollDataSubject: any;
    // navBarStateSubject: any;
    // logoPathSubject: any;
    //
    //
    // constructor() {
    //     this._logoPath = this.logoShowPath;
    //
    //     this.scrollDataSubject = new BehaviorSubject<ScrollModel>(new ScrollModel(false));
    //     this.navBarStateSubject = new BehaviorSubject<String>(String());
    //     this.logoPathSubject = new BehaviorSubject<String>(String());
    // }
    //
    // get scrollData() {
    //     return this._scrollData;
    // }
    //
    // get navBarState() {
    //     return this._navBarState;
    // }
    //
    // get logoPath() {
    //     return this._logoPath;
    // }
    //
    // set scrollData(scrollData) {
    //     this._scrollData = scrollData;
    //     this.scrollDataSubject.next(this._scrollData);
    // }
    //
    // set navBarState(navBarState) {
    //     this._navBarState = navBarState;
    //     this.navBarStateSubject.next(this._navBarState);
    // }
    //
    // set logoPath(logoPath) {
    //     this._logoPath = logoPath;
    //     this.logoPathSubject.next(this._logoPath);
    // }

}
