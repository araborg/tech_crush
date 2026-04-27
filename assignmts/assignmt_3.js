// Que: 1
console.log("================= 1 ====================");
const numbersArr1 = [2, 4, 6, 8, 10];
numbersArr1.forEach((number) => console.log(number * 2));
console.log(numbersArr1);

console.log("================= 2 ====================");

// Que: 2
const names = ["Esther", "John", "Ada", "Mike"];
names.forEach((names) => console.log("Hello " + names + "!"));
console.log("================= 3 ====================");

const numbersArr2 = [1, 2, 3, 4, 5];
const squaredNum = numbersArr2.map((arr) => arr ** 2);
console.log(squaredNum);

console.log("================= 4 ====================");
const prices = [100, 200, 300];
const applyDiscount = prices.map((price) => (price = price * 0.9));
console.log(applyDiscount);

console.log("================= 5 ====================");
const filterNums = [5, 12, 8, 20, 3];
const numGreaterThan10 = filterNums.filter((num) => num > 10);
console.log(numGreaterThan10);

console.log("================= 6 ====================");
const ages = [15, 22, 17, 30, 18];
const ageAbove18 = ages.filter((age) => age >= 18);
console.log(ageAbove18);

console.log("================= 7 ====================");
const nums = [10, 15, 20, 25, 30];
const numbAbove20 = nums.filter((num) => num > 20);
console.log(numbAbove20);

const findNumbLessThan20AndDouble = nums
	.filter((num) => num <= 20)
	.map((item) => item * 2);
console.log(findNumbLessThan20AndDouble);
