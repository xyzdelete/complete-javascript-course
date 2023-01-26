"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: "Jonas Schmedtmann",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: "Steven Thomas Williams",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: "Sarah Smith",
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

function displayMovements(movements, sort = false) {
    containerMovements.innerHTML = ``;

    const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

    movs.forEach(function (mov, i) {
        const type = mov > 0 ? "deposit" : "withdrawal";

        const html = `
        <div class="movements__row">
          <div class="movements__type           movements__type--${type}">${
            i + 1
        } ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
        `;
        containerMovements.insertAdjacentHTML("afterbegin", html);
    });
}
// displayMovements(account1.movements);

// console.log(containerMovements.innerHTML);

function calcDisplayBalance(acc) {
    acc.balance = acc.movements.reduce((acc, cur, i, arr) => acc + cur, 0);
    labelBalance.textContent = `${acc.balance} EUR`;
}
// calcDisplayBalance(account1.movements);

function calcDisplaySummary(acc) {
    const incomes = acc.movements
        .filter((mov) => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${incomes} €`;

    const out = acc.movements
        .filter((mov) => mov < 0)
        .reduce((acc, mov) => acc + mov);
    labelSumOut.textContent = `${Math.abs(out)} €`;

    const interest = acc.movements
        .filter((mov) => mov > 0)
        .map((deposit) => (deposit * acc.interestRate) / 100)
        .filter((interest, i, arr) => interest >= 1)
        .reduce((acc, interest) => acc + interest);

    labelSumInterest.textContent = `${interest} €`;
}
// calcDisplaySummary(account1.movements);

function createUsernames(accs) {
    accs.forEach(function (acc) {
        acc.username = acc.owner
            .toLowerCase()
            .split(" ")
            .map((user) => user[0])
            .join("");
    });
}
createUsernames(accounts);

function updateUI(acc) {
    // Display movements
    displayMovements(acc.movements);
    // Display balance
    calcDisplayBalance(acc);
    // Display summary
    calcDisplaySummary(acc);
}

// Event handler
let currentAccount;

btnLogin.addEventListener("click", function (e) {
    // Prevent form from submitting
    e.preventDefault();

    currentAccount = accounts.find(
        (acc) => acc.username === inputLoginUsername.value
    );
    console.log(currentAccount);

    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        // Display UI and welcome
        labelWelcome.textContent = `Welcome back, ${
            currentAccount.owner.split(" ")[0]
        }`;
        containerApp.style.opacity = 100;
        // Clear input fields
        inputLoginUsername.value = inputLoginPin.value = "";
        inputLoginPin.blur();

        // Update UI
        updateUI(currentAccount);
    }
});

btnTransfer.addEventListener("click", function (e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(
        (acc) => acc.username === inputTransferTo.value
    );
    inputTransferAmount.value = inputTransferTo.value = "";

    if (
        amount > 0 &&
        receiverAcc &&
        currentAccount.balance >= amount &&
        receiverAcc?.username !== currentAccount.username
    ) {
        // Doing the transfer
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);
        // Update UI
        updateUI(currentAccount);
    }
});

btnLoan.addEventListener("click", function (e) {
    e.preventDefault();

    const amount = Number(inputLoanAmount.value);

    if (
        amount > 0 &&
        currentAccount.movements.some((mov) => mov >= amount * 0.1)
    ) {
        // Add movement
        currentAccount.movements.push(amount);

        // Update UI
        updateUI(currentAccount);
    }

    inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
    e.preventDefault();

    if (
        currentAccount.username === inputCloseUsername.value &&
        currentAccount.pin === Number(inputClosePin.value)
    ) {
        const index = accounts.findIndex(
            (acc) => acc.username === currentAccount.username
        );

        // Delete account
        accounts.splice(index, 1);

        inputCloseUsername.value = inputClosePin.value = "";

        // Hide UI
        containerApp.style.opacity = 0;
    }
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//     ["USD", "United States dollar"],
//     ["EUR", "Euro"],
//     ["GBP", "Pound sterling"],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////

// 1.
const bankDepositSum = accounts
    .flatMap((acc) => acc.movements)
    .filter((deposits) => deposits > 0)
    .reduce((acc, deposits) => acc + deposits, 0);
console.log(bankDepositSum);

// 2.
const numDeposits1000 = accounts
    .flatMap((acc) => acc.movements)
    .reduce((acc, cur) => (cur >= 1000 ? ++acc : acc), 0);

console.log(numDeposits1000);

// 3.
const { deposits, widthdrawals } = accounts
    .flatMap((acc) => acc.movements)
    .reduce(
        (sums, cur) => {
            // cur > 0 ? (sums.deposits += cur) : (sums.widthdrawals += cur);

            sums[cur > 0 ? "deposits" : "widthdrawals"] += cur;

            return sums;
        },
        { deposits: 0, widthdrawals: 0 }
    );

console.log(deposits, widthdrawals);

// 4.
// this is a nice title -> This Is a Nice Title
function convertTitleCase(title) {
    function capitalize(str) {
        return str[0].toUpperCase() + str.slice(1);
    }

    const exceptions = ["a", "an", "the", "and", "but", "or", "in", "with"];

    const titleCase = title
        .toLowerCase()
        .split(" ")
        .map((word) =>
            exceptions.includes(word)
                ? word
                : word[0].toUpperCase() + word.slice(1)
        );
    return capitalize(titleCase.join(" "));
}

console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a LONG title but not too long"));
console.log(convertTitleCase("and here is another title with an EXAMPLE"));
