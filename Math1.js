//Change randomFraction to return a random number instead of returning 0.
function randomFraction() {

    // Only change code below this line
  
    return Math.random();
  
    // Only change code above this line
  }
  console.log(randomFraction());

  function randomWholeNum() {

    // Only change code below this line
  
    return Math.floor(Math.random()*10);
  }

 // Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.
 function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  // Only change code above this line
}
