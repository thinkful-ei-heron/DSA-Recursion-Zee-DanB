//factorial
//
//given a number return all numbers multiplies before it.
//

//input 5
//output 120
//

function factorial (num) {
  if(num === 1) return 1
  return num * factorial(num - 1)
}

console.log(factorial(4))
