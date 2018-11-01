import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-slide-side-navigation',
    templateUrl: './slide-side-navigation.component.html',
    styleUrls: ['./slide-side-navigation.component.scss']
})
export class SlideSideNavigationComponent implements OnInit {

    open: boolean = false;
    constructor() {
    }

    ngOnInit() {
    }

    toggle() {
        this.open = !this.open;
    }


}
