"use strict";

console.log("Coding Challenge #3");

function Car(make, speed) {
    this.make = make;
    // km/h
    this.speed = speed;
}

Car.prototype.accelerate = function () {
    console.log(`${this.make} going at ${(this.speed += 10)} km/h`);
};

Car.prototype.brake = function () {
    console.log(`${this.make} going at ${(this.speed -= 5)} km/h`);
};

function EV(make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
}

EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge -= 1;
    console.log(
        `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge} %`
    );
};

const carTesla = new EV("Tesla", 120, 23);
console.log(carTesla.make);
console.log(carTesla.speed);
console.log(carTesla.charge);
carTesla.chargeBattery(50);
console.log(carTesla.charge);
carTesla.accelerate();
carTesla.accelerate();
carTesla.accelerate();
carTesla.brake();
