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

Person.hey = function () {
    console.log(`Hey there!`);
    console.log(this);
};

Person.hey();

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

// class expression
// const PersonCl = class {};

// class declaration
class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // Instance methods
    // Methods will be added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.firstName}`);
    }

    // Static method
    static hey() {
        console.log("Hey there!");
        console.log(this);
    }
}

const jessica = new PersonCl("Jessica", "1996");
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

jessica.greet();

PersonCl.hey();
