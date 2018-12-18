import {Product} from './product.model';
import {SolutionType} from './suitable-type.model';
import {SolutionBefenitType} from './solution-benfit-type';

export class Solution {
    private _id: Number;
    private _name: string;
    private _solutionDescription: string;
    private _type: SolutionType;
    private _benefits: Array<SolutionBefenitType>;
    private _benefitsDescription: string;

    constructor(name: string, type: SolutionType, solutionDescription: string,
                benefits: Array<SolutionBefenitType>, benefitDescription: string, id?: Number) {
        this._name = name;
        this._type = type;
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

    get type() {
        return this._type;
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

    set type(type: SolutionType) {
        this._type = type;
    }

    set benefits(benefits: Array<SolutionBefenitType>) {
       this._benefits = benefits;
    }

    set _benefitDescription(description: string) {
         this._benefitsDescription = description;
    }



}