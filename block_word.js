// problem;
// given a block I can only I need to return a bollean depending if a I can write a word using the blocks.

// Return a boolean: true if the word can be spelled with the blocks, false otherwise.
// Each block can be used at most once.
// From any block, you can use at most one of its two letters.
// Treat letters case-insensitively.

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M

// algorithem
// - iterate through the word and look
//    - for every character in the word look for the index of the coresponding block using forEach() and indexOf() and add to a used blocks hash
// - iterate over the used blocks array if the same index is entered twice return false if all indexes are unique return true

const BLOCKS = ['BO','XK','DQ','CP','NA','GT','RE','FS','JW','HU','VI','LY','ZM'];

function isBlockWord(str) {
  const usedBlocks = {};
  for (const candidate of str.toUpperCase()) {
    const blockIndex = BLOCKS.findIndex(block => block.includes(candidate));
    if (blockIndex === -1) return false;            // not in any block
    if (usedBlocks[blockIndex]) return false;        // block already used
    usedBlocks[blockIndex] = 1;                      // mark block used
  }
  return true;
}

console.log(isBlockWord('BATCH'));
console.log(isBlockWord('BUTCH'));
console.log(isBlockWord('jest'));



