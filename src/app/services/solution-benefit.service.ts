import { Injectable } from '@angular/core';
import { SolutionBefenitType } from '../models/solution-benfit-type';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolutionBenefitService {

  private _benefit: SolutionBefenitType;
   benefitSubject: BehaviorSubject<SolutionBefenitType>

  constructor() { 
    this._benefit = SolutionBefenitType.PERFORMANCE;
    this.benefitSubject = new BehaviorSubject(SolutionBefenitType.PERFORMANCE);
  }

  get benefit(){
    return this._benefit;
  }

  set benefit(benefit: SolutionBefenitType){
    this._benefit = benefit;
    this.benefitSubject.next(this._benefit);
  }


}
