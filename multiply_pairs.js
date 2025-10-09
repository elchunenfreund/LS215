function multiplyAllPairs (arr1, arr2) {
  const result = [];
  arr1.forEach(firstInt => {
    arr2.forEach(secondInt => result.push(firstInt * secondInt));
  });
  return result.sort((a, b) => a - b);
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]