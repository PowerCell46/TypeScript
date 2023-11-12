class Cloth {
    color: string
    size: number
    type: string

    constructor(color: string, size: number, type: string) {
        this.color = color;
        this.size = size;
        this.type = type;
    }

    toString(): string {
        return `Product: ${this.type} with size ${this.size}, color ${this.color}`;
    }
}


class Magazine {
    type: string
    capacity: number
    clothes: Cloth[]

    constructor(type: string, capacity: number) {
        this.type = type;
        this.capacity = capacity;
        this.clothes = []
    }

    addCloth(cloth: Cloth): void {
        if (this.capacity > 0) {
            this.capacity--;
            this.clothes.push(cloth);
        }
    }

    removeCloth(color: string): boolean {
        for (let index = 0; index < this.clothes.length; index++) {
            const cloth = this.clothes[index];

            if (cloth.color === color) {
                this.clothes.splice(index, 1);
                return true;
            }
        }

        return false;
    }
 
    getSmallestCloth(): Cloth {
        return this.clothes.sort((a, b) => a.size - b.size)[0];
    }

    getCloth(color: string): Cloth {
        return this.clothes.find(e => e.color === color);
    }

    getClothCount(): number {
        return this.clothes.length;
    }

    report(): string {
        let returnString = `${this.type} magazine contains:`;
        this.clothes.sort((a, b) => a.size - b.size).forEach(cloth => returnString += `\n${cloth.toString()}`);
        return returnString;
    }
}

/*
function main() {

    // Initialize the repository (Magazine) 
    const magazine = new Magazine("Zara", 20);


    // Initialize entity (Cloth) 
    const cloth1 = new Cloth("red", 36, "dress"); 


    // Print Cloth 
    console.log(cloth1.toString()); 
    // Product: dress with size 36, color red


    // Add Cloth
    magazine.addCloth(cloth1); 


    // Remove Cloth
    console.log(magazine.removeCloth("black")); 
    // false 


    const cloth2 = new Cloth("brown", 34, "t-shirt");

    const cloth3 = new Cloth("blue", 32, "jeans"); 


    // Add Cloth 
    magazine.addCloth(cloth2);

    magazine.addCloth(cloth3); 


    // Get smallest cloth 
    const smallestCloth = magazine.getSmallestCloth();

    console.log(smallestCloth?.toString());
    // Product: jeans with size 32, color blue 


    // Get Cloth 
    const getCloth = magazine.getCloth("brown"); 
    // Product: t-shirt with size 34, color brown 


    console.log(getCloth?.toString()); console.log(magazine.report()); 
    // Zara magazine contains: // Product: jeans with size 32, color blue // Product: t-shirt with size 34, color brown // Product: dress with size 36, color red 
    }
    
main();
   
  */
