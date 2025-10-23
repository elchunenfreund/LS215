// problem
// Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument
// to the function. You may assume that the argument will always be an odd integer.

// algorithem
// use two function one for the upper half and another for the lower half
// for the upper half
//  - have a incrementing loop and pass the argument to repeat to log the spaces and diomonds,
//  - have two valriables one will increment and the other will decrement with every iteration
//    - initialize let spaces = Math.floor(size / 2)
//    - for the first loop for(let spaces = 1; counter < size; int)
//    - console.log(''.repeat(spaces), '*'.repeat(spaces),''.repeat(spaces))
//    - decncrement the spaces variable
// log the spaces
// for the lower half do the oposite
// have for loop increment the spaces and the diomond will be decremented

function diamond(n) {
  if (arguments.length !== 1) throw new Error('Expected 1 argument');

  let spaces = (n - 1) / 2;
  for (let diamonds = 1; diamonds <= n; diamonds += 2) {
    console.log(' '.repeat(spaces) + '*'.repeat(diamonds));
    spaces -= 1;
  }

  spaces = 1;
  for (let diamonds = n - 2; diamonds > 0; diamonds -= 2) {
    console.log(' '.repeat(spaces) + '*'.repeat(diamonds));
    spaces += 1;
  }
}

// test case
diamond(1); // logs * etc
diamond(3); // logs a diamond with 3 diamonds at the center
diamond(9); // loggs a porblem with 9 diomonda at the end




