function arrayDoubler(array){
if (!array.length) return []
return [array[0]*2, ...arrayDoubler(array.slice(1))]
}

console.log(arrayDoubler([1,2,3]))
