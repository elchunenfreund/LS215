function myOwnEvery(array, func) {
  function myOwnEvery(array, func) {
    for (let i = 0; i < array.length; i += 1) {
      if (!func(array[i])) return false;
    }
    return true;
  }
}

function areAllNumbers(array) {
  return myOwnEvery(array, isANumber);
}

let isAString = value => typeof value === 'string';
myOwnEvery(['a', 'a234', '1abc'], isAString);       // true
