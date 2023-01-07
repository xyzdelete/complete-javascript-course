// console.log(
//     "Section 2: Assignment for Lecture 10. Values and Variables starts here"
// );

// country = "Latvia";
// continent = "Eurasia";
// let population = "1 500 000";

// console.log(country);
// console.log(continent);
// console.log(population);

// console.log(
//     "Section 2: Assignment for Lecture 10. Values and Variables ends here"
// );

// console.log("Section 2: Assignment for Lecture 12. Data Types starts here");

// const isIsLand = true;
// let language;

// console.log(isIsLand);
// console.log(population);
// console.log(country);
// console.log(language);

// console.log("Section 2: Assignment for Lecture 12. Data Types ends here");

// console.log(
//     "Section 2: Assignment for Lecture 13. let, const and var starts here"
// );

// language = "Latvian";

// console.log(
//     "Section 2: Assignment for Lecture 13. let, const and var ends here"
// );

// console.log(
//     "Section 2: Assignment for Lecture 14. Basic Operators starts here"
// );

// population = 1500000;
// console.log(population / 2);
// console.log(population / 2 + 1);
// populationFinland = 6000000;
// console.log(population > populationFinland);
// averagePopulationOfACountry = 33000000;
// console.log(population < averagePopulationOfACountry);

// country = "Portugal";
// continent = "Europe";
// population = 11;
// language = "portuguese";

// const description =
//     country +
//     " is in " +
//     continent +
//     ", and its " +
//     population +
//     " million people speak " +
//     language;

// console.log(description);

// console.log("Section 2: Assignment for Lecture 14. Basic Operators ends here");

// console.log(
//     "Section 2: Assignment for Lecture 17. Strings and Template Literals starts here"
// );

// country = "Portugal";
// continent = "Europe";
// population = 11;
// language = "portuguese";

// const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

// console.log(description);

// console.log(
//     "Section 2: Assignment for Lecture 17. Strings and Template Literals ends here"
// );

// console.log(
//     "Section 2: Assignment for Lecture 18. Taking Decisions: if / else Statements starts here"
// );

// const population = 34;
// // const population = 11;
// // const population = 13;
// // const population = 130;

// const country = "Portugal";

// if (population > 33) {
//     console.log(`${country}'s population is above average`);
// } else {
//     console.log(
//         `${country}'s population is ${33 - population} million below average`
//     );
// }

// console.log(
//     "Section 2: Assignment for Lecture 18. Taking Decisions: if / else Statements ends here"
// );

// console.log(
//     "Section 2: Assignment for Lecture 20. Type Conversion and Coercion starts here"
// );

// console.log("9" - "5");
// console.log("19" - "13" + "17");
// console.log("19" - "13" + 17);
// console.log("123" < 57);
// console.log(5 + 6 + "4" + 9 - 4 - 2);

// console.log(
//     "Section 2: Assignment for Lecture 20. Type Conversion and Coercion ends here"
// );

// console.log(
//     "Section 2: Assignment for Lecture 22. Equality Operators: == vs. === starts here"
// );

// const numNeighbours = Number(
//     prompt(`How many neighbour countries does your country have?`)
// );

// if (numNeighbours === 1) {
//     console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//     console.log("More than 1 border");
// } else {
//     console.log("No borders");
// }

// console.log(
//     "Section 2: Assignment for Lecture 22. Equality Operators: == vs. === ends here"
// );

// console.log(
//     "Section 2: Assignment for Lecture 24. Logical Operators starts here"
// );

// const language = "latvian";
// const people = 1;
// const isIsland = false;

// if (language === "english" && people < 50 && !isIsland) {
//     console.log("You should live in Portugal :)");
// } else {
//     console.log("Portugal does not meet your criteria :(");
// }

// console.log(
//     "Section 2: Assignment for Lecture 24. Logical Operators ends here"
// );

console.log(
    "Section 2: Assignment for Lecture 26. The switch Statement starts here"
);

const language = "latvian";

switch (language) {
    case "chinese":
    case "mandarin":
        console.log("MOST number of native speakers");
        break;
    case "spanish":
        console.log("2nd place in number of native speakers");
        break;
    case "english":
        console.log("3rd place");
        break;
    case "hindi":
        console.log("Number 4");
        break;
    case "arabic":
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great language too :D");
        break;
}

console.log(
    "Section 2: Assignment for Lecture 26. The switch Statement ends here"
);
