export class LinkModel {

    private _text: string;
    private _path: string;
    private _materialLogoName: string;
    private _children;

    constructor(text: string, path?: string, children?: Array<LinkModel>, materialLogoName?: string) {
        this._text = text;

        if (materialLogoName) {
            this._materialLogoName = materialLogoName;
        }
        if(path){
            this._path = path;
        }

        if(children){
            this._children = children;
        }

    }

    get text() {
        return this._text;
    }

    get materialLogoName() {
        return this._materialLogoName ? this._materialLogoName : '';
    }

    get path() {
        return this._path;
    }

    get children() {
        return this._children;
    }

    set text(text) {
        this._text = text;
    }

    set materialLogoName(materialLogoName: string) {
        this._materialLogoName = materialLogoName;
    }

    set path(path) {
        this._path = path;
    }

    set children(children) {
        this._children = children;
    }
}