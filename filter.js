function myFilter(array, func) {
  const result = []
  array.forEach((element, index, array) => {
    if (func(element, index, array)) {
      result.push(element, index, array)
    }
  })
  return result
}

let isPythagoreanTriple = function (triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

// myFilter([{ a: 3, b: 4,  c: 5 },
//           { a: 5, b: 12, c: 13 },
//           { a: 1, b: 2,  c: 3 },], isPythagoreanTriple);

// // returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]

function isMultipleOfThreeOrFive(value) {
  return value % 5 === 0 || value % 3 === 0;
}

function multiplesOfThreeOrFive(values) {
  myFilter(values, isMultipleOfThreeOrFive)
}

function isMultipleOfThreeOrFive(value) {
  return value % 5 === 0 || value % 3 === 0;
}
