"use strict";

console.log(this);

const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
    console.log(this);
};

calcAge(1991);

const calcAgeArrow = (birthYear) => {
    console.log(2037 - birthYear);
    console.log(this);
};
calcAgeArrow(1998);

const arturs = {
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
    },
};
arturs.calcAge();

const matilda = {
    year: 2017,
};

matilda.calcAge = arturs.calcAge;
matilda.calcAge();

const f = arturs.calcAge;
f();
