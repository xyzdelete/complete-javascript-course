"use strict";

// console.log("Section 3: Lecture 32. Activating Strict Mode starts here");

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;

// if (hasDriversLicense) console.log("I can drive :D");

// // const interface = "Audio";
// // const private = 534;
// // const if = 23;

// console.log("Section 3: Lecture 32. Activating Strict Mode ends here");

// console.log("Section 3: Lecture 33. Functions starts here");

// function logger() {
//     console.log("My name is Arturs");
// }

// // Calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number("23");

// console.log("Section 3: Lecture 33. Functions ends here");

// console.log(
//     "Section 3: Lecture 34. Function Declarations vs. Expressions starts here"
// );

// // Function declaration
// const age1 = calcAge1(1991);
// console.log(age1);

// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// // Function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// };

// const age2 = calcAge2(1991);
// console.log(age1, age2);

// console.log(
//     "Section 3: Lecture 34. Function Declarations vs. Expressions ends here"
// );

// console.log("Section 3: Lecture 35. Arrow Functions starts here");

// // Arrow function
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, "Arturs"));
// console.log(yearsUntilRetirement(2000, "Arturs"));

// console.log("Section 3: Lecture 35. Arrow Functions ends here");

// console.log(
//     "Section 3: Lecture 36. Functions Calling Other Functions starts here"
// );

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// console.log(
//     "Section 3: Lecture 36. Functions Calling Other Functions ends here"
// );

// console.log("Section 3: Lecture 37. Reviewing Functions starts here");

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired`);
//         return -1;
//     }
// };

// console.log(yearsUntilRetirement(1991, "Arturs"));
// console.log(yearsUntilRetirement(1970, "Mike"));

// console.log("Section 3: Lecture 37. Reviewing Functions ends here");

// console.log("Section 3: Lecture 39. Introduction to Arrays starts here");

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// // const years = new Array(1991, 1984, 2000, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// const firstName = "Arturs";
// const arturs = [firstName, "Anikins", 2037 - 1991, "programmer", friends];

// console.log(arturs);
// console.log(arturs.length);

// // Exercise
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//     calcAge(years[0]),
//     calcAge(years[1]),
//     calcAge(years[years.length - 1]),
// ];

// console.log(ages);

// console.log("Section 3: Lecture 39. Introduction to Arrays ends here");

// console.log(
//     "Section 3: Lecture 40. Basic Array Operations (Methods) starts here"
// );

// // Add elements
// const friends = ["Michael", "Steven", "Peter"];
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// // Remove elements
// friends.unshift("John");
// console.log(friends);
// friends.pop(); // Last
// const popped = friends.pop(); // Last
// console.log(popped);
// console.log(friends);

// friends.shift(); // first
// console.log(friends);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob"));

// friends.push(23);
// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));
// console.log(friends.includes(23));

// if (friends.includes("Steven")) {
//     console.log("You have a friend called Steven");
// }

// console.log(
//     "Section 3: Lecture 40. Basic Array Operations (Methods) ends here"
// );

console.log("Section 3: Lecture 42. Introduction to Objects starts here");

const artursArray = [
    "Arturs",
    "Anikins",
    2037 - 1991,
    "programmer",
    ["Michael", "Peter", "Steven"],
];

const arturs = {
    firstName: "Arturs",
    lastName: "Anikins",
    age: 2037 - 2000,
    job: "programmer",
    friends: ["Michael", "Peter", "Steven"],
};

console.log("Section 3: Lecture 42. Introduction to Objects ends here");
