let myName = prompt('What is your name?');

if (myName.endsWith('!')) {
  myName = myName.slice(0, -1)
  console.log(`HELLO ${myName.toUpperCase()}, WHY ARE YOU SCREAMING?.`)
} else {
  console.log(`Hello ${myName}.`)
}