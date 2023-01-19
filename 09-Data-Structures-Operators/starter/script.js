"use strict";

// Split and join
console.log("a+very+nice+string".split("+"));
console.log("Arturs Anikins".split(" "));

const [firstName, lastName] = "Arturs Anikins".split(" ");
console.log(firstName, lastName);

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
    const names = name.split(" ");

    const namesUpper = [];

    for (const n of names) {
        // namesUpper.push(n[0].toUpperCase() + n.slice(1));
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(namesUpper.join(" "));
};
capitalizeName("jessica ann smith davis");
capitalizeName("Arturs Anikins");

// Padding
const message = "Go to gate 23!";
console.log(message.padStart(25, "+").padEnd(35, "+"));
console.log("Arturs".padStart(25, "+").padEnd(35, "+"));

function maskCreditCard(number) {
    const str = number + "";
    const last = str.slice(-4);
    return last.padStart(str.length, "*");
}

console.log(maskCreditCard(3423423423));
maskCreditCard("2312312312312");

// Repeat
const message2 = "Bad weather... All Departures Delayed... ";
console.log(message2.repeat(5));

const planesInLine = function (n) {
    console.log(`There are ${n} planes in line ${"✈️".repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);
