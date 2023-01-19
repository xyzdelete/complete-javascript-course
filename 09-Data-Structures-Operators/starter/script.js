"use strict";

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const btn = document.querySelector("button");
console.log(btn);
const textarea = document.querySelector("textarea");
console.log(textarea);

btn.addEventListener("click", function () {
    let text = textarea.value
        .trim()
        .toLowerCase()
        .replaceAll(" ", "")
        .split("\n");
    console.log(text);

    let tick = "✅";
    for (const subStr of text) {
        const s = subStr.slice(subStr.indexOf("_")).replaceAll("_", "");
        const camelStr = s.replace(s[0], s[0].toUpperCase());

        const finalStr =
            (subStr.slice(0, subStr.indexOf("_")) + camelStr).padEnd(20, " ") +
            tick;
        console.log(finalStr);
        tick += "✅";
    }
});
