import { Injectable } from "@angular/core";
import { Product } from "../../models/product.model";
import { Solution } from "../../models/solution.model";
import { SolutionType } from "../../models/suitable-type.model";
import { SolutionBenefitType } from "../../models/solution-benefit-type";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  products: Array<Product>;

  constructor() {
    this.products = [
      new Product(
        "Complete Infeed table",
        new Solution(
          [SolutionType.BOTTLE_WASHERS],
          ["all brands", "single end and double end"],
          [
            SolutionBenefitType.EFFICIENCY,
            SolutionBenefitType.SAFETY,
            SolutionBenefitType.COST_SAVING
          ]
        ),
        "Complete infeed table in replacement of existing infeed table. Stainless steel structure. Belt driven rotation of infeed beam for reduced noise and low maintenance.  Double infeed in one single rotation for gentle bottle handling and reduced wear.  Operator safety with pneumatic torque limitation safety system, with emergency machine stop and automatic retraction. Easy and quick maintenance.",
        [
          "Bottle pocket size: from 72 mm to 110 mm.",
          "Max machine width: 7000 mm. ",
          "Drive system: by chain/cardanshaft or with synchronized electric motor. "
        ],
        ["cit_1.jpg", "cit_2.jpg", "cit_3.jpg"]
      ),
      new Product(
        "Complete discharge table",
        new Solution(
          [SolutionType.BOTTLE_WASHERS],
          ["all brands", "single end and double end"],
          [
            SolutionBenefitType.EFFICIENCY,
            SolutionBenefitType.SAFETY,
            SolutionBenefitType.COST_SAVING
          ]
        ),
        "Complete discharge system  in replacement of existing discharge. Stainless steel structure. Fluid movement for gentle bottle handling. Parts that touch bottle in plastic to avoid bottle damage. Easy to replace discharge fingers. Easy to adjust.  Operator safety with pneumatic torque limitation safety system, with emergency machine stop and automatic retraction. Easy and quick maintenance.",
        [
          "Bottle pocket size: from 72 mm to 110 mm.",
          "Max machine width: 7000 mm.",
          " Drive system: by chain/cardanshaft or with synchronized electric motor. "
        ],
        ["cit_1.jpg", "cit_2.jpg", "cit_3.jpg"]
      ),
      new Product(
        "Automatic movable screen above discharge",
        new Solution(
          [SolutionType.BOTTLE_WASHERS],
          ["all brands", "double end"],
          [
            SolutionBenefitType.QUALITY_HYGIENE,
            SolutionBenefitType.SAFETY,
            SolutionBenefitType.COST_SAVING
          ]
        ),
        "Automatic movable screen which allows easy access to zone above discharge system for thorough cleaning. The bottles coming from the final rinse are clean and disinfected in this zone. Hence the cleanliness of this zone is of the utmost importance. Many older type bottle washers don't allow easy access to this zone, allowing dirt to pile up and bacteria to grow.",
        [
          "Stainless steel frame with tempered glass.",
          " Belt driven lifting system.",
          " Maximum machine width: 7000 mm.",
          " Operation possible from operzator panel. "
        ],
        ["ams_1.jpg"]
      ),
      new Product(
        "Final rinsing section",
        new Solution(
          [SolutionType.BOTTLE_WASHERS],
          ["all brands", "double end"],
          [
            SolutionBenefitType.WATER_SAVING,
            SolutionBenefitType.QUALITY_HYGIENE,
            SolutionBenefitType.SAFETY,
            SolutionBenefitType.COST_SAVING
          ]
        ),
        "The current final rinsing zone is completely removed and replaced by new tanks, filtration system, injection and spray system. The system consists of a fresh water saving injection system followed by 3 cascading tanks with rotating injectors and fixed shower beams. Rounded slanted tanks for easy cleaning. Closed  cylindrical filtration system with easy and safe access for claning. Completely stainless steel structure and tanks. Seamless integration in your machine.",
        [
          "2 or 3 fresh water spraybars.",
          "3 cascading tanks with each 3 or 4 rotating spraybars and 1 or 2 fixed showerbeams. ",
          " Closed filtration system with stainless steel basket sieves. Manual or automatic valve system for cleaning. ",
          " Complete stainless steel construction. ",
          " Optional with fresh water pressure control for reduced pressure in slow speed run. "
        ],
        ["frs_1.jpg", "frs_2.jpg", "frs_3.jpg"]
      ),
      new Product(
        "POST CAUSTIC LOCK",
        new Solution(
          [SolutionType.BOTTLE_WASHERS],
          ["all brands", "double end"],
          [SolutionBenefitType.QUALITY_HYGIENE, SolutionBenefitType.COST_SAVING]
        ),
        "This upgrade consists in adding injection and shower beams just after the last caustic soaking tank, which will spray off the bottles with water from the final rinsing zone. A clever cascade system will also prevent the water from the last soaking tank before the final rinsing zone to heat up due to heat carry over with the bottle carriers.",
        [
          "Additional stainless steel sump",
          "2 additional injection beams and 1 additional showerbeam",
          "1 additional pump and filtration system",
          " Modified cascade system "
        ],
        ["frs_1.jpg", "frs_2.jpg", "frs_3.jpg"]
      ),
      new Product(
        "Label extraction booster",
        new Solution(
          [SolutionType.BOTTLE_WASHERS],
          ["all brands", "double end"],
          [SolutionBenefitType.QUALITY_HYGIENE, SolutionBenefitType.COST_SAVING]
        ),
        "This modification of the inner tanks of your soaking baths will strongly help the system to remove the labels from the bottles towards the label extraction system.",
        [
          "1 or 2 grid plates to be welded each tank equipped with label extraction system"
        ],
        ["leb_1.jpg", "frs_2.jpg", "frs_3.jpg"]
      ),
      new Product(
        "ROTATING INJECTION SYSTEM",
        new Solution(
          [SolutionType.BOTTLE_WASHERS],
          ["all brands", "double end"],
          [
            SolutionBenefitType.WATER_SAVING,
            SolutionBenefitType.ENERGY_SAVING,
            SolutionBenefitType.QUALITY_HYGIENE,
            SolutionBenefitType.COST_SAVING
          ]
        ),
        "",
        ["leb_1.jpg", "frs_2.jpg", "frs_3.jpg"]
      ),
      new Product(
        "WALL INSULATION",
        new Solution(
          [SolutionType.BOTTLE_WASHERS],
          ["all brands", "single end and double end"],
          [SolutionBenefitType.ENERGY_SAVING]
        ),
        "",
        ["cit_1.jpg"]
      ),
      new Product(
        "CAUSTIC FILTRATION IN PRODUCTION",
        new Solution(
          [SolutionType.BOTTLE_WASHERS],
          ["all brands", "single end and double end"],
          [
            SolutionBenefitType.WATER_SAVING,
            SolutionBenefitType.ENERGY_SAVING,
            SolutionBenefitType.QUALITY_HYGIENE,
            SolutionBenefitType.COST_SAVING
          ]
        ),
        "",
        ["cit_1.jpg"]
      ),
      new Product(
        "AUTOMATIC CHEMICAL DOSING SYSTEM",
        new Solution(
          [SolutionType.BOTTLE_WASHERS],
          ["all brands", "single end and double end"],
          [
            SolutionBenefitType.QUALITY_HYGIENE,
            SolutionBenefitType.COST_SAVING,
            SolutionBenefitType.SAFETY
          ]
        ),
        "",
        ["cit_1.jpg"]
      )
    ];
  }

  public getProducts(): Array<Product> {
    return this.products;
  }

  /**
   * EXAMPLE:
   * let filters = {
   * color: ["Blue", "Black"],
   * size: [70, 50]
   * };
   *
   * @param filters
   */
  public multiFilter(filters) {
    const productList = [];

    filters.forEach(filter => {
      const foundProducts = this.products.filter((product: Product) => {
        if (product.solution) {
          if (product.solution.benefits && product.solution.types) {
            return (
              product.solution.benefits.includes(filter) ||
              product.solution.types.includes(filter)
            );
          }

          if (product.solution.benefits) {
            return product.solution.benefits.includes(filter);
          }

          if (product.solution.types) {
            return product.solution.types.includes(filter);
          }
        }

        return false;
      });
      productList.concat(...foundProducts);
    });

    return this.uniqueArray(productList);
  }

  uniqueArray(arrArg) {
    return arrArg.filter((elem, pos, arr) => {
      return arr.indexOf(elem) === pos;
    });
  }
}
