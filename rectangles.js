let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

const totalArea = (arr) => {
  return arr.reduce((accum, subArr) => {
    return accum + subArr[0] * subArr[1];
  }, 0)
}

const totalSquareArea = (arr) => {
  const squares = arr.filter((arr) => arr[0] === arr[1])
  return totalArea(squares)
}