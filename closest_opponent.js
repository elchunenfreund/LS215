// given a list of opponents determain the closest

// input; a object literal with opponents and user position as integer
// output; the integer of the closest opponent

// rulles;
// if two opponents are same distence return the higher one,
// if no opponents are given return 'null'
// an opponent can have a number of thier position or be null if incative
// at least one opponet will always be active
// the keys can be anything

// Data structures
// i will create a object literal when iterating over the oponets

// Algorithm
// create an array of the opponent values since we don't need the keys
// - remove the null values from the array
// iterate over them (with index) adding the first one to the results object,
//  - save the distence to a variable
//  - if the distnce is less the current key have the key be distance and the positon be the value
//  - if the distence allready exists change the value if the position is greater
// - return result key

// code
function findClosestOpponent(opponents, myPosition) {
  let positions = Object.values(opponents).filter(v => v !== null);
  if (positions.length === 0) return null;

  let result = { position: null, distance: Infinity };

  positions.forEach(pos => {
    const d = Math.abs(pos - myPosition);
    if (d < result.distance || (d === result.distance && pos > result.position)) {
      result.distance = d;
      result.position = pos;
    }
  });

  return result.position;
}

// test case

console.log(findClosestOpponent({
  "Opponent 1" : 1,
  "Opponent 2" : 15,
  "Opponent 3" : 37,
  "Opponent 4" : null
}, 10)); // 15

console.log(findClosestOpponent({
  "Opponent 1a" : 1,
  "Opponent 1b" : 5
}, 3)); // 5 same distence return the highest position

console.log(findClosestOpponent({
  "Opponent 1a" : 1, "Opponent 1b" : 5,
  "Opponent 1c" : 50, "Opponent 1d" : 100, "Opponent 1e" : null
}, 150)); // 100 closest with one null value

console.log(findClosestOpponent({}, 74)); // null since we were given no opponents

console.log(findClosestOpponent({
  "Atlas" : 1,
  "Luna" : 15,
  "" : 37
}, 10)); // 15

console.log(findClosestOpponent({
  "Opponent 1a" : null, "Opponent 1b" : 5, "Opponent 1c" : null,
  "Opponent 1d" : null, "Opponent 1e" : 200, "Opponent 1f" : 400
}, 300)); // 400


