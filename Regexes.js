let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
console.log(result);

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
 result = petRegex.test(petString);


// ou can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the i flag. 
//You can use it by appending it to the regex. An example of using this flag is /ignorecase/i. 
//This regex can match the strings ignorecase, igNoreCase, and IgnoreCase.
 myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
 result = fccRegex.test(myString);

// To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.
// Here's an example:
// "Hello, World!".match(/Hello/);
// let ourStr = "Regular expressions";
// let ourRegex = /expressions/;
// ourStr.match(ourRegex);
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
 result = extractStr.match(codingRegex); // Change this line

// To search or extract a pattern more than once, you can use the global search flag: g.

// let repeatRegex = /Repeat/g;
// testStr.match(repeatRegex);

// And here match returns the value ["Repeat", "Repeat", "Repeat"]
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result1 = twinkleStar.match(starRegex); // Change this line
result = "Twinkle, twinkle, little star".match(/twinkle/gi);
console.log(result1, result, "Twinkle, twinkle, little star".match(/twinkle/gi));
