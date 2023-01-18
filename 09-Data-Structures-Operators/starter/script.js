"use strict";

const openingHours = {
    thu: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    sat: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

const question = new Map([
    ["question", "What is the best programming language in the world?"],
    [1, "C++"],
    [2, "Java"],
    [3, "JavaScript"],
    ["correct", 3],
    [true, "Correct ✅"],
    [false, "Try again!"],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
    if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt("Your answer"));
// console.log(answer);
// console.log(question.get(3));

// console.log(question.get(answer === question.get("correct") ? true : false));

// Convert map to array
console.log([...question]);
console.log(...question.entries());
console.log(...question.keys());
console.log(...question.values());
