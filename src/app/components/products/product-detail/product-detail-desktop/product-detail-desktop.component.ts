import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "src/app/models/product.model";
import { SolutionType } from "../../../../models/suitable-type.model";
import { SolutionBenefitType } from "src/app/models/solution-benefit-type";

@Component({
  selector: "app-product-detail-desktop",
  templateUrl: "./product-detail-desktop.component.html",
  styleUrls: ["./product-detail-desktop.component.scss"]
})
export class ProductDetailDesktopComponent implements OnInit {
  @Input() product: Product;
  types: Array<{ key: string; value: string }>;
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.types =
      this.product.solution && this.product.solution.types
        ? this._convertToDictionary()
        : [];
  }

  get solutionBenefits() {
    const {
      solution: { benefits }
    } = this.product;
    return benefits;
  }

  private _convertToDictionary() {
    return this.product.solution.types.map((type: SolutionType) => {
      const keyEnum = Object.keys(SolutionType).find(
        key => SolutionType[key] === type
      );
      return { key: keyEnum, value: type };
    });
  }

  closeModal(): void {
    this.close.emit(true);
  }

  get color() {
    switch (this.types[0].value) {
      case SolutionType.BOTTLE_WASHERS: {
        return "#07DDEC";
      }
      case SolutionType.FILLERS: {
        return "#EC6407";
      }
      case SolutionType.OTHERS: {
        return "#2FEF1F";
      }
      default:
        return "#EC6407";
    }
  }

  getTextByBenefit(solutionBenefit) {
    switch (solutionBenefit) {
      case SolutionBenefitType.EFFICIENCY:
        return "EF";
      case SolutionBenefitType.SAFETY:
        return "SA";
      case SolutionBenefitType.COST_SAVING:
        return "CS";
      case SolutionBenefitType.ENERGY_SAVING:
        return "ES";
      case SolutionBenefitType.WATER_SAVING:
        return "WS";
      case SolutionBenefitType.QUALITY_HYGIENE:
        return "QH";
      default:
        return null;
    }
  }

  getColorByBenefit(solutionBenefit) {
    switch (solutionBenefit) {
      case SolutionBenefitType.EFFICIENCY:
        return "orange";
      case SolutionBenefitType.SAFETY:
        return "red";
      case SolutionBenefitType.COST_SAVING:
        return "black";
      case SolutionBenefitType.ENERGY_SAVING:
        return "green";
      case SolutionBenefitType.WATER_SAVING:
        return "blue";
      case SolutionBenefitType.QUALITY_HYGIENE:
        return "brown";
      default:
        return null;
    }
  }
}
