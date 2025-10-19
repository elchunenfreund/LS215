// - Input: two version numbers in string representation, version1 and version2
// - Output: one of the numbers from 1, 0, and -1; or null for invalid inputs

// - if any inputs contain invalid characters, return null
//   - any characters other than digits and . are considered invalid
// - Compare the two input versions
//   - if version1 > version2, return 1
//   - if version1 < version2, return -1
//   - if version1 === version2, return 0
// - The rules to compare two version numbers
//   - start from the left most parts of the two version numbers
//   - if the number part of the first version number is larger, then the first version number is larger
//   - if the number part of the second version number is larger, then the first version number is smaller
//   - if the number parts of both version numbers are the same, move to the next number part of the two version numbers
//     - do the same comparison and decide which version number is larger
//     - keep moving to the right until the result of the comparison is determined
//     - if we get to the last number part of the two version numbers and they're equal,
//       then the two version numbers are equal

// - elements that are numbers should be multiplied by 2
// - elements that are strings should be repeated twice via concatenation
// - other types of elements should be duplicated in the array
// - the input array should not be mutated
// - elements that are special number values should remain unchanged
// - elements that are any other type of number should be treated normally (multiplied by 2)
// - elements that are empty strings should remain unchanged
// - elements that are any other type of string should be treated normally (repeated twice)
// - the input array can contain a mixture of different types of elements
// - non-primitive elements should have their reference duplicated, not their value
// - elements that appear more than once should be treated normally (as specified above)
// - elements that contain nested arrays or objects should be treated normally (duplicated)
// - if the input array contains empty slots (a "sparse array"), they should be removed
// - if an inner array (element) contains empty slots, they should remain unchanged
// - if the input array contains any object properties, they should remain unchanged
// - if an inner array (element) contains any object properties, they should remain unchanged
// - if the array is empty, return an empty array
// - if multiple arguments are passed, ignore all but the first
// - if the argument is a string, treat it as an array of characters
// - if the argument is a non-negative integer, treat it as an array of digits
// - if the argument is an object, treat it as an array of its property values
// - all other kinds of inputs are invalid, and should return the string 'Invalid input'


function compareVersions(version1, version2) {
  // ...
}
