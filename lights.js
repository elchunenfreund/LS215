// You have a bank of switches before you, numbered from 1 to n. Every switch
// is connected to exactly one light that is initially off. You walk down the
// row of switches and toggle every one of them. You walk back to the beginning
// of the row and start another pass. On this second pass, you toggle switches
// 2, 4, 6, and so on. On the third pass, you go back to the beginning again,
// this time toggling switches 3, 6, 9, and so on. You continue to repeat this
// process until you have gone through n repetitions.

// Write a program that takes one argument—the total number of switches—and
// returns an array of the lights that are on after n repetitions.

// given a bank of swithces from 1 to n, iterate throgh all of then first ** toggle ** all on of them on
// then on the next pass you ** toggle ** every second repeat this n times

// rulles
// the argument will allway be a positive int,
// if a negative return a empty arr
// iterate through the array n amount everytime toggling the n'th object
// return the lights that are

// algorithm
// create a array and fill it as specified
// create a for loop that will iterate n times
// for every iteration run a new loop that will update the object at the index of i and add the current ieration to the
// loop

function lightsOn(switches) {
  const lightsArr = new Array(switches).fill(false);

  for (let run = 1; run <= switches; run++) {
    for(let currentToggle = run - 1; currentToggle < lightsArr.length; currentToggle += run) {
      lightsArr[currentToggle] = !lightsArr[currentToggle];
    }
  }

  const result = [];
  lightsArr.forEach((light, index) => {
    if (light) {
      result.push(index + 1);
    }
  });
  return result;
}

console.log(lightsOn(5));        // [1, 4]

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
