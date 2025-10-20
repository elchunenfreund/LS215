// **Problem/Explanation**
// Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages. Other than digits,
// the number may also contain special character such as spaces, dash, dot, and parentheses that should be ignored.

// The rules are as follows:

// If the phone number is less than 10 digits, assume that it is a bad number.
// If the phone number is 10 digits, assume that it is good.
// If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
// If the phone number is 11 digits and the first number is not 1, then it is a bad number.
// If the phone number is more than 11 digits, assume that it is a bad number.
// For bad numbers, just a return a string of 10 0s.
// we are assuming tha the numeber can not have more more characters then the ones specified

// input: a string of numbers that can contain spaces, dashes, dots, parentheses, and can contain more then
// otput; a 10 digit numeber.

// **data structure**
// strings

// **algorithm**
// seems simple...
// first format the string to make it easier to check
// first check if the string is valid
  // using a if statement that will check or length
    // if it is less then 10
        // return false or empty
    // if it is more
      // check if it is exactly 11 and beginns with a '1'
        // if yes return the string
        // if not return zeroes
    // if is the correct length return the string


// if it is not return zeroes
// if it is format it
  // using replace with a regex /[\.- ()]/g
  // return the formated string

function formatNumber(str) {
  let formatedStr = str.replace(/\D/g, '')
  if (formatedStr.length === 10) {
    return formatedStr
  } else if (formatedStr.length === 11 && formatedStr[0] === '1') {
    return formatedStr.slice(1)
  } else {
    return '0000000000'
  }
}

// Test cases
console.log(formatNumber('1234567890') === '1234567890') // 10 digit num
console.log(formatNumber('11234567890') === '1234567890') // good 11 digit num (begins with 1)
console.log(formatNumber('21234567890') === '0000000000') // bad 11 digit num
console.log(formatNumber('123456789') === '0000000000') // 9 digit num
console.log(formatNumber('112345678900') === '0000000000') // 12 digit num beginning with 1
console.log(formatNumber('123-456-7890') === '1234567890') // good numebr with dashes
console.log(formatNumber('123 456 7890') === '1234567890') // good numebr with spaces
console.log(formatNumber('123)456())7890') === '1234567890') // good numebr with perenthses
console.log(formatNumber('123.456.7890') === '1234567890') // good numebr with dots
console.log(formatNumber('123-456). 7890') === '1234567890') // good numebr with dashes
console.log(formatNumber('123-456)abc. 7890') === '1234567890') // good numebr with dashes












