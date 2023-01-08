console.log("Section 3: Lecture 38. Coding Challenge #1 starts here");

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins wins (${avgDolphins} vs ${avgKoalas}) `);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas wins (${avgKoalas} vs ${avgDolphins}) `);
    }
}

checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49));
checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));

console.log("Section 3: Lecture 38. Coding Challenge #1 ends here");
