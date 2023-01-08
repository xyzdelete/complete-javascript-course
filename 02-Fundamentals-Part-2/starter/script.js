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

console.log(
    "Section 3: Lecture 36. Functions Calling Other Functions starts here"
);

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

console.log(
    "Section 3: Lecture 36. Functions Calling Other Functions ends here"
);
