function buyFruit(arr) {
  let result = []
  for (let index = 0; index < arr.length; index += 1) {
    for (let count = 0; count < arr[index][1]; count += 1) {
      result.push(arr[index][0]);
    }
  }
  return result
}

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]