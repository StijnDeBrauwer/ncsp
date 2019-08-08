import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild
} from "@angular/core";
import { Product } from "src/app/models/product.model";
import { SolutionType } from "src/app/models/suitable-type.model";
import { SolutionBenefitType } from "src/app/models/solution-benefit-type";

@Component({
  selector: "app-product-detail-mobile",
  templateUrl: "./product-detail-mobile.component.html",
  styleUrls: ["./product-detail-mobile.component.scss"]
})
export class ProductDetailMobileComponent implements OnInit {
  @Input() product: Product;
  types: Array<{ key: string; value: string }>;
  @Output() close: EventEmitter<boolean> = new EventEmitter();
  @ViewChild("slideshow") slideshow: any;

  constructor() {}

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

  get imageSources() {
    if (!this.product.media || !this.product.media.length) {
      return ["../../../../../assets/images/people.jpg"];
    }

    return this.product.media.map(string => {
      return "../../../../../assets/images/product/" + string;
    });
  }

  swipeLeft() {
    this.slideshow.onSlide(-1); // previous slide
  }
  swipeRight() {
    this.slideshow.onSlide(1);
  }

  ngOnInit() {
    this.types =
      this.product.solution && this.product.solution.types
        ? this._convertToDictionary()
        : [];
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

  getTextByBenefit(solutionBenefit) {
    switch (solutionBenefit.type) {
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
    switch (solutionBenefit.type) {
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

  get solutionBenefits() {
    const {
      solution: { benefits }
    } = this.product;
    return benefits;
  }
}
