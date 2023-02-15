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


// The wildcard character . will match any one character. The wildcard is also called dot and period. You can use the wildcard character just like any other character in the regex. 
//For example, if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words.
// let humStr = "I'll hum a song";
// let hugStr = "Bear hug";
// let huRegex = /hu./;
// huRegex.test(humStr);
// huRegex.test(hugStr);
// Both of these test calls would return true.
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
 result = unRegex.test(exampleStr);

// For example, you want to match bag, big, and bug but not bog. 
//You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters a, i, or u.
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
 result = quoteSample.match(vowelRegex); // Change this line
console.log(result);

// You saw how you can use character sets to specify a group of characters to match, but that's a lot of typing when you need to match a 
// large range of characters (for example, every letter in the alphabet). Fortunately, there is a built-in feature that makes this short and simple.
// Inside a character set, you can define a range of characters to match using a hyphen character: -.
// For example, to match lowercase letters a through e you would use [a-e].
 quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/g; // Change this line
 result = quoteSample.match(alphabetRegex); // Change this line
console.log(result);
 quoteSample = "Blueberry 3.141592653s are delicious.";
 myRegex = /[h-s2-6]/gi; // Change this line
 result = quoteSample.match(myRegex); // Change this line

 let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou1-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line