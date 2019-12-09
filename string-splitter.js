//function stringSplit(str){
//  let i = str.indexOf('/')
//  if (i === 0) str.slice(0, i+1)
//  if(str.length === 0 ) return []
//  return [str.substring(0, i), ...stringSplit(str.slice(i+1))]
//}
//
//console.log(stringSplit('02/20/2020/'))


//function stringSplit(str){
//  let i = str.indexOf('/')
//  console.log(i)
//  if (i === -1) str.slice(i)
//  if(str.length === 0 ) return []
//
//  //  return [str.substring(0, i), ...stringSplit(str.slice(i+1))]
//  console.log(str.slice(i+1))
//}
//
//console.log(stringSplit('2020'))
//
//

function stringSplit(str){
  let i = str.indexOf('/')
  if (i === 0) str.slice(0, i+1)
  if (i === -1) str.padEnd('/')
  if(str.length === 0 ) return []
  console.log(str)
  return [str.substring(0, i), ...stringSplit(str.slice(i+1))]
}

console.log(stringSplit('02/20/2020/'))
