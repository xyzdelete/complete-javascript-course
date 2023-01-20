"use strict";

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),

    //1)
    registerNewAnswer(fn) {
        const input = Number(
            prompt(`
            What is your favourite programming  language?
            0: JavaScript
            1: Python
            2: Rust
            3: C++
            (Write option number)
        `)
        );
        input >= 0 && input < 4
            ? (this.answers[input] += 1)
            : alert(`answer ${input} makes no sense`);
        const type = prompt("Display as 'string' or 'array'?");
        fn(type);
    },
    displayResults(type) {
        if (type === "string" || type === "array") {
            type === "array" && console.log(this.answers);
            type === "string" &&
                console.log(`Poll results are ${[...this.answers].toString()}`);
        }
        const arr = type.replaceAll("[", "").replaceAll("]", "").split(",");
        for (let i = 0; i < arr.length; i++) {
            arr[i] = Number(arr[i]);
        }
        arr.length > 0 && console.log(arr, arr.toString());
    },
};

// 2)
document
    .querySelector(".poll")
    .addEventListener(
        "click",
        poll.registerNewAnswer.bind(poll, poll.displayResults.bind(poll))
    );
