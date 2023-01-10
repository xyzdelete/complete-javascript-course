"use strict";

// Data 1:

// const maxTemps = [17, 21, 23];
// Data 2:
const maxTemps = [12, 5, -5, 0, 4];

function printForecast(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += `... ${arr[i]}ºC in ${i + 1} days `;
    }
    console.log(str);
}

printForecast(maxTemps);
