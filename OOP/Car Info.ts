class Car {
    private currentBrand;
    private currentModel;
    private currentHorsepower;

    constructor(brand: string, model: string, horsepower: number) {
        this.currentBrand = brand;
        this.currentModel = model;
        this.currentHorsepower = horsepower;
    }

    public get brand(): string {
        return this.currentBrand;
    }

    public set brand(v: string) {
        this.currentBrand = v;
    }

    public get model(): string {
        return this.currentModel;
    }

    public set model(v: string) {
        this.currentModel = v;
    }

    public get horsepower(): number {
        return this.currentHorsepower;
    }

    public set horsepower(v: number) {
        this.currentHorsepower = v;
    }

    stringify(): string {
        return `The car is: ${this.brand} ${this.model} - ${this.horsepower} HP.`;
    }
}

// const urus = new Car("Lamborghini", "Urus", 657);
// console.log(urus.model);
// urus.brand = "BMW";
// urus.model = "M8";
// urus.horsepower = 625;
// console.log(urus.stringify());
