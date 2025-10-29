// problem
// we need to give a template string, so that the mehtod can choose a word from a list,

// Algorithm, we need to provide an array for strings.

// and we need to provide a tmeplate by providing a a token to represent each noun, verb, adjectives, and adverbs,

// we then need to use regex replace to replace it with a randome value

function madlibs(str) {
  const words = {
    adjectives: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
    nouns: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
    verbs: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
    adverbs: ['easily', 'lazily', 'noisily', 'excitedly'],
  };

  function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  return str.split(' ').map(token => {
    if (token === '$adjective') return pick(words.adjectives);
    if (token === '$noun')      return pick(words.nouns);
    if (token === '$verb')      return pick(words.verbs);
    if (token === '$adverb')    return pick(words.adverbs);
    return token;
  }).join(' ');
}





