import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Language} from '../../models/language.model';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-language-picker',
    templateUrl: './language-picker.component.html',
    styleUrls: ['./language-picker.component.scss']
})
export class LanguagePickerComponent implements OnInit {
    selectedLanguage: Language;
    languages: Array<Language>;
    @Input() isTransparent: boolean = false;

    constructor(private translateService: TranslateService) {
        this.languages = [ new Language("en", "English"), new Language("fr", "Français")];
        this.selectedLanguage = this.languages[0];
    }

    ngOnInit() {
    }

    changeLanguage(language: Language) {
        this.translateService.use(language.key);
        this.translateService.setDefaultLang(language.key);
        this.selectedLanguage = language;
    }
}
