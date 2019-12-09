function stringSplit(str){
  let i = str.indexOf('/')
  if (i === 0) str.slice(0, i+1)
  if(i === -1) return [str]
  return [str.slice(0, i), ...stringSplit(str.slice(i+1))]
}

console.log(stringSplit('02/20/2020'))
