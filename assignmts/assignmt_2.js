/*
- Given const str = "Nigeria is awesome";
- Extract "Nigeria" using substring().
- Extract "awesome" using slice().
- Get "is" using slice().

*/
const str = "Nigeria is awesome";

const nigeria = str.substring(0, 7);
console.log(nigeria);

const awesome = str.slice(-7);
console.log(awesome);

const is = str.slice(-10, -7);
console.log(is);
