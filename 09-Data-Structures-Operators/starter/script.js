"use strict";

const rest = new Map();
rest.set("Name", "Classico Italiano");
rest.set(1, "Fireze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

const ordersSet = new Set(["Pasta", "Pizza", "Risotto", "Pasta", "Pizza"]);
console.log(ordersSet);

console.log(
    rest
        .set("categories", ["Pasta", "Pizza", "Risotto", "Pasta", "Pizza"])
        .set("Open", 11)
        .set("Close", 23)
        .set(true, "We are open :D")
        .set(false, "We are closed :(")
);

console.log(rest.get("Name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get("Open") && time < rest.get("Close")));

console.log(rest.has("categories"));
rest.delete(2);
rest.clear();
console.log(rest.size);
const arr = [1, 2];
rest.set(arr, "Test");
console.log(rest);

console.log(rest.get(arr));
rest.clear();
console.log(rest.set(document.querySelector("h1"), "Heading"));
