// Write a function called swap that takes a string as an argument, and returns a new string, where the alphabetic characters have
// ** taken the place of the numeric characters ** , and vice versa.

// rulls
// one argmument will allways be passed
// return an empty string if one is passed
// you need to build a new string
// ignore case
// we need to swap the numebrs and strings and numbers to the spaces where they belong
// if the string beginns with numbers every numebr should take the place of the first char that comes after it

// data structure
// array

// input; str
// output; str

// algorithem
// create two arrays one for strings the other for numbers
// iterate through the string and replace every string with the next number and vice versa in order
// remove the character from the array when it is used
// when one array is empty skip that iteration.

// code
function swap(str) {
  if (str.length === 0) return "";

  const digitStack = (str.match(/\d/g) || []).reverse();
  const letterStack = (str.match(/[a-z]/gi) || []).reverse();

  let result = '';
  for (const char of str) {
    if (/\d/.test(char)) {
      result += letterStack.pop() || char;   // digits get letters
    } else if (/[a-z]/i.test(char)) {
      result += digitStack.pop() || char;    // letters get digits
    } else {
      result += char;                        // other chars stay as-is
    }
  }

  return result;
}

// test cases
console.log(swap("1a2b3c") === "a1b2c3"); // true
console.log(swap("abcd123") === "123dabc"); // true
console.log(swap("123-4a#b$") === "ab3-41#2$"); // true
console.log(swap("Abcd123") === "123dAbc"); // true
// non-alphanumeric stays as-is
console.log(swap("123-4a#b$") === "ab3-41#2$");

// uneven counts (leftovers kept as-is)
console.log(swap("12a") === "a21");
console.log(swap("ab1") === "1ba");

// all letters or all digits (no change)
console.log(swap("abcd") === "abcd");
console.log(swap("1") === "1");

console.log(swap("a1a2") === "1a2a");
console.log(swap("a111") === "1a11");
