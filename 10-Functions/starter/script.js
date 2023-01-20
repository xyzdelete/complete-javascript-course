"use strict";

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};

const greet2 = (greeting) =>
    function (name) {
        console.log(`${greeting} ${name}`);
    };

const greeterHey = greet("Hey");
greeterHey("Arturs");
greeterHey("Steven");

greet("Hello")("Arturs");
greet2("Hello")("Arturs");
