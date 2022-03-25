// MDN
const string = 'An injury to one is an injury to all.';
console.log(string);

/* Bad String Ex:
const badString1 = This is a test;
const badString2 = 'This is a test;
const badString3 = This is a test';
*/

const badString = string;
console.log(badString);

const sgl = 'Single quotes.';
const dbl = "Double quotes";
console.log(sgl);
console.log(dbl);

// Bad quote ex: const badQuotes = 'What on earth?";

// Escape characters
const bigmouth = 'I\'ve got no right to take my place...';
console.log(bigmouth);

// literal templates
const uName = 'USER'
const greeting = `Hello, ${uName}`;
console.log(greeting);

// Two var concatenation
const one = 'Hello, ';
const two = 'how are you?';
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"


// W3 Schools
console.log(string.length) //37
console.log(string.slice(3 , 16)); //injury to one. Substring (same, no neg), substr (start, len)
console.log(string.slice(-14 , -1)); //injury to all. Negative counts from end of string

let injury = string.slice(3 , 16);
let injuryAll = string.replace("one","all"); //only replaces the first match. use Regex /g for all, "/injury/g"
console.log(injuryAll)

// W3 exercises

let txt ="Hello World!"; //convert text into UPPERCASE
text = txt.toUpperCase();

txt = "I can eat bananas all day";
let x = txt.slice(10, 17);

txt = "Hello World";
txt = txt.replace("Hello", "Welcome");