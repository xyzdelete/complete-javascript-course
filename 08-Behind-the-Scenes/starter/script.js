"use strict";

var firstName = "Matilda";

const arturs = {
    firsName: "Arturs",
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);

        // const self = this;
        // const isMillenial = function () {
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // };
        // isMillenial();

        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && self.this <= 1996);
        };
        isMillenial();
    },

    greet: () => {
        console.log(this), console.log(`Hey ${this.firstName}`);
    },
};

arturs.greet();
arturs.calcAge();

const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
};

// addArrow(2, 5, 8);
