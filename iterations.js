// Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.
// Setup
const myArray = [];
let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}

// Only change code below this li// Setup
const myArray = [];
for (let x = 1; x < 6; x++) {
  myArray.push(x);
}
// Only change code below this linene
// Setup
const myArray = [];
for (let i = 1; i < 10; i+=2){
  myArray.push(i);
}
// Only change code below this line

// Setup
const myArray = [];
for (let i = 9; i > 0; i-=2) {
  myArray.push(i);
}
// Only change code below this line

// Setup
const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total+=myArr[i];
}
// Only change code below this line

function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
  for (let i = 0; i < arr.length; i++){
    for (let j= 0; j < arr[i].length; j++) {
      product*=arr[i][j];
    }
  }
    // Only change code above this line
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

 // Change the while loop in the code to a do...while loop so the loop will push only the number 10 to myArray, and i will be equal to 11 when your code has finished running.
  // Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
} while (i < 5);

//Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.
function sum(arr, n) {
  // Only change code below this line
if (n <= 0) {
  return 0;
 } else { return sum(arr, n - 1) + arr [n-1]}
  // Only change code above this line
}

// Profile Lookup

// We have an array of objects representing different people in our contacts lists.

// A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

// The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

// If both are true, then return the "value" of that property.

// If name does not correspond to any contacts then return the string No such contact.

// If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
for (let i = 0; i < contacts.length; i++) {
  if (contacts[i].firstName == name)  {
    if (contacts[i].hasOwnProperty(prop)){
      return contacts[i][prop]; }
      else {return "No such property";}
} 
}
return "No such contact";
}

  // Only change code above this line

lookUpProfile("Akira", "likes");
console.log(lookUpProfile("Kristian", "likes"));