'strict mode'

const anagram = (word, list) => {
  return list.filter((candidate) => isAnagram(word, candidate))
}

const isAnagram = (word, candidate) => {
  return (word.split('').sort().join('') === candidate.split('').sort().join(''))
}

anagram('listen', ['enlists', 'google', 'inlets', 'banana']);  // [ "inlets" ]
anagram('listen', ['enlist', 'google', 'inlets', 'banana']);   // [ "enlist", "inlets" ]