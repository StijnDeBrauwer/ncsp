import { Product } from "./product.model";
import { SolutionType } from "./suitable-type.model";
import { SolutionBenefitType } from "./solution-benefit-type";

export class Solution {
  private _id: Number;
  private _types: Array<SolutionType>;
  private _suitableFor: Array<string>;
  private _benefits: Array<SolutionBenefitType>;

  constructor(
    types: Array<SolutionType>,
    suitableFor: Array<string>,
    benefits: Array<SolutionBenefitType>,
    id?: Number
  ) {
    this._types = types;
    this._suitableFor = suitableFor;
    this._benefits = benefits;
    this._id = id;
  }

  get suitableFor() {
    return this._suitableFor;
  }

  get types() {
    return this._types;
  }

  get benefits() {
    return this._benefits;
  }

  set types(types: Array<SolutionType>) {
    this._types = types;
  }

  set benefits(benefits: Array<SolutionBenefitType>) {
    this._benefits = benefits;
  }

  set suitableFor(suitableFor: Array<string>) {
    this._suitableFor = suitableFor;
  }
}
