interface Dealership<T> {
    dealershipName: T;
    soldCars: number;
}

interface Actions<T> {
    sellCar(dealerID: T, model: T): void;
}

class CarDealer<T extends Object> implements Dealership<T>, Actions<T> {
    soldCars: number;
    modelsSold: {[dealerID: string]: T};
    dealershipName: T;

    constructor(dealershipName: T) {
        this.soldCars = 0;
        this.modelsSold = {};
        this.dealershipName = dealershipName;
    }

    sellCar(dealerID: T, model: T): void {
        this.modelsSold[dealerID.toString()] = model;
        this.soldCars++;
    }

    showDetails(): string {
        let details = `${this.dealershipName}:\n`;
        for(let dealerID in this.modelsSold) {
            if (this.modelsSold.hasOwnProperty(dealerID)) {
                const model = this.modelsSold[dealerID];
                details += `${dealerID} sold ${model}\n`;
            }
        }
        return details;
    }
}

// let dealership = new CarDealer('SilverStar');

// dealership.sellCar('BG01', 'C Class');
// dealership.sellCar('BG02', 'S Class');
// dealership.sellCar('BG03', 'ML Class');
// dealership.sellCar('BG04', 'CLK Class');
// console.log(dealership.showDetails());
