function myReduce(array, func, initial) {
  let accumulator = (initial === undefined) ? array[0] : initial;
  let startIndex = (initial === undefined) ? 1 : 0

  for(let i = startIndex; i < array.length; i++) {
    accumulator = func(accumulator, array[i], i, array)
  }
  return accumulator
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

myReduce([5, 12, 15, 1, 6], smallest);           // 1
myReduce([5, 12, 15, 1, 6], sum, 10);            // 49
