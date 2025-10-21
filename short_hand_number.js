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
  const result = []
  let last_full_number = 0;

  str.split(',').forEach((int) => {

    let full_number = last_full_number;
    const powerOfTen = 10 ** String(int).length;

    if (int.indexOf(/[\-:]|\.\./)) {
      result.push(...rangeFill(int))
    }

    full_number = Math.floor(last_full_number / powerOfTen) * powerOfTen + int;
    while (full_number <= last_full_number) {
    full_number += powerOfTen; // This is the step that adds the 10, 100, 1000, etc.
    }

    result.push(full_number);
    last_full_number = full_number;
  })
}


function rangeFill(str) {
  const arr = str.split(/[\-:]|\.\./)
  const result = []
  for(let i = arr[0]; i <= arr[1]; i++) {
    result.push(Number(i))
  }
  return result
}

function rangeFill(str, lastFullNumber) {
  // Use the correct regex to split the string by any of the separators
  const arr = str.split(/[\-:]|\.\./);
  
  // The split components are strings. Convert them to numbers.
  const startShorthand = parseInt(arr[0], 10);
  const endShorthand = parseInt(arr[1], 10);
  
  // 1. Expand the start number based on the current lastFullNumber
  const fullStart = expandShorthand(startShorthand, lastFullNumber);
  
  // 2. Expand the end number based on the newly calculated fullStart number
  const fullEnd = expandShorthand(endShorthand, fullStart);
  
  const result = [];
  // Generate all numbers from the expanded start to the expanded end
  for (let i = fullStart; i <= fullEnd; i++) {
    result.push(i);
  }
  return result;
}

// A helper to expand any single shorthand number (e.g., '2')
// based on the number preceding it (last_full_number).
// Helper to expand a shorthand string (e.g., "02") based on the last full number
function expandShorthand(shorthandStr, lastFullNumber) {
    // Crucial: Use the length of the string to get the correct power of 10
    const powerOfTen = 10 ** shorthandStr.length;
    
    // The value of the shorthand number
    const sh = parseInt(shorthandStr, 10);
    
    // Initial guess for the full number by replacing the last digits
    let full_number = Math.floor(lastFullNumber / powerOfTen) * powerOfTen + sh;
    
    // Increment the magnitude (add powerOfTen) until the number is greater
    while (full_number <= lastFullNumber) {
        full_number += powerOfTen;
    }
    return full_number;
}

function fillNumbers(str) {
    const result = [];
    let last_full_number = 0;

    str.split(',').forEach((segment) => {
        const trimmedSegment = segment.trim();

        // Regex to split by ANY range separator: -, :, or ..
        const shorthandSegments = trimmedSegment.split(/[\-:]|\.\./);

        // --- Step 1: Handle the first number in the segment (Range or Single Shorthand) ---
        const firstShorthandStr = shorthandSegments[0];
        
        // If it's the very first number (last_full_number === 0)
        if (last_full_number === 0) {
            last_full_number = parseInt(firstShorthandStr, 10);
            result.push(last_full_number);
            
            // If it's a single shorthand (e.g., "1"), we are done with this segment.
            if (shorthandSegments.length === 1) return;
        } 
        // If it's NOT the first overall number, expand the first part of the segment
        else if (shorthandSegments.length === 1) { // Single Shorthand
             last_full_number = expandShorthand(firstShorthandStr, last_full_number);
             result.push(last_full_number);
             return; // Done with single shorthand
        } 
        // If it's the start of a range (e.g., "64:11" after "545"), expand the range start
        else {
             last_full_number = expandShorthand(firstShorthandStr, last_full_number);
             result.push(last_full_number);
        }

        // --- Step 2: Handle Range Fill (Only if more than one segment exists) ---
        if (shorthandSegments.length > 1) {
            // Loop from the SECOND shorthand segment onwards (i=1)
            for (let i = 1; i < shorthandSegments.length; i++) {
                const startRange = last_full_number + 1; // Range starts AFTER the last expanded number
                
                // Expand the END number of the current range segment
                const endFullNumber = expandShorthand(shorthandSegments[i], last_full_number);
                
                // Fill the numbers from startRange up to and including endFullNumber
                for (let j = startRange; j <= endFullNumber; j++) {
                    result.push(j);
                }
                // Update last_full_number for the next segment/range continuation
                last_full_number = endFullNumber;
            }
        }
    });

    return result;
}

// test cases
// console.log(fillNumbers("1, 3, 7, 2, 4, 1")) // fill the missing numbers
// console.log(fillNumbers("1-3, 1-2")) // both a range and shorthand numbers since there are ',' and '-'
// console.log(fillNumbers("1:5:2")) // 1, 2, 3, 4, 5, 6, ... 12 the ':' acts like a dash
// console.log(fillNumbers("104-2")) // 104, 105, ... 112 since there is a '-' we are expected to fill it up
// console.log(fillNumbers("104-02")) // 104, 105, ... 202 since there is a '0' we need to fill it upto 202
// console.log(fillNumbers("545, 64:11")) // 545, 564, 565, .. 611 after the ',' we need to add the next segnificant number which is 565 and then fill it untill 611
