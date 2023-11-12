var Cloth = /** @class */ (function () {
    function Cloth(color, size, type) {
        this.color = color;
        this.size = size;
        this.type = type;
    }
    Cloth.prototype.toString = function () {
        return "Product: ".concat(this.type, " with size ").concat(this.size, ", color ").concat(this.color);
    };
    return Cloth;
}());
var Magazine = /** @class */ (function () {
    function Magazine(type, capacity) {
        this.type = type;
        this.capacity = capacity;
        this.clothes = [];
    }
    Magazine.prototype.addCloth = function (cloth) {
        if (this.capacity > 0) {
            this.capacity--;
            this.clothes.push(cloth);
        }
    };
    Magazine.prototype.removeCloth = function (color) {
        for (var index = 0; index < this.clothes.length; index++) {
            var cloth = this.clothes[index];
            if (cloth.color === color) {
                this.clothes.splice(index, 1);
                return true;
            }
        }
        return false;
    };
    Magazine.prototype.getSmallestCloth = function () {
        return this.clothes.sort(function (a, b) { return a.size - b.size; })[0];
    };
    Magazine.prototype.getCloth = function (color) {
        return this.clothes.find(function (e) { return e.color === color; });
    };
    Magazine.prototype.getClothCount = function () {
        return this.clothes.length;
    };
    Magazine.prototype.report = function () {
        var returnString = "".concat(this.type, " magazine contains:");
        this.clothes.sort(function (a, b) { return a.size - b.size; }).forEach(function (cloth) { return returnString += "\n".concat(cloth.toString()); });
        return returnString;
    };
    return Magazine;
}());
function main() {
    // Initialize the repository (Magazine) 
    var magazine = new Magazine("Zara", 20);
    // Initialize entity (Cloth) 
    var cloth1 = new Cloth("red", 36, "dress");
    // Print Cloth 
    console.log(cloth1.toString());
    // Product: dress with size 36, color red
    // Add Cloth
    magazine.addCloth(cloth1);
    // Remove Cloth
    console.log(magazine.removeCloth("black"));
    // false 
    var cloth2 = new Cloth("brown", 34, "t-shirt");
    var cloth3 = new Cloth("blue", 32, "jeans");
    // Add Cloth 
    magazine.addCloth(cloth2);
    magazine.addCloth(cloth3);
    // Get smallest cloth 
    var smallestCloth = magazine.getSmallestCloth();
    console.log(smallestCloth === null || smallestCloth === void 0 ? void 0 : smallestCloth.toString());
    // Product: jeans with size 32, color blue 
    // Get Cloth 
    var getCloth = magazine.getCloth("brown");
    // Product: t-shirt with size 34, color brown 
    console.log(getCloth === null || getCloth === void 0 ? void 0 : getCloth.toString());
    console.log(magazine.report());
    // Zara magazine contains: // Product: jeans with size 32, color blue // Product: t-shirt with size 34, color brown // Product: dress with size 36, color red 
}
main();
