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
            { type: SolutionBenefitType.EFFICIENCY, description: 'A new infeed table will restore a reliable loading of the bottles into the bottle washer and reduce stops due to falling bottles or jams. The gentle bottle handling will avoid damaging the bottles.' },
            { type: SolutionBenefitType.SAFETY, description: 'All our assemblies are fully tested in our workshop and comply with all current safety standards as well for operator safety as for product safety.' },
            { type: SolutionBenefitType.COST_SAVING, description: 'Short installation time. Better ecomical solution when current system shows structural defects. Guaranteed availability of spare parts. Comes with renewed product warranty.' }
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
            { type: SolutionBenefitType.EFFICIENCY, description: 'For a reliables discharge of bottles onto the exit conveyor without stops caused by falling or jammed bottles' },
            { type: SolutionBenefitType.SAFETY, description: 'All our assemblies are fully tested in our workshop and comply with all current safety standards as well for operator safety as for product safety.' },
            { type: SolutionBenefitType.COST_SAVING, description: 'Short installation time. Better ecomical solution when current system shows structural defects. Guaranteed availability of spare parts. Comes with renewed product warranty.' }
          ]
        ),
        "Complete discharge system  in replacement of existing discharge. Stainless steel structure. Fluid movement for gentle bottle handling. Parts that touch bottle in plastic to avoid bottle damage. Easy to replace discharge fingers. Easy to adjust.  Operator safety with pneumatic torque limitation safety system, with emergency machine stop and automatic retraction. Easy and quick maintenance.",
        [
          "Bottle pocket size: from 72 mm to 110 mm.",
          "Max machine width: 7000 mm.",
          " Drive system: by chain/cardanshaft or with synchronized electric motor. "
        ],
        ["cdt_1.jpg", "cdt_2.jpg", "cdt_3.jpg"]
      ),
      new Product(
        "Automatic movable screen above discharge",
        new Solution(
          [SolutionType.BOTTLE_WASHERS],
          ["all brands", "double end"],
          [
            { type: SolutionBenefitType.QUALITY_HYGIENE, description: 'Easy access to zone above discharge for efficient cleaning of the clean zone. Glass panel allows continuous visual check of the zone.' },
            { type: SolutionBenefitType.SAFETY, description: 'All our assemblies are fully tested in our workshop and comply with all current safety standards as well for operator safety as for product safety.' },
            { type: SolutionBenefitType.COST_SAVING, description: 'Short installation time. Avoids longer stops for cleaning.' }
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
            { type: SolutionBenefitType.WATER_SAVING, description: 'Strongly reduced water and energy consumption because of interrupted water injection and pressure control - no bottle = no water. ' },
            { type: SolutionBenefitType.ENERGY_SAVING, description: 'Water used in the machine extracts heat from the process. When less water is consumed and drained, a lot of energy is therefore saved and remains in the machine.' },
            { type: SolutionBenefitType.QUALITY_HYGIENE, description: 'D92	Highly improved rinsing and cooling of bottles. Slanted and rounded tanks allow a better cleaning and an improved hygiene. Efficient filtration system avoids the blocking of the nozzles hence a constant injection.' },
            { type: SolutionBenefitType.SAFETY, description: 'D98	The closed filtration system and renewed windows protect the operator from contact with hot water.' },
            { type: SolutionBenefitType.COST_SAVING, description: 'The very simple mechanical system with rotating stars will reduce neded time for overhaul and cost of spare parts.' }
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
          [{ type: SolutionBenefitType.QUALITY_HYGIENE, description: 'This system prevents the presence of too high caustic concentration in the bottles at the discharge.' },
          { type: SolutionBenefitType.COST_SAVING, description: 'Less bottle explosions at the filler due to high temperature of the bottles' }]
        ),
        "This upgrade consists in adding injection and shower beams just after the last caustic soaking tank, which will spray off the bottles with water from the final rinsing zone. A clever cascade system will also prevent the water from the last soaking tank before the final rinsing zone to heat up due to heat carry over with the bottle carriers.",
        [
          "Additional stainless steel sump",
          "2 additional injection beams and 1 additional showerbeam",
          "1 additional pump and filtration system",
          " Modified cascade system "
        ],
        ["logo.jpg"]
      ),
      new Product(
        "Label extraction booster",
        new Solution(
          [SolutionType.BOTTLE_WASHERS],
          ["all brands", "double end"],
          [
            { type: SolutionBenefitType.QUALITY_HYGIENE, description: 'Strong reduction of label carry over at the discharge of the bottle washer.' },
            { type: SolutionBenefitType.COST_SAVING, description: 'D119	Reduces rejections ath the EBI due to label carry-over.' }]
        ),
        "This modification of the inner tanks of your soaking baths will strongly help the system to remove the labels from the bottles towards the label extraction system.",
        [
          "1 or 2 grid plates to be welded each tank equipped with label extraction system"
        ],
        ["leb_1.jpg"]
      ),
      new Product(
        "ROTATING INJECTION SYSTEM",
        new Solution(
          [SolutionType.BOTTLE_WASHERS],
          ["all brands", "double end"],
          [
            { type: SolutionBenefitType.WATER_SAVING, description: 'Up to 50% water saving compared to the traditional system with sprayracks, as wter is injected only when the bottle is above the spraybeam.' },
            { type: SolutionBenefitType.ENERGY_SAVING, description: 'With the water saving, a parallel energy saving is realized as the water at the drain is about 20 to 30°C higher than the fresh water at the final rinse.' },
            { type: SolutionBenefitType.QUALITY_HYGIENE, description: 'Since the bottle carrier itself activates the rotation, there is no risk for faulty timing and injection besides the bottle. The injection is always inside the bottle. The system is self-cleaning. As the spraybeam rotates, it is injected one time from one side, the next time from the other side, which means any dirt that could block the nozzle is rjected.' },
            { type: SolutionBenefitType.COST_SAVING, description: 'This simple is a very simple and easy to maintain mechanical system.' }
          ]
        ),
        "This modification consists of replacing any old inection system with back-and-forth moving sprayracks by static rotating injection injectors with starwheels. An actuator is welded on every bottle carrier to rotate the starwheel when passing by.",
        ["For machines until 6000 mm inner width",
          "Set of spraybeams with nozzle diameter 1,5 mm for fresh water injection",
          "Set of spraybeams with nozzle diameter 2 mm for all other injections",
          "Complete set including",
          "	Infeed beams",
          "	Rotating spraybars with starwheels",
          "	Welded support",
          "	1 or 2 actuator for each bottle carrier",
          "	Connection piping to shower spraybars"],
        ["rot_sp_1.jpg", "rot_sp_2.jpg", "rot_sp_3.jpg"]
      ),
      // new Product(
      //   "WALL INSULATION",
      //   new Solution(
      //     [SolutionType.BOTTLE_WASHERS],
      //     ["all brands", "single end and double end"],
      //     [SolutionBenefitType.ENERGY_SAVING]
      //   ),
      //   "",
      //   [""],
      //   ["default-placeholder.jpg"]
      // ),
      // new Product(
      //   "CAUSTIC FILTRATION IN PRODUCTION",
      //   new Solution(
      //     [SolutionType.BOTTLE_WASHERS],
      //     ["all brands", "single end and double end"],
      //     [
      //       SolutionBenefitType.WATER_SAVING,
      //       SolutionBenefitType.ENERGY_SAVING,
      //       SolutionBenefitType.QUALITY_HYGIENE,
      //       SolutionBenefitType.COST_SAVING
      //     ]
      //   ),
      //   "",
      //   [""],
      //   ["default-placeholder.jpg"]
      // ),
      // new Product(
      //   "AUTOMATIC CHEMICAL DOSING SYSTEM",
      //   new Solution(
      //     [SolutionType.BOTTLE_WASHERS],
      //     ["all brands", "single end and double end"],
      //     [
      //       SolutionBenefitType.QUALITY_HYGIENE,
      //       SolutionBenefitType.COST_SAVING,
      //       SolutionBenefitType.SAFETY
      //     ]
      //   ),
      //   "",
      //   [""],
      //   ["default-placeholder.jpg"]
      // )
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

    console.log('filter');
    console.log('filters', filters);
    filters.forEach(filter => {
      const foundProducts = this.products.filter((product: Product) => {
        if (product.solution) {
          const benefitsTypes = product.solution.benefits.map(benefit => benefit.type);
          if (benefitsTypes && product.solution.types) {
            return (
              benefitsTypes.includes(filter) ||
              product.solution.types.includes(filter)
            );
          }

          if (benefitsTypes) {
            return benefitsTypes.includes(filter);
          }

          if (product.solution.types) {
            return product.solution.types.includes(filter);
          }
        }

        return false;
      });

      console.log('foundProducts', foundProducts);
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
