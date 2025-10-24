// The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution. It uses a series of Caesar Ciphers based
// on the letters of a keyword. Each letter of the keyword is treated as a shift value. For instance, the letter 'B'
// corresponds to a shift value of 1, and the letter 'd' corresponds to a shift value of 3. In other words, the shift value
// used for a letter is equal to its index value in the alphabet. This means that the letters 'a'-'z' are equivalent to
// the numbers 0-25. The uppercase letters 'A'-'Z' are also equivalent to 0-25.

// given a string with a keyword, return the ceaser cipher of each valid character with shifted using the index of
// coresponding char of the keyword

// input; string and keyword
// output; encoded text

// data structure
// array since want to use map

// algorithem
// turn the keyword into an array of numbers
// split and iterate through the words using map
// - then then split and iterate throgh the words using map
//  - using the above array to determain to what to assign the string
//    - build a mehtod that will return the characer if given a char and text
//  - keep an index for the keyword string and upadate it at every iteration, but nomalize it when it reaches keyword.length
//  - with every encription add to the upper index
// retun the words joined
// return the string joined

// test case

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function vigenereCipher(str, keyword) {
  const keywordArr = keyword.split('').map((char) => alphabet.indexOf(char.toLowerCase()))
  let keywordIndex = 0

  let result = str.split(' ').map((word) => {
    return word.split('').map((char) => {
      if (keywordIndex >= keywordArr.length) {
        keywordIndex = 0
      }

      if (/[a-z]/.test(char)) {
        char = cipher(char, keywordArr[keywordIndex])
        keywordIndex += 1
      } else if (/[A-Z]/.test(char)) {
        char = cipher(char, keywordArr[keywordIndex]).toUpperCase()
        keywordIndex += 1
      }

      return char

    }).join('')
  }).join(' ')

  return result
}

function cipher(char, int) {
  let charIndex = alphabet.indexOf(char.toLowerCase())
  charIndex += int
  if (charIndex >= 26) {
    charIndex -= 26
  }

  return alphabet[charIndex]
}

console.log(vigenereCipher("Pineapples don't go on pizzas!", 'meat') === "Bmnxmtpeqw dhz'x gh ar pbldal!")
console.log(vigenereCipher("Pineapples don't go on pizzas!", 'A') === "Pineapples don't go on pizzas!")
console.log(vigenereCipher("Pineapples don't go on pizzas!", 'Aa') === "Pineapples don't go on pizzas!")
console.log(vigenereCipher("Pineapples don't go on pizzas!", 'cab') === "Riogaqrlfu dpp't hq oo riabat!")
console.log(vigenereCipher("Dog", 'Rabbit') === "Uoh")

