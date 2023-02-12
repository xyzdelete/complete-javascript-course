"use strict";

// Promisifying setTimeout
function wait(seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
}

function createImage(imgPath) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement("img");
        img.setAttribute("src", imgPath);
        img.addEventListener("load", () => {
            document
                .querySelector(".images")
                .insertAdjacentElement("beforeend", img);
            resolve(img);
        });
        img.addEventListener("error", () => {
            reject(new Error("Error while loading the image "));
        });
    });
}

createImage("./img/img-1.jpg")
    .then((img) => {
        wait(2).then(() => {
            console.log("Waited for 2 seconds");
            img.style.display = "none";
            createImage("./img/img-2.jpg").then((img) => {
                wait(2).then(() => {
                    img.style.display = "none";
                });
            });
        });
    })
    .catch((err) => console.error(err));
