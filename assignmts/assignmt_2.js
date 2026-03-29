// Que: 1

const str = "Nigeria is awesome";

const nigeria = str.substring(0, 7);
console.log(nigeria);

const awesome = str.slice(-7);
console.log(awesome);

const is = str.slice(-10, -7);
console.log(is);

// Que: 2
const names = "John,Jane,Doe";

const arrNames = names.split(",");
console.log(arrNames);

const strNames = arrNames.join(" ");
console.log(strNames);

const path = "/user/home/docs";
const splitedPath = path.split("/");
console.log(splitedPath);

const home = path.split("/")[2];
console.log(home);

// Que: 3
/*- Given
 */
const email = "user@example.com";

// Get username (user) using split().
const username = email.split("@")[0];
console.log(username);

// Check if it's a .com domain using endsWith().
const isDotCom = email.endsWith(".com");
console.log(isDotCom);

// Replace @ with AT using replace().
const replaceAt = email.replace("@", "AT");
console.log(replaceAt);
