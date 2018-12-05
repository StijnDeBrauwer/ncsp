import {Component, Output, EventEmitter, Input, OnInit} from '@angular/core';

@Component({
    selector: 'scroll-button',
    templateUrl: './scroll-button.component.html',
    styleUrls: ['./scroll-button.component.scss']
})
export class ScrollButtonComponent implements OnInit {

    @Input() scrollDown: boolean;
    @Output() onScroll = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    scroll() {
        this.onScroll.emit();
    }

}
