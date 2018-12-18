import {Product} from './product.model';
import {SolutionType} from './suitable-type.model';
import {SolutionBefenitType} from './solution-benfit-type';

export class Solution {
    private _id: Number;
    private _name: string;
    private _solutionDescription: string;
    private _types: Array<SolutionType>;
    private _benefits: Array<SolutionBefenitType>;
    private _benefitsDescription: string;

    constructor(name: string, types: Array<SolutionType>, solutionDescription: string,
                benefits: Array<SolutionBefenitType>, benefitDescription: string, id?: Number) {
        this._name = name;
        this._types = types;
        this._solutionDescription = solutionDescription;
        this._benefits = benefits;
        this._benefitsDescription = benefitDescription;
        this._id = id;
    }

    get name() {
        return this._name;
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

    get _benefitDescription() {
        return this._benefitsDescription;
    }

    set name(name: string) {
        this._name = name;
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

    set _benefitDescription(description: string) {
         this._benefitsDescription = description;
    }



}