import {Product} from './product.model';
import {SolutionType} from './suitable-type.model';
import {SolutionBefenitType} from './solution-benfit-type';

export class Solution {
    private _id: Number;
    private _solutionDescription: string;
    private _types: Array<SolutionType>;
    private _benefits: Array<SolutionBefenitType>;
    private _benefitsDescription: string;

    constructor(types: Array<SolutionType>, solutionDescription?: string,
                benefits?: Array<SolutionBefenitType>, benefitDescription?: string, id?: Number) {
        this._types = types;
        this._solutionDescription = solutionDescription;
        this._benefits = benefits;
        this._benefitsDescription = benefitDescription;
        this._id = id;
    }


    get solutionDescription() {
        return this._solutionDescription;
    }

    get types() {
        return this._types;
    }

    get benefits() {
        return this._benefits;
    }

    get benefitDescription() {
        return this._benefitsDescription;
    }


    set solutionDescription(description: string) {
        this._solutionDescription = description;
    }

    set types(types: Array<SolutionType>) {
        this._types = types;
    }

    set benefits(benefits: Array<SolutionBefenitType>) {
       this._benefits = benefits;
    }

    set benefitDescription(description: string) {
         this._benefitsDescription = description;
    }



}