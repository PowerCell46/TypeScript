class CompareElements<T> {
    prop: T[];

    constructor(prop: T[]) {
        this.prop = prop;
    }

    compare(searchedItem: T) {
        let counter = 0;
        for (let item of this.prop) {
            if (item === searchedItem) {
                counter++;
            }
        }
        return counter;
    }
}

// let c = new CompareElements(['a', 'b', 'ab', 'abc', 'cba', 'b']);

// console.log(c.compare('b'));

// let a = new CompareElements([1, 2, 3, 4, 5, 1, 1]);

// console.log(a.compare(1));
