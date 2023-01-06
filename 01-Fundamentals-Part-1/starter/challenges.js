// console.log("Section 2: Lecture 16. Coding Challenge #1 starts here");

// // Data1
// // const markMass = 78;
// // const markHeight = 1.69;
// // const johnMass = 92;
// // const johnHeight = 1.95;

// // Data2
// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;

// const markBMI = markMass / markHeight ** 2;

// const johnBMI = johnMass / (johnHeight * johnHeight);

// const markHigherBMI = markBMI > johnBMI;

// console.log(markHigherBMI);

// console.log("Section 2: Lecture 16. Coding Challenge #1 ends here");

// console.log("Section 2: Lecture 19. Coding Challenge #2 starts here");

// // Data1
// // const markMass = 78;
// // const markHeight = 1.69;
// // const johnMass = 92;
// // const johnHeight = 1.95;

// // Data2
// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;

// const markBMI = markMass / markHeight ** 2;

// const johnBMI = johnMass / (johnHeight * johnHeight);

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`);
// } else {
//     console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}!`);
// }

// console.log("Section 2: Lecture 19. Coding Challenge #2 ends here");

console.log("Section 2: Lecture 25. Coding Challenge #3 starts here");

// Data 1
// const scoreDolphins = 96 + 108 + 89;
// const scoreKoalas = 88 + 91 + 110;

// Data Bonus 1
// const scoreDolphins = 97 + 112 + 101;
// const scoreKoalas = 109 + 95 + 123;
// Data Bonus 2
const scoreDolphins = 97 + 112 + 101;
const scoreKoalas = 109 + 95 + 106;

const averageScoreDolphins = scoreDolphins / 3;
const averageScoreKoalas = scoreKoalas / 3;

if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
    console.log("Dolphins team is the winner!");
} else if (
    averageScoreKoalas > averageScoreDolphins &&
    averageScoreKoalas >= 100
) {
    console.log("Koalas team is the winner!");
} else if (averageScoreKoalas >= 100 && averageScoreDolphins >= 100) {
    console.log("It's a draw!");
}

console.log("Section 2: Lecture 25. Coding Challenge #3 ends here");
