// console.log("Section 2: Lecture 10. Values and Variables starts here");

// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("Arturs");
// console.log(23);

// let firstName = "Matilda";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let Person = "jonas";
// let PI = 3.1415;

// let myFirstJob = "Coder";
// let myCurrentJob = "Teacher";

// let job1 = "programmer";
// let job2 = "teacher";

// console.log(myFirstJob);

// console.log("Section 2: Lecture 10. Values and Variables ends here");

// console.log("Section 2: Lecture 12. Data Types starts here");

// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);

// console.log(typeof javaScriptIsFun);

// javaScriptIsFun = "YES!";
// console.log(typeof javaScriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

// console.log("Section 2: Lecture 12. Data Types ends here");

// console.log("Section 2: Lecture 13. let, const and var starts here");

// let age = 30;
// age = 31;

// const birthYear = 1991;
// // birthYear = 1990;
// // const job;

// var job = "programmer";
// job = "teacher";

// console.log("Section 2: Lecture 13. let, const and var ends here");

// console.log("Section 2: Lecture 14. Basic Operators starts here");

// // Math operators
// const now = 2037;
// const ageArturs = now - 2000;
// const ageSarah = now - 2020;
// console.log(ageArturs, ageSarah);

// console.log(ageArturs * 2, ageArturs / 2, 2 ** 3); // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = "Arturs";
// const lastName = "Anikins";
// console.log(firstName + " " + lastName);

// // Assignment opperators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--;
// x--;

// console.log(x);

// // Comparison operators
// console.log(ageArturs > ageSarah); // >, <, >=, <=

// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

// console.log("Section 2: Lecture 14. Basic Operators ends here");

// console.log("Section 2: Lecture 15. Operator Precedence starts here");

// const now = 2037;
// const ageArturs = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// console.log(25 - 10 - 5);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageArturs + ageSarah) / 2;
// console.log(ageArturs, ageSarah, averageAge);

// console.log("Section 2: Lecture 15. Operator Precedence ends here");

// console.log("Section 2: Lecture 17. Strings and Template Literals starts here");

// const firstName = "Arturs";
// const job = "programmer";
// const birthYear = 2000;
// const year = 2037;

// const arturs =
//     "I'm " +
//     firstName +
//     ", a " +
//     (year - birthYear) +
//     " years old " +
//     job +
//     "!";
// console.log(arturs);

// const artursNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(artursNew);

// console.log(`Just a regular string...`);
// console.log(
//     "String with \n\
// multiple \n\
// lines"
// );

// console.log(`String
// multiple
// lines`);

// console.log("Section 2: Lecture 17. Strings and Template Literals ends here");

// console.log(
//     "Section 2: Lecture 18. Taking Decisions: if / else Statements starts here"
// );

// const age = 19;

// if (age >= 18) {
//     console.log("Sarah can start driving license 🚘");
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years ;)`);
// }

// const birthYear = 2001;
// let century;

// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);

// console.log(
//     "Section 2: Lecture 18. Taking Decisions: if / else Statements ends here"
// );

// console.log("Section 2: Lecture 20. Type Conversion and Coercion starts here");

// // Type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Arturs"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // Type coercion
// console.log("I am " + 23 + " years old ");
// console.log("I am " + "23" + " years old ");
// console.log("23" - "10" - 3);
// console.log("23" + "10" + 3);

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// console.log("Section 2: Lecture 20. Type Conversion and Coercion ends here");

// console.log("Section 2: Lecture 21. Truthy and Falsy Values starts here");

// // 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Arturs"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 100;
// if (money) {
//     console.log("Don't spend it all");
// } else {
//     console.log("You should get a job!");
// }

// let height = 0;
// if (height) {
//     console.log("Yay! Height is defined");
// } else {
//     console.log("Height is undefined");
// }

// console.log("Section 2: Lecture 21. Truthy and Falsy Values ends here");

// console.log(
//     "Section 2: Lecture 22. Equality Operators: == vs. === starts here"
// );

// const age = "18";

// if (age === 18) console.log("You've just become an adult (strict)");

// if (age == 18) console.log("You've just become an adult (loose)");

// const favorite = Number(prompt("What's your favorite number?"));

// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) {
//     // 23 === 23
//     console.log("Cool! 23 is an amazing number!");
// } else if (favorite === 7) {
//     console.log("7 is also a cool number");
// } else if (favorite === 9) {
//     console.log("9 is also a cool number");
// } else {
//     console.log("Number is not 23 or 7 or 9");
// }

// if (favorite !== 23) console.log("Why not 23?");

// console.log("Section 2: Lecture 22. Equality Operators: == vs. === ends here");

// console.log("Section 2: Lecture 24. Logical Operators starts here");

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// // if (hasDriversLicense && hasGoodVision) {
// //     console.log("Sarah is able to drive!");
// // } else {
// //     console.log("Someone else should drive...");
// // }

// const isTired = false; // C

// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log("Sarah is able to drive!");
// } else {
//     console.log("Someone else should drive...");
// }

// console.log("Section 2: Lecture 24. Logical Operators ends here");

// console.log("Section 2: Lecture 26. The switch Statement starts here");

// const day = "monday";

// // switch (day) {
// //     case "monday": // day === "monday"
// //         console.log("Plan course structure");
// //         console.log("Go to coding meetup");
// //         break;
// //     case "tuesday":
// //         console.log("Prepare theory videos");
// //         break;
// //     case "wednesday":
// //     case "thursday":
// //         console.log("Write code examples");
// //         break;
// //     case "friday":
// //         console.log("Record videos");
// //         break;
// //     case "saturday":
// //     case "sunday":
// //         console.log("Enjoy the weekend :D");
// //         break;
// //     default:
// //         console.log("Not a valid day!");
// // }

// if (day === "monday") {
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//     console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//     console.log("Write code examples");
// } else if (day === "friday") {
//     console.log("Record videos");
// } else if (day === "saturday") {
//     console.log("Enjoy the weekend :D");
// } else {
//     console.log("Not a valid day!");
// }

// console.log("Section 2: Lecture 26. The switch Statement ends here");

// console.log(
//     "Section 2: Lecture 28. The Conditional (Ternary) Operator starts here"
// );

// const age = 23;

// // age >= 18
// //     ? console.log("I like to drink water")
// //     : console.log("I like to drink tea");

// const drink = age >= 18 ? "water" : "tea";
// console.log(drink);

// let drink2;
// if (age >= 18) {
//     drink2 = "water";
// } else {
//     drink2 = "tea";
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? "water" : "tea"}`);

// console.log(
//     "Section 2: Lecture 28. The Conditional (Ternary) Operator ends here"
// );
