"use strict";

const lufthansa = {
    airLine: "Lufthansa",
    iataCode: "LH",
    bookings: [],
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airLine} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
};

lufthansa.book(239, "Arturs Anikins");
lufthansa.book(635, "John Smith");
console.log(lufthansa);

const eurowings = {
    airLine: "Eurowings",
    iataCode: "EW",
    bookings: [],
};

const book = lufthansa.book;
// Does not work
// book(23, "Sarah Williams");

// Call method
book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);

book.call(lufthansa, 239, "Mary Cooper");
console.log(lufthansa);

const swiss = {
    airLine: "Swiss Air Lines",
    iataCode: "LX",
    bookings: [],
};

book.call(swiss, 583, "Mary Cooper");
console.log(swiss);

// Apply method
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
console.log(swiss);

// Bind method
// book.call(eurowings, 23, "Sarah Williams");

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, "Steven Williams");
console.log(eurowings);

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Arturs Anikins");
bookEW23("Martha Cooper");
console.log(eurowings);

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
};

document
    .querySelector(".buy")
    .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(undefined, 0.23);
// addVAT = value => value + value * 0.23

console.log(addVAT(100));
console.log(addVAT(23));

// Using function returning a function

const AddTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    };
};
const addVAT2 = AddTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
