class CreateAccount<T, D> {
    bankName: T
    bankID: D

    constructor(bankName: T, bankID: D) {
        this.bankName = bankName;
        this.bankID = bankID;
    }
}


class PersonalAccount<T, D> extends CreateAccount<T, D> {
    readonly ownerName: string;
    money: number
    recentTransactions: { [key: string]: number } = {};
    
    constructor (bankName: T, bankID: D, ownerName: string) {
        super(bankName, bankID);
        this.ownerName = ownerName;
        this.money = 0;
    }

    deposit(amount: number) {
        this.money += amount;
    }

    expense(amount: number, expenseType: string) {
        if (amount <= this.money) {
            this.money -= amount;

            if (!Object.keys(this.recentTransactions).includes(expenseType)) {
                this.recentTransactions[expenseType] = 0;
            }

            this.recentTransactions[expenseType] += amount;
        
        } else {

            throw new Error(`You can't make ${expenseType} transaction`);
        }
    }


    showDetails(): string {
        let totalMoneySpentOnExpenses: number = 0;

        for (const expenseType in this.recentTransactions) {

            totalMoneySpentOnExpenses += this.recentTransactions[expenseType];
        }

        return `Bank name: ${this.bankName}
                Bank ID: ${this.bankID}
                Owner name: ${this.ownerName}
                Money: ${this.money}
                Money spent: ${totalMoneySpentOnExpenses}`;
    }
}

// let account = new PersonalAccount('DSK', 101240, 'Ivan Ivanov');

// account.deposit(1000);
// account.deposit(1000);
// account.expense(700, 'Buy new phone');
// account.expense(400, 'Book a vacation');
// account.expense(400, 'Book a vacation');
// account.expense(100, 'Buy food');
// console.log(account.showDetails());
