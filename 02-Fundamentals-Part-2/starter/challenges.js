// console.log("Section 3: Lecture 38. Coding Challenge #1 starts here");

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) {
//         console.log(`Dolphins wins (${avgDolphins} vs ${avgKoalas}) `);
//     } else if (avgKoalas >= avgDolphins * 2) {
//         console.log(`Koalas wins (${avgKoalas} vs ${avgDolphins}) `);
//     }
// }

// checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49));
// checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));

// console.log("Section 3: Lecture 38. Coding Challenge #1 ends here");

// console.log("Section 3: Lecture 41. Coding Challenge #2 starts here");

// function calcTip(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [125, 555, 44];
// console.log(bills);
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

// console.log("Section 3: Lecture 41. Coding Challenge #2 ends here");

// console.log("Section 3: Lecture 45. Coding Challenge #3 starts here");

// const Mark = {
//     fullname: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.BMI = this.mass / this.height ** 2;
//         return this.BMI;
//     },
// };

// const John = {
//     fullname: "John Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.BMI = this.mass / this.height ** 2;
//         return this.BMI;
//     },
// };

// console.log(
//     Mark.calcBMI() > John.calcBMI()
//         ? `Mark's BMI (${Mark.BMI}) is higher than John's (${John.BMI})`
//         : `John's BMI (${John.BMI}) is higher than Mark's (${Mark.BMI})`
// );

// console.log("Section 3: Lecture 45. Coding Challenge #3 ends here");
