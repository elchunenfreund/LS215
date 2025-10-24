// Write a function that displays an 8-pointed star in an nxn grid, where n is an odd integer that is supplied as an
// argument to the function. The smallest such star you need to handle is a 7x7 grid (i.e., when n is 7).

// input; odd int
// output star

// data structure many loops...

// algorithm
// create two loops first half and the second half
// first half will be a for(let spaces = int / 2; spaces >= 0; spaces -= 1) inner spaces
// will need to increment the padding with every iteration
// console.log(' '.repeat(padding) + '*' + ' '.repeat(spaces) + ' '.repeat(padding))
// and the way down will have the spaces increment and the padding decrement with every iteration

// CODE
function star(int) {
  let star = '*'
  let space = ' '
  let padding = 0

  for(let spaces = (int / 2) - 1; spaces > 0; spaces -= 1) {
    console.log(space.repeat(padding) + star + space.repeat(spaces) + star + space.repeat(spaces) + star)
    padding += 1
  }
  console.log(star.repeat(int))

  padding = (int / 2) - 1
  for(let spaces = 0; spaces < (int / 2) - 1; spaces += 1) {
    console.log(space.repeat(padding) + star + space.repeat(spaces) + star + space.repeat(spaces) + star)
    padding -= 1
  }
}

star(7)
