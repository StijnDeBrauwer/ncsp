import {Solution} from './solution.model';

export class Product {
    private _name: string;
    private _solution: Solution;
    private _description: string;
    private _spec: any;
    private _media: Array<any>;


    constructor(name: string, solution: Solution, description: string, spec: any, media?: any) {
        this._name = name;
        this._solution = solution;
        this._description = description;
        this._spec = spec;
        this._media = media;
    }

    get name() {
        return this._name;
    }

    get solution() {
        return this._solution;
    }

    get description() {
        return this._description;
    }

    get spec() {
        return this._spec;
    }

    get media() {
        return this._media;
    }

    set name(name: string ) {
         this._name = name ;
    }

    set solution(solution: Solution) {
         this._solution = solution;
    }

    set description(description: string) {
        this._description = description;
    }

    set spec(spec: any) {
         this._spec = spec;
    }

    set media(media: any ) {
        this._media = media;
    }
}
