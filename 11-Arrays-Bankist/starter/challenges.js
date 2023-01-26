"use strict";

const dogs = [
    { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
    { weight: 8, curFood: 200, owners: ["Matilda"] },
    { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
    { weight: 32, curFood: 340, owners: ["Michael"] },
];

// 1.

dogs.forEach((dog) => (dog.recommendedFood = dog.weight ** 0.75 * 28));
console.log(dogs);

// 2.
const SarahsDog = dogs.find((dog) => dog.owners.includes("Sarah"));
SarahsDog.curFood > SarahsDog.recommendedFood
    ? console.log(`Sarah's dog eats to much!`)
    : console.log(`Sarah's dog eats to little!`);

// 3., 4.
const ownersEatTooMuch = dogs
    .filter((dog) => dog.curFood > dog.recommendedFood)
    .map((dog) => dog.owners);
const ownersEatTooLittle = dogs
    .filter((dog) => dog.curFood < dog.recommendedFood)
    .map((dog) => dog.owners);

console.log(ownersEatTooLittle.flat());
console.log(
    ownersEatTooMuch
        .flat()
        .reduce(
            (str, owner, i, arr) =>
                (str += `${owner}'s ${i + 1 < arr.length ? `and ` : ``}`),
            ""
        ) + "dogs eat to much!"
);
console.log(
    ownersEatTooLittle
        .flat()
        .reduce(
            (str, owner, i, arr) =>
                (str += `${owner}'s ${i + 1 < arr.length ? `and ` : ``}`),
            ""
        ) + "dogs eat to little!"
);

// 5.
console.log(dogs.some((dog) => dog.curFood === dog.recommendedFood));

// 6.
console.log(
    dogs.some(
        (dog) =>
            dog.curFood > dog.recommendedFood * 0.9 &&
            dog.curFood < dog.recommendedFood * 1.1
    )
);

// 7.
console.log(
    dogs.filter(
        (dog) =>
            dog.curFood > dog.recommendedFood * 0.9 &&
            dog.curFood < dog.recommendedFood * 1.1
    )
);

// 8.
console.log(dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood));
console.log(dogs);
