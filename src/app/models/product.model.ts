export class ProductModel {
    private _name: string;
    private _purpose: string;
    private _scope: string;
    private _options: string;
    private _specs: string;
    private _principle: string;
    private _setup: string;

    constructor(name: string, purpose: string, scope: string,
        options: string, specs: string, principle: string, setup: string) {
            this._name = name;
            this._purpose = purpose;
            this._scope = scope;
            this._options = options;
            this._specs = specs;
            this._principle = principle;
            this._setup = setup;
        }

    
    public set name(name : string) {
        this._name = name;
    }
    
    public set purpose(purpose : string) {
        this._purpose = purpose;
    }

    public set scope(scope : string) {
        this._scope = scope;
    }

    public set options(options : string) {
        this._options = options;
    }

    public set specs(specs : string) {
        this._specs = specs;
    }

    public set principle(principle : string) {
        this._principle = principle;
    }

    public set setup(setup : string) {
        this._setup = setup;
    }
    
    public get name() : string {
        return this._name;
    }

    public get purpose() : string {
        return this._purpose;
    }
    
    public get scope(): string {
        return this._scope;
    }

    public get options(): string {
        return this._options;
    }

    public get specs(): string {
        return this._specs;
    }

    public get principle(): string {
        return this._principle;
    }

    public get setup(): string {
        return this._setup;
    }
}