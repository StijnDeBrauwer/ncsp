import { SolutionType } from "./solution-type.model";
import { ProductModel } from "./product.model";

export class SolutionModel {
    private _name: string;
    private _type: SolutionType;
    private _description: string;
    private _products: ProductModel[];
    private _id: Number;

    constructor(name: string, type: SolutionType, description: string, products: ProductModel[], id?: Number) {
        this._name = name;
        this._type = type;
        this._description = description;
        this._products = products;
        this._id = id;
    }

    public get id(): Number {
        return this._id;
    }

    public get name() : string {
        return this._name;
    }
    
    public get type() : SolutionType {
        return this._type;
    }
     
    public get description() : string {
        return this._description;
    }
    
    public get products() : ProductModel[] {
        return this._products;
    }
    
    public set name(name : string) {
        this._name = name;
    }
    
    public set type(type : SolutionType) {
        this._type = type;
    }

    public set description(description : string) {
        this._description = description;
    }

    public set products(products : ProductModel[]) {
        this._products = products;
    }

    public set id(id: Number) {
        this._id = id;
    }
}