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


