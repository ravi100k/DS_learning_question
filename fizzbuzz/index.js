// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  // console.log(5%3);
  for(let i=1;i <= n; i++){
    // one line solution
    // i%15==0 ? console.log('fizzbuzz') : i%3==0 ? console.log('fizz') : i%5==0 ? console.log('buzz') : console.log(i);

    if ( i % 15 === 0 ) {
      console.log("fizzbuzz")
    }
    else if ( i % 3 === 0 ){
      console.log("fizz")
    }
    else if ( i % 5 === 0 ) {
      console.log("buzz")
    }
    else{
      console.log(i)
    }
  }
}

module.exports = fizzBuzz;
