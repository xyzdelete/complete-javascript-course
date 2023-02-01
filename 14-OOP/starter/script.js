"use strict";

console.log("Coding Challenge #2");

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    get speedUS() {
        // km/h to mi/h
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        // convert mi/h to km/h and store it
        this.speed = speed * 1.6;
    }

    accelerate() {
        console.log(`${this.make} going at ${(this.speed += 10)} km/h`);
    }
    brake() {
        console.log(`${this.make} going at ${(this.speed -= 5)} km/h`);
    }
}

const car1 = new CarCl("Ford", 120);
console.log(car1.speed);
console.log(car1.speedUS);
console.log((car1.speedUS = 120));
console.log(car1.speed);
car1.accelerate();
console.log(car1.speed);
car1.accelerate();
console.log(car1.speed);
car1.brake();
