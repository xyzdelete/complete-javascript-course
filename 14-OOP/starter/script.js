"use strict";

// class declaration
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Methods will be added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.fullName}`);
    }

    get age() {
        return 2037 - this.birthYear;
    }

    set fullName(name) {
        console.log(name);
        if (name.includes(" ")) this._fullName = name;
        else alert(`${name} is not a full name`);
    }

    // Set a property that already exists
    get fullName() {
        return this._fullName;
    }

    // Static method
    static hey() {
        console.log("Hey there");
    }
}

class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        // Always needs to happen first!
        super(fullName, birthYear, course);
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }

    calcAge() {
        console.log(
            `I'm ${
                2037 - this.birthYear
            } years old, but as a student I fell more like ${
                2037 - this.birthYear + 10
            }`
        );
    }
}

const martha = new StudentCl("Martha Jones", 2012, "CS");
martha.introduce();
martha.calcAge();
