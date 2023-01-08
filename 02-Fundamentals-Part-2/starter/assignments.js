"use strict";

// console.log("Section 3: Assignment for Lecture 33. Functions starts here");

// function describeCountry(country, population, capitalCity) {
//     return String(
//         `${country} has ${population} million people and its capital city is ${capitalCity}`
//     );
// }
// const country1 = describeCountry("Finland", 6, "Helsinki");
// const country2 = describeCountry("Latvia", 1, "Riga");
// const country3 = describeCountry("Russia", 140, "Moscow");

// console.log(country1);
// console.log(country2);
// console.log(country3);

// console.log("Section 3: Assignment for Lecture 33. Functions ends here");

// console.log(
//     "Section 3: Assignment for Lecture 34. Function Declarations vs. Expressions starts here"
// );

// function percentageOfWorld1(population) {
//     return (population / 8000000000) * 100;
// }

// const percentageOfWorld2 = function (population) {
//     return (population / 8000000000) * 100;
// };

// // const population = 1441000000;
// // const population = 140000000;
// // const population = 1500000;
// // const population = 324939090;
// // const population = 4120300;
// const population = 3294919;
// // const fractionOfWorldPopulation = percentageOfWorld1(population);

// const fractionOfWorldPopulation = percentageOfWorld2(population);

// console.log(
//     `${population} million people is about ${fractionOfWorldPopulation}`
// );

// console.log(
//     "Section 3: Assignment for Lecture 34. Function Declarations vs. Expressions ends here"
// );

// console.log(
//     "Section 3: Assignment for Lecture 35. Arrow Functions starts here"
// );

// const percentageOfWorld3 = (population) => {
//     return (population / 8000000000) * 100;
// };

// // const population = 1294919;
// // const population = 2294919;
// const population = 3294919;

// const fractionOfWorldPopulation = percentageOfWorld3(population);

// console.log(
//     `${population} million people is about ${fractionOfWorldPopulation}`
// );

// console.log("Section 3: Assignment for Lecture 35. Arrow Functions ends here");

// console.log("Section 3: Assignment for Lecture 35. Arrow Functions ends here");

// console.log(
//     "Section 3: Assignment for Lecture 36. Functions Calling Other Functions starts here"
// );

// function describePopulation(country, population) {
//     const percentageOfWorld3 = (population) => (population / 8000) * 100;
//     return `${country} has ${population} million people, which is about ${percentageOfWorld3(
//         population
//     )} of the world.`;
// }

// console.log(describePopulation("Latvia", 1.5));
// console.log(describePopulation("Rome", 14));
// console.log(describePopulation("Russia", 140));

// console.log(
//     "Section 3: Assignment for Lecture 36. Functions Calling Other Functions ends here"
// );

console.log(
    "Section 3: Assignment for Lecture 39. Introduction to Arrays starts here"
);

const populations = [11, 12, 13, 15];

if (populations.length === 4) {
    console.log(true);
} else {
    console.log(false);
}

function percentageOfWorld1(population) {
    return (population / 8000) * 100;
}

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3]),
];

console.log(percentages);

console.log(
    "Section 3: Assignment for Lecture 39. Introduction to Arrays ends here"
);
