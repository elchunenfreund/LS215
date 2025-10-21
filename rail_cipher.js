// design a rails decoder and encodeURI, a rails code will look like this

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . A . . . I . . . V . . . D . . . E . . . N . .

// 1 . . . 5 . . .   9 . . . 13 . . .  17 . . .   21 . . .  25
// . 2 . 4 . 6 .  8 . 10 . 12 . 14 . 16 . 18 . 20 . 22 . 24 .
// . . 3 . . . 7 . . .  11 . . .  15 . . .   19 . . .  23 . .

// 1, 5, 9, 13, 17, 21, 25, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 3, 7, 11, 15, 19, 23

// the text will be 'WECRLTEERDSOEEFEAOCAIVDEN' 3 rails
// and the decoded code will be 'WE ARE DISCOVERED FLEE AT ONCE' w/o the spaces

// input; text
// output; text

// encode algorithm
// Make an array of rails (length = rails), each rail is an empty string (or array).
// Keep two variables:
// row = 0
// dir = +1 (the direction: +1 going down, -1 going up)
// For each character in the message (remove spaces if you’re following the example):
// - append the char to rails[row]
// if row === 0
//  - set dir = +1
// if row === rails - 1
//  - set dir = -1
// row += dir
// Join all rails to get the ciphertext.

// code
function encode(str, rows) {
  if (rows <= 1) return str;

  str = str.replace(/\s/g, '');

  const rails = new Array(rows).fill('');
  let row = 0;
  let direction = 1; // +1 down, -1 up

  for (const char of str) {
    rails[row] += char;

    if (row === 0) direction = 1;
    else if (row === rows - 1) direction = -1;

    row += direction;
  }

  return rails.join('');
}

function decode(cipher, rows) {
  if (rows <= 1) return cipher;

  const n = cipher.length;

  const rowSeq = [];
  let row = 0, dir = 1;
  for (let i = 0; i < n; i++) {
    rowSeq.push(row);
    if (row === 0) dir = 1;
    else if (row === rows - 1) dir = -1;
    row += dir;
  }

  const counts = new Array(rows).fill(0);
  for (const r of rowSeq) counts[r]++;

  const rails = new Array(rows);
  let idx = 0;
  for (let r = 0; r < rows; r++) {
    rails[r] = cipher.slice(idx, idx + counts[r]).split('');
    idx += counts[r];
  }

  const pointers = new Array(rows).fill(0);
  const result = [];
  for (const r of rowSeq) {
    result.push(rails[r][pointers[r]++]);
  }

  return result.join('');
}

// test cases
console.log(encode("WE ARE DISCOVERED FLEE AT ONCE", 3) === "WECRLTEERDSOEEFEAOCAIVDEN");
console.log(encode("HELLOWORLD", 2) === "HLOOLELWRD");
console.log(encode("A", 3) === "A");
console.log(encode("ABCDEFGHI", 4) === "AGBFHCEID");

console.log(encode("WECRLTEERDSOEEFEAOCAIVDEN", 3) === "WLREAINERTEDOEEOAVECESFCD");
console.log(decode("HLOOLELWRD", 2) === "HELLOWORLD");
console.log(decode("AGBFHCEID", 4) === "ABCDEFGHI");
