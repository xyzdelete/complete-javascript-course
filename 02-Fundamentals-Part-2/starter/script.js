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

// console.log("Section 3: Lecture 42. Introduction to Objects starts here");

// const artursArray = [
//     "Arturs",
//     "Anikins",
//     2037 - 1991,
//     "programmer",
//     ["Michael", "Peter", "Steven"],
// ];

// const arturs = {
//     firstName: "Arturs",
//     lastName: "Anikins",
//     age: 2037 - 2000,
//     job: "programmer",
//     friends: ["Michael", "Peter", "Steven"],
// };

// console.log("Section 3: Lecture 42. Introduction to Objects ends here");

// console.log("Section 3: Lecture 43. Dot vs. Bracket Notation starts here");

// const arturs = {
//     firstName: "Arturs",
//     lastName: "Anikins",
//     age: 2037 - 2000,
//     job: "programmer",
//     friends: ["Michael", "Peter", "Steven"],
// };

// console.log(arturs);

// console.log(arturs.lastName);
// console.log(arturs["lastName"]);

// const nameKey = "Name";
// console.log(arturs["first" + nameKey]);
// console.log(arturs["last" + nameKey]);

// const interestedIn = prompt(
//     "What do you want to know about Arturs? Choose between firstName, lastName, age, job and friends"
// );

// arturs.location = "Portugal";
// arturs["twitter"] = "@0";
// if (arturs[interestedIn]) {
//     console.log(arturs[interestedIn]);
// } else {
//     console.log(
//         "Wrong request! Choose between firstName, lastName, age, job and friends"
//     );
// }

// // Challenge
// // Arturs has 3 friends, and his friend is called Michael
// console.log(
//     `${arturs.firstName} has ${arturs.friends.length} friends, and his best friend is called ${arturs.friends[0]}`
// );

// console.log("Section 3: Lecture 43. Dot vs. Bracket Notation ends here");

// console.log("Section 3: Lecture 44. Object Methods starts here");

// const arturs = {
//     firstName: "Arturs",
//     lastName: "Anikins",
//     birthYear: 1991,
//     job: "programmer",
//     friends: ["Michael", "Peter", "Steven"],
//     hasDriversLicense: true,
//     // calcAge: function (birthYear) {
//     //     return 2037 - birthYear;
//     // },

//     // calcAge: function () {
//     //     // console.log(this);
//     //     return 2037 - this.birthYear;
//     // },

//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-years old ${
//             this.job
//         }, and he ${
//             this.hasDriversLicense ? "has a" : "has no"
//         } driver's license`;
//     },
// };

// console.log(arturs.calcAge());

// console.log(arturs.age);
// console.log(arturs.age);
// console.log(arturs.age);

// // Challenge
// // "Arturs is a 46-years old programmer, and he has a/no driver's license"
// console.log(arturs.getSummary());

// console.log("Section 3: Lecture 44. Object Methods ends here");

// console.log("Section 3: Lecture 46. Iteration: The for Loop starts here");

// // for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 30; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

// console.log("Section 3: Lecture 46. Iteration: The for Loop ends here");

// console.log(
//     "Section 3: Lecture 47. Looping Arrays, Breaking and Continuing starts here"
// );

// const artursArray = [
//     "Arturs",
//     "Anikins",
//     2037 - 1991,
//     "programmer",
//     ["Michael", "Peter", "Steven"],
//     true,
// ];

// const types = [];

// for (let i = 0; i < artursArray.length; i++) {
//     // Reading from array
//     console.log(artursArray[i], typeof artursArray[i]);

//     // Filling types array
//     // types[i] = typeof artursArray[i];
//     types.push(typeof artursArray[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];

// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }

// console.log(ages);

// // continue and break

// console.log("=== ONLY STRINGS ===");
// for (let i = 0; i < artursArray.length; i++) {
//     if (typeof artursArray[i] !== "string") continue;

//     console.log(artursArray[i], typeof artursArray[i]);
// }

// for (let i = 0; i < artursArray.length; i++) {
//     if (typeof artursArray[i] === "number") break;

//     console.log(artursArray[i], typeof artursArray[i]);
// }

// console.log(
//     "Section 3: Lecture 47. Looping Arrays, Breaking and Continuing ends here"
// );

// console.log(
//     "Section 3: Lecture 48. Looping Backwards and Loops in Loops starts here"
// );

// const artursArray = [
//     "Arturs",
//     "Anikins",
//     2037 - 1991,
//     "programmer",
//     ["Michael", "Peter", "Steven"],
// ];

// for (let i = artursArray.length - 1; i >= 0; i--) {
//     console.log(i, artursArray[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`-------- Starting exercise ${exercise}`);
//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise} Lifting weight repetition ${rep}`);
//     }
// }

// console.log(
//     "Section 3: Lecture 48. Looping Backwards and Loops in Loops ends here"
// );
