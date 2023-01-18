"use strict";

const game = {
    team1: "Bayern Munich",
    team2: "Borrussia Dortmund",
    players: [
        [
            "Neuer",
            "Pavard",
            "Martinez",
            "Alaba",
            "Davies",
            "Kimmich",
            "Goretzka",
            "Coman",
            "Muller",
            "Gnarby",
            "Lewandowski",
        ],
        [
            "Burki",
            "Schulz",
            "Hummels",
            "Akanji",
            "Hakimi",
            "Weigl",
            "Witsel",
            "Hazard",
            "Brandt",
            "Sancho",
            "Gotze",
        ],
    ],
    score: "4:0",
    scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
    date: "Nov 9th, 2037",
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// 1)

for (let i = 0; i < game.scored.length; i++) {
    console.log(`Goal ${i + 1}: ${game.scored[i]}`);
}

// 2)
let sum = 0;
console.log(Object.entries(game.odds));
for (const [i, value] of Object.entries(game.odds)) {
    sum += value;
    console.log(i, value);
}
console.log(sum);
const average = sum / Object.entries(game.odds).length;
console.log(`Average: ${average}`);

// 3)

for (const [i, value] of Object.entries(game.odds)) {
    game[i] ?? console.log(`Odd of draw: ${value}`);
    game[i] && console.log(`Odd of victory ${game[i]}: ${value}`);
}

// 4)
let scorers = {};
console.log(game.scored);
for (let i = 0; i < game.scored.length; i++) {
    let goals = 1;
    let scoredName = game.scored[i];
    scorers[scoredName] = goals;
    for (let j = 0; j < game.scored.length; j++) {
        if (scoredName === game.scored[j] && i != j) {
            scorers[scoredName] = ++goals;
        }
    }
}
console.log(scorers);
