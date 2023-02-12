"use strict";

console.log(`Getting position`);

const getPosition = function () {
    return new Promise(function (resolve, reject) {
        // navigator.geolocation.getCurrentPosition(
        //     (position) => resolve(position),
        //     (err) => reject(err)
        // );
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

getPosition().then((pos) => console.log(pos));

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data, className = "") {
    const html = `
    <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
            ).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
                data.currencies[0].name
            }</p>
          </div>
        </article>
    `;

    countriesContainer.insertAdjacentHTML("beforeend", html);
    // countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
    countriesContainer.insertAdjacentText("beforeend", msg);
    // countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = "Something went wrong") {
    return fetch(url).then((response) => {
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

        return response.json();
    });
};

const getCountryData = function (country) {
    // Country 1
    getJSON(`https://restcountries.com/v2/name/${country}`, `Country not found`)
        .then((data) => {
            renderCountry(data[0]);
            const neighbour = data[0].borders?.[0];

            if (!neighbour) throw new Error("No neighbour found!");

            // Country 2
            return getJSON(
                `https://restcountries.com/v2/alpha/${neighbour}`,
                "Country not found"
            );
        })
        .then((data) => {
            renderCountry(data, "neighbour");
        })
        .catch((err) => {
            console.error(`${err}`);
            renderError(`Something went wrong ${err.message}. Try again!`);
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        });
};

// btn.addEventListener("click", function () {
//     getCountryData("portugal");
// });

function whereAmI() {
    getPosition()
        .then((pos) => {
            const { latitude: lat, longitude: lng } = pos.coords;
            return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=`);
        })
        .then((response) => {
            console.log(response);

            if (!response.status === 200)
                throw new Error(`Error with code 403`);

            return response.json();
        })
        .then((json) => {
            console.log(json);
            console.log(`Your are in ${json.city},${json.country}`);
            getCountryData(json.country);
        })
        .catch((err) => {
            console.log(`${err}`);
        });
}

// whereAmI({ lat: 52.508, lng: 13.381 });
// whereAmI({ lat: 19.037, lng: 72.873 });

btn.addEventListener("click", whereAmI);
