import {Injectable} from '@angular/core';
import {Product} from '../../models/product.model';
import {Solution} from '../../models/solution.model';
import {SolutionType} from '../../models/suitable-type.model';
import {SolutionBefenitType} from '../../models/solution-benfit-type';
import {ProductType} from '../../models/product-type.model';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    products: Array<Product>;

    constructor() {
        this.products = [
            new Product('Complete Infeed table',
                ProductType.PARTS,
                new Solution([SolutionType.BOTTLE_WASHERS],
                    'of all brands - single end and double end - cardan shaft driven or multi drive system',
                    [SolutionBefenitType.EFFICIENCY, SolutionBefenitType.SAFTEY, SolutionBefenitType.COST_SAVING],
                    'Infeed brought to current standards in terms of safety and efficiency. Short installation time. Better ecomical solution when current table shows structural defects. Guaranteed availability of spare parts. Comes with renewed product warranty.'
                ),
                'Complete infeed table in replacement of existing infeed table. Stainless steel structure. Belt driven rotation of infeed beam for reduced noise and low maintenance.  Double infeed in one single rotation for gentle bottle handling and reduced wear.  Operator safety with pneumatic torque limitation safety system, with emergency machine stop and automatic retraction. Easy and quick maintenance.',
                'Bottle pocket size: from 72 mm to 110 mm. Max machine width: 7000 mm. Drive system: by chain/cardanshaft or with synchronized electric motor. '),
            new Product('Complete discharge table',
                ProductType.PARTS,
                new Solution([SolutionType.BOTTLE_WASHERS],
                    'of all brands - single end and double end - cardan shaft driven or multi drive system',
                    [SolutionBefenitType.EFFICIENCY, SolutionBefenitType.SAFTEY, SolutionBefenitType.COST_SAVING],
                    'Discharge brought to current standards in terms of safety and efficiency. Short installation time. Better ecomical solution when current table shows structural defects. Guaranteed availability of spare parts. Comes with renewed product warranty.'),
                'Complete discharge system  in replacement of existing discharge. Stainless steel structure. Fluid movement for gentle bottle handling. Parts that touch bottle in plastic to avoid bottle damage. Easy to replace discharge fingers. Easy to adjust.  Operator safety with pneumatic torque limitation safety system, with emergency machine stop and automatic retraction. Easy and quick maintenance.',
                'Bottle pocket size: from 72 mm to 110 mm. Max machine width: 7000 mm. Drive system: by chain/cardanshaft or with synchronized electric motor. '
            ),
            new Product('Automatic movable screen above discharge',
                ProductType.UPGRADES,
                new Solution([SolutionType.BOTTLE_WASHERS],
                    ' of all brands - single end and double end - cardan shaft driven or multi drive system',
                    [SolutionBefenitType.QUALITY_HYGIENE, SolutionBefenitType.SAFTEY, SolutionBefenitType.COST_SAVING],
                    'Easy access to zone above discharge for efficient cleaning. Short installation time. Glass panel allows continuous visual check of the zone.'),
                'Automatic movable screen which allows easy access to zone above discharge system for thorough cleaning. The bottles coming from the final rinse are clean and disinfected in this zone. Hence the cleanliness of this zone is of the utmost importance. Many older type bottle washers don\'t allow easy access to this zone, allowing dirt to pile up and bacteria to grow.',
                'Stainless steel frame with tempered glass. Belt driven lifting system. Maximum machine width: 7000 mm. Operation possible from operzator panel. '
            ),
            new Product('Final rinsing section',
                ProductType.UPGRADES,
                new Solution(
                    [SolutionType.BOTTLE_WASHERS],
                    'of all brands - single end and double end ',
                    [SolutionBefenitType.WATER_SAVING, SolutionBefenitType.QUALITY_HYGIENE, SolutionBefenitType.SAFTEY, SolutionBefenitType.COST_SAVING],
                    'For older systems with 2 zones: highly improved rinsing and cooling of bottles. Water and energy saving with rotating injectors and fresh water pressure control.  Improved hygiene with slanted rounded tanks. '),
                'The current final rinsing zone is completely removed and replaced by new tanks, filtration system, injection and spray system. The system consists of a fresh water saving injection system followed by 3 cascading tanks with rotating injectors and fixed shower beams. Rounded slanted tanks for easy cleaning. Closed  cylindrical filtration system with easy and safe access for claning. Completely stainless steel structure and tanks. Seamless integration in your machine.',
                '2 or 3 fresh water spraybars. 3 cascading tanks with each 3 or 4 rotating spraybars and 1 or 2 fixed showerbeams. Closed filtration system with stainless steel basket sieves. Manual or automatic valve system for cleaning. Complete stainless steel construction. Optional with fresh water pressure control for reduced pressure in slow speed run. '
            ),
            new Product('Pre rinsing section', ProductType.UPGRADES, new Solution([SolutionType.BOTTLE_WASHERS])),
            new Product('Post caustic lock', ProductType.UPGRADES, new Solution([SolutionType.BOTTLE_WASHERS])),
            new Product('Tubular heat exchangers', ProductType.UPGRADES, new Solution([SolutionType.BOTTLE_WASHERS])),
            new Product('Plate Heat Exchangers', ProductType.UPGRADES, new Solution([SolutionType.BOTTLE_WASHERS])),
            new Product('Rotating injection system', ProductType.UPGRADES, new Solution([SolutionType.BOTTLE_WASHERS])),
            new Product('Label extraction booster', ProductType.UPGRADES, new Solution([SolutionType.BOTTLE_WASHERS])),
            new Product('Wall insulation', ProductType.UPGRADES, new Solution([SolutionType.BOTTLE_WASHERS])),
            new Product('Caustic filtration ', ProductType.UPGRADES, new Solution([SolutionType.BOTTLE_WASHERS])),
            new Product('Digitizing of instrumentation ', ProductType.UPGRADES, new Solution([SolutionType.BOTTLE_WASHERS])),
            new Product('PLC Parameter control ', ProductType.UPGRADES, new Solution([SolutionType.BOTTLE_WASHERS])),
            new Product('Automatic chemical dosing control ', ProductType.UPGRADES, new Solution([SolutionType.BOTTLE_WASHERS])),
            new Product('Synchronized drive system ', ProductType.UPGRADES, new Solution([SolutionType.BOTTLE_WASHERS])),
            new Product('Main translation chain ', ProductType.UPGRADES, new Solution([SolutionType.BOTTLE_WASHERS])),
            new Product('Parabolic sieve ', ProductType.UPGRADES, new Solution([SolutionType.BOTTLE_WASHERS])),
            new Product('Eco bottle carriers ', ProductType.UPGRADES, new Solution([SolutionType.BOTTLE_WASHERS])),
            new Product('Universal plastic inserts ', ProductType.UPGRADES, new Solution([SolutionType.BOTTLE_WASHERS])),
            new Product('Steam control system ', ProductType.UPGRADES, new Solution([SolutionType.BOTTLE_WASHERS])),
            new Product('Complete label extraction system ', ProductType.UPGRADES, new Solution([SolutionType.BOTTLE_WASHERS])),

            new Product('Bottle burst safety system', ProductType.UPGRADES, new Solution([SolutionType.FILLERS])),
            new Product('Bottle format front table equipment', ProductType.UPGRADES, new Solution([SolutionType.FILLERS])),
            new Product('Product level control', ProductType.UPGRADES, new Solution([SolutionType.FILLERS])),
            new Product('Automatic CIP regulation  ', ProductType.UPGRADES, new Solution([SolutionType.FILLERS])),
            new Product('PLC Software upgrade', ProductType.UPGRADES, new Solution([SolutionType.BOTTLE_WASHERS, SolutionType.FILLERS])),
            new Product('Crowner/capper ', ProductType.UPGRADES, new Solution([SolutionType.FILLERS])),
            new Product('Complete process automation ', ProductType.UPGRADES, new Solution([SolutionType.BOTTLE_WASHERS, SolutionType.FILLERS])),
            new Product('Universal foam control system ', ProductType.UPGRADES, new Solution([SolutionType.FILLERS])),
            new Product('Lift cylinder stabilization ', ProductType.UPGRADES, new Solution([SolutionType.FILLERS])),

        ];
    }


    public getProducts(): Array<Product> {
        return this.products;
    }

    public filterProductByName(name: string) {
        //return this.products.filter((product: Product)=> product.name.toLowerCase().contains(name)) 
    }

    public getParts() {
        return this.products.filter((product: Product) => product.productType === ProductType.PARTS);
    }

    public getUpgrades() {
        return this.products.filter((product: Product) => product.productType === ProductType.UPGRADES);
    }

    public getServices() {
        return this.products.filter((product: Product) => product.productType === ProductType.SERVICES);
    }

}