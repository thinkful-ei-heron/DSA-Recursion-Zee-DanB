function nthTri(num){
  if (num === 0) return num
  return num + nthTri(num - 1)
}
console.log(nthTri(7))
