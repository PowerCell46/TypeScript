/// <reference path="./Deliviries1.ts"/>

interface PlacesToVisit {
    [customerName: string]: boolean;
}

class Courier implements FoodAndBeverages.Delivery {
    protected placesToVisit: PlacesToVisit;

    constructor(placesToVisit: PlacesToVisit) {
        this.placesToVisit = placesToVisit;
    }

    newCustomer(customerName: string, visited: boolean): void | string {
        if (!Object.keys(this.placesToVisit).includes(customerName)) {
            this.placesToVisit[customerName] = visited;
            return `${customerName} just became your client.`;
        } else {
            throw new Error(`${customerName} is already a customer of yours!`);
        }
    }

    visitCustomer(customerName: string): void {
        if (!Object.keys(this.placesToVisit).includes(customerName)) {
            throw new Error(`${customerName} is not your customer`);
        } else {
            this.placesToVisit[customerName] = true;
        }
    }

    showCustomers(): void {
        for (let key in this.placesToVisit) {
            console.log(`${key} -> ${this.placesToVisit[key]}`);
        }
    }
}

// const couries = new Courier({});

// couries.newCustomer("someone", false);

// couries.newCustomer("someone 2", false);

// couries.visitCustomer("someone");

// couries.showCustomers();
