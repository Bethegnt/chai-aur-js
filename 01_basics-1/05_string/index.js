const name = "gagan"
const repoCount = 50

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //Template Literals

const gameName = new String('gagan-com')

console.log(gameName[0]);
console.log(gameName.__proto__);


/*
String Methods :--
toUpperCase(): Converts the string to uppercase.
toLowerCase(): Converts the string to lowercase.
trim():        Removes leading and trailing whitespace.
split():       Splits the string into an array of substrings based on a specified separator.
substring():   Returns a portion of the string.
indexOf():     Finds the index of a specified substring.
replace():     Replaces specified substrings with other substrings.
*/

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "      gagan       "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://gagan.com/gagan%20tyagi"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));