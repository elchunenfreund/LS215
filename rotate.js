function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];

  let result = arr.slice(1);
  result.push(arr[0]);
  return result;
}

function rotateRightmostDigits(int, digit) {
  let intArr = String(int).split('')
  let shiftedDigit = intArr.splice(intArr.length - digit, 1)
  intArr.push(shiftedDigit[0])
  return Number(intArr.join(''))
}


function maxRotation(int) {
  let intStrArr = String(int).split('');
  let result = int;

  for (let i = intStrArr.length; i > 0; i--) {
    result = rotateRightmostDigits(result, i);
  }

  return result;
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845