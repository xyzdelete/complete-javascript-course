// "use strict";

// console.log("Coding Challenge #1");

// function checkDogs(dogsJulia, dogsKate) {
//     const dogsJuliaCopy = dogsJulia.slice();
//     console.log(dogsJuliaCopy);
//     dogsJuliaCopy.splice(0, 1);
//     dogsJuliaCopy.splice(-2, 2);
//     console.log(dogsJuliaCopy);

//     const dogsKateCopy = dogsKate.slice();
//     console.log(dogsKateCopy);
//     dogsKateCopy.splice(0, 1);
//     dogsKateCopy.splice(-2, 2);
//     console.log(dogsKateCopy);

//     const corrected = [...dogsJuliaCopy, ...dogsKateCopy];
//     console.log(corrected);
//     corrected.forEach(function (dogAge, i) {
//         dogAge >= 3
//             ? console.log(
//                   `Dog number ${i + 1} is an adult, and is ${dogAge} years old`
//               )
//             : console.log(`Dog number ${i + 1} is still a puppy`);
//     });
// }

// // Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// // Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
