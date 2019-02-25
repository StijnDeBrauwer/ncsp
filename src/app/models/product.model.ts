import {Solution} from './solution.model';


export class Product {
    private _name: string;

    private _solution: Solution;
    private _description: string;
    private _spec: Array<string>;
    private _media: Array<any>;


    constructor(name: string, solution?: Solution, description?: string, spec?: Array<string>, media?: any) {
        this._name = name;
        this._solution = solution;
        this._description = description;
        this._spec = spec;
        this._media = media;
    }

    get name(): string {
        return this._name;
    }


    get solution() {
        return this._solution;
    }

    get description() {
        return this._description;
    }

    get spec(): Array<string> {
        return this._spec;
    }

    get specString(): string {
        if (!this.spec || this.spec.length < 1) {
            return '';
        }
        
        let nameList = '<ul>';
        for (let i = 0; i < this.spec.length; i++) {
            nameList += '<li>' + this.spec[i] + '</li>';
        }

        nameList+= '</ul>'

        return nameList;
    }

    get media() {
        return this._media;
    }

    set name(name: string) {
        this._name = name;
    }
    
    set solution(solution: Solution) {
        this._solution = solution;
    }

    set description(description: string) {
        this._description = description;
    }

    set spec(spec: Array<string>) {
        this._spec = spec;
    }

    set media(media: any) {
        this._media = media;
    }
}
