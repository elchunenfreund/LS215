const alphabet = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
function wordToDigit(str) {
  let result = ''

  result = str.split(/(\W)+/).map((word) => {
    if (alphabet.includes(word)) {
      return alphabet.indexOf(word)
    } else {
      return word
    }
  }).join('')
  console.log(`${result}`)
}

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."
