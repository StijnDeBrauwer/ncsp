export class Language {
    private _key: string;
    private _language: string;


    constructor(key: string, language: string) {
        this._key = key;
        this._language = language;
    }

    get key(): string {
        return this._key;
    }

    get language(): string {
        return this._language;
    }

    set key(key: string) {
        this._key = key;
    }

    set language(language: string) {
        this._language = language;
    }

    toString = () =>  {
        return this._language;
    }

}
