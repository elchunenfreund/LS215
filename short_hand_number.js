// given a short hand number in a string form return a an array with all posible numbers
// examples of short hand numbers

// "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
// "1-3, 1-2" --> 1, 2, 3, 11, 12
// "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
// "104-2" --> 104, 105, ... 112
// "104-02" --> 104, 105, ... 202
// "545, 64:11" --> 545, 564, 565, .. 611

// posible seperators are ["-", ":", ".."]

// objective is to fill in the missing numbers between the seperators

// we will only get the strings or seperators as arguments

// input; string
// output; array

// algorithem
// fill the numbers containing commas
// fill the numbers with ranges
function fillNumbers(str) {

}

// test cases
console.log(fillNumbers("1, 3, 7, 2, 4, 1") === [1, 3, 7, 12, 14, 21]) // fill the missing numbers
console.log(fillNumbers("1-3, 1-2") === [1, 2, 3, 11, 12]) // both a range and shorthand numbers since there are ',' and '-'
console.log(fillNumbers("1:5:2")) // 1, 2, 3, 4, 5, 6, ... 12 the ':' acts like a dash
console.log(fillNumbers("104-2")) // 104, 105, ... 112 since there is a '-' we are expected to fill it up
console.log(fillNumbers("104-02")) // 104, 105, ... 202 since there is a '0' we need to fill it upto 202
console.log(fillNumbers("545, 64:11")) // 545, 564, 565, .. 611 after the ',' we need to add the next segnificant number which is 565 and then fill it untill 611
