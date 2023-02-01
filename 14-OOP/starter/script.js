"use strict";

// Public fields
// Private fields
// Public methods
// Private methods
// (there is also the static version)

class Account {
    // 1) Public fields (instances)
    locale = navigator.language;
    // 2) Private fields (instances)
    #movements = [];
    #pin;
    // 3) Public methods
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        // Protected property
        // this._movements = [];
        // this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    // Public interface
    getMovements() {
        return this.#movements;
    }

    deposit(val) {
        this.#movements.push(val);
    }

    withdraw(val) {
        this.deposit(-val);
    }

    requestLoan(val) {
        if (this._approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
        }
    }

    // 4) Private methods
    // #approveLoan(val) {
    _approveLoan(val) {
        return true;
    }

    static helper() {
        console.log("Helper");
    }
}

const acc1 = new Account("Jonas", "EUR", 1111);

// acc1._movements.push(250);
// acc1._movements.push(-250);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);

console.log(acc1.getMovements());

console.log(acc1);
console.log(acc1.pin);
// console.log(acc1.#movements);

// console.log(acc.#pin);
// console.log(acc1.#approveLoan(100));
Account.helper();
