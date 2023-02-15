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

// createImage("./img/img-1.jpg")
//     .then((img) => {
//         wait(2).then(() => {
//             console.log("Waited for 2 seconds");
//             img.style.display = "none";
//             createImage("./img/img-2.jpg").then((img) => {
//                 wait(2).then(() => {
//                     img.style.display = "none";
//                 });
//             });
//         });
//     })
//     .catch((err) => console.error(err));

// async function loadNPause() {
//     try {
//         let img = await createImage("./img/img-1.jpg");
//         await wait(2);
//         console.log("Waited for 2 seconds");
//         img.style.display = "none";
//         img = await createImage("./img/img-2.jpg");
//         await wait(2);
//         img.style.display = "none";
//     } catch (err) {
//         console.error(err);
//     }
// }

// loadNPause();

async function loadAll(imgArr) {
    try {
        const imgs = imgArr.map(async function (img) {
            return await createImage(img);
        });
        const data = await Promise.all(imgs);
        data.forEach((img) => {
            img.classList.add("parallel");
        });
    } catch (err) {
        console.error(err);
    }
}

loadAll(["./img/img-1.jpg", "./img/img-2.jpg", "./img/img-3.jpg"]);
