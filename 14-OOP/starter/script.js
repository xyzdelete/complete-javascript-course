"use strict";

const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never do this
    // this.calcAge = function () {
    //     console.log(2037 - this.birthYear);
    // };
};

const arturs = new Person("Arturs", 1991);
console.log(arturs);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);
console.log(matilda, jack);

console.log(arturs instanceof Person);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = this.calcAge = function () {
    console.log(2037 - this.birthYear);
};

arturs.calcAge();
matilda.calcAge();

console.log(arturs.__proto__);
console.log(arturs.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(arturs));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = "Homo Sapiens";
console.log(arturs.species, matilda.species);

console.log(arturs.hasOwnProperty("firstName"));
console.log(arturs.hasOwnProperty("species"));

console.log(arturs.__proto__);

// Object.prototype (top of prototype chain)
console.log(arturs.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
    return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector("h1");
console.dir((x) => x + 1);
