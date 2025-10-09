'strict mode'

function octalToDecimal(numberString) {
  let reversedArr = numberString.split('').reverse().map((str) => Number(str))
  let result = 0
  for(let i = 0; i < reversedArr.length; i++) {
    result += reversedArr[i] * 8 ** i;
  }
  return result
}

octalToDecimal('1');           // 1
octalToDecimal('10');          // 8
octalToDecimal('130');         // 88
octalToDecimal('17');          // 15
octalToDecimal('2047');        // 1063
octalToDecimal('011');         // 9