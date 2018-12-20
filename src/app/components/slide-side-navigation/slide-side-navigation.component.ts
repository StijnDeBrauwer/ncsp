import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-slide-side-navigation',
    templateUrl: './slide-side-navigation.component.html',
    styleUrls: ['./slide-side-navigation.component.scss']
})
export class SlideSideNavigationComponent implements OnInit {

    @Input('isOpen') open: boolean;
    @Output() onOpenStateChange: EventEmitter<boolean> = new EventEmitter<boolean>()
    constructor() {
    }

    ngOnInit() {
    }

    toggle() {
        this.open = !this.open;
        this.onOpenStateChange.emit(this.open);
    }


}
