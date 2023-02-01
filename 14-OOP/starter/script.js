"use strict";

console.log("Coding Challenge #4");

class CarCl {
    constructor(make, speed) {
        this.make = make;
        // km/h
        this.speed = speed;
    }
    accelerate() {
        console.log(`${this.make} going at ${(this.speed += 10)} km/h`);
    }
    brake() {
        console.log(`${this.make} going at ${(this.speed -= 5)} km/h`);
    }
    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

class EVCl extends CarCl {
    #charge;
    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }
    accelerate() {
        this.speed += 20;
        this.#charge -= 1;
        console.log(
            `${this.make} going at ${this.speed} km/h, with a charge of ${
                this.#charge
            } %`
        );
        return this;
    }
    brake() {
        this.speed -= 5;
        this.#charge -= 1;
        console.log(
            `${this.make} going at ${this.speed} km/h, with a charge of ${
                this.#charge
            } %`
        );
        return this;
    }
    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }

    getCharge() {
        return this.#charge;
    }
}

const car = new EVCl("Rivian", 120, 23);
console.log(car.make);
console.log(car.speed);
console.log(car.getCharge());
car.chargeBattery(50);
console.log(car.getCharge());
car.accelerate().accelerate().brake().brake();
console.log(car.speedUS);
