function cityTaxes(name, population, treasury) {
    var returnObj = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes: function () {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth: function (percentage) {
            this.population = Math.floor(this.population + ((this.population / 100) * percentage));
        },
        applyRecession: function (percentage) {
            this.treasury = Math.floor(this.treasury - ((this.treasury / 100) * percentage));
        }
    };
    return returnObj;
}
// const city =
// cityTaxes('Tortuga',
// 7000,
// 15000);
// console.log(city);
var city = cityTaxes('Tortuga', 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
