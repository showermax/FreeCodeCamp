const doubler = item => item * 2;
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);

var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
  };
  
  
  // Arrow Functions
  const myConcat1 = (arr1, arr2) => arr1.concat(arr2);
  console.log(myConcat([1, 2], [3, 4, 5]));
  console.log(myConcat1([1, 2], [3, 4, 5]));
  
//params
  //Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.
  //const increment = (number, value) => number + value;
const increment = (number, value = 1) => number + value;

// const sum = (x, y, z) => {
//   const args = [x, y, z];
//   return args.reduce((a, b) => a + b, 0);
// }
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(0, 1, 2));


//Copy all contents of arr1 into another array arr2 using the spread operator.
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);
// Destructuring Assignment
//Use Destructuring Assignment to Extract Values from Objects
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
//const today = HIGH_TEMPERATURES.today;
//const tomorrow = HIGH_TEMPERATURES.tomorrow;
const {today, tomorrow} = HIGH_TEMPERATURES;

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
  
//const lowToday = LOCAL_FORECAST.today.low;
//const highToday = LOCAL_FORECAST.today.high;
const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST
const { tomorrow: {high: hightomorrow}, yesterday: {low: lowyesterday}} = LOCAL_FORECAST
console.log(lowToday, highToday, hightomorrow, lowyesterday);
//Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.
let a = 8, b = 6;
[a, b] = [b, a];
//destructuring & spread
function removeFirstTwo(list) {
  // Only change code below this line
  const [,,...shorterList] = list; // Change this line
  // Only change code above this line
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = ({max, min}) => (max + min) / 2.0; 





// Use template literal syntax with backticks to create an array of list element (li) strings. Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning. The makeList function should return the array of list item strings.

// Use an iterator method (any kind of loop) to get the desired output (shown below).

// [
//   '<li class="text-warning">no-var</li>',
//   '<li class="text-warning">var-on-top</li>',
//   '<li class="text-warning">linebreak</li>'
// ]

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // change code below this line
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  // change code above this line
  return failureItems;
}

const failuresList = makeList(result.failure);


//Use object property shorthand with object literals to create and return an object with name, age and gender properties.
const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
   // name: name,
   // age: age,
  // gender: gender
name,
age,
gender
  };
  // Only change code above this line
};