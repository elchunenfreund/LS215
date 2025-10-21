// given a short hand number in a string form return a an array with all posible numbers
// examples of short hand numbers

// "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
// "1-3, 1-2" --> 1, 2, 3, 11, 12
// "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
// "104-2" --> 104, 105, ... 112
// "104-02" --> 104, 105, ... 202
// "545, 64:11" --> 545, 564, 565, .. 611

// posible seperators are ["-", ":", ".."]

// objective is to fill in the missing numbers between the seperators

// we will only get the strings or seperators as arguments

// input; string
// output; array

// algorithem
// fill the numbers containing commas
// fill the numbers with ranges

function fillNumList(str) {
  const array  = convertInputIntoArray(str);
  const values = replaceNumsByRealValue(array);
  const result = convertRangeIntoNumberSequence(values);

  return result;
}

function convertInputIntoArray(str) {
  const string = standardizeRangeDelimiters(str);
  return splitString(string);
}

function standardizeRangeDelimiters(str) {
  return str.replace(/(\.\.|:)/g, '-');
}

function splitString(str) {
  return str.split(',')
            .flatMap(elem => elem.trim().match(/\d+|-/g))
}

function replaceNumsByRealValue(arr) {
  let previousNum = Number(arr[0]);
  let previousDigits;
  let currentNum;
  let numLength;

  return arr.map((numStr, idx) => {
    if (numStr === '-') return numStr;

    numLength   = numStr.length;
    currentNum  = Number(numStr);
    previousDigits = Number(String(previousNum).slice(-numLength));

    let replacedNum = previousNum - previousDigits + currentNum;

    if (
      currentNum < previousDigits
      || (currentNum === previousDigits && idx !== 0)
    ) {
      replacedNum += 10**numLength;
    }

    previousNum = replacedNum;
    return replacedNum;
  });
}

function convertRangeIntoNumberSequence(arr) {
  let sequence = [];

  arr.forEach((num, idx) => {
    if (num === '-') return;

    if (arr[idx + 1] !== '-') {
      sequence.push(num);
    } else {
      let endNum = arr[idx + 2];
      sequence = [...sequence, ...createNumberSequence(num, endNum)]
    }
  });

  return sequence;
}

function createNumberSequence(start, end) {
  const sequence = [];
  for (let num = start; num < end; num += 1) {
    sequence.push(num);
  }

  return sequence;
}

// test cases
// console.log(fillNumbers("1, 3, 7, 2, 4, 1")) // fill the missing numbers
// console.log(fillNumbers("1-3, 1-2")) // both a range and shorthand numbers since there are ',' and '-'
// console.log(fillNumbers("1:5:2")) // 1, 2, 3, 4, 5, 6, ... 12 the ':' acts like a dash
// console.log(fillNumbers("104-2")) // 104, 105, ... 112 since there is a '-' we are expected to fill it up
// console.log(fillNumbers("104-02")) // 104, 105, ... 202 since there is a '0' we need to fill it upto 202
// console.log(fillNumbers("545, 64:11")) // 545, 564, 565, .. 611 after the ',' we need to add the next segnificant number which is 565 and then fill it untill 611
