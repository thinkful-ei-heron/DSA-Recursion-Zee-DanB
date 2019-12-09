function fibThis (num) {
  if(num <= 0) return 0;
  if(num <= 2) return 1;
  return fibThis(num-1) + fibThis(num-2)
}

console.log(fibThis(11))

// input: 5
// output: 1, 1, 2, 3, 5,
//
// input: 10
// output: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
//
// a + a
// a + b

//1 + 1 = 2
//    1 + 2 = 3
//        2 + 3 = 5
