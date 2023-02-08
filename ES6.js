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
// Only change code below this line
//const today = HIGH_TEMPERATURES.today;
//const tomorrow = HIGH_TEMPERATURES.tomorrow;
const {today, tomorrow} = HIGH_TEMPERATURES;
// Only change code above this line