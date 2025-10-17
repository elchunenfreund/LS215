let firstName = 'Elchunen';
let lastName = 'Freund';

let fullname = firstName + ' ' + lastName
let splitName = fullname.split(' ')

var language = 'JavaScript';
let idx = language.indexOf('S')

let charCode = language.charCodeAt(idx)
let fromChar = String.fromCharCode(charCode)

let lastIndex = language.lastIndexOf('a')

let fact1 = 'JavaScript is fun';
let fact2 = 'Kids like it too';

let compoundSentence = fact1 + ' and ' + fact2.toLocaleLowerCase()

let pi = 22/7
let lastIdx = pi.toString().lastIndexOf('14')
console.log(lastIdx)

let boxNumber = (365).toString();

boxNumber = Number.parseInt(boxNumber)
boxNumber = String(boxNumber)
'strict mode'

function reverse(string) {
  return string.split('').reverse().join('')
}

function acronym(string) {
  return string.trim().split(/ |-/).map((word) => word[0].toUpperCase()).join('')
}

function isValidEmail(email) {
  let regex = /^[a-z0-9]+@([a-z]+\.)+[a-z]+$/i
  return regex.test(email)
}

function isBalanced(str) {
  let result = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === '(') {
      result += 1;
    } else if (str[i] === ')') {
      result -= 1;
    }
    if (result < 0) return false;
  }
  return result === 0;
}

function isUppercase(text) {
  return !/[a-z]/.test(text);
}

function removeVowels(arr) {
  return arr.map((word) => word.replace(/[aeiou]/gi, ''))
}

function letterCaseCount(str) {
  let result = {lowercase: 0, uppercase: 0, neither: 0 }
  str.split('').forEach((char) => {
    if (char.match(/[A-Z]/)) {
      result.uppercase += 1
    } else if (char.match(/[a-z]/)) {
      result.lowercase += 1
    } else {
      result.neither += 1
    }
  })
  return result
}


