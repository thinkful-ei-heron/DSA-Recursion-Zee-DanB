function fibThis (num) {
  if(seq.length === num) return "";
  let seq = '1'
  return seq = seq[num-(num)] + seq[num-(num-1)] + fibThis(num)
}

console.log(fibThis(5))

// input: 5
// output: 1, 1, 2, 3, 5,
//
// input: 10
// output: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
//
// a + a
// a + b
//
// input 
