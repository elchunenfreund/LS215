function myMap(array, func) {
  const result = [];
  array.forEach((element, index) => {
    result.push(func(element, index, array));
  });
  return result;
}

let plusOne = n => n + 1;
myMap([1, 2, 3, 4], plusOne);       // [ 2, 3, 4, 5 ]
