let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

// need to get to 'e'
//
function mazeNav (array, a, b) {
  console.log(a, b)
  if(array[a][b] === 'e') return " WIN"
  if(array[a][b+1] === undefined) return "D" + mazeNav(array, a + 1, b)
  if(array[a + 1][b] === undefined) return "R" + mazeNav(array, a + 1, b)
  if(array[a][b+1] !== "*") return "R" + mazeNav(array, a, b + 1)
  if(array[a + 1][b] !== "*") return "D" + mazeNav(array, a + 1, b)
}

console.log(mazeNav(mySmallMaze, 0, 0))
console.log(mazeNav(maze, 0, 0))

// Start at array[0][0]
// If array[x][i+1] is " " return L + array[0][i+1]
// If array[x+1][i] is " " return D + array[x+1][i]
// If array[x][i-1] is " " return R + array[x][i-1]

