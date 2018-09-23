export class LinkModel {

    private _text: string;
    private _path: string;
    private _children;

    constructor(text: string, path: string, children) {
        this._text = text;
        this._path = path;
        this._children = children;
    }

    get text() {
        return this._text;
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

    set path(path) {
        this._path = path;
    }

    set children(children) {
        this._children = children;
    }
}