"use strict";

const flight = "LH234";
const arturs = {
    name: "Arturs Anikins",
    passport: 12312321,
};

const checkIn = function (flightNum, passenger) {
    flightNum = "LH999";
    passenger.name = "Mr. " + passenger.name;

    if (passenger.passport === 12312321) {
        alert("Check in");
    } else {
        alert("Wrong passport!");
    }
};

// checkIn(flight, arturs);
// console.log(flight);
// console.log(arturs);

// Is the same as doing...
// const flightNum = flight;
// const passenger = arturs;

const newPassport = function (person) {
    person.passport = Math.random() * 100000000;
};

newPassport(arturs);
checkIn(flight, arturs);
