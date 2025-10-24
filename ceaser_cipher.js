// Write a function that implements the Caesar Cipher. The Caesar Cipher is one of the earliest and simplest ways to encrypt plaintext so that 
// a message can be transmitted securely. It is a substitution cipher in which each letter in a plaintext is substituted by the letter located a 
// given number of positions away in the alphabet. For example, if the letter 'A' is right-shifted by 3 positions, it will be substituted with the 
// letter 'D'. This shift value is often referred to as the key. The "encrypted plaintext" (ciphertext) can be decoded using this key value.

// The Caesar Cipher only encrypts letters (including both lower and upper case). Any other character is left as is. The substituted letters are in 
// the same letter case as the original letter. If the key value for shifting exceeds the length of the alphabet, it wraps around from the beginning.

// test cases
// simple shift

// input; text and a number
// output; an encripted string

// algorithm
// create an array of the alpabet so that we can retate using the index numbers 
// we can also use if (int > 24) int -= 24 when rotatiang we can also repeat the proccess when working with the starting number
// note that we need to reuse spaces, so str.map.split would be the best choice
// split every word then
// - first find a way to get the alphabet index from the array (we wont use the original ascii index)
// - if the total number is more normalize it by removing 24 etc SAME FOR THE FIRST INT
//  - use index of
// - add the required amount to the index and assign the char to it
// - return the word
// - return the joined array

function caesarEncrypt(str, shiftNum) {
  while (shiftNum > 26) {
    shiftNum -= 26;
  }

  if (shiftNum === 0) return str
  const wordArr = str.split(' ')
  const LOWERCASE = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const UPPERCASE = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  let result = wordArr.map((word) => {
    return word.split('').map((char) => {
      let index = UPPERCASE.indexOf(char.toUpperCase())
      index += shiftNum

      if (index >= LOWERCASE.length) {
        index -= LOWERCASE.length
      }

      if (/[A-Z]/.test(char)) {
        return UPPERCASE[index]
      } else if (/[a-z]/.test(char)) {
        return LOWERCASE[index]
      } else {
        return char
      }
    }).join('')
  }).join(' ')
  console.log(result)
  return result
}

console.log(caesarEncrypt('A', 0) === "A")
console.log(caesarEncrypt('A', 3) === "D")

// wrap around
console.log(caesarEncrypt('y', 5) === "d")
console.log(caesarEncrypt('a', 47) === "v")

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25) === "ZABCDEFGHIJKLMNOPQRSTUVWXY")
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5) === "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!")

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2) === "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?")