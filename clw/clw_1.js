const numbers = [1, 2, 3, 4, 5];
numbers.map((number) => console.log(number * 2));

console.log("===================");

const scores = [250, 300, 350, 200, 400, 180, 160];
const scoresGreaterthan300 = scores.filter((score) => score >= 300);
console.log(scoresGreaterthan300);

const sum = [2000, 3000, 400, 100, 600];
const total = sum.reduce((acc, sum) => acc + sum, 0);
console.log(total);

const colors = ["blue", "yellow", "red"];
colors.push("green");
console.log(colors);
