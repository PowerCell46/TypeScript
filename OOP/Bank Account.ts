class BankAccount {
    static Id: number = 0;
    static InterestRate: number = 0.02;
    Balance: number


    constructor(Balance: number) {
        BankAccount.Id++;
        this.Balance = Balance;    
    }

    
    public set InterestRate(v : number) {
        BankAccount.InterestRate = v;
    }

    
    public get InterestRate() {
        return this.InterestRate;
    }

    
    Deposit(amount: number) {
        this.Balance += amount;
    }
}
