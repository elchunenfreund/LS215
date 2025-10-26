// function triangle(in1, int2, int3) {
//   const valuesArr = Object.values(arguments).sort((a, b) => a - b)
//   if(valuesArr.some(((obj) => obj <= 0)) || (valuesArr[0] + valuesArr[1]) <= valuesArr[2]) {
//     return 'invalid'
//   } if (valuesArr.every((obj) => obj === valuesArr[0])) {
//     return 'equilateral'
//   } else if (valuesArr[0] === valuesArr[1] || valuesArr[1] === valuesArr[2]) {
//     return 'isosceles'
//   } else {
//     return 'scalene'
//   }
// }

function triangle(int1, int2, int3) {
  const sidesArr = [int1, int2, int3].sort((a, b) => a - b);
  if(sidesArr.some((obj) => obj < 1) || sidesArr.reduce((accum, int) => accum + int) !== 180) {
    return 'invalid'
  } else if (sidesArr.some((int) => int === 90)) {
    return 'right'
  } else if (sidesArr.some((int) => int > 90)){
    return 'obtuse'
  } else {
    return 'acute'
  }
}

triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"

