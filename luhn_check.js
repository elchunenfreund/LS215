// The Luhn formula is a simple checksum formula used to validate a variety of identification numbers, such as credit
// card numbers and Canadian Social Insurance Numbers.

// The formula verifies a number against its included check digit, which is usually appended to a partial number to
// generate the full number. This number must pass the following test:

// Counting from the rightmost digit and moving left, double the value of every second digit
// For any digit that thus become 10 or more, subtract 9 from the result
// 1111 becomes 2121
// 8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
// Add all these digits together
// 1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
// 8763 becomes 7733, and 7 + 7 + 3 + 3 is 20
// If the total (the checksum) ends in 0 (put another way, if the total modulo 10 is congruent to 0), then the number
// is valid according to the Luhn Formula; else it is not valid. Thus, 1111 is not valid (as shown above, it comes
// out to 6), while 8763 is valid (as shown above, it comes out to 20).

// Write a program that, given a number in string format, check if it is valid per the Luhn formula. This should treat,
// for example, "2323 2005 7766 3554" as valid. You can ignore all non-numeric characters in the input string.

// so in short we need to iterate over the integer from the second to the last and double every second remove 9 if the
// result is more then 10 then add up all the integers and ensure the number ends in '0'

// input; str with numeric characterd and some others;
// output; boolean value
// rules:
// - there the numbers can be any length
// - there can be non numeric characters but we should remove them

// data structure
// - array (since we need to iterate over the numebr using indexes meybe reversed...)

// algorithm
// - define a candidate arr
// - first format the string to remove all extra characters
// - then split the string with integers into an array and reverse it save it to intArr
// - iterate over the intArr with the index
// - if the index is odd
//    - double the numeber
//    - if the result is more then 10
//      - remove 9
//    - save it to the candidate array
// - use reduce to sum up the candidate array
// - return sum % 10 === 0
//
//

function checkLhun(str) {
  let formatInt = str.replace(/[\D]/g, '')
  let intArr = formatInt.split('').reverse().map((char) => Number(char))
  let candidateArr = intArr.map((num, ind) => {
    if (ind % 2 !== 0) {
        let doubled = num * 2
      if (doubled > 9) {
        num = doubled - 9
      } else {
        num = doubled
      }
    }
    return num
  })

  let sum = candidateArr.reduce((accum, int) => accum + int, 0)
  return sum % 10 === 0
}

// test cases

// valid numbers

// Valid Numbers
console.log(checkLhun('2323 2005 7766 3554') === true)
console.log(checkLhun('79927398713') === true);
console.log(checkLhun('4556737586899855') === true);
console.log(checkLhun('17893729974') === true);
console.log(checkLhun('4417123456789113') === true);
console.log(checkLhun('8763') === true);

// Invalid Numbers
console.log(checkLhun('1234567890123456') === false);
console.log(checkLhun('49927398714') === false);





