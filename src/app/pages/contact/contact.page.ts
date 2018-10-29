import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.page.html',
    styleUrls: ['./contact.page.scss']
})
export class ContactPage implements OnInit {

    contactForm: FormGroup;
    disabledSubmitButton: boolean = true;
    optionsSelect: Array<any>;
    @ViewChild('form') formEl;

    constructor() {
        this.contactForm = new FormGroup({
            fromName: new FormControl('', Validators.required),
            fromEmail: new FormControl('', Validators.compose([Validators.required, Validators.email])),
            subject: new FormControl('', Validators.required),
            message: new FormControl('', Validators.required)
        });

    }

    ngOnInit() {
    }

    onSubmit() {
        if (this.contactForm.errors) {
            return;
        }
        const regex = /\r?\n|\r/g;
        const currentText: string = String(this.contactForm.controls.message.value);
        const body = currentText.replace(regex, '%0D%0A');
        console.log(currentText);
        this.formEl.nativeElement.action = "mailto:db_stijn@hotmail.com?subject=" + this.contactForm.controls.subject.value + "&body=Test";
        this.formEl.nativeElement.submit()
    }

}
