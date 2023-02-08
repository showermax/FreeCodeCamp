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