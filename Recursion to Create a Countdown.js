// We have defined a function called countdown with one parameter (n). The function should use recursion to return an array containing the integers n through 1 based on the n parameter. If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself and must not use loops of any kind.
// Only change code below this line
function countdown(n){
    if (n < 1) {
    return []}
    else {
      const arr = countdown(n - 1) ;
      arr.unshift(n);
      return arr;
    }
  }
  console.log(countdown(5)); 
  // Only change code above this line

  //The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.
  
  function rangeOfNumbers(startNum, endNum) {
    if (startNum == endNum){
    return [startNum];
    } else {
        const arr = rangeOfNumbers(startNum + 1, endNum) ;
        arr.unshift(startNum);
        return arr;
      }
  
  };
  console.log(rangeOfNumbers(1, 7));