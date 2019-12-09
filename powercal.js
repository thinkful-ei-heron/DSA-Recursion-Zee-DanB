function powerCalculator(a, b){
  if(b < 0) return "exponent should be >=0"
  if(b === 1) return a
  return(powerCalculator(a*a, b-1))

}

console.log(powerCalculator(10, 3))
