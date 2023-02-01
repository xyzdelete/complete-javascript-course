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

console.log("Coding Challenge #1");

function Car(make, speed) {
    this.make = make;
    // km/h
    this.speed = speed;
    this.__proto__.accelerate = function () {
        console.log(`${this.make} going at ${(this.speed += 10)} km/h`);
    };
    this.__proto__.brake = function () {
        console.log(`${this.make} going at ${(this.speed -= 5)} km/h`);
    };
}

const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);

car1.accelerate();
car1.brake();
car1.brake();

car2.accelerate();
car2.brake();
car2.brake();
