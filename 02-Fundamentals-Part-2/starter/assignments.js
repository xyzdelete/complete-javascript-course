"use strict";

console.log("Section 3: Assignment for Lecture 33. Functions starts here");

function describeCountry(country, population, capitalCity) {
    return String(
        `${country} has ${population} million people and its capital city is ${capitalCity}`
    );
}
const country1 = describeCountry("Finland", 6, "Helsinki");
const country2 = describeCountry("Latvia", 1, "Riga");
const country3 = describeCountry("Russia", 140, "Moscow");

console.log(country1);
console.log(country2);
console.log(country3);

console.log("Section 3: Assignment for Lecture 33. Functions ends here");
