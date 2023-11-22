interface CityTaxes {
    name: string,
    population: number, 
    treasury: number,
    taxRate: 10,
    collectTaxes(): void,
    applyGrowth(percentage: number): void,
    applyRecession(percentage: number): void
}


function cityTaxes(name: string, population: number, treasury: number) {
    const returnObj: CityTaxes =  {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage: number) {
            this.population = Math.floor(this.population + ((this.population / 100) * percentage));
        },
        applyRecession(percentage: number) {
            this.treasury = Math.floor(this.treasury - ((this.treasury / 100) * percentage));
        }
    } 
    return returnObj;
}


// const city =

// cityTaxes('Tortuga',

// 7000,

// 15000);

// console.log(city);


// const city =

// cityTaxes('Tortuga',

// 7000,

// 15000);

// city.collectTaxes();

// console.log(city.treasury);

// city.applyGrowth(5);

// console.log(city.population);