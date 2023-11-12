 function lowestPricesInCities(array: string[]): string  {
    let productObj = {};

    for (let data of array) {
        let [town, product, price] = data.split(" | ");
        
        if (!Object.keys(productObj).includes(product)) {
            productObj[product] = [town, price];
        
        } else {
            
            if (Number(price) < Number(productObj[product][1])) {
                productObj[product] = [town, price];
                console.log("Changed value");
                
            }
        }
    }
    
    return  Object.keys(productObj)
    .map((product) => `${product} -> ${productObj[product][1]} (${productObj[product][0]})`)
    .join("\n");
}

// console.log(lowestPricesInCities(['Sample Town | Sample Product | 1000',
// 'Sample Town | Orange | 2',
// 'Sample Town | Peach | 1',
// 'Sofia | Orange | 3',
// 'Sofia | Peach | 2',
// 'New York | Sample Product | 1000.1',
// 'New York | Burger | 10'])); 