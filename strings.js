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